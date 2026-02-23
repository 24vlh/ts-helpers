/**
 * Escapes HTML special characters.
 *
 * @param {string} value - Raw text.
 * @returns {string} Escaped text.
 */
export function EscapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
