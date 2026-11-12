import { roundCurrency } from './money';
import type { CartItem } from './types';

export interface OrderLine {
  item: CartItem;
  giftNote?: string;
}

export interface Order {
  id: string;
  customer: string;
  lines: OrderLine[];
  taxRate: number;
}

export function orderSubtotal(order: Order): number {
  return order.lines.reduce((sum, l) => sum + l.item.unitPrice * l.item.quantity, 0);
}

export function orderTotal(order: Order): number {
  return roundCurrency(orderSubtotal(order) * (1 + order.taxRate));
}

export function describeOrder(order: Order): string {
  return `${order.customer}: ${order.lines.length} item(s)`;
}
