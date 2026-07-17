"use client";

import { motion } from "framer-motion";
import { Container, Button } from "../ui";
import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  primaryCTA,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {subtitle}
            </motion.p>

            {primaryCTA && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href={primaryCTA.href}>
                  <Button size="lg">
                    {primaryCTA.label}
                  </Button>
                </a>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 flex items-center gap-5 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="var(--success)"><circle cx="8" cy="8" r="4"/></svg>
                4.5 rating
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="var(--success)"><circle cx="8" cy="8" r="4"/></svg>
                8K+ downloads
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="var(--success)"><circle cx="8" cy="8" r="4"/></svg>
                No sign-up
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            {children}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
