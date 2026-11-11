import { format } from 'date-fns';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export function formatDate(date: Date): string {
  return format(date, 'MMM d, yyyy');
}
