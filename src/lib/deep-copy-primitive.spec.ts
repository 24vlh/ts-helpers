import {DeepCopy, DeepCopyPrimitive} from './deep-copy-primitive';

test('DeepCopyPrimitive: Expect a correct deep copy of a Date object', () => {
    const date = new Date();
    const result = DeepCopyPrimitive<Date>(date);
    expect(result).not.toBe(date);
    expect(result.getTime()).toBe(date.getTime());
});

test('DeepCopyPrimitive: Expect a correct deep copy of an array', () => {
    const array = [1, 2, 3];
    const result = DeepCopyPrimitive<number[]>(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
});

test('DeepCopyPrimitive: Expect a correct deep copy of an object', () => {
    const object = {key: 'value'};
    const result = DeepCopyPrimitive<Record<string, string>>(object);
    expect(result).not.toBe(object);
    expect(result).toEqual(object);
});

test('DeepCopyPrimitive: Expect a correct existing primitive value', () => {
    const value = 'string';
    const result = DeepCopyPrimitive<string>(value);
    expect(result).toBe(value);
});

test('DeepCopy: Expect a deep copy of the given object using JSON', () => {
    const obj = {count: 10, details: {name: 'Test'}};
    const result: Record<string, unknown> = DeepCopy(obj, true);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
    expect(result['details']).toEqual(obj.details);
    expect(result['details']).not.toBe(obj.details);
});

test('DeepCopy: Expect a deep copy of the given object not using JSON', () => {
    const obj = {count: 10, details: {name: 'Test'}};
    const result = DeepCopy(obj, false);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
});

test('DeepCopy: Expect a deep copy of the given object when useJson is not provided', () => {
    const obj = {count: 10, details: {name: 'Test'}};
    const result = DeepCopy(obj);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
});