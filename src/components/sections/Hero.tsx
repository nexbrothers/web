"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  showScrollIndicator?: boolean;
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = true,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.15 }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" className="group">
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button variant="secondary" size="lg">
                    {secondaryCTA.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}

          {/* Custom Children */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="text-sm mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
