import { describe, expect, it } from 'vitest';
import { applyBulkDiscount, bulkDiscountRate, calculateTotal } from './pricing';

describe('bulkDiscountRate', () => {
  it('gives no discount below 100 units', () => expect(bulkDiscountRate(99)).toBe(0));
  it('gives 10% at exactly 100 units', () => expect(bulkDiscountRate(100)).toBe(0.1));
});

describe('calculateTotal', () => {
  const items = [
    { sku: 'MUG-001', name: 'LaunchPad mug', unitPrice: 12.5, quantity: 2 },
    { sku: 'TEE-002', name: 'Rocket T-shirt', unitPrice: 24, quantity: 1 },
  ];
  it('adds tax to the subtotal', () => expect(calculateTotal(items, 0)).toBe(49));
  it('rounds half cents up', () => expect(calculateTotal(items, 0.0875)).toBe(53.29));
});

describe('applyBulkDiscount', () => {
  it('leaves small orders alone', () => expect(applyBulkDiscount(29.95, 10)).toBe(29.95));
  it('rounds the discounted price to the nearest cent', () =>
    expect(applyBulkDiscount(29.95, 100)).toBe(26.96));
});
