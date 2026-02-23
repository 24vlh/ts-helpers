/**
 * Formats textarea lines as bullet lines.
 *
 * @param {string} raw - Raw multiline text.
 * @returns {string} Bullet-formatted multiline text.
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
 * Normalizes bullet textarea content to plain text lines.
 *
 * @param {string} raw - Raw multiline text.
 * @returns {string} Non-empty normalized lines without bullet markers.
 */
export function NormalizeBulletText(raw: string): string {
  const lines = raw.split(/\r?\n/);
  return lines
    .map((line) => line.replace(/^\s*-\s?/, '').trim())
    .filter((line) => line.length > 0)
    .join('\n');
}
