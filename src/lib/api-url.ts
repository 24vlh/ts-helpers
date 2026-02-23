/**
 * Normalizes an API base URL before endpoint composition.
 *
 * Useful when your base URL comes from environment variables, user settings,
 * or config files where trailing spaces/slashes are inconsistent.
 *
 * @param {string} baseUrl - Raw base URL.
 * @returns {string} Trimmed URL without a trailing slash.
 *
 * @example
 * NormalizeBaseUrl(' https://api.example.com/ ');
 * // => 'https://api.example.com'
 */
export function NormalizeBaseUrl(baseUrl: string): string {
  const trimmed = baseUrl.trim();
  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
}

/**
 * Builds a stable API URL from a base URL and an endpoint path.
 *
 * Handles empty values and path prefixes so callers do not need to manually
 * guard against duplicate or missing slashes when building request URLs.
 *
 * @param {string} baseUrl - API base URL.
 * @param {string} path - Endpoint path.
 * @returns {string} Joined URL ready for HTTP requests.
 *
 * @example
 * BuildApiUrl('https://api.example.com/', '/users');
 * // => 'https://api.example.com/users'
 *
 * @example
 * BuildApiUrl('', '/health');
 * // => '/health'
 */
export function BuildApiUrl(baseUrl: string, path: string): string {
  const normalizedBase = NormalizeBaseUrl(baseUrl);
  const normalizedPath = path.trim();
  if (!normalizedBase) {
    return normalizedPath;
  }
  if (!normalizedPath) {
    return normalizedBase;
  }
  if (normalizedPath.startsWith('/')) {
    return `${normalizedBase}${normalizedPath}`;
  }
  return `${normalizedBase}/${normalizedPath}`;
}
