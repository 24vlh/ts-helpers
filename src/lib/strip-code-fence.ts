/**
 * Removes a full markdown code-fence wrapper from text payloads.
 *
 * Useful when handling AI output that may wrap JSON or other content in
 * triple-backtick fences before downstream parsing.
 *
 * @param {string} raw - Raw text that may contain a fenced block.
 * @returns {string} The unfenced payload.
 *
 * @example
 * StripCodeFence('```json\\n{\"ok\":true}\\n```');
 * // => '{\"ok\":true}'
 */
export function StripCodeFence(raw: string): string {
  if (!raw.startsWith('```')) {
    return raw;
  }
  const fenceMatch = raw.match(/^```[a-zA-Z]*\r?\n([\s\S]*)\r?\n```$/);
  return fenceMatch ? fenceMatch[1].trim() : raw;
}
