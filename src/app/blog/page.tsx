import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";
import { Container } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import { Clock, ArrowRight, Tag, User, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on technology, products, and building things that matter. The official NexBrothers blog.",
  openGraph: {
    title: "NexBrothers Blog",
    description:
      "Thoughts on technology, products, and building things that matter. The official NexBrothers blog.",
    url: "https://nexbrothers.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexBrothers Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexBrothers Blog",
    description:
      "Thoughts on technology, products, and building things that matter. The official NexBrothers blog.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://nexbrothers.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-10" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold mb-4" style={{ color: "var(--accent)" }}>
              Blog
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02] mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Notes on building software that lasts.
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Thoughts on technology, products, and shipping things that matter.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Tags */}
      {tags.length > 0 && (
        <section className="pb-14" style={{ backgroundColor: "var(--background)" }}>
          <Container>
            <FadeIn delay={0.08}>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors"
                    style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {tag}
                  </Link>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Posts Grid */}
      <section className="pb-24" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          {posts.length === 0 ? (
            <FadeIn className="text-center py-16">
              <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                No posts yet. Check back soon!
              </p>
            </FadeIn>
          ) : (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const author = getAuthor(post.author);
                return (
                  <StaggerItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="block group h-full">
                      <article
                        className="h-full flex flex-col overflow-hidden rounded-[24px] border transition-colors duration-200 hover:border-[var(--border-hover)]"
                        style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}
                      >
                        <div
                          className="relative w-full aspect-video overflow-hidden"
                          style={{ backgroundColor: "var(--background)" }}
                        >
                          {post.coverImage && (
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full text-xs font-medium"
                                style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span
                                className="px-2.5 py-1 rounded-full text-xs"
                                style={{ backgroundColor: "var(--background)", color: "var(--text-muted)" }}
                              >
                                +{post.tags.length - 2}
                              </span>
                            )}
                          </div>

                          <h2
                            className="font-display text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {post.title}
                          </h2>

                          <p className="text-sm mb-4 flex-grow line-clamp-3" style={{ color: "var(--text-secondary)" }}>
                            {post.description}
                          </p>

                          <div
                            className="flex items-center justify-between pt-4 border-t"
                            style={{ borderColor: "var(--border)" }}
                          >
                            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                              <div
                                className="w-6 h-6 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: "var(--accent)" }}
                              >
                                <User className="w-3 h-3" style={{ color: "#fff" }} />
                              </div>
                              <span className="text-xs">{author.name}</span>
                            </div>
                            <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                              <Clock className="w-3 h-3" />
                              {post.readingTime}
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          )}
        </Container>
      </section>

      {/* Guest Author + Subscribe */}
      <section className="pb-24" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-24">
            <FadeIn>
              <div
                className="rounded-[28px] p-8 sm:p-10 border h-full"
                style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
              >
                <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                  Want to share your story?
                </h2>
                <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
                  We feature guest contributors. Write your post, send it our way with a
                  short bio, and we&apos;ll publish it with full credit.
                </p>
                <a
                  href="mailto:support@nexbrothers.com?subject=Blog Submission"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
                >
                  <Mail className="w-4 h-4" />
                  Submit a post
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div
                className="rounded-[28px] p-8 sm:p-10 border flex flex-col justify-between h-full"
                style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                    Stay updated
                  </h2>
                  <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
                    Get notified when we publish new articles. No spam, just the posts.
                  </p>
                </div>
                <a
                  href="https://x.com/nexbrothers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold w-fit"
                  style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                >
                  Follow on X
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
