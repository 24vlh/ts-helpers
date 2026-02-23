import {CountWords} from './count-words';

test('CountWords: returns 0 for empty or whitespace-only input', () => {
  expect(CountWords('')).toBe(0);
  expect(CountWords('   ')).toBe(0);
});

test('CountWords: counts words separated by mixed whitespace', () => {
  expect(CountWords('alpha beta')).toBe(2);
  expect(CountWords('alpha\tbeta\ngamma')).toBe(3);
});
