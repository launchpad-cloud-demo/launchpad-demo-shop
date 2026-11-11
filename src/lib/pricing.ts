import type { CartItem, PricingOptions } from './types';

export function calculateTotal(items: CartItem[], options: PricingOptions): number {
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  return Math.round(subtotal * (1 + options.taxRate) * 100) / 100;
}

export function bulkDiscountRate(quantity: number): number {
  return quantity >= 100 ? 0.1 : 0;
}
