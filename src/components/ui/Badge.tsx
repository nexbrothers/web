import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[#0A1628] text-[#94A3B8] border-white/10",
    success: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
    warning: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
    info: "bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
