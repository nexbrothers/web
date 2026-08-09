"use client";

import { ReactNode } from "react";
import { Button } from "@repo/ui/ui";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      {icon && (
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
        >
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      {description && (
        <p className="text-sm max-w-sm mb-5" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
      {action && (
        <Button size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
