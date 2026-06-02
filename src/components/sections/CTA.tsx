"use client";

import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTA({ title, description, primaryCTA, secondaryCTA }: CTAProps) {
  return (
    <section className="contact section-shell">
      <div className="contact-copy reveal is-visible">
        <p className="eyebrow">Ready?</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="contact-panel reveal is-visible">
        <Link href={primaryCTA.href} className="text-center font-bold">
          {primaryCTA.label}
        </Link>
        {secondaryCTA && (
          <Link href={secondaryCTA.href} className="text-center">
            {secondaryCTA.label}
          </Link>
        )}
      </div>
    </section>
  );
}
