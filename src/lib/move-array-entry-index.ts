import { OfNumberType } from '@24vlh/ts-assert';

/**
 * Moves the entry of an array from old index to new index.
 *
 * @param {unknown[]} arr - The array to modify.
 * @param {number} oldIndex - The current index of the element.
 * @param {number} newIndex - The desired index to move the element to.
 * @returns {unknown[]} - The modified array with the element moved to the new index.
 * @example
 *  const arr = [1, 2, 3, 4, 5];
 *  const newArr = MoveArrayEntryIndex(arr, 1, 3);
 *  console.log(newArr); // [1, 3, 4, 2, 5]
 */
export function MoveArrayEntryIndex(
  [...arr]: unknown[],
  oldIndex: number,
  newIndex: number
): unknown[] {
  if (
    newIndex >= arr.length ||
    !OfNumberType(oldIndex) ||
    !OfNumberType(newIndex) ||
    oldIndex === newIndex
  ) {
    return arr;
  }

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);

  return arr;
}
