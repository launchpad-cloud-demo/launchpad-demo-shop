import type { Order } from './orders';

const KG_PER_UNIT = 0.4;

export function shippingWeightKg(order: Order): number {
  return Math.round(order.lines.reduce((sum, l) => sum + l.item.quantity * KG_PER_UNIT, 0) * 10) / 10;
}
