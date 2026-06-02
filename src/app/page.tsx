import Image from 'next/image';
import {
  Hero,
  Features,
  Stats,
  CTA,
  Teams,
  ScanvoVideoPreview,
} from '@/components/sections';
import { ProductCard } from '@/components/ui';
import {
  Lightbulb,
  Users,
  Cpu,
  TrendingUp,
  ArrowRight,
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
      <Hero
        title={
          <>
            Building the <br /> Future of Technology
          </>
        }
        subtitle="We create innovative apps and digital solutions that transform ideas into impactful experiences. Join us on our journey to shape tomorrow."
        primaryCTA={{ label: 'Explore Products', href: '/products' }}
        secondaryCTA={{ label: 'Learn More', href: '/about' }}
      />

      {/* Recent Launch */}
      <section className="work-section section-shell">
        <div className="section-heading reveal is-visible">
          <p className="eyebrow">Recent Launch</p>
          <h2>Meet Scanvo</h2>
        </div>

        <div className="work-grid" style={{ gridTemplateColumns: '1fr' }}>
          <article className="work-card work-card-featured reveal is-visible" style={{ minHeight: 'auto', transform: 'none' }}>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <div className="work-index" style={{ marginBottom: '2rem' }}>NEW</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Scan, crop, enhance, and export in a few taps.</h3>
                <p className="mb-8 text-lg" style={{ color: 'var(--cream)' }}>
                  Scanvo is built for clean document capture on mobile, with smart edge detection, ID card mode, batch scans, and private offline processing.
                </p>
                <Link href="/products/scanvo" className="button" style={{ background: 'var(--cream)', color: 'var(--charcoal)', border: 'none' }}>
                  Explore Scanvo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="relative min-h-[300px] flex items-center justify-center p-4">
                <ScanvoVideoPreview fallbackImage="/images/scanvo/scanvo-8.png" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section-shell" style={{ padding: 'clamp(5rem, 9vw, 8rem) 0' }}>
        <div className="split-heading reveal is-visible" style={{ borderTop: 'none', padding: '0 0 2.2rem 0' }}>
          <div>
            <p className="eyebrow">Products</p>
            <h2>Built for the real world.</h2>
          </div>
          <p>
            Innovative solutions designed to solve real-world problems and make technology accessible to everyone.
          </p>
        </div>

        <div className="products-grid">
          {/* Playro */}
          <Link href="/playro" className="contents">
            <ProductCard
              name="Playro"
              tagline="Cricket Tournament Management"
              description="The complete solution for managing cricket tournaments with real-time scoring, automatic standings, and detailed statistics."
              status="coming-soon"
              href="/playro"
              featured
            />
          </Link>
          
          {/* request-ledger */}
          <Link href="/products/request-ledger" className="contents">
            <ProductCard
              name="request-ledger"
              tagline="Never Lose a Request Again"
              description="A durable, client-side HTTP request ledger for web apps on unreliable networks. Offline persistence, auto-replay, zero dependencies."
              status="live"
              href="/products/request-ledger"
            />
          </Link>

          {/* GridSmash */}
          <Link href="/products" className="contents">
            <ProductCard
              name="GridSmash"
              tagline="Offline Block Puzzle Game"
              description="A fun offline puzzle game where you strategically place blocks to clear rows and columns. Play anywhere, no internet needed."
              status="coming-soon"
              href="/products"
            />
          </Link>

          {/* PhotoPrint Pro */}
          <Link href="/products/photoprint-pro" className="contents">
            <ProductCard
              name="PhotoPrint Pro"
              tagline="Print-Ready Photos in Seconds"
              description="Remove backgrounds, arrange photos on A4 sheets, and print high-quality images directly. No design skills needed."
              status="live"
              href="/products/photoprint-pro"
            />
          </Link>

          {/* Job Automator */}
          <Link href="/products/job-automator" className="contents">
            <ProductCard
              name="Job Automator"
              tagline="Automated Job Search & Apply"
              description="Connect your Naukri account, set your preferences, and let it find and apply to matching jobs automatically with a full activity dashboard."
              status="live"
              href="/products/job-automator"
            />
          </Link>
        </div>
        
        <div className="text-center mt-8 reveal is-visible">
          <Link href="/products" className="button button-secondary">
            View All Products
          </Link>
        </div>
      </section>

      <Features
        title="Why NexBrothers?"
        subtitle="We combine passion, expertise, and innovation to deliver exceptional digital products."
        features={values}
      />

      <Stats
        title="Making an Impact"
        subtitle="Numbers that reflect our commitment to excellence and user satisfaction."
        stats={stats}
      />

      <Teams
        title="Meet the Brothers"
        subtitle="The passionate duo behind NexBrothers, dedicated to building innovative technology solutions."
        members={teamMembers}
      />

      <CTA
        title="Ready to Experience Innovation?"
        description="Explore our products and discover how we're building technology that matters. Join thousands of satisfied users today."
        primaryCTA={{ label: 'Get Started', href: '/products' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
