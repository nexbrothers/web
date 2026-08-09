"use client";

import Link from "next/link";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { CheckoutSummary, PaymentMethodPicker, AppIcon, DownloadButton } from "../../../../components/store";
import { useStore } from "../../../../store/StoreProvider";
import type { AppRecord } from "../../../../types";

export function CheckoutView({ app }: { app: AppRecord }) {
  const { library } = useStore();
  const alreadyOwned = library.some((e) => e.appSlug === app.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
      <Link href={`/apps/${app.slug}`} className="inline-flex items-center gap-1 text-sm mb-5" style={{ color: "var(--text-muted)" }}>
        <ChevronLeft className="w-4 h-4" />
        Back to {app.name}
      </Link>

      <h1 className="text-2xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
        Checkout
      </h1>

      {alreadyOwned ? (
        <div className="max-w-sm">
          <div
            className="flex items-center gap-3 rounded-xl border p-4 mb-5"
            style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}
          >
            <AppIcon app={app} size="lg" />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "var(--success)" }} />
                Already in your library
              </p>
              <p className="text-xs truncate" style={{ color: "var(--text-secondary)" }}>{app.name}</p>
            </div>
          </div>
          <DownloadButton app={app} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <PaymentMethodPicker app={app} />
          </div>
          <div className="order-1 md:order-2">
            <CheckoutSummary app={app} />
          </div>
        </div>
      )}
    </div>
  );
}
