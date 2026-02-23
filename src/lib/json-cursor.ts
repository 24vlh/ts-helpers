/**
 * Encodes JSON-serializable data into an opaque cursor string.
 *
 * Useful for pagination and continuation tokens where clients should pass a
 * compact cursor value instead of structured state fields.
 *
 * @template T
 * @param {T} value - Value to encode.
 * @returns {string} Encoded cursor.
 *
 * @example
 * EncodeJsonCursor({ page: 2, size: 20 });
 * // => '...base64 cursor...'
 */
export function EncodeJsonCursor<T>(value: T): string {
  const json = JSON.stringify(value);
  return btoa(encodeURIComponent(json));
}

/**
 * Decodes an opaque cursor back into structured JSON data.
 *
 * Returns `null` for malformed input so callers can safely treat invalid
 * cursors as user error without throwing.
 *
 * @template T
 * @param {string} cursor - Encoded cursor string.
 * @returns {T | null} Decoded value or null if invalid.
 *
 * @example
 * DecodeJsonCursor<{ page: number }>('invalid');
 * // => null
 */
export function DecodeJsonCursor<T>(cursor: string): T | null {
  try {
    const json = decodeURIComponent(atob(cursor));
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}
