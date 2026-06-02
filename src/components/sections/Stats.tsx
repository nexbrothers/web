"use client";

import React, { ReactNode } from "react";

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

export function Stats({ title, subtitle, stats }: StatsProps) {
  return (
    <section className="section-shell">
      <div className="split-heading reveal is-visible">
        <div>
          <p className="eyebrow">Impact</p>
          <h2>{title}</h2>
        </div>
        <p>{subtitle}</p>
      </div>

      <div className="architecture-map reveal is-visible">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="map-node" style={{ minHeight: '12rem' }}>
              <span>0{index + 1}</span>
              <strong style={{ fontSize: '3rem' }}>{stat.value}{stat.suffix}</strong>
              <p>{stat.label}</p>
            </div>
            {index < stats.length - 1 && (
              <div className="map-line" aria-hidden="true"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
