import {CompareKeys, CompareKeysWithDirection} from './compare-keys';

test('CompareKeys: compares key tuples lexicographically', () => {
  expect(CompareKeys([0, 'a'], [0, 'b'])).toBe(-1);
  expect(CompareKeys([2], [1])).toBe(1);
  expect(CompareKeys(['x', 2], ['x', 2])).toBe(0);
});

test('CompareKeysWithDirection: flips comparison for desc', () => {
  expect(CompareKeysWithDirection([1], [2], 'asc')).toBe(-1);
  expect(CompareKeysWithDirection([1], [2], 'desc')).toBe(1);
});
