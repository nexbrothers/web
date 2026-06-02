"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
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
  const baseStyles = "button relative inline-flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "button-primary",
    secondary: "button-secondary",
    ghost: "bg-transparent text-[var(--muted)] hover:text-[var(--ink)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "", 
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
