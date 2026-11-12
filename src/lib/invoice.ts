import { formatCurrency } from './format';
import { orderTotal, type Order } from './orders';

export function invoiceLines(order: Order): string[] {
  const rows = order.items.map(
    (i) => `${i.quantity} x ${i.name} @ ${formatCurrency(i.unitPrice)}`,
  );
  return [...rows, `Total: ${formatCurrency(orderTotal(order))}`];
}
