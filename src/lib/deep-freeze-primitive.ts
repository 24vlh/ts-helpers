import { OfArrayType, OfObjectType, OfType } from '@24vlh/ts-assert';

/**
 * Recursively freezes an object and its properties.
 *
 * @template T - The type of the target value.
 * @param {unknown} target - The value to freeze.
 * @returns {T} - The deeply frozen target value.
 * @example
 *  const object = { property1: { property2: 'value' } };
 *  const frozen = DeepFreezePrimitive(object);
 *  console.log(Object.isFrozen(frozen)); // true
 */
export function DeepFreezePrimitive<T>(target: unknown): T {
  if (OfObjectType(target) && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((k: string) => {
      const v = (target as Record<string, unknown>)[k];
      DeepFreezePrimitive(v);
    });

    return target as T;
  }

  if (OfArrayType(target) && !Object.isFrozen(target)) {
    Object.freeze(target);
    target.forEach((item) => DeepFreezePrimitive(item));

    return target as T;
  }

  if (OfType<Date>(target, 'Date') && !Object.isFrozen(target)) {
    Object.freeze(target);

    return target as T;
  }

  if (
    OfType<Map<unknown, unknown>>(target, 'Map') &&
    !Object.isFrozen(target)
  ) {
    target.forEach((v: unknown, k: unknown) => {
      DeepFreezePrimitive(k);
      DeepFreezePrimitive(v);
    });
    Object.freeze(target);

    return target as T;
  }

  if (OfType<Set<unknown>>(target, 'Set') && !Object.isFrozen(target)) {
    target.forEach((v: unknown) => DeepFreezePrimitive(v));
    Object.freeze(target);

    return target as T;
  }

  return target as T;
}
