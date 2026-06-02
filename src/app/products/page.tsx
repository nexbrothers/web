import { Metadata } from 'next';
import { ProductCard } from '@/components/ui';
import Link from 'next/link';

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
  ],
  alternates: {
    canonical: 'https://nexbrothers.com/products',
  },
};

const products = [
  {
    name: 'Playro',
    tagline: 'Cricket Tournament Management',
    description:
      'The complete solution for managing cricket tournaments. Create tournaments, manage teams, track live scores, and generate automatic standings - all in one powerful app.',
    status: 'coming-soon' as const,
    href: '/playro',
    featured: true,
  },
  {
    name: 'request-ledger',
    tagline: 'Never Lose a Request Again',
    description:
      'A durable, client-side HTTP request ledger for web applications on unreliable networks. Persist offline requests, auto-replay on reconnection, zero dependencies.',
    status: 'live' as const,
    href: '/products/request-ledger',
    featured: true,
  },
  {
    name: 'GridSmash',
    tagline: 'Offline Block Puzzle Game',
    description:
      'A fun and addictive offline puzzle game where you strategically place blocks to clear rows and columns. Works completely offline - play anywhere, anytime without internet.',
    status: 'coming-soon' as const,
    href: '/products',
  },
  {
    name: 'PhotoPrint Pro',
    tagline: 'Print-Ready Photos in Seconds',
    description:
      'Remove backgrounds instantly, arrange photos on A4 sheets, and print high-quality images directly from the app. Perfect for passport photos, ID cards, and bulk photo printing.',
    status: 'live' as const,
    href: '/products/photoprint-pro',
  },
  {
    name: 'Scanvo',
    tagline: 'Scan, Organize & Export Documents Instantly',
    description:
      'Turn your phone into a powerful document scanner. Scan any document, auto-enhance the quality, extract text with OCR, and export as a crisp PDF — all offline, all private.',
    status: 'live' as const,
    href: '/products/scanvo',
  },
  {
    name: 'Job Automator',
    tagline: 'Automated Job Search & Apply',
    description:
      'Connect your Naukri credentials, set your job preferences, and let the app find and apply to matching jobs automatically. Features a comprehensive dashboard to track all applications.',
    status: 'live' as const,
    href: '/products/job-automator',
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy reveal is-visible">
          <p className="hero-eyebrow reveal is-visible">
            Our Products
          </p>
          <h1 id="hero-title">Built for the real world.</h1>
          <p className="hero-text">
            Innovative solutions designed for real-world impact. From sports
            management to productivity tools, we build technology that makes a
            difference.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ padding: '2rem 0' }}>
        <div className="products-grid">
          {products.map((product, index) => (
            <Link key={index} href={product.href} className="contents">
              <ProductCard
                name={product.name}
                tagline={product.tagline}
                description={product.description}
                status={product.status}
                href={product.href}
                featured={product.featured}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="contact section-shell">
        <div className="contact-copy reveal is-visible">
          <p className="eyebrow">Stay Updated</p>
          <h2>Newsletter</h2>
          <p>
            Be the first to know when we launch new products. Subscribe to
            our newsletter for exclusive updates and early access.
          </p>
        </div>
        <div className="contact-panel reveal is-visible">
          <form className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 outline-none"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '1rem',
                color: 'var(--cream)',
                fontFamily: 'var(--mono)',
                fontSize: '0.88rem'
              }}
              required
            />
            <button 
              type="submit" 
              className="w-full transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--cream)',
                color: 'var(--charcoal)',
                border: 'none',
                borderRadius: '1rem',
                padding: '0.8rem 1rem',
                fontFamily: 'var(--mono)',
                fontSize: '0.88rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
