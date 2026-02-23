/**
 * Removes a full markdown code fence wrapper from a payload.
 *
 * @param {string} raw - Raw text that may contain a fenced block.
 * @returns {string} The unfenced payload.
 */
export function StripCodeFence(raw: string): string {
  if (!raw.startsWith('```')) {
    return raw;
  }
  const fenceMatch = raw.match(/^```[a-zA-Z]*\r?\n([\s\S]*)\r?\n```$/);
  return fenceMatch ? fenceMatch[1].trim() : raw;
}
