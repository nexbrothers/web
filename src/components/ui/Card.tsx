"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
  gradient = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative p-6 rounded-2xl h-full",
        "backdrop-blur-xl",
        "border",
        hover && "cursor-pointer",
        "transition-all duration-300",
        gradient && "overflow-hidden",
        className
      )}
      style={{
        backgroundColor: "var(--background-card)",
        borderColor: "var(--border)",
      }}
    >
      {gradient && (
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: "linear-gradient(to bottom right, var(--accent) 0%, transparent 50%, var(--accent-purple) 100%)",
            opacity: 0.05,
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
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
    <Card className={cn("text-center md:text-left", className)} gradient>
      <div 
        className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
        style={{
          background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
          opacity: 0.9,
        }}
      >
        <div style={{ color: "white" }}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p className="leading-relaxed flex-grow" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    </Card>
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
    <Card
      className={cn(
        "flex flex-col",
        featured && "md:col-span-2 lg:col-span-1"
      )}
      gradient
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
              opacity: 0.9,
            }}
          >
            <div style={{ color: "white" }}>{icon}</div>
          </div>
        )}
        <span
          className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold",
            status === "live"
              ? "bg-[#10B981]/20 text-[#10B981]"
              : "bg-[#7C3AED]/20 text-[#7C3AED]"
          )}
        >
          {status === "live" ? "Live" : "Coming Soon"}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        {name}
      </h3>
      <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>
        {tagline}
      </p>
      <p className="flex-grow" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    </Card>
  );
}
