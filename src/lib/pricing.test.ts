import { describe, expect, it } from 'vitest';
import { bulkDiscountRate } from './pricing';

describe('bulkDiscountRate', () => {
  it('gives no discount below 100 units', () => expect(bulkDiscountRate(99)).toBe(0));
  it('gives 10% at exactly 100 units', () => expect(bulkDiscountRate(100)).toBe(0.1));
});
