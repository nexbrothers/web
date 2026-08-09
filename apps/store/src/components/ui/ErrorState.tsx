"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@repo/ui/ui";

export function ErrorState({
  title = "Something went wrong",
  description,
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--danger-subtle)", color: "var(--danger)" }}
      >
        <AlertTriangle className="w-5 h-5" />
      </div>
      <h3 className="text-base font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      {description && (
        <p className="text-sm max-w-sm mb-5" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
      {onRetry && (
        <Button size="sm" variant="secondary" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
}
