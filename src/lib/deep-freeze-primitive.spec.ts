import {DeepFreezePrimitive} from './deep-freeze-primitive';

test('DeepFreezePrimitive: Expect a Date object to be frozen', () => {
    const date = new Date();
    const result = DeepFreezePrimitive<Date>(date);
    expect(Object.isFrozen(result)).toBe(true);
});

test('DeepFreezePrimitive: Expect an array to be deeply frozen', () => {
    const array = [1, 2, 3];
    const result = DeepFreezePrimitive<number[]>(array);
    expect(Object.isFrozen(result)).toBe(true);
    result.forEach((item) => expect(Object.isFrozen(item)).toBe(true));
});

test('DeepFreezePrimitive: Expect an object to be deeply frozen', () => {
    const object = {key: {nestedKey: 'value'}};
    const result = DeepFreezePrimitive<Record<string, unknown>>(object);
    expect(Object.isFrozen(result)).toBe(true);
    expect(Object.isFrozen(result.key)).toBe(true);
});

test('DeepFreezePrimitive: Expect a Map to be deeply frozen', () => {
    const map = new Map([['key', {nestedKey: 'value'}]]);
    const result = DeepFreezePrimitive<Map<string, unknown>>(map);
    expect(Object.isFrozen(result)).toBe(true);
    result.forEach((value) => expect(Object.isFrozen(value)).toBe(true));
});

test('DeepFreezePrimitive: Expect a Set to be deeply frozen', () => {
    const set = new Set([{nestedKey: 'value'}]);
    const result = DeepFreezePrimitive<Set<unknown>>(set);
    expect(Object.isFrozen(result)).toBe(true);
    result.forEach((value) => expect(Object.isFrozen(value)).toBe(true));
});

test('DeepFreezePrimitive: Expect a primitive value to remain unchanged', () => {
    const value = 'string';
    const result = DeepFreezePrimitive<string>(value);
    expect(result).toBe(value);
});
