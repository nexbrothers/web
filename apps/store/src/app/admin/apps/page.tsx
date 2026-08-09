"use client";

import { useState } from "react";
import { Plus, Pencil, Eye, EyeOff } from "lucide-react";
import { Button, Input, Select } from "@repo/ui/ui";
import { Modal } from "../../../components/ui";
import { AppIcon, PriceTag } from "../../../components/store";
import { showToast } from "../../../hooks/useToast";
import { apps as seedApps, categories } from "../../../data";
import type { AppRecord } from "../../../types";

type EditableFields = Pick<AppRecord, "name" | "tagline" | "category" | "price">;

export default function AdminAppsPage() {
  const [apps, setApps] = useState<AppRecord[]>(seedApps);
  const [editing, setEditing] = useState<AppRecord | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<EditableFields>({ name: "", tagline: "", category: "utilities", price: 0 });

  const togglePublish = (slug: string) => {
    setApps((prev) =>
      prev.map((a) =>
        a.slug === slug ? { ...a, status: a.status === "live" ? "coming-soon" : "live" } : a
      )
    );
    const app = apps.find((a) => a.slug === slug);
    showToast(`${app?.name} ${app?.status === "live" ? "unpublished" : "published"}`, "success");
  };

  const openEdit = (app: AppRecord) => {
    setEditing(app);
    setForm({ name: app.name, tagline: app.tagline, category: app.category, price: app.price });
  };

  const saveEdit = () => {
    if (!editing) return;
    setApps((prev) => prev.map((a) => (a.slug === editing.slug ? { ...a, ...form } : a)));
    showToast(`${form.name} updated`, "success");
    setEditing(null);
  };

  const saveNew = () => {
    if (!form.name.trim()) {
      showToast("App name is required", "error");
      return;
    }
    showToast(`${form.name} created as a draft`, "success");
    setCreating(false);
    setForm({ name: "", tagline: "", category: "utilities", price: 0 });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Apps</h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Manage the Brothers Store catalog.</p>
        </div>
        <Button size="sm" onClick={() => setCreating(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          Add App
        </Button>
      </div>

      <div className="rounded-xl border divide-y overflow-hidden" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
        {apps.map((app) => (
          <div key={app.slug} className="flex items-center gap-3 px-4 py-3">
            <AppIcon app={app} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{app.name}</p>
              <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{app.categoryLabel}</p>
            </div>
            <PriceTag price={app.price} />
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0"
              style={{
                backgroundColor: app.status === "live" ? "var(--success-subtle)" : "var(--bg-elevated)",
                color: app.status === "live" ? "var(--success)" : "var(--text-muted)",
              }}
            >
              {app.status === "live" ? "Published" : "Unpublished"}
            </span>
            <button
              onClick={() => openEdit(app)}
              aria-label={`Edit ${app.name}`}
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => togglePublish(app.slug)}
              aria-label={app.status === "live" ? `Unpublish ${app.name}` : `Publish ${app.name}`}
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              {app.status === "live" ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
        ))}
      </div>

      <Modal open={Boolean(editing)} onClose={() => setEditing(null)} title={`Edit ${editing?.name ?? ""}`}>
        <AppForm form={form} setForm={setForm} onSave={saveEdit} saveLabel="Save Changes" />
      </Modal>

      <Modal open={creating} onClose={() => setCreating(false)} title="Add App">
        <AppForm form={form} setForm={setForm} onSave={saveNew} saveLabel="Create Draft" />
      </Modal>
    </div>
  );
}

function AppForm({
  form,
  setForm,
  onSave,
  saveLabel,
}: {
  form: EditableFields;
  setForm: (f: EditableFields) => void;
  onSave: () => void;
  saveLabel: string;
}) {
  return (
    <div className="space-y-3.5">
      <Input label="App name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input label="Tagline" value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} />
      <Select
        label="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value as EditableFields["category"] })}
        options={categories.map((c) => ({ value: c.slug, label: c.label }))}
      />
      <Input
        label="Price (₹, 0 = free)"
        type="number"
        min={0}
        value={form.price}
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />
      <Button onClick={onSave} className="w-full">{saveLabel}</Button>
    </div>
  );
}
