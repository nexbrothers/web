"use client";

import { Container, Button } from "../ui";
import { FadeIn } from "../animations";

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  children?: React.ReactNode;
}

export function CTA({ title, description, primaryCTA, secondaryCTA, children }: CTAProps) {
  return (
    <section className="py-20">
      <Container>
        <FadeIn className="max-w-lg mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          {description && (
            <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
              {description}
            </p>
          )}
          {children ? (
            children
          ) : (primaryCTA || secondaryCTA) ? (
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {primaryCTA && (
                <a href={primaryCTA.href}>
                  <Button size="lg">{primaryCTA.label}</Button>
                </a>
              )}
              {secondaryCTA && (
                <a href={secondaryCTA.href}>
                  <Button variant="secondary" size="lg">{secondaryCTA.label}</Button>
                </a>
              )}
            </div>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
