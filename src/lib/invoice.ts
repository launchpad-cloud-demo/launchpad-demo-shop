import { formatCurrency } from './format';
import { orderTotal, type Order } from './orders';

export function invoiceLines(order: Order): string[] {
  const lines = order.items.map(
    (i) => `${i.quantity} x ${i.name} @ ${formatCurrency(i.unitPrice)}`,
  );
  return [...lines, `Total: ${formatCurrency(orderTotal(order))}`];
}
