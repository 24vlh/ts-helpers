/**
 * Normalizes free-form text into searchable prefix tokens.
 *
 * The tokenizer lowercases text, removes diacritics, strips punctuation, and
 * returns unique tokens suitable for lightweight client-side search.
 *
 * @param {string} input - Source text.
 * @returns {string[]} Distinct normalized tokens.
 *
 * @example
 * TokenizeSearchText('Crème brûlée, Test!');
 * // => ['creme', 'brulee', 'test']
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
 * Builds a unique token set from multiple candidate text values.
 *
 * Useful for indexing multiple fields (for example: name, email, tags) into a
 * single searchable token list.
 *
 * @param {Array<string | undefined | null>} values - Source values.
 * @returns {string[]} Distinct token set.
 *
 * @example
 * BuildSearchTokens(['John Doe', 'john@example.com', null]);
 * // => ['john', 'doe', 'example', 'com']
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
 * Checks whether every query token matches a value token by prefix.
 *
 * Useful for tolerant search UX where users can type partial terms and still
 * match indexed content across multiple fields.
 *
 * @param {string | undefined} query - Search query.
 * @param {Array<string | undefined | null>} values - Target values.
 * @returns {boolean} Match result.
 *
 * @example
 * MatchesSearchTokens('jo exa', ['John Doe', 'john@example.com']);
 * // => true
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
