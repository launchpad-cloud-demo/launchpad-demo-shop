import { formatCurrency, formatDate } from '@/lib/format';
import { calculateTotal } from '@/lib/pricing';
import type { CartItem } from '@/lib/types';

// A fixed sample cart and order date keep every render deterministic.
const items: CartItem[] = [
  { sku: 'MUG-001', name: 'LaunchPad mug', unitPrice: 12.5, quantity: 2 },
  { sku: 'TEE-002', name: 'Rocket T-shirt', unitPrice: 24, quantity: 1 },
];
const orderDate = new Date('2026-11-11T12:00:00Z');

export default function CheckoutPage() {
  const total = calculateTotal(items, { taxRate: 0.0875 });

  return (
    <main>
      <h1>Checkout</h1>
      <ul>
        {items.map((item) => (
          <li key={item.sku}>
            {item.quantity} x {item.name}
          </li>
        ))}
      </ul>
      <p>Total: {formatCurrency(total)}</p>
      <p>Order date: {formatDate(orderDate)}</p>
    </main>
  );
}
