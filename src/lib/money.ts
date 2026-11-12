/** Round a money amount to whole cents, with half cents going up. */
export function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}
