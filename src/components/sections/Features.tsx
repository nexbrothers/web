"use client";

import { FeatureCard } from "@/components/ui";
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
  columns?: 2 | 3 | 4;
}

export function Features({
  title,
  subtitle,
  features,
}: FeaturesProps) {
  return (
    <section className="principles section-shell" aria-labelledby="principles-title">
      <div className="principle-panel reveal is-visible">
        <p className="eyebrow">Values</p>
        <h2 id="principles-title">{title}</h2>
        {subtitle && <p className="mt-4 text-[var(--muted)] max-w-sm">{subtitle}</p>}
      </div>

      <div className="principle-list">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
