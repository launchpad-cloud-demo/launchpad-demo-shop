export interface CartItem {
  sku: string;
  name: string;
  unitPrice: number;
  quantity: number;
}

export interface PricingOptions {
  taxRate: number;
}
