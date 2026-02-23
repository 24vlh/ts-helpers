export type SortDirection = 'asc' | 'desc';

/**
 * Lexicographically compares composite primitive keys.
 *
 * Useful for deterministic sorting of table rows, grouped records, or cursor
 * keys where each key is an ordered tuple (for example: `[lastName, id]`).
 *
 * @param {Array<string | number>} a - Left key.
 * @param {Array<string | number>} b - Right key.
 * @returns {number} -1, 0, or 1 comparator result.
 *
 * @example
 * CompareKeys(['alpha', 2], ['alpha', 10]);
 * // => -1
 */
export function CompareKeys(
  a: Array<string | number>,
  b: Array<string | number>
): number {
  const max = Math.max(a.length, b.length);
  for (let index = 0; index < max; index += 1) {
    const left = a[index];
    const right = b[index];

    if (left === right) {
      continue;
    }
    if (left === undefined) {
      return -1;
    }
    if (right === undefined) {
      return 1;
    }
    if (left < right) {
      return -1;
    }
    if (left > right) {
      return 1;
    }
  }
  return 0;
}

/**
 * Compares composite keys with configurable sort direction.
 *
 * Use this helper when the same key comparison should support both ascending
 * and descending sort behavior without duplicating comparator logic.
 *
 * @param {Array<string | number>} a - Left key.
 * @param {Array<string | number>} b - Right key.
 * @param {SortDirection} direction - asc or desc.
 * @returns {number} Comparator result.
 *
 * @example
 * CompareKeysWithDirection(['a', 1], ['a', 2], 'desc');
 * // => 1
 */
export function CompareKeysWithDirection(
  a: Array<string | number>,
  b: Array<string | number>,
  direction: SortDirection = 'asc'
): number {
  return direction === 'desc' ? CompareKeys(b, a) : CompareKeys(a, b);
}
