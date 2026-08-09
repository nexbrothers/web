import { CheckCircle } from "lucide-react";
import type { AppRecord } from "../../types";

export function PermissionsList({ permissions }: { permissions: AppRecord["permissions"] }) {
  return (
    <ul className="space-y-3">
      {permissions.map((p) => (
        <li key={p.label} className="flex items-start gap-2.5">
          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--success)" }} />
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              {p.label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
              {p.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
