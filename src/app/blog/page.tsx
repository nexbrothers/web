import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on technology, products, and building things that matter. The official NexBrothers blog.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy reveal is-visible">
          <p className="hero-eyebrow reveal is-visible">
            Our Blog
          </p>
          <h1 id="hero-title">Thoughts & Updates</h1>
          <p className="hero-text">
            Thoughts on technology, products, and building things that matter.
            Join us on our journey to shape tomorrow.
          </p>
        </div>
      </section>

      <section className="section-shell" style={{ padding: '2rem 0' }}>
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: "var(--panel)",
                color: "var(--ink)",
                border: "1px solid var(--line)",
              }}
            >
              #{tag}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="work-grid">
            {posts.map((post, index) => {
              const author = getAuthor(post.author);
              return (
                <Link href={`/blog/${post.slug}`} className="contents" key={post.slug}>
                  <article className="work-card reveal is-visible" style={{ minHeight: 'auto', transform: 'none' }}>
                    <div className="work-index">0{index + 1}</div>
                    
                    {post.coverImage && (
                      <div className="mb-6 relative w-full aspect-video overflow-hidden border" style={{ borderColor: 'var(--line)', borderRadius: '12px' }}>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs font-medium" style={{ color: "var(--oxide)" }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{post.title}</h3>
                    <p className="line-clamp-3" style={{ color: "var(--muted)", marginBottom: '1.5rem' }}>
                      {post.description}
                    </p>

                    <div className="mt-auto pt-4 flex justify-between items-center text-sm" style={{ borderTop: '1px solid var(--line)' }}>
                      <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{author.name}</span>
                      <span style={{ color: 'var(--oxide)' }}>{post.readingTime}</span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="contact section-shell">
        <div className="contact-copy reveal is-visible">
          <p className="eyebrow">Stay Updated</p>
          <h2>Newsletter</h2>
          <p>
            Get notified when we publish new articles. No spam, just quality
            content.
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
          <div className="mt-2 flex justify-center">
            <a
              href="https://x.com/nexbrothers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              Follow on X
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
