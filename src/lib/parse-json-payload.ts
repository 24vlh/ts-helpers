import { StripCodeFence } from './strip-code-fence';

export type ParseJsonPayloadResult<T = unknown> = {
  parsed: T | null;
  errors: string[];
};

/**
 * Parses an LLM-like payload as JSON.
 * Supports plain JSON, fenced JSON, and wrapper-text that contains one JSON object.
 *
 * @template T
 * @param {string} raw - Raw payload text.
 * @returns {ParseJsonPayloadResult<T>} Parse result with errors.
 */
export function ParseJsonPayload<T = unknown>(
  raw: string
): ParseJsonPayloadResult<T> {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { parsed: null, errors: [] };
  }

  const stripped = StripCodeFence(trimmed);
  const direct = TryParseJson<T>(stripped);
  if (direct !== null) {
    return { parsed: direct, errors: [] };
  }

  const extractedObject = ExtractFirstJsonObject(stripped);
  if (extractedObject) {
    const extracted = TryParseJson<T>(extractedObject);
    if (extracted !== null) {
      return { parsed: extracted, errors: [] };
    }
  }

  return { parsed: null, errors: ['Payload must be valid JSON.'] };
}

const TryParseJson = <T>(value: string): T | null => {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
};

const ExtractFirstJsonObject = (value: string): string | null => {
  const start = value.indexOf('{');
  if (start < 0) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let index = start; index < value.length; index += 1) {
    const char = value[index];
    if (escape) {
      escape = false;
      continue;
    }
    if (char === '\\') {
      escape = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (inString) {
      continue;
    }
    if (char === '{') {
      depth += 1;
      continue;
    }
    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return value.slice(start, index + 1);
      }
    }
  }
  return null;
};
