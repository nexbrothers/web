'use client';

import Link from 'next/link';
import { Container, Button, Card } from '@repo/ui/ui';
import { FadeIn } from '@repo/ui/animations';
import { ArrowRight, CheckCircle2, Sparkles, ScanLine } from 'lucide-react';

export default function PhotoPrintProPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute left-1/4 top-0 h-96 w-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.12 }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent-purple)', opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="mx-auto max-w-5xl">
            <Card className="overflow-hidden p-0" hover={false} gradient>
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <span
                    className="mb-6 inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold"
                    style={{
                      backgroundColor: 'rgba(0, 212, 255, 0.12)',
                      color: 'var(--accent)',
                    }}
                  >
                    Product Update
                  </span>

                  <h1
                    className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    PhotoPrint Pro is now part of{' '}
                    <span className="gradient-text">Scanvo</span>
                  </h1>

                  <p
                    className="mb-8 max-w-2xl text-lg leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    We have moved PhotoPrint Pro features into Scanvo so photo
                    tools, document tools, and PDF tools live in one app.
                    This page now exists only to guide existing users to the
                    new home.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      'Passport photo tools',
                      'Document scanning',
                      'PDF export',
                      'Layout and print tools',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border px-4 py-2 text-sm"
                        style={{
                          borderColor: 'var(--border)',
                          backgroundColor: 'var(--background-card)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="https://scanvo.nexbrothers.com">
                      <Button size="lg" className="group">
                        Continue to Scanvo
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      No separate PhotoPrint Pro website page anymore
                    </span>
                  </div>
                </div>

                <div
                  className="relative p-8 sm:p-10 lg:p-12"
                  style={{ backgroundColor: 'rgba(0, 212, 255, 0.04)' }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background:
                          'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
                      }}
                    >
                      <ScanLine className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: 'var(--accent)' }}
                      >
                        New destination
                      </p>
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Scanvo
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      'Use one app instead of separate product flows',
                      'Access photo, scan, and PDF features together',
                      'Get future improvements inside Scanvo only',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border p-4"
                        style={{
                          borderColor: 'var(--border)',
                          backgroundColor: 'var(--background-card)',
                        }}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0"
                          style={{ color: 'var(--accent)' }}
                        />
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-8 rounded-3xl border p-5"
                    style={{
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--background-card)',
                    }}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Sparkles
                        className="h-4 w-4"
                        style={{ color: 'var(--accent)' }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        What changed
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      PhotoPrint Pro has been merged into the Scanvo product
                      experience. If you used PhotoPrint Pro before, use Scanvo
                      going forward.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
