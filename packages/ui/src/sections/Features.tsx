"use client";

import { Container, FeatureCard } from "../ui";
import { FadeIn } from "../animations";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export function Features({
  title,
  subtitle,
  features,
}: FeaturesProps) {
  return (
    <section className="py-16" id="features">
      <Container>
        <FadeIn className="max-w-xl mb-14">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.05} className="h-full">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
