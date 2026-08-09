export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-md animate-pulse ${className}`}
      style={{ backgroundColor: "var(--bg-elevated)" }}
    />
  );
}

export function AppCardSkeleton() {
  return (
    <div
      className="rounded-xl border p-4"
      style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}
    >
      <div className="flex items-start gap-3">
        <Skeleton className="w-14 h-14 rounded-2xl shrink-0" />
        <div className="flex-1 space-y-2 pt-1">
          <Skeleton className="h-3.5 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}
