import { OfObjectType } from '@24vlh/ts-assert';

/**
 * Creates a deep copy of a primitive value, array, or object.
 *
 * @param {unknown} target - The value to create a copy of.
 * @returns {T} - The deep copy of the target value.
 */
export function DeepCopyPrimitive<T>(target: unknown): T {
  if (target instanceof Date) {
    return new Date(target.getTime()) as T;
  } else if (Array.isArray(target)) {
    return target.map((v) => DeepCopyPrimitive(v)) as T;
  } else if (OfObjectType(target)) {
    return Object.keys(target).reduce(
      (cp: Record<string, unknown>, k: string) => {
        cp[k] = DeepCopyPrimitive((target as Record<string, unknown>)[k]);
        return cp;
      },
      {}
    ) as T;
  } else {
    return target as T;
  }
}

/**
 * Makes a deep copy of the given object.
 *
 * @param {unknown} target - The object to be copied.
 * @param {boolean} [useJson=false] - Indicates whether to use JSON serialization for deep copy. Default is false.
 * @returns {T} - The deep copied object.
 */
export function DeepCopy<T>(target: unknown, useJson = false): T {
  if (useJson) {
    return JSON.parse(JSON.stringify(target)) as T;
  }

  return DeepCopyPrimitive<T>(target);
}
