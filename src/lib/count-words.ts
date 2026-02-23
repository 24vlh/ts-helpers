/**
 * Counts words in free-form text using whitespace tokenization.
 *
 * Useful for UI limits, validation rules, and analytics where a lightweight
 * word count is needed without language-specific parsing.
 *
 * @param {string} value - The text to inspect.
 * @returns {number} Number of words found.
 *
 * @example
 * CountWords('  One   two\\nthree ');
 * // => 3
 */
export function CountWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed.length) {
    return 0;
  }
  return trimmed.split(/\s+/).filter(Boolean).length;
}
