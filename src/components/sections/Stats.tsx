"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsProps {
  title: string;
  subtitle?: string;
  stats: Stat[];
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats({ title, subtitle, stats }: StatsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px]" 
        style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              {subtitle}
            </p>
          )}
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
                style={{ color: "var(--accent)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div 
                className="text-sm sm:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
