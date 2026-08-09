"use client";

import { useState } from "react";
import { Plus, Rocket, UploadCloud, Loader2, FileArchive } from "lucide-react";
import { Button, Input, Select, Textarea } from "@repo/ui/ui";
import { Modal, ProgressBar } from "../../../components/ui";
import { showToast } from "../../../hooks/useToast";
import { apps, releaseDrafts as seedReleases } from "../../../data";
import { formatDate } from "../../../lib/format";
import type { ReleaseDraft } from "../../../types";

export default function AdminReleasesPage() {
  const [releases, setReleases] = useState<ReleaseDraft[]>(seedReleases);
  const [creating, setCreating] = useState(false);

  const publish = (id: string) => {
    setReleases((prev) => prev.map((r) => (r.id === id ? { ...r, status: "published" } : r)));
    showToast("Release published", "success");
  };

  const addRelease = (draft: ReleaseDraft) => {
    setReleases((prev) => [draft, ...prev]);
    setCreating(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Releases</h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Upload and publish new app versions.</p>
        </div>
        <Button size="sm" onClick={() => setCreating(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          New Release
        </Button>
      </div>

      <div className="rounded-xl border divide-y overflow-hidden" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
        {releases.map((r) => {
          const app = apps.find((a) => a.slug === r.appSlug);
          return (
            <div key={r.id} className="flex items-center gap-3 px-4 py-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}>
                <FileArchive className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {app?.name ?? r.appSlug} <span style={{ color: "var(--text-muted)" }}>v{r.version} ({r.versionCode})</span>
                </p>
                <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text-muted)" }}>{r.notes}</p>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>{formatDate(r.createdAt)}</p>
              </div>
              {r.status === "published" ? (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: "var(--success-subtle)", color: "var(--success)" }}>
                  Published
                </span>
              ) : (
                <Button size="sm" variant="secondary" onClick={() => publish(r.id)}>
                  <Rocket className="w-3.5 h-3.5 mr-1.5" />
                  Publish
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <Modal open={creating} onClose={() => setCreating(false)} title="New Release">
        <NewReleaseForm onCreate={addRelease} />
      </Modal>
    </div>
  );
}

function NewReleaseForm({ onCreate }: { onCreate: (draft: ReleaseDraft) => void }) {
  const [appSlug, setAppSlug] = useState(apps[0].slug);
  const [version, setVersion] = useState("");
  const [versionCode, setVersionCode] = useState("");
  const [notes, setNotes] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const simulateUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setFileName(`${appSlug}-${version || "release"}.apk`);
      setUploading(false);
    }, 900);
  };

  const submit = () => {
    if (!version.trim() || !fileName) {
      showToast(!fileName ? "Upload an APK file first" : "Enter a version number", "error");
      return;
    }
    onCreate({
      id: `rel-${Date.now()}`,
      appSlug,
      version: version.trim(),
      versionCode: Number(versionCode) || 1,
      notes: notes.trim() || "No release notes provided.",
      status: "draft",
      createdAt: new Date().toISOString(),
    });
    showToast("Release created as draft", "success");
  };

  return (
    <div className="space-y-3.5">
      <Select label="App" value={appSlug} onChange={(e) => setAppSlug(e.target.value)} options={apps.map((a) => ({ value: a.slug, label: a.name }))} />
      <div className="grid grid-cols-2 gap-3">
        <Input label="Version" placeholder="2.2.0" value={version} onChange={(e) => setVersion(e.target.value)} />
        <Input label="Version code" placeholder="22" type="number" value={versionCode} onChange={(e) => setVersionCode(e.target.value)} />
      </div>
      <Textarea label="Release notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="What changed in this release?" />

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>APK file</label>
        {uploading ? (
          <div className="rounded-lg border p-3" style={{ borderColor: "var(--border-primary)" }}>
            <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: "var(--text-secondary)" }}>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Uploading…
            </div>
            <ProgressBar progress={0} indeterminate />
          </div>
        ) : fileName ? (
          <div className="flex items-center gap-2 rounded-lg border p-3 text-sm" style={{ borderColor: "var(--border-primary)", color: "var(--text-primary)" }}>
            <FileArchive className="w-4 h-4" style={{ color: "var(--brand)" }} />
            {fileName}
          </div>
        ) : (
          <button
            onClick={simulateUpload}
            className="w-full flex flex-col items-center gap-1.5 rounded-lg border border-dashed p-5 text-sm"
            style={{ borderColor: "var(--border-hover)", color: "var(--text-muted)" }}
          >
            <UploadCloud className="w-5 h-5" />
            Click to select an APK file
          </button>
        )}
      </div>

      <Button onClick={submit} className="w-full">Create Draft Release</Button>
    </div>
  );
}
