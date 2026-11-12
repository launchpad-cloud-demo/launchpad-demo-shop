import { roundCurrency } from './money';
import type { CartItem } from './types';

export interface Order {
  id: string;
  customer: string;
  items: CartItem[];
  taxRate: number;
}

export function orderSubtotal(order: Order): number {
  return order.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
}

export function orderTotal(order: Order): number {
  return roundCurrency(orderSubtotal(order) * (1 + order.taxRate));
}

export function describeOrder(order: Order): string {
  return `${order.customer}: ${order.items.length} item(s)`;
}
