import {MoveArrayEntryIndex} from './move-array-entry-index';

test('MoveArrayEntryIndex: Expect to move an element from old index to new index', () => {
    const oldArray = [1, 2, 3, 4];
    const newArray = MoveArrayEntryIndex(oldArray, 0, 2);
    expect(newArray).toEqual([2, 3, 1, 4]);
});

test('MoveArrayEntryIndex: Expect to return same array if new index is out of bounds', () => {
    const oldArray = [1, 2, 3, 4];
    const newArray = MoveArrayEntryIndex(oldArray, 1, 4);
    expect(newArray).toEqual(oldArray);
});

test('MoveArrayEntryIndex: Expect to return same array if old or new index is not a number', () => {
    const oldArray = [1, 2, 3, 4];
    const newArray = MoveArrayEntryIndex(oldArray, '1' as any, 2);
    expect(newArray).toEqual(oldArray);

    const newArray2 = MoveArrayEntryIndex(oldArray, 1, '2' as any);
    expect(newArray2).toEqual(oldArray);
});

test('MoveArrayEntryIndex: Expect to return same array if old and new index are the same', () => {
    const oldArray = [1, 2, 3, 4];
    const newArray = MoveArrayEntryIndex(oldArray, 2, 2);
    expect(newArray).toEqual(oldArray);
});