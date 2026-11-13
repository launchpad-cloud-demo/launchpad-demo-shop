import { addBusinessDays } from 'date-fns';
import type { Order } from './orders';

// Standard shipping takes three working days; the value comes from the shipping settings.
const TRANSIT_DAYS = 3;

export function estimatedDelivery(_order: Order, placedOn: Date): Date {
  return addBusinessDays(placedOn, TRANSIT_DAYS);
}
