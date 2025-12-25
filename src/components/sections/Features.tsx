"use client";

import { Container, FeatureCard } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
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
  columns = 3,
}: FeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "var(--background)" }}
      />
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" 
        style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" 
        style={{ backgroundColor: "var(--accent-purple)", opacity: 0.05 }}
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

        {/* Features Grid */}
        <StaggerChildren
          className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
