import {
  OfArrayType,
  OfImmutablePrimitiveType,
  OfObjectType,
  OfType
} from '@24vlh/ts-assert';

/**
 * Creates a deep copy of a primitive value, array, or object.
 *
 * @template T - The type of the target value.
 * @param {unknown} target - The value to create a copy of.
 * @returns {T} - The deep copy of the target value.
 * @example
 *  const object = { property1: { property2: 'value' } };
 *  const copy = DeepCopy(object);
 *  console.log(copy); // { property1: { property2: 'value' } }
 */
export function DeepCopyPrimitive<T>(target: unknown): T {
  if (OfObjectType(target)) {
    const entries = Object.entries(target);
    return Object.fromEntries(
      entries.map(([k, v]): [string, unknown] => [k, DeepCopyPrimitive(v)])
    ) as T;
  }

  if (OfArrayType(target)) {
    return target.map((v) => DeepCopyPrimitive(v)) as T;
  }

  if (OfImmutablePrimitiveType(target)) {
    return target as T;
  }

  if (OfType<Date>(target, 'Date')) {
    return new Date(target.getTime()) as T;
  }

  if (OfType<Map<unknown, unknown>>(target, 'Map')) {
    return new Map(
      Array.from(target, ([k, v]) => [
        DeepCopyPrimitive(k),
        DeepCopyPrimitive(v)
      ])
    ) as T;
  }

  if (OfType<Set<unknown>>(target, 'Set')) {
    return new Set(
      Array.from(target).map((v: unknown) => DeepCopyPrimitive(v))
    ) as T;
  }

  if (OfType<RegExp>(target, 'RegExp')) {
    return new RegExp(target.source, target.flags) as T;
  }

  return target as T;
}

/**
 * Makes a deep copy of the given object.
 *
 * @template T - The type of the object to be copied.
 * @param {unknown} target - The object to be copied.
 * @param {boolean} [useJson=false] - Indicates whether to use JSON serialization for deep copy. Default is false.
 * @returns {T} - The deep copied object.
 * @example
 *  const object = { property1: { property2: 'value' } };
 *  const copy = DeepCopy(object);
 *  console.log(copy); // { property1: { property2: 'value' } }
 */
export function DeepCopy<T>(target: unknown, useJson = false): T {
  if (useJson) {
    return JSON.parse(JSON.stringify(target)) as T;
  }

  return DeepCopyPrimitive<T>(target);
}
