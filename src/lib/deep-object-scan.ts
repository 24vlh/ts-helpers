import { ObjectHasPropertyDeepScan } from '@24vlh/ts-assert';

/**
 * Deeply scans an object to retrieve a value at the specified path.
 *
 * @template T - The type of value expected to be found at the path.
 * @param {string} path - The path to the value in dot notation (e.g., "property1.property2").
 * @param {unknown} object - The object to scan.
 * @param {(arg: unknown) => boolean} [assert] - An optional assertion function to validate the retrieved value's type.
 * @returns {T | undefined} - The value at the specified path if found and passes the assertion, otherwise undefined.
 */
export function DeepObjectScan<T>(
  path: string,
  object: unknown,
  assert: (arg: unknown) => boolean = (): boolean => true
): T | undefined {
  if (ObjectHasPropertyDeepScan(path, object)) {
    const value: unknown = path
      .split('.')
      .reduce((acc: unknown, key: string) => {
        return (acc as Record<string, unknown>)[key];
      }, object);

    if (assert && !assert(value)) {
      console.warn(
        'DeepObjectScan: Invalid type assertion',
        JSON.stringify({ path, object })
      );
      return undefined;
    }

    return value as T;
  }

  console.warn(
    'DeepObjectScan: Invalid path or object',
    JSON.stringify({ path, object })
  );
  return undefined;
}
