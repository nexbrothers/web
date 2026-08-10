import Image from 'next/image';
import { Stats, ScanvoVideoPreview } from '@repo/ui/sections';
import { Container } from '@repo/ui/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@repo/ui/animations';
import {
  Lightbulb,
  Users,
  Cpu,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  BriefcaseBusiness,
  ScanLine,
  Database,
  Trophy,
  Lock,
} from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { Team } from '@/components/home/Team';

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation first',
    description:
      "We push boundaries and explore new technologies to create solutions that make a real difference in people's lives.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'User-centric design',
    description:
      'Every feature we build starts with understanding our users. We design experiences that are intuitive and delightful.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Cutting-edge technology',
    description:
      'We leverage the latest technologies and best practices to build robust, scalable, and future-proof solutions.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Continuous improvement',
    description:
      'We never stop learning. Our products evolve with user feedback and technological advancements.',
  },
];

const stats = [
  { value: 4, suffix: '+', label: 'Products launched' },
  { value: 10, suffix: 'K+', label: 'Users impacted' },
  { value: 50, suffix: '+', label: 'Countries reached' },
  { value: 99, suffix: '%', label: 'Customer satisfaction' },
];

const teamMembers = [
  {
    name: 'Aman Sharma',
    role: 'Co-Founder & Senior Software Developer',
    company: 'Airstashed Pvt Ltd',
    image: '/aman.jpeg',
    experience: '2.5+ Years',
    bio: 'Passionate about building innovative solutions that make a real impact. Focused on creating seamless user experiences and scalable architectures.',
  },
  {
    name: 'Anuj Sharma',
    role: 'Co-Founder & Senior Software Developer',
    company: 'Bytes24',
    image: '/anuj.jpg',
    experience: '1+ Year',
    bio: 'Dedicated to pushing technological boundaries and delivering high-quality software solutions that users love.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Recent Launch — Scanvo */}
      <section id="work" className="py-24 sm:py-28 scroll-mt-24" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container className="relative z-10">
          <FadeIn className="mb-12">
            <p className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>
              Recent launch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Meet Scanvo
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="overflow-hidden rounded-[32px] border"
              style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-7">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border p-2"
                        style={{ backgroundColor: 'var(--background-secondary)', borderColor: 'var(--border)' }}
                      >
                        <Image src="/images/scanvo-logo.png" alt="Scanvo" width={26} height={26} className="rounded-lg" />
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ backgroundColor: 'rgba(30,157,91,0.12)', color: 'var(--success)' }}
                      >
                        Live now
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
                      Scan, crop, enhance, and export in a few taps.
                    </h3>
                    <p className="text-base sm:text-lg max-w-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                      Clean document capture for mobile, with smart edge detection, ID card mode, batch scans, and private offline processing.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mb-8">
                      {[
                        'Smart auto edge detection',
                        'Batch scans into one PDF',
                        'ID card front and back mode',
                        'Private offline document processing',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                          style={{ backgroundColor: 'var(--background-secondary)', borderColor: 'var(--border)' }}
                        >
                          <ScanLine className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="https://scanvo.nexbrothers.com"
                    className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold w-fit transition-transform active:scale-[0.97]"
                    style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                  >
                    Explore Scanvo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div
                  className="relative min-h-[340px] lg:min-h-full flex items-center justify-center p-6 md:p-8"
                  style={{ backgroundColor: 'var(--background-secondary)' }}
                >
                  <ScanvoVideoPreview fallbackImage="/images/scanvo/scanvo-8.png" />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Products — asymmetric bento */}
      <section className="py-24 sm:py-28" style={{ backgroundColor: 'var(--background)' }}>
        <Container className="relative z-10">
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
              The rest of the lineup
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Small, focused tools. Some live today, some still in the oven.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Sign Lock — featured, dark, spans full width */}
            <StaggerItem className="sm:col-span-2">
              <Link
                href="https://signlock.nexbrothers.com"
                className="group relative flex flex-col sm:flex-row sm:items-center gap-6 rounded-[28px] p-8 sm:p-10 overflow-hidden h-full"
                style={{ backgroundColor: 'var(--ink)' }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', opacity: 0.16, filter: 'blur(50px)' }}
                />
                <div
                  className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'rgba(246,245,241,0.08)' }}
                >
                  <Lock className="w-7 h-7" style={{ color: 'var(--on-ink)' }} />
                </div>
                <div className="relative flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl font-semibold" style={{ color: 'var(--on-ink)' }}>
                      Sign Lock
                    </h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ backgroundColor: 'rgba(246,245,241,0.1)', color: 'var(--on-ink-muted)' }}
                    >
                      Coming soon
                    </span>
                  </div>
                  <p className="text-sm mb-1" style={{ color: 'var(--accent)' }}>
                    Your sign. Your privacy.
                  </p>
                  <p className="text-sm max-w-lg" style={{ color: 'var(--on-ink-muted)' }}>
                    The first drawing-based Android app locker. Lock any app with your own gesture, fully offline.
                  </p>
                </div>
                <ArrowUpRight
                  className="relative w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: 'var(--on-ink-muted)' }}
                />
              </Link>
            </StaggerItem>

            {/* request-ledger */}
            <StaggerItem>
              <ProductTile
                href="/products/request-ledger"
                icon={<Database className="w-6 h-6" />}
                name="request-ledger"
                tagline="Never lose a request again"
                description="A durable, client-side HTTP request ledger for apps on unreliable networks."
                status="live"
              />
            </StaggerItem>

            {/* PhotoPrint Pro — real image cell */}
            <StaggerItem>
              <Link
                href="/products/photoprint-pro"
                className="group relative flex flex-col justify-end rounded-[28px] p-7 overflow-hidden h-full min-h-[220px]"
                style={{ backgroundColor: 'var(--background-secondary)', border: '1px solid var(--border)' }}
              >
                <Image
                  src="/images/photoprint-pro-app.png"
                  alt="PhotoPrint Pro app screen"
                  fill
                  className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(20,20,15,0.82), rgba(20,20,15,0.05) 55%)' }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-display text-xl font-semibold" style={{ color: '#fff' }}>
                      PhotoPrint Pro
                    </h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={{ backgroundColor: 'rgba(30,157,91,0.9)', color: '#fff' }}
                    >
                      Live
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'rgba(246,245,241,0.85)' }}>
                    Print-ready photos in seconds
                  </p>
                </div>
              </Link>
            </StaggerItem>

            {/* Job Automator */}
            <StaggerItem>
              <ProductTile
                href="/products/job-automator"
                icon={<BriefcaseBusiness className="w-6 h-6" />}
                name="Job Automator"
                tagline="Automated job search & apply"
                description="Connect Naukri, set your preferences, and let it apply for you with a full activity log."
                status="live"
              />
            </StaggerItem>

            {/* Playro */}
            <StaggerItem>
              <ProductTile
                href="/playro"
                icon={<Trophy className="w-6 h-6" />}
                name="Playro"
                tagline="Cricket tournament management"
                description="Real-time scoring, automatic standings, and detailed match statistics."
                status="coming-soon"
              />
            </StaggerItem>

            {/* GridSmash — accent gradient, playful */}
            <StaggerItem>
              <Link
                href="/products"
                className="group relative flex flex-col justify-end rounded-[28px] p-7 overflow-hidden h-full min-h-[220px]"
                style={{ background: 'linear-gradient(150deg, var(--accent) 0%, var(--accent-purple) 100%)' }}
              >
                <Gamepad2
                  className="pointer-events-none absolute right-5 top-5 w-10 h-10 opacity-25 transition-transform duration-500 group-hover:rotate-12"
                  style={{ color: '#fff' }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-display text-xl font-semibold" style={{ color: '#fff' }}>
                      GridSmash
                    </h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
                    >
                      Coming soon
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    Offline block puzzle game
                  </p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerChildren>

          <FadeIn delay={0.2} className="mt-10">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-base font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              View all products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Why NexBrothers — divided list, not a card grid */}
      <section className="py-24 sm:py-28" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Why NexBrothers?
              </h2>
            </FadeIn>
            <div>
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 0.06}>
                  <div
                    className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-7"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-3 sm:w-56 shrink-0">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                        style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
                      >
                        {value.icon}
                      </div>
                      <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Stats stats={stats} />

      {/* Team */}
      <Team
        title="Meet the brothers"
        subtitle="The passionate duo behind NexBrothers, dedicated to building innovative technology solutions."
        members={teamMembers}
      />
    </>
  );
}

function ProductTile({
  href,
  icon,
  name,
  tagline,
  description,
  status,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'coming-soon';
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[28px] p-7 h-full min-h-[220px] border transition-colors duration-200 hover:border-[var(--border-hover)]"
      style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}
        >
          {icon}
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
          style={{
            backgroundColor: status === 'live' ? 'rgba(30,157,91,0.12)' : 'var(--background-secondary)',
            color: status === 'live' ? 'var(--success)' : 'var(--accent)',
          }}
        >
          {status === 'live' ? 'Live' : 'Coming soon'}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
        {name}
      </h3>
      <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>
        {tagline}
      </p>
      <p className="text-sm mt-auto" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </Link>
  );
}
