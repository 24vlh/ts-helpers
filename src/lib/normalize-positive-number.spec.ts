import {NormalizePositiveNumber} from './normalize-positive-number';

test('NormalizePositiveNumber: returns positive finite numbers', () => {
  expect(NormalizePositiveNumber(1)).toBe(1);
  expect(NormalizePositiveNumber(3.5)).toBe(3.5);
});

test('NormalizePositiveNumber: falls back for invalid or non-positive values', () => {
  expect(NormalizePositiveNumber(0)).toBe(0);
  expect(NormalizePositiveNumber(-1)).toBe(0);
  expect(NormalizePositiveNumber(Number.NaN)).toBe(0);
  expect(NormalizePositiveNumber(undefined, 10)).toBe(10);
});
