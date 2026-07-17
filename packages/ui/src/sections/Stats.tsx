"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "../ui";
import { FadeIn } from "../animations";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 45;
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
      {displayValue}{suffix}
    </span>
  );
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-20">
      <Container>
        <div
          className="rounded-xl border p-8"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-primary)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
