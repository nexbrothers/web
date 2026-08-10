"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@repo/ui/animations";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[68px]"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center w-full">
        {/* Left: Copy */}
        <div className="pl-6 sm:pl-10 lg:pl-16 xl:pl-24 pr-6 py-16 lg:py-24">
          <FadeIn className="max-w-lg">
            <p
              className="text-sm font-semibold mb-5"
              style={{ color: "var(--accent)" }}
            >
              Independent software studio
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-[68px] font-semibold leading-[0.98] tracking-tight mb-6"
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
              A two-person studio shipping small, privacy-leaning apps people
              actually use.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-transform active:scale-[0.97]"
                style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
              >
                Explore products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="text-base font-semibold underline underline-offset-8 decoration-2"
                style={{ color: "var(--text-primary)", textDecorationColor: "var(--border-hover)" }}
              >
                Meet the team
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right: Product visual, bleeds to the viewport edge */}
        <FadeIn delay={0.15} className="relative py-6 lg:py-0">
          <div className="relative h-[340px] sm:h-[420px] lg:h-[74vh] lg:max-h-[760px]">
            <div
              className="absolute right-[8%] top-[12%] bottom-[12%] left-[10%] lg:left-[16%] rounded-[36px]"
              style={{ backgroundColor: "var(--accent)", opacity: 0.14 }}
            />
            <Image
              src="/images/home/scanvo-hero-mockup.png"
              alt="Scanvo app running on a phone, resting on a signed project proposal document"
              fill
              priority
              className="object-contain lg:object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
