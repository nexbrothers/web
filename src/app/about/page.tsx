import { Metadata } from 'next';
import { Container } from '@repo/ui/ui';
import { FadeIn } from '@repo/ui/animations';
import {
  Lightbulb,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Zap,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about NexBrothers, our mission to build innovative technology, and the values that drive us forward.',
  openGraph: {
    title: 'About NexBrothers',
    description:
      'Learn about NexBrothers, our mission to build innovative technology, and the values that drive us forward.',
    url: 'https://nexbrothers.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About NexBrothers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NexBrothers',
    description:
      'Learn about NexBrothers, our mission to build innovative technology, and the values that drive us forward.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/about',
  },
};

const values = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Innovation',
    description: 'We constantly push boundaries to create groundbreaking solutions.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Quality',
    description: 'The highest standards in everything we build, without exception.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'User focus',
    description: 'Every decision starts with our users. Their needs drive our roadmap.',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Transparency',
    description: 'Open communication and honest practices, always.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Craft',
    description: 'We love what we do, and that shows in every product we ship.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global reach',
    description: 'Building tools that work for people everywhere, not just nearby.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              About us
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.03]"
              style={{ color: 'var(--text-primary)' }}
            >
              Two brothers, a handful of apps, and a refusal to ship half-finished software.
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Our story
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="space-y-6 max-w-[65ch]">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                NexBrothers started with a simple belief: technology should make life
                easier, not more complicated. Founded by two brothers who wanted to
                build software they&apos;d actually use themselves, we ship small and
                ship often rather than chase one big idea.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We started with everyday problems. Cricket enthusiasts had no easy way
                to manage their own tournaments by hand, so we started building Playro
                around live scoring, automatic standings, and match statistics.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We then turned to document tools. Scanvo turns any phone into a full
                document scanner with ID card mode, batch scanning, and PDF export,
                processed entirely offline to keep your files private.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Today the lineup keeps growing, from PhotoPrint Pro for instant
                passport photos to Job Automator for hands-free applications. Each new
                project stays true to the same values: user-centric, well-built, and
                shipped with care.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: 'var(--border)' }}>
            <FadeIn delay={0.05} className="md:pr-12 pb-10 md:pb-0">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl mb-6"
                style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
              >
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Our mission
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Create digital tools that simplify real tasks and hold up to daily use,
                without asking people to trade away their privacy to get there.
              </p>
            </FadeIn>

            <FadeIn delay={0.12} className="md:pl-12 pt-10 md:pt-0">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl mb-6"
                style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
              >
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Our vision
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A small studio known for products that are trusted on sight, built with
                the same attention whether ten people use them or ten thousand.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              What guides the work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: 'var(--border)' }}>
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 border-r border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
                >
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
