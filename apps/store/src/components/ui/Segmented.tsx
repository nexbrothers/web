"use client";

export function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: React.ReactNode; "aria-label"?: string }[];
}) {
  return (
    <div
      role="tablist"
      className="inline-flex items-center rounded-lg border p-0.5 gap-0.5"
      style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            aria-label={opt["aria-label"]}
            onClick={() => onChange(opt.value)}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            style={{
              backgroundColor: active ? "var(--bg-primary)" : "transparent",
              color: active ? "var(--text-primary)" : "var(--text-muted)",
              boxShadow: active ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
