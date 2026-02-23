/**
 * Normalizes a numeric input to a positive finite value.
 *
 * Useful for pagination sizes, retry intervals, and UI numeric settings where
 * `null`, `undefined`, `NaN`, or non-positive values should fall back safely.
 *
 * @param {number | null | undefined} value - Input value.
 * @param {number} [fallback] - Fallback when value is invalid/non-positive.
 * @returns {number} Normalized positive number or fallback.
 *
 * @example
 * NormalizePositiveNumber(-5, 10);
 * // => 10
 */
export function NormalizePositiveNumber(
  value: number | null | undefined,
  fallback = 0
): number {
  if (!Number.isFinite(value)) {
    return fallback;
  }
  const normalized = Number(value);
  return normalized > 0 ? normalized : fallback;
}
