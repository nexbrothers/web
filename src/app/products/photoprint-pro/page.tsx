'use client';

import Link from 'next/link';
import { Container } from '@repo/ui/ui';
import { FadeIn } from '@repo/ui/animations';
import { ArrowRight, CheckCircle2, Sparkles, ScanLine } from 'lucide-react';

export default function PhotoPrintProPage() {
  return (
    <section className="pt-40 pb-24" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        <FadeIn className="mx-auto max-w-5xl">
          <div
            className="overflow-hidden rounded-[32px] border"
            style={{ backgroundColor: 'var(--background-secondary)', borderColor: 'var(--border)' }}
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <span
                  className="mb-6 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
                >
                  Product update
                </span>

                <h1
                  className="font-display mb-4 text-4xl font-semibold sm:text-5xl leading-[1.05]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  PhotoPrint Pro is now part of Scanvo
                </h1>

                <p className="mb-8 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  We moved PhotoPrint Pro&apos;s features into Scanvo so photo tools,
                  document tools, and PDF tools live in one app. This page now exists
                  only to guide existing users to the new home.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Passport photo tools', 'Document scanning', 'PDF export', 'Layout and print tools'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3.5 py-1.5 text-sm"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://scanvo.nexbrothers.com"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold"
                  style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                >
                  Continue to Scanvo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="relative p-8 sm:p-10 lg:p-12" style={{ backgroundColor: 'var(--background)' }}>
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <ScanLine className="h-7 w-7" style={{ color: '#fff' }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      New destination
                    </p>
                    <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Scanvo
                    </h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Use one app instead of separate product flows',
                    'Access photo, scan, and PDF features together',
                    'Get future improvements inside Scanvo only',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border p-4"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background-secondary)' }}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--accent)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 rounded-2xl border p-5"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background-secondary)' }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      What changed
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    PhotoPrint Pro has been merged into the Scanvo product experience.
                    If you used PhotoPrint Pro before, use Scanvo going forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
