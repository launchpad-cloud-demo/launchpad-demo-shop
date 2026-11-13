import { formatCurrency } from '@/lib/format';
import { invoiceLines } from '@/lib/invoice';
import { describeOrder, orderTotal, type Order } from '@/lib/orders';
import { shippingWeightKg } from '@/lib/shipping';

// A fixed sample order keeps every render deterministic.
const order: Order = {
  id: 'ORD-1001',
  customer: 'Ada Example',
  taxRate: 0.0875,
  lines: [
    { item: { sku: 'MUG-001', name: 'LaunchPad mug', unitPrice: 12.5, quantity: 2 } },
    { item: { sku: 'TEE-002', name: 'Rocket T-shirt', unitPrice: 24, quantity: 1 } },
  ],
};

export default function OrdersPage() {
  return (
    <main>
      <h1>Order {order.id}</h1>
      <p>{describeOrder(order)}</p>
      <ul>
        {invoiceLines(order).map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>Total: {formatCurrency(orderTotal(order))}</p>
      <p>Shipping weight: {shippingWeightKg(order)} kg</p>
    </main>
  );
}
