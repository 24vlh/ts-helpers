export type SortDirection = 'asc' | 'desc';

/**
 * Lexicographically compares primitive key arrays.
 *
 * @param {Array<string | number>} a - Left key.
 * @param {Array<string | number>} b - Right key.
 * @returns {number} -1, 0, or 1 comparator result.
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
 * Compares keys with configurable direction.
 *
 * @param {Array<string | number>} a - Left key.
 * @param {Array<string | number>} b - Right key.
 * @param {SortDirection} direction - asc or desc.
 * @returns {number} Comparator result.
 */
export function CompareKeysWithDirection(
  a: Array<string | number>,
  b: Array<string | number>,
  direction: SortDirection = 'asc'
): number {
  return direction === 'desc' ? CompareKeys(b, a) : CompareKeys(a, b);
}
