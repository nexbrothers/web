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
        "transition-all duration-200",
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
        className={cn("rounded-xl border p-5 h-full transition-all duration-200 hover:border-[var(--border-hover)]", className)}
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
  return (
    <div
      className="rounded-xl border p-5 transition-all duration-200"
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
        <span
          className="px-2 py-0.5 rounded text-[10px] font-semibold"
          style={{
            backgroundColor: status === "live" ? "rgba(34,197,94,0.1)" : "var(--brand-subtle)",
            color: status === "live" ? "var(--success)" : "var(--brand)",
          }}
        >
          {status === "live" ? "Live" : "Coming Soon"}
        </span>
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
