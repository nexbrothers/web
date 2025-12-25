"use client";

import { Container, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTA({ title, description, primaryCTA, secondaryCTA }: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 50%, var(--background) 100%)",
        }}
      />
      
      {/* Accent Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px]" 
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
      />
      <div 
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" 
        style={{ backgroundColor: "var(--accent-purple)", opacity: 0.08 }}
      />

      <Container className="relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          <p 
            className="text-lg mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryCTA.href}>
              <Button size="lg" className="group">
                {primaryCTA.label}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button variant="secondary" size="lg">
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
