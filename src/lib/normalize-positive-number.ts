/**
 * Normalizes numeric input to a positive finite number.
 *
 * @param {number | null | undefined} value - Input value.
 * @param {number} [fallback] - Fallback when value is invalid/non-positive.
 * @returns {number} Normalized positive number or fallback.
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
