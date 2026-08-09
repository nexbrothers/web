"use client";

export function ProgressBar({
  progress,
  indeterminate = false,
  variant = "brand",
}: {
  progress: number;
  indeterminate?: boolean;
  variant?: "brand" | "success" | "danger";
}) {
  const color =
    variant === "success" ? "var(--success)" : variant === "danger" ? "var(--danger)" : "var(--brand)";

  return (
    <div
      className="relative h-1.5 w-full rounded-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {indeterminate ? (
        <div
          className="absolute inset-y-0 w-1/3 rounded-full"
          style={{ backgroundColor: color, animation: "progress-indeterminate 1.1s ease-in-out infinite" }}
        />
      ) : (
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-200 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%`, backgroundColor: color }}
        />
      )}
    </div>
  );
}
