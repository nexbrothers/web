"use client";

import Link from "next/link";
import { RotateCw, CheckCircle2, XCircle, Loader2, DownloadCloud } from "lucide-react";
import { AppIcon } from "../../../components/store";
import { EmptyState, ProgressBar } from "../../../components/ui";
import { useStore } from "../../../store/StoreProvider";
import { useDownloadSim } from "../../../hooks/useDownloadSim";
import { getApp } from "../../../data";
import { formatDate, formatSize } from "../../../lib/format";
import type { DownloadRecord } from "../../../types";

function DownloadRow({ record }: { record: DownloadRecord }) {
  const app = getApp(record.appSlug);
  const { status, progress, isActive, retry } = useDownloadSim(app!);
  if (!app) return null;

  const effectiveStatus = isActive ? status : record.status;

  return (
    <div
      className="flex items-center gap-4 rounded-xl border p-4"
      style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
    >
      <Link href={`/apps/${app.slug}`} className="shrink-0">
        <AppIcon app={app} size="md" />
      </Link>
      <div className="flex-1 min-w-0">
        <Link href={`/apps/${app.slug}`} className="text-sm font-semibold truncate block" style={{ color: "var(--text-primary)" }}>
          {app.name}
        </Link>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
          v{record.version} · {formatSize(record.sizeMb)} · {formatDate(record.startedAt)}
        </p>
        {isActive && (
          <div className="mt-2 max-w-[200px]">
            <ProgressBar progress={progress} indeterminate={status === "preparing" || status === "verifying"} />
          </div>
        )}
      </div>
      <div className="shrink-0">
        {isActive ? (
          <Loader2 className="w-4 h-4 animate-spin" style={{ color: "var(--brand)" }} />
        ) : effectiveStatus === "complete" ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--success)" }}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            Complete
          </span>
        ) : effectiveStatus === "failed" ? (
          <button onClick={retry} className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--danger)" }}>
            <XCircle className="w-3.5 h-3.5" />
            Failed — Retry
          </button>
        ) : (
          <button onClick={retry} aria-label="Download again" className="w-8 h-8 rounded-lg border flex items-center justify-center" style={{ borderColor: "var(--border-primary)", color: "var(--text-secondary)" }}>
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function DownloadsPage() {
  const { downloads } = useStore();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        My Downloads
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Your download history from Brothers Store.
      </p>

      {downloads.length === 0 ? (
        <EmptyState
          icon={<DownloadCloud className="w-5 h-5" />}
          title="No downloads yet"
          description="Your downloaded apps will appear here."
        />
      ) : (
        <div className="space-y-3">
          {downloads.map((record) => (
            <DownloadRow key={record.id} record={record} />
          ))}
        </div>
      )}
    </div>
  );
}
