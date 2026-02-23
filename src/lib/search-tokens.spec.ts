import {BuildSearchTokens, MatchesSearchTokens, TokenizeSearchText} from './search-tokens';

test('TokenizeSearchText: normalizes and de-duplicates tokens', () => {
  expect(TokenizeSearchText('Salut, SALUT! lume?')).toEqual(['salut', 'lume']);
});

test('BuildSearchTokens: merges token sets across values', () => {
  expect(BuildSearchTokens(['alpha beta', null, 'beta gamma'])).toEqual(['alpha', 'beta', 'gamma']);
});

test('MatchesSearchTokens: performs prefix matching for all query tokens', () => {
  expect(MatchesSearchTokens('alp ga', ['alpha beta gamma'])).toBe(true);
  expect(MatchesSearchTokens('alp zz', ['alpha beta gamma'])).toBe(false);
});
