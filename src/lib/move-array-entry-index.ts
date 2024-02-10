import { OfNumberType } from '@24vlh/ts-assert';

/**
 * Moves the entry of an array from old index to new index.
 * @param {unknown[]} arr - The array to modify.
 * @param {number} oldIndex - The current index of the element.
 * @param {number} newIndex - The desired index to move the element to.
 * @returns {unknown[]} - The modified array with the element moved to the new index.
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
