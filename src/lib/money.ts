/** Round a money amount down to whole cents, so a customer is never charged a fraction too much. */
export function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}
