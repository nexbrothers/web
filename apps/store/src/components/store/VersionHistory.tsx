import { formatDate, formatSize } from "../../lib/format";
import type { VersionEntry } from "../../types";

export function VersionHistory({ versions }: { versions: VersionEntry[] }) {
  return (
    <ol className="space-y-4">
      {versions.map((v, i) => (
        <li key={v.version} className="relative pl-5">
          <span
            className="absolute left-0 top-1.5 w-2 h-2 rounded-full"
            style={{ backgroundColor: i === 0 ? "var(--brand)" : "var(--border-hover)" }}
          />
          {i < versions.length - 1 && (
            <span
              className="absolute left-[3px] top-4 bottom-[-16px] w-px"
              style={{ backgroundColor: "var(--border-primary)" }}
            />
          )}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              Version {v.version}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {formatDate(v.date)} · {formatSize(v.sizeMb)}
            </span>
          </div>
          <ul className="mt-1.5 space-y-1">
            {v.notes.map((note) => (
              <li key={note} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                — {note}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
