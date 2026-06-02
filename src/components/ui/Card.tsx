"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  gradient = false, // Ignored in new theme
}: CardProps) {
  return (
    <div
      className={cn(
        "relative",
        hover && "transition-transform hover:-translate-y-1",
        className
      )}
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
    <article className={cn("principle-item reveal is-visible", className)}>
      <span>{title}</span>
      <p>{description}</p>
    </article>
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
  className?: string;
}

export function ProductCard({
  name,
  tagline,
  description,
  icon,
  status,
  featured = false,
  className = "",
}: ProductCardProps) {
  return (
    <article className={cn("product-card reveal is-visible", className)}>
      <div className="product-header">
        <span className={cn("status-badge", status === "live" ? "status-live" : "status-soon")}>
          {status === "live" ? "Live" : "Coming Soon"}
        </span>
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
      <div className="product-footer">
        <span>{tagline}</span>
        <span className="product-link">View project</span>
      </div>
    </article>
  );
}
