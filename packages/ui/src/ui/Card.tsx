"use client";

import { cn } from "@repo/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className = "", hover, gradient }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border p-5",
        "transition-colors duration-200",
        className
      )}
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-primary)",
      }}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
      <div
        className={cn("rounded-xl border p-5 h-full transition-colors duration-200 hover:border-[var(--border-hover)]", className)}
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: "var(--brand-subtle)" }}
      >
        <div style={{ color: "var(--brand)" }}>{icon}</div>
      </div>
      <h3 className="text-base font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    </div>
  );
}

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon?: ReactNode;
  status: "live" | "coming-soon";
  href: string;
  featured?: boolean;
}

export function ProductCard({
  name,
  tagline,
  description,
  icon,
  status,
  featured = false,
}: ProductCardProps) {
  const statusBadge = (
    <span
      className="px-2 py-0.5 rounded text-[10px] font-semibold shrink-0"
      style={{
        backgroundColor: status === "live" ? "rgba(34,197,94,0.1)" : "var(--bg-secondary)",
        color: status === "live" ? "var(--success)" : "var(--brand)",
      }}
    >
      {status === "live" ? "Live" : "Coming Soon"}
    </span>
  );

  if (featured) {
    return (
      <div
        className="rounded-xl border p-6 sm:p-8 transition-colors duration-200 flex flex-col sm:flex-row sm:items-center gap-6"
        style={{ backgroundColor: "var(--brand-subtle)", borderColor: "var(--brand)" }}
      >
        {icon && (
          <div
            className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <div style={{ color: "var(--brand)" }}>{icon}</div>
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-display text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
              {name}
            </h3>
            {statusBadge}
          </div>
          <p className="text-sm font-medium mb-1.5" style={{ color: "var(--brand)" }}>
            {tagline}
          </p>
          <p className="text-sm max-w-xl" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border p-5 transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--brand-subtle)" }}
          >
            <div style={{ color: "var(--brand)" }}>{icon}</div>
          </div>
        )}
        {statusBadge}
      </div>
      <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
        {name}
      </h3>
      <p className="text-xs font-medium mb-2" style={{ color: "var(--brand)" }}>
        {tagline}
      </p>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    </div>
  );
}
