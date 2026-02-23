/**
 * Tokenizes text for prefix-search matching.
 *
 * @param {string} input - Source text.
 * @returns {string[]} Distinct normalized tokens.
 */
export function TokenizeSearchText(input: string): string[] {
  const normalized = input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  if (!normalized) {
    return [];
  }

  return Array.from(new Set(normalized.split(/\s+/)));
}

/**
 * Builds distinct search tokens from multiple values.
 *
 * @param {Array<string | undefined | null>} values - Source values.
 * @returns {string[]} Distinct token set.
 */
export function BuildSearchTokens(
  values: Array<string | undefined | null>
): string[] {
  const tokens: string[] = [];

  for (const value of values) {
    if (!value) {
      continue;
    }
    tokens.push(...TokenizeSearchText(value));
  }

  return Array.from(new Set(tokens));
}

/**
 * Checks whether all query tokens match as prefixes in values.
 *
 * @param {string | undefined} query - Search query.
 * @param {Array<string | undefined | null>} values - Target values.
 * @returns {boolean} Match result.
 */
export function MatchesSearchTokens(
  query: string | undefined,
  values: Array<string | undefined | null>
): boolean {
  if (!query) {
    return true;
  }

  const queryTokens = BuildSearchTokens([query]);
  if (!queryTokens.length) {
    return true;
  }

  const valueTokens = BuildSearchTokens(values);
  return queryTokens.every((token) =>
    valueTokens.some((value) => value.startsWith(token))
  );
}
