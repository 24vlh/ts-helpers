import {ReadObjectProperty} from "./read-object-property";
import {OfNumberType, OfStringType} from "@24vlh/ts-assert";

test('ReadObjectProperty: Expecting the property to be found and return 1', () => {
    const testObject = {a: 1, b: "2", c: true};
    const result = ReadObjectProperty<object, number>("a", testObject);
    expect(result).toEqual(1);
});

test('ReadObjectProperty: Expecting the property to be found and pass assertion', () => {
    const testObject = {a: 1, b: "2", c: true};
    const result = ReadObjectProperty<object, number>("a", testObject, OfNumberType);
    expect(result).toEqual(1);
});

test('ReadObjectProperty: Expecting the property to be found but fail assertion', () => {
    const testObject = {a: 1, b: "2", c: true};
    const result = ReadObjectProperty<object, number>("a", testObject, OfStringType);
    expect(result).toEqual(undefined);
});

test('ReadObjectProperty: Expecting to not find the property', () => {
    const testObject = {a: 1, b: "2", c: true};
    const result = ReadObjectProperty<object, undefined>("d", testObject);
    expect(result).toBeUndefined();
});
