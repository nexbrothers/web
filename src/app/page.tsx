import Image from 'next/image';
import { Features, Stats, CTA, ScanvoVideoPreview } from '@repo/ui/sections';
import { Container, ProductCard, Button } from '@repo/ui/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@repo/ui/animations';
import {
  Lightbulb,
  Users,
  Cpu,
  TrendingUp,
  Trophy,
  Database,
  ArrowRight,
  Gamepad2,
  Camera,
  BriefcaseBusiness,
  ScanLine,
} from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { Team } from '@/components/home/Team';

const values = [
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Innovation First',
    description:
      "We push boundaries and explore new technologies to create solutions that make a real difference in people's lives.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'User-Centric Design',
    description:
      'Every feature we build starts with understanding our users. We design experiences that are intuitive and delightful.',
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: 'Cutting-Edge Technology',
    description:
      'We leverage the latest technologies and best practices to build robust, scalable, and future-proof solutions.',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Continuous Improvement',
    description:
      'We never stop learning and improving. Our products evolve with user feedback and technological advancements.',
  },
];

const stats = [
  { value: 4, suffix: '+', label: 'Products Launched' },
  { value: 10, suffix: 'K+', label: 'Users Impacted' },
  { value: 50, suffix: '+', label: 'Countries Reached' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction' },
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

      {/* Recent Launch */}
      <section id="work" className="py-28 scroll-mt-24" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container className="relative z-10">
          <FadeIn className="mb-14">
            <span
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold mb-5 border"
              style={{
                color: 'var(--accent)',
                borderColor: 'var(--border)',
              }}
            >
              Recent Launch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Meet <span style={{ color: 'var(--accent)' }}>Scanvo</span>
            </h2>
            <p
              className="text-lg max-w-2xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our latest document scanning product with a cleaner, faster way
              to turn paper documents into polished digital files.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border p-2"
                        style={{
                          backgroundColor: 'var(--background-secondary)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        <Image
                          src="/images/scanvo-logo.png"
                          alt="Scanvo"
                          width={28}
                          height={28}
                          className="rounded-lg"
                        />
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: 'rgba(47, 125, 79, 0.12)',
                          color: '#2F7D4F',
                        }}
                      >
                        Live Now
                      </span>
                    </div>

                    <h3
                      className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Scan, crop, enhance, and export in a few taps.
                    </h3>
                    <p
                      className="text-base sm:text-lg max-w-xl mb-8"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Scanvo is built for clean document capture on mobile,
                      with smart edge detection, ID card mode, batch scans,
                      and private offline processing.
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
                          style={{
                            backgroundColor: 'var(--background-secondary)',
                            borderColor: 'var(--border)',
                          }}
                        >
                          <ScanLine
                            className="w-4 h-4 shrink-0"
                            style={{ color: 'var(--accent)' }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="https://scanvo.nexbrothers.com"
                      className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      Explore Scanvo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Opens the Scanvo product page
                    </span>
                  </div>
                </div>

                <div
                  className="relative min-h-[320px] md:min-h-full flex items-center justify-center p-6 md:p-8"
                  style={{ backgroundColor: 'var(--background-secondary)' }}
                >
                  <ScanvoVideoPreview fallbackImage="/images/scanvo/scanvo-8.png" />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Products Showcase */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container className="relative z-10">
          <FadeIn className="mb-16 max-w-xl">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Products
            </h2>
            <p
              className="text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Innovative solutions designed to solve real-world problems and
              make technology accessible to everyone.
            </p>
          </FadeIn>

          <FadeIn className="mb-6">
            <Link href="https://signlock.nexbrothers.com">
              <ProductCard
                name="Sign Lock"
                tagline="Your Sign. Your Privacy."
                description="The first drawing-based Android app locker. Lock any app with your unique drawing password. Advanced gesture recognition, fully offline."
                icon={
                  <Image
                    src="/images/sign-lock.png"
                    alt="Sign Lock"
                    width={64}
                    height={64}
                    className="rounded-2xl object-cover"
                  />
                }
                status="coming-soon"
                href="https://signlock.nexbrothers.com"
                featured
              />
            </Link>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* request-ledger */}
            <StaggerItem>
              <Link href="/products/request-ledger">
                <ProductCard
                  name="request-ledger"
                  tagline="Never Lose a Request Again"
                  description="A durable, client-side HTTP request ledger for web apps on unreliable networks. Offline persistence, auto-replay, zero dependencies."
                  icon={<Database className="w-8 h-8" />}
                  status="live"
                  href="/products/request-ledger"
                />
              </Link>
            </StaggerItem>

            {/* Playro */}
            <StaggerItem>
              <Link href="/playro">
                <ProductCard
                  name="Playro"
                  tagline="Cricket Tournament Management"
                  description="The complete solution for managing cricket tournaments with real-time scoring, automatic standings, and detailed statistics."
                  icon={<Trophy className="w-8 h-8" />}
                  status="coming-soon"
                  href="/playro"
                />
              </Link>
            </StaggerItem>

            {/* GridSmash */}
            <StaggerItem>
              <Link href="/products">
                <ProductCard
                  name="GridSmash"
                  tagline="Offline Block Puzzle Game"
                  description="A fun offline puzzle game where you strategically place blocks to clear rows and columns. Play anywhere, no internet needed."
                  icon={<Gamepad2 className="w-8 h-8" />}
                  status="coming-soon"
                  href="/products"
                />
              </Link>
            </StaggerItem>

            {/* PhotoPrint Pro */}
            <StaggerItem>
              <Link href="/products/photoprint-pro">
                <ProductCard
                  name="PhotoPrint Pro"
                  tagline="Print-Ready Photos in Seconds"
                  description="Remove backgrounds, arrange photos on A4 sheets, and print high-quality images directly. No design skills needed."
                  icon={<Camera className="w-8 h-8" />}
                  status="live"
                  href="/products/photoprint-pro"
                />
              </Link>
            </StaggerItem>

            {/* Job Automator */}
            <StaggerItem>
              <Link href="/products/job-automator">
                <ProductCard
                  name="Job Automator"
                  tagline="Automated Job Search & Apply"
                  description="Connect your Naukri account, set your preferences, and let it find and apply to matching jobs automatically with a full activity dashboard."
                  icon={<BriefcaseBusiness className="w-8 h-8" />}
                  status="live"
                  href="/products/job-automator"
                />
              </Link>
            </StaggerItem>
          </StaggerChildren>

          <FadeIn delay={0.4} className="mt-12">
            <Link href="/products">
              <Button size="lg" className="group">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Why NexBrothers */}
      <Features
        title="Why NexBrothers?"
        subtitle="We combine passion, expertise, and innovation to deliver exceptional digital products."
        features={values}
      />

      {/* Stats */}
      <Stats stats={stats} />

      {/* Team */}
      <Team
        title="Meet the Brothers"
        subtitle="The passionate duo behind NexBrothers, dedicated to building innovative technology solutions."
        members={teamMembers}
      />

      {/* CTA */}
      <CTA
        title="Ready to Experience Innovation?"
        description="Explore our products and discover how we're building technology that matters. Join thousands of satisfied users today."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/products">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </CTA>
    </>
  );
}
