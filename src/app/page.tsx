import Image from 'next/image';
import {
  Hero,
  Features,
  Stats,
  CTA,
  Teams,
  ScanvoVideoPreview,
} from '@/components/sections';
import { Container, ProductCard, Button, Card } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
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
      {/* Hero Section */}
      <Hero
        title={
          <>
            Building the <span className="gradient-text">Future</span> of
            Technology
          </>
        }
        subtitle="We create innovative apps and digital solutions that transform ideas into impactful experiences. Join us on our journey to shape tomorrow."
        primaryCTA={{ label: 'Explore Products', href: '/products' }}
        secondaryCTA={{ label: 'Learn More', href: '/about' }}
      />

      {/* Recent Launch */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute left-0 top-12 h-72 w-72 rounded-full blur-[120px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.08 }}
        />

        <Container className="relative z-10">
          <FadeIn className="mb-14 text-center">
            <span
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold mb-5"
              style={{
                backgroundColor: 'var(--background-card)',
                color: 'var(--accent)',
                border: '1px solid var(--border)',
              }}
            >
              Recent Launch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet <span className="gradient-text">Scanvo</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our latest document scanning product with a cleaner, faster way
              to turn paper documents into polished digital files.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
              <Card
                gradient
                hover={false}
                className="overflow-hidden p-0 md:p-0"
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
                            boxShadow: '0 10px 30px var(--shadow)',
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
                            backgroundColor: 'rgba(16, 185, 129, 0.15)',
                            color: '#10B981',
                          }}
                        >
                          Live Now
                        </span>
                      </div>

                      <h3
                        className="text-3xl sm:text-4xl font-bold mb-3"
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
                            className="flex items-center gap-3 rounded-2xl px-4 py-3"
                            style={{
                              backgroundColor: 'var(--background-card)',
                              border: '1px solid var(--border)',
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
                        href="/products/scanvo"
                        className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00D4FF]/25 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#030712]"
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

                  <div className="relative min-h-[320px] md:min-h-full">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0, 212, 255, 0.08), rgba(124, 58, 237, 0.05))',
                      }}
                    />
                    <div className="relative h-full p-6 md:p-8 flex items-center justify-center">
                      <ScanvoVideoPreview fallbackImage="/images/scanvo/scanvo-8.png" />
                    </div>
                  </div>
                </div>
              </Card>
          </FadeIn>
        </Container>
      </section>

      {/* Products Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Products
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Innovative solutions designed to solve real-world problems and
              make technology accessible to everyone.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sign Lock */}
            <StaggerItem>
              <Link href="/products/signlock">
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
                  href="/products/signlock"
                  featured
                />
              </Link>
            </StaggerItem>

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

          <FadeIn delay={0.4} className="text-center mt-12">
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
        columns={4}
      />

      {/* Stats */}
      <Stats
        title="Making an Impact"
        subtitle="Numbers that reflect our commitment to excellence and user satisfaction."
        stats={stats}
      />

      {/* Team */}
      <Teams
        title="Meet the Brothers"
        subtitle="The passionate duo behind NexBrothers, dedicated to building innovative technology solutions."
        members={teamMembers}
      />

      {/* CTA */}
      <CTA
        title="Ready to Experience Innovation?"
        description="Explore our products and discover how we're building technology that matters. Join thousands of satisfied users today."
        primaryCTA={{ label: 'Get Started', href: '/products' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
