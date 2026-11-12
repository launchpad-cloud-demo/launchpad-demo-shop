import { roundCurrency } from './money';
import type { CartItem } from './types';

export function calculateTotal(items: CartItem[], taxRate: number): number {
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  return roundCurrency(subtotal * (1 + taxRate));
}

export function bulkDiscountRate(quantity: number): number {
  return quantity >= 100 ? 0.1 : 0;
}

export function applyBulkDiscount(subtotal: number, quantity: number): number {
  return roundCurrency(subtotal * (1 - bulkDiscountRate(quantity)));
}
