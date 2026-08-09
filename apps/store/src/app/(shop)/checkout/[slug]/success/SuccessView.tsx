"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@repo/ui/ui";
import { AppIcon, DownloadButton } from "../../../../../components/store";
import type { AppRecord } from "../../../../../types";

export function SuccessView({ app }: { app: AppRecord }) {
  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 py-16 text-center">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
        style={{ backgroundColor: "var(--success-subtle)", color: "var(--success)" }}
      >
        <CheckCircle2 className="w-7 h-7" />
      </div>
      <h1 className="text-xl font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
        Purchase Successful
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
        {app.name} Premium is now available in your library.
      </p>

      <div
        className="flex items-center gap-3 rounded-xl border p-4 mb-8 text-left"
        style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}
      >
        <AppIcon app={app} size="lg" />
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>{app.name}</p>
          <p className="text-xs truncate" style={{ color: "var(--text-secondary)" }}>{app.tagline}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <DownloadButton app={app} />
        <Link href="/library">
          <Button variant="ghost" size="sm">Go to My Apps</Button>
        </Link>
      </div>
    </div>
  );
}
