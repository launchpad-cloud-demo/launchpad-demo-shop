import { formatCurrency } from './format';
import { orderTotal, type Order } from './orders';

export function invoiceLines(order: Order): string[] {
  const lines = order.lines.map(
    (l) => `${l.item.quantity} x ${l.item.name} @ ${formatCurrency(l.item.unitPrice)}`,
  );
  return [...lines, `Total: ${formatCurrency(orderTotal(order))}`];
}
