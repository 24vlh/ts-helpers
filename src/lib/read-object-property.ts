import { ObjectHasOwnProperty } from '@24vlh/ts-assert';

/**
 * Reads the value of a property from an object and returns it.
 *
 * @template R - The type of the object.
 * @template T - The type of the property value.
 * @param {string} key - The key of the property to be read.
 * @param {R} object - The object from which the property value will be read.
 * @param {(arg: unknown) => boolean} [assert] - An optional assertion function that validates the property value.
 * @returns {T | undefined} - The value of the property, or undefined if the property does not exist or fails the assertion.
 * @example
 *  const object = { property1: 'value' };
 *  const value = ReadObjectProperty<string>('property1', object);
 *  console.log(value); // 'value'
 */
export function ReadObjectProperty<R extends object, T>(
  key: string,
  object: R,
  assert: (arg: unknown) => boolean = (): boolean => true
): T | undefined {
  if (ObjectHasOwnProperty<R>(key, object)) {
    const value: unknown = object[key];

    if (assert && !assert(value)) {
      console.warn(
        'ReadObjectProperty: Invalid type assertion',
        JSON.stringify({ key, object })
      );
      return undefined;
    }

    return value as T;
  }

  console.warn(
    'ReadObjectProperty: Invalid key or object',
    JSON.stringify({ key, object })
  );
  return undefined;
}
