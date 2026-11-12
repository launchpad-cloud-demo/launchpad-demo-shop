import type { Order } from './orders';

const KG_PER_UNIT = 0.4;

export function shippingWeightKg(order: Order): number {
  return Math.round(order.items.reduce((sum, i) => sum + i.quantity * KG_PER_UNIT, 0) * 10) / 10;
}
