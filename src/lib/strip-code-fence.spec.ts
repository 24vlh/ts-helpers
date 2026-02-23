import {StripCodeFence} from './strip-code-fence';

test('StripCodeFence: keeps plain content unchanged', () => {
  expect(StripCodeFence('{"a":1}')).toBe('{"a":1}');
});

test('StripCodeFence: removes json markdown fence wrapper', () => {
  const input = '```json\n{"a":1}\n```';
  expect(StripCodeFence(input)).toBe('{"a":1}');
});
