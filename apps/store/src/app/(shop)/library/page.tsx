"use client";

import Link from "next/link";
import { Loader2, RefreshCw, CheckCircle2, LibraryBig } from "lucide-react";
import { Button } from "@repo/ui/ui";
import { AppIcon } from "../../../components/store";
import { ProgressBar, EmptyState } from "../../../components/ui";
import { useStore } from "../../../store/StoreProvider";
import { useUpdateSim } from "../../../hooks/useUpdateSim";
import { getApp } from "../../../data";
import { formatDate } from "../../../lib/format";
import type { LibraryEntry } from "../../../types";

function LibraryRow({ entry }: { entry: LibraryEntry }) {
  const app = getApp(entry.appSlug);
  const { status, progress, isActive, start } = useUpdateSim(app!, entry);
  if (!app) return null;

  return (
    <div
      className="flex items-center gap-4 rounded-xl border p-4"
      style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
    >
      <Link href={`/apps/${app.slug}`} className="shrink-0">
        <AppIcon app={app} size="lg" />
      </Link>
      <div className="flex-1 min-w-0">
        <Link href={`/apps/${app.slug}`} className="text-sm font-semibold truncate block" style={{ color: "var(--text-primary)" }}>
          {app.name}
        </Link>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
          Installed {entry.installedVersion} · {formatDate(entry.installedAt)}
        </p>
        {isActive && (
          <div className="mt-2 max-w-[200px]">
            <div className="flex items-center gap-1.5 mb-1">
              <Loader2 className="w-3 h-3 animate-spin" style={{ color: "var(--brand)" }} />
              <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                {status === "checking" && "Checking for updates…"}
                {status === "downloading" && `Downloading ${progress}%`}
                {status === "installing" && "Installing…"}
              </span>
            </div>
            <ProgressBar progress={progress} indeterminate={status === "checking" || status === "installing"} />
          </div>
        )}
      </div>
      <div className="shrink-0">
        {isActive ? null : entry.updateStatus === "update-available" ? (
          <Button size="sm" onClick={start}>
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            Update
          </Button>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--success)" }}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            Up to date
          </span>
        )}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const { library } = useStore();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        My Apps
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Apps you&apos;ve installed from Brothers Store.
      </p>

      {library.length === 0 ? (
        <EmptyState
          icon={<LibraryBig className="w-5 h-5" />}
          title="No apps installed yet"
          description="Apps you download will appear here."
          action={{ label: "Explore Apps", onClick: () => (window.location.href = "/apps") }}
        />
      ) : (
        <div className="space-y-3">
          {library.map((entry) => (
            <LibraryRow key={entry.appSlug} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
