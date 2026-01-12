import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";
import { markdownToHtml } from "@/lib/markdown";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { Calendar, Clock, User, ArrowLeft, Tag, Twitter, Github, Linkedin, Globe } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const author = getAuthor(post.author);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [author.name],
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthor(post.author);
  const htmlContent = markdownToHtml(post.content);
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.06 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    color: "var(--accent)",
                  }}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div
              className="flex flex-wrap items-center gap-6 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {author.name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="pb-8">
          <Container>
            <FadeIn delay={0.05}>
              <div className="max-w-3xl mx-auto">
                <div
                  className="relative w-full aspect-video rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Content */}
      <section className="pb-16">
        <Container>
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto">
              {/* Article Content Card */}
              <article
                className="rounded-2xl p-8 md:p-12"
                style={{
                  background: "var(--background-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="prose-content"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </article>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Author Card with Social Links */}
      <section className="pb-16">
        <Container>
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "var(--background-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-wide mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Written by
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                    }}
                  >
                    {author.avatar ? (
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    ) : (
                      <User className="w-7 h-7 text-white" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <p
                      className="text-xl font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {author.name}
                    </p>
                    <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                      {author.bio}
                    </p>

                    {/* Social Links */}
                    {author.social && (
                      <div className="flex items-center gap-3">
                        {author.social.twitter && (
                          <a
                            href={author.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                            style={{
                              background: "rgba(0, 212, 255, 0.1)",
                              color: "var(--accent)",
                            }}
                            aria-label="Twitter"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {author.social.github && (
                          <a
                            href={author.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                            style={{
                              background: "rgba(0, 212, 255, 0.1)",
                              color: "var(--accent)",
                            }}
                            aria-label="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {author.social.linkedin && (
                          <a
                            href={author.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                            style={{
                              background: "rgba(0, 212, 255, 0.1)",
                              color: "var(--accent)",
                            }}
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {author.social.website && (
                          <a
                            href={author.social.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                            style={{
                              background: "rgba(0, 212, 255, 0.1)",
                              color: "var(--accent)",
                            }}
                            aria-label="Website"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Guest Author CTA */}
      <section className="pb-16">
        <Container>
          <FadeIn delay={0.25}>
            <div className="max-w-3xl mx-auto">
              <div
                className="glass-card p-6 text-center"
                style={{
                  background: "var(--background-card)",
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Want to share your story?
                </p>
                <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                  We welcome guest contributors! Send us your blog post and we&apos;ll publish it with your name and social links.
                </p>
                <a
                  href="mailto:support@nexbrothers.com?subject=Blog Submission"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                    color: "white",
                  }}
                >
                  Submit to support@nexbrothers.com
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Navigation */}
      <section className="pb-24">
        <Container>
          <FadeIn delay={0.3}>
            <div className="max-w-3xl mx-auto">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group p-4 rounded-xl transition-all duration-300 hover:bg-[var(--background-secondary)]"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <span
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      ← Previous
                    </span>
                    <p
                      className="font-medium mt-1 transition-colors duration-300 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group p-4 rounded-xl text-right transition-all duration-300 hover:bg-[var(--background-secondary)]"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <span
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Next →
                    </span>
                    <p
                      className="font-medium mt-1 transition-colors duration-300 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {nextPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
