/**
 * Escapes HTML-sensitive characters in plain text.
 *
 * Use before injecting untrusted or user-provided text into HTML templates to
 * prevent it from being interpreted as markup.
 *
 * @param {string} value - Raw text.
 * @returns {string} Escaped text.
 *
 * @example
 * EscapeHtml('<script>alert(\"x\")</script>');
 * // => '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;'
 */
export function EscapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
