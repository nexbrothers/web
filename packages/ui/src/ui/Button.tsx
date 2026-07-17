"use client";

import { cn } from "@repo/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-1 focus:ring-offset-[var(--bg-primary)] disabled:opacity-40 disabled:cursor-not-allowed select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] active:scale-[0.97]",
    secondary:
      "bg-transparent border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] active:scale-[0.97]",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] active:scale-[0.97]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-sm",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], loading && "cursor-wait", className)}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
