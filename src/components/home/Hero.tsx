"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@repo/ui/animations";

export function Hero() {
  const year = new Date().getFullYear();

  return (
    <section
      className="relative overflow-hidden pt-20 flex flex-col lg:min-h-[100dvh] lg:justify-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="grid lg:grid-cols-2 items-center w-full">
        {/* Left: Copy */}
        <div className="flex items-center pl-6 sm:pl-10 lg:pl-16 xl:pl-24 pr-6 py-20 lg:py-16">
          <FadeIn className="max-w-lg">
            <h1
              className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Software built
              <br />
              with intent.
            </h1>
            <p
              className="text-lg max-w-md mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              NexBrothers builds digital products, applications, and
              software systems for people and businesses.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-20 lg:mb-28">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 text-base font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Explore our work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="text-base font-medium underline underline-offset-8"
                style={{ color: "var(--text-primary)" }}
              >
                Our products
              </Link>
            </div>

            <p
              className="hidden lg:block text-xs tracking-wide leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              NEXBROTHERS / {year}
              <br />
              INDEPENDENT SOFTWARE COMPANY
            </p>
          </FadeIn>
        </div>

        {/* Right: Product Visual — bleeds flush to the viewport edge */}
        <FadeIn delay={0.15} className="relative py-10 lg:py-0">
          <div className="relative h-[360px] sm:h-[440px] lg:h-[78vh] lg:max-h-[820px]">
            <Image
              src="/images/home/scanvo-hero-mockup.png"
              alt="Scanvo app running on a phone, resting on a signed project proposal document"
              fill
              priority
              className="object-contain lg:object-right"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
