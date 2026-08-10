"use client";

import Image from "next/image";
import { Container } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";

interface TeamMember {
  name: string;
  role: string;
  company?: string;
  image: string;
  experience?: string;
  bio?: string;
}

interface TeamProps {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

export function Team({ title, subtitle, members }: TeamProps) {
  return (
    <section className="py-24 sm:py-28" style={{ backgroundColor: "var(--background)" }}>
      <Container>
        <FadeIn className="mb-14 max-w-xl">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              {subtitle}
            </p>
          )}
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((member) => (
            <StaggerItem key={member.name}>
              <div
                className="flex flex-col sm:flex-row gap-6 p-7 sm:p-8 rounded-[28px] border h-full"
                style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}
              >
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent)" }}>
                    {member.role}
                  </p>
                  {member.company && (
                    <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      {member.company}
                      {member.experience ? ` · ${member.experience}` : ""}
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
