import { describe, expect, it } from "vitest";
import { describeOrder, orderSubtotal, orderTotal, type Order } from "./orders";

const order: Order = {
  id: "ORD-1",
  customer: "Test Customer",
  taxRate: 0.0875,
  lines: [
    {
      item: {
        sku: "MUG-001",
        name: "LaunchPad mug",
        unitPrice: 12.5,
        quantity: 2,
      },
    },
    {
      item: {
        sku: "TEE-002",
        name: "Rocket T-shirt",
        unitPrice: 24,
        quantity: 1,
      },
    },
  ],
};

describe("orders", () => {
  it("sums the subtotal", () => expect(orderSubtotal(order)).toBe(49));
  it("describes the order", () =>
    expect(describeOrder(order)).toBe("Test Customer: 2 item(s)"));
  it("charges tax rounded to the cent", () =>
    expect(orderTotal(order)).toBe(53.29));
  it("rounds a three-item order up", () =>
    expect(
      orderTotal({
        ...order,
        lines: [
          {
            item: {
              sku: "CAP-003",
              name: "Cap",
              unitPrice: 19.99,
              quantity: 3,
            },
          },
        ],
      }),
    ).toBe(65.22));
});
