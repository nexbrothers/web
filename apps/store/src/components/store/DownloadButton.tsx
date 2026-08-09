"use client";

import { Download, Check, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "@repo/ui/ui";
import { ProgressBar } from "../ui";
import { useDownloadSim } from "../../hooks/useDownloadSim";
import { useStore } from "../../store/StoreProvider";
import type { AppRecord } from "../../types";

export function DownloadButton({ app, size = "lg" }: { app: AppRecord; size?: "sm" | "md" | "lg" }) {
  const { library } = useStore();
  const { status, progress, isActive, start, retry } = useDownloadSim(app);
  const entry = library.find((e) => e.appSlug === app.slug);
  const installed = Boolean(entry) && status === "idle";

  if (isActive) {
    const label =
      status === "preparing" ? "Preparing…" : status === "verifying" ? "Verifying…" : `Downloading ${progress}%`;
    return (
      <div className="w-full max-w-[220px]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
            <Loader2 className="w-3 h-3 animate-spin" />
            {label}
          </span>
        </div>
        <ProgressBar progress={progress} indeterminate={status === "preparing" || status === "verifying"} />
      </div>
    );
  }

  if (status === "complete") {
    return (
      <Button size={size} disabled className="!opacity-100">
        <Check className="w-4 h-4 mr-1.5" />
        Download Complete
      </Button>
    );
  }

  if (status === "failed") {
    return (
      <Button size={size} variant="secondary" onClick={retry}>
        <RotateCcw className="w-4 h-4 mr-1.5" />
        Retry Download
      </Button>
    );
  }

  if (installed) {
    return (
      <Button size={size} variant="secondary" disabled className="!opacity-100">
        <Check className="w-4 h-4 mr-1.5" />
        Installed
      </Button>
    );
  }

  return (
    <Button size={size} onClick={start}>
      <Download className="w-4 h-4 mr-1.5" />
      Download APK
    </Button>
  );
}
