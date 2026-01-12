import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import { Container } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Calendar, Clock, ArrowRight, ArrowLeft, Tag } from "lucide-react";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;

  return {
    title: `Posts tagged "${tag}"`,
    description: `All blog posts tagged with ${tag} on the NexBrothers blog.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const allTags = getAllTags();

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>

            <p
              className="text-sm font-medium mb-2"
              style={{ color: "var(--accent)" }}
            >
              Tag
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              #{tag}
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Other Tags */}
      <section className="pb-12">
        <Container>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={`/blog/tags/${t}`}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    t === tag ? "" : "hover:scale-105"
                  }`}
                  style={
                    t === tag
                      ? {
                          background: "var(--accent)",
                          color: "var(--background)",
                        }
                      : {
                          background: "rgba(0, 212, 255, 0.1)",
                          color: "var(--accent)",
                          border: "1px solid rgba(0, 212, 255, 0.2)",
                        }
                  }
                >
                  <Tag className="w-3.5 h-3.5" />
                  {t}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article
                    className="glass-card p-6 h-full flex flex-col"
                    style={{
                      background: "var(--background-card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            background:
                              t === tag
                                ? "var(--accent)"
                                : "rgba(0, 212, 255, 0.1)",
                            color: t === tag ? "var(--background)" : "var(--accent)",
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2
                      className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-sm mb-4 flex-grow line-clamp-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div
                        className="flex items-center gap-4 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime}
                        </span>
                      </div>
                      <span
                        className="flex items-center gap-1 text-xs font-medium transition-all duration-300 group-hover:gap-2"
                        style={{ color: "var(--accent)" }}
                      >
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
