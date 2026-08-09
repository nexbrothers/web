"use client";

import { useCallback, useState } from "react";
import { useStore } from "../store/StoreProvider";
import { chargePayment } from "../services/checkoutService";
import type { AppRecord, Order, PaymentMethod } from "../types";

export type CheckoutStatus = "idle" | "validating" | "processing" | "success" | "failed";

export function useCheckoutSim(app: AppRecord) {
  const { dispatch } = useStore();
  const [status, setStatus] = useState<CheckoutStatus>("idle");
  const [order, setOrder] = useState<Order | null>(null);

  const pay = useCallback(
    async (method: PaymentMethod) => {
      setStatus("validating");
      await new Promise((r) => setTimeout(r, 350));
      setStatus("processing");

      const result = await chargePayment(app.slug, app.price, method);
      dispatch({ type: "ADD_ORDER", order: result.order });
      setOrder(result.order);
      setStatus(result.success ? "success" : "failed");
      return result.success;
    },
    [app.price, app.slug, dispatch]
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setOrder(null);
  }, []);

  return { status, order, pay, reset };
}
