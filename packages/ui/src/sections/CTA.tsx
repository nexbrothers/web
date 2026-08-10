"use client";

import { Container } from "../ui";
import { FadeIn } from "../animations";

interface CTAProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function CTA({ title, description, children }: CTAProps) {
  return (
    <section className="py-24">
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
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
