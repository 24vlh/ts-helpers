/**
 * Counts words in a string by splitting on whitespace.
 *
 * @param {string} value - The text to inspect.
 * @returns {number} Number of words found.
 */
export function CountWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed.length) {
    return 0;
  }
  return trimmed.split(/\s+/).filter(Boolean).length;
}
