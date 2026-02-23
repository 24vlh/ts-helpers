import {BuildApiUrl, NormalizeBaseUrl} from './api-url';

test('NormalizeBaseUrl: trims and removes trailing slash', () => {
  expect(NormalizeBaseUrl(' https://example.com/api/ ')).toBe('https://example.com/api');
});

test('BuildApiUrl: joins base and path safely', () => {
  expect(BuildApiUrl('https://example.com/api/', '/videos')).toBe('https://example.com/api/videos');
  expect(BuildApiUrl('https://example.com/api', 'videos')).toBe('https://example.com/api/videos');
  expect(BuildApiUrl('', '/videos')).toBe('/videos');
});
