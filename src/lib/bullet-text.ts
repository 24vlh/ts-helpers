/**
 * Formats free-form multiline text into a clean markdown-style bullet list.
 *
 * Ideal for textarea normalization where users may type mixed indentation,
 * optional dashes, and empty lines.
 *
 * @param {string} raw - Raw multiline text.
 * @returns {string} Bullet-formatted multiline text.
 *
 * @example
 * FormatBulletText('one\\n  - two\\n\\n three');
 * // => '- one\\n- two\\n\\n- three'
 */
export function FormatBulletText(raw: string): string {
  const lines = raw.split(/\r?\n/);
  return lines
    .map((line) => {
      const withoutBullet = line.replace(/^\s*-\s?/, '');
      const trimmedStart = withoutBullet.replace(/^\s+/, '');
      if (!trimmedStart.length) {
        return '';
      }
      return `- ${trimmedStart}`;
    })
    .join('\n');
}

/**
 * Converts bullet-style multiline text into plain normalized line content.
 *
 * Useful when persisting list items as newline-delimited values without
 * bullet markers, extra indentation, or blank entries.
 *
 * @param {string} raw - Raw multiline text.
 * @returns {string} Non-empty normalized lines without bullet markers.
 *
 * @example
 * NormalizeBulletText('- one\\n - two\\n\\nthree');
 * // => 'one\\ntwo\\nthree'
 */
export function NormalizeBulletText(raw: string): string {
  const lines = raw.split(/\r?\n/);
  return lines
    .map((line) => line.replace(/^\s*-\s?/, '').trim())
    .filter((line) => line.length > 0)
    .join('\n');
}
