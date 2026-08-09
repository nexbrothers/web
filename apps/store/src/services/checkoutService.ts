import type { Order, PaymentMethod } from "../types";
import { delay, shouldFail } from "./latency";

export interface ChargeResult {
  order: Order;
  success: boolean;
}

export async function chargePayment(
  appSlug: string,
  amount: number,
  method: PaymentMethod
): Promise<ChargeResult> {
  // Simulated multi-step gateway round trip: validate → process.
  await delay(500);
  await delay(900);

  const failed = shouldFail(0.5);
  const order: Order = {
    id: `ord-${Date.now()}`,
    appSlug,
    amount,
    currency: "INR",
    method,
    status: failed ? "failed" : "success",
    createdAt: new Date().toISOString(),
  };

  return { order, success: !failed };
}
