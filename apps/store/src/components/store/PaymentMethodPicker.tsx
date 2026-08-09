"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Smartphone, CreditCard, Landmark, Wallet, Loader2, XCircle } from "lucide-react";
import { Button, Input, Select } from "@repo/ui/ui";
import { Segmented } from "../ui";
import { useCheckoutSim } from "../../hooks/useCheckoutSim";
import type { AppRecord, PaymentMethod } from "../../types";

const METHODS: { value: PaymentMethod; label: string; icon: typeof Smartphone }[] = [
  { value: "upi", label: "UPI", icon: Smartphone },
  { value: "card", label: "Card", icon: CreditCard },
  { value: "netbanking", label: "Net Banking", icon: Landmark },
  { value: "wallet", label: "Wallet", icon: Wallet },
];

const BANKS = ["HDFC Bank", "State Bank of India", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank"];
const WALLETS = ["Paytm", "PhonePe", "Amazon Pay", "Mobikwik"];

export function PaymentMethodPicker({ app }: { app: AppRecord }) {
  const router = useRouter();
  const { status, pay } = useCheckoutSim(app);
  const [method, setMethod] = useState<PaymentMethod>("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [bank, setBank] = useState(BANKS[0]);
  const [wallet, setWallet] = useState(WALLETS[0]);

  const processing = status === "validating" || status === "processing";

  const handlePay = async () => {
    const success = await pay(method);
    if (success) {
      router.push(`/checkout/${app.slug}/success`);
    }
  };

  return (
    <div className="space-y-5">
      <Segmented<PaymentMethod>
        value={method}
        onChange={setMethod}
        options={METHODS.map((m) => ({
          value: m.value,
          label: (
            <span className="flex items-center gap-1.5">
              <m.icon className="w-3.5 h-3.5" />
              {m.label}
            </span>
          ),
        }))}
      />

      <div
        className="rounded-xl border p-4"
        style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
      >
        {method === "upi" && (
          <Input
            label="UPI ID"
            placeholder="yourname@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        )}
        {method === "card" && (
          <div className="space-y-3">
            <Input label="Card number" placeholder="4242 4242 4242 4242" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Expiry" placeholder="MM/YY" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} />
              <Input label="CVV" placeholder="123" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} type="password" maxLength={3} />
            </div>
          </div>
        )}
        {method === "netbanking" && (
          <Select label="Select bank" value={bank} onChange={(e) => setBank(e.target.value)} options={BANKS.map((b) => ({ value: b, label: b }))} />
        )}
        {method === "wallet" && (
          <Select label="Select wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} options={WALLETS.map((w) => ({ value: w, label: w }))} />
        )}
      </div>

      {status === "failed" && (
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm"
          style={{ backgroundColor: "var(--danger-subtle)", color: "var(--danger)" }}
        >
          <XCircle className="w-4 h-4 shrink-0" />
          Payment failed. Please try again.
        </div>
      )}

      <Button onClick={handlePay} disabled={processing} className="w-full">
        {processing ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            {status === "validating" ? "Validating…" : "Processing Payment…"}
          </span>
        ) : status === "failed" ? (
          "Retry Payment"
        ) : (
          "Pay Now"
        )}
      </Button>
    </div>
  );
}
