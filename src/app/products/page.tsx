import { Metadata } from 'next';
import { Container, Input, Button } from '@repo/ui/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@repo/ui/animations';
import {
  Trophy,
  Database,
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  Camera,
  BriefcaseBusiness,
  Lock,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Discover NexBrothers products - innovative solutions designed for real-world impact. Explore Playro, request-ledger, GridSmash, PhotoPrint Pro, Scanvo, and Job Automator.',
  keywords: [
    'NexBrothers products',
    'Playro',
    'request-ledger',
    'GridSmash',
    'PhotoPrint Pro',
    'Scanvo',
    'Job Automator',
    'cricket app',
    'HTTP request library',
    'block puzzle game',
    'photo printing app',
    'document scanner app',
    'job automation',
  ],
  openGraph: {
    title: 'NexBrothers Products',
    description:
      'Innovative solutions designed for real-world impact. Explore Playro, GridSmash, PhotoPrint Pro, Scanvo, Job Automator, and more.',
    url: 'https://nexbrothers.com/products',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'NexBrothers Products',
    description:
      'Innovative solutions designed for real-world impact. Explore Playro, Scanvo, and more.',
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products',
  },
};

const products = [
  {
    name: 'request-ledger',
    tagline: 'Never lose a request again',
    description:
      'A durable, client-side HTTP request ledger for web applications on unreliable networks. Persist offline requests, auto-replay on reconnection, zero dependencies.',
    icon: <Database className="w-6 h-6" />,
    status: 'live' as const,
    href: '/products/request-ledger',
    features: ['Offline-first persistence', 'Auto-replay on reconnect', 'Crash-safe recovery', 'Zero dependencies'],
  },
  {
    name: 'Scanvo',
    tagline: 'Scan, organize & export documents instantly',
    description:
      'Turn your phone into a document scanner. Auto-enhance quality, organize in folders, extract text with OCR, and export as a crisp PDF, offline and private.',
    icon: <Image src="/images/scanvo-logo.png" alt="" width={28} height={28} className="rounded-md" />,
    status: 'live' as const,
    href: 'https://scanvo.nexbrothers.com',
    features: ['ID card mode', 'Batch multi-page scan', 'OCR text recognition', 'Folder organization'],
  },
  {
    name: 'PhotoPrint Pro',
    tagline: 'Print-ready photos in seconds',
    description:
      'Remove backgrounds instantly, arrange photos on A4 sheets, and print high-quality images directly. Perfect for passport photos and ID cards.',
    icon: <Camera className="w-6 h-6" />,
    status: 'live' as const,
    href: '/products/photoprint-pro',
    features: ['Instant background removal', 'A4 auto-arrangement', 'Passport & ID layouts', 'Bulk processing'],
  },
  {
    name: 'Job Automator',
    tagline: 'Automated job search & apply',
    description:
      'Connect your Naukri account, set your preferences, and let it find and apply to matching jobs automatically with a full activity dashboard.',
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    status: 'live' as const,
    href: '/products/job-automator',
    features: ['Smart job matching', 'Automated applications', 'Activity dashboard', 'Status tracking'],
  },
  {
    name: 'Playro',
    tagline: 'Cricket tournament management',
    description:
      'The complete solution for managing cricket tournaments with real-time scoring, automatic standings, and detailed statistics.',
    icon: <Trophy className="w-6 h-6" />,
    status: 'coming-soon' as const,
    href: '/playro',
    features: ['Live score updates', 'Automatic points table', 'Fixtures & scheduling', 'Real-time statistics'],
  },
  {
    name: 'GridSmash',
    tagline: 'Offline block puzzle game',
    description:
      'A fun offline puzzle game where you strategically place blocks to clear rows and columns. Play anywhere, no internet needed.',
    icon: <Gamepad2 className="w-6 h-6" />,
    status: 'coming-soon' as const,
    href: '/products',
    features: ['Fully offline gameplay', 'Row & column clearing', 'Score tracking', 'On Google Play'],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              Products
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
              style={{ color: 'var(--text-primary)' }}
            >
              Six small tools, built for real problems.
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* Sign Lock — featured */}
      <section className="pb-16" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <FadeIn>
            <Link
              href="https://signlock.nexbrothers.com"
              className="group relative flex flex-col lg:flex-row lg:items-center gap-8 rounded-[32px] p-8 sm:p-12 overflow-hidden"
              style={{ backgroundColor: 'var(--ink)' }}
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 rounded-full"
                style={{ backgroundColor: 'var(--accent)', opacity: 0.16, filter: 'blur(90px)' }}
              />
              <div
                className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: 'rgba(246,245,241,0.08)' }}
              >
                <Lock className="w-7 h-7" style={{ color: 'var(--on-ink)' }} />
              </div>
              <div className="relative flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--on-ink)' }}>
                    Sign Lock
                  </h2>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                    style={{ backgroundColor: 'rgba(246,245,241,0.1)', color: 'var(--on-ink-muted)' }}
                  >
                    Coming soon
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: 'var(--accent)' }}>
                  Your sign. Your privacy.
                </p>
                <p className="text-base max-w-xl mb-5" style={{ color: 'var(--on-ink-muted)' }}>
                  The first drawing-based Android app locker. Lock any app with your own drawing
                  password, advanced gesture recognition, AES-256 encryption, fully offline.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Drawing-based authentication', '95%+ gesture recognition', 'AES-256-GCM encryption', '100% offline'].map(
                    (f) => (
                      <span
                        key={f}
                        className="rounded-full px-3 py-1.5 text-xs font-medium"
                        style={{ backgroundColor: 'rgba(246,245,241,0.08)', color: 'var(--on-ink)' }}
                      >
                        {f}
                      </span>
                    )
                  )}
                </div>
              </div>
              <ArrowUpRight
                className="relative w-6 h-6 shrink-0 self-start transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: 'var(--on-ink-muted)' }}
              />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="pb-24" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <Link
                  href={product.href}
                  className="group flex flex-col rounded-[28px] p-8 h-full border transition-colors duration-200 hover:border-[var(--border-hover)]"
                  style={{ backgroundColor: 'var(--background-secondary)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
                    >
                      {product.icon}
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{
                        backgroundColor: product.status === 'live' ? 'rgba(30,157,91,0.12)' : 'var(--background)',
                        color: product.status === 'live' ? 'var(--success)' : 'var(--accent)',
                      }}
                    >
                      {product.status === 'live' ? 'Live' : 'Coming soon'}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>
                    {product.tagline}
                  </p>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{ backgroundColor: 'var(--background)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <FadeIn>
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
                Stay updated
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Be the first to know when we launch new products.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit" className="rounded-full shrink-0">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
