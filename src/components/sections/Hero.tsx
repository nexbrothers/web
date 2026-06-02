"use client";

import { ReactNode } from "react";
import Link from "next/link";

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
  children,
}: HeroProps) {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy reveal is-visible">
        <p className="hero-eyebrow reveal is-visible">
          Building the Future
        </p>
        <h1 id="hero-title">{title}</h1>
        <p className="hero-text">
          {subtitle}
        </p>
        <div className="hero-actions">
          {primaryCTA && (
            <Link className="button button-primary" href={primaryCTA.href}>
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <Link className="button button-secondary" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Link>
          )}
        </div>
        {children && <div className="mt-8">{children}</div>}
      </div>

      <aside className="system-card reveal is-visible" aria-label="Current signal">
        <div className="card-topline">
          <span>Current signal</span>
          <span className="status-dot">Building</span>
        </div>
        <div className="terminal-card">
          <p><span>focus</span> digital solutions</p>
          <p><span>stack</span> modern web, apps</p>
          <p><span>depth</span> user experience</p>
          <p><span>bias</span> practical over hype</p>
        </div>
        <p className="card-note">
          Thoughtful engineering for products that need clear architecture, durable decisions, and room to scale.
        </p>
      </aside>
    </section>
  );
}
