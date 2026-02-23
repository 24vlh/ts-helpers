/**
 * Encodes a JSON-serializable key as base64 cursor text.
 *
 * @template T
 * @param {T} value - Value to encode.
 * @returns {string} Encoded cursor.
 */
export function EncodeJsonCursor<T>(value: T): string {
  const json = JSON.stringify(value);
  return btoa(encodeURIComponent(json));
}

/**
 * Decodes a base64 cursor into JSON.
 *
 * @template T
 * @param {string} cursor - Encoded cursor string.
 * @returns {T | null} Decoded value or null if invalid.
 */
export function DecodeJsonCursor<T>(cursor: string): T | null {
  try {
    const json = decodeURIComponent(atob(cursor));
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}
