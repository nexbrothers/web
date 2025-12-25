"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "left",
  className = "",
}: SlideInProps) {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { y: -100, x: 0 },
    down: { y: 100, x: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
