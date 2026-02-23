/**
 * Normalizes an API base URL by trimming and removing a trailing slash.
 *
 * @param {string} baseUrl - Raw base URL.
 * @returns {string} Normalized URL.
 */
export function NormalizeBaseUrl(baseUrl: string): string {
  const trimmed = baseUrl.trim();
  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
}

/**
 * Builds an API URL from base URL and path.
 *
 * @param {string} baseUrl - API base URL.
 * @param {string} path - Endpoint path.
 * @returns {string} Joined URL.
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
