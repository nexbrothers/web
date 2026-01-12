import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";
import { Container } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Calendar, Clock, ArrowRight, Tag, User, Mail } from "lucide-react";

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
        />
        <div
          className="absolute top-40 right-1/4 w-64 h-64 rounded-full blur-[100px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.06 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span style={{ color: "var(--text-primary)" }}>NexBrothers </span>
              <span className="gradient-text">Blog</span>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Thoughts on technology, products, and building things that matter.
              Join us on our journey to shape tomorrow.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Tags Section */}
      <section className="pb-12">
        <Container>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <Tag className="w-3.5 h-3.5" />
                  {tag}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <Container>
          {posts.length === 0 ? (
            <FadeIn className="text-center py-16">
              <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                No posts yet. Check back soon!
              </p>
            </FadeIn>
          ) : (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const author = getAuthor(post.author);
                return (
                  <StaggerItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="block group h-full">
                      <article
                        className="glass-card h-full flex flex-col overflow-hidden"
                        style={{
                          background: "var(--background-card)",
                          borderColor: "var(--border)",
                        }}
                      >
                        {/* Cover Image */}
                        {post.coverImage && (
                          <div className="relative w-full aspect-video overflow-hidden">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}

                        <div className="p-6 flex flex-col flex-grow">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full text-xs font-medium"
                                style={{
                                  background: "rgba(0, 212, 255, 0.1)",
                                  color: "var(--accent)",
                                }}
                              >
                                #{tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span
                                className="px-2.5 py-1 rounded-full text-xs"
                                style={{
                                  background: "var(--background-secondary)",
                                  color: "var(--text-muted)",
                                }}
                              >
                                +{post.tags.length - 2}
                              </span>
                            )}
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
                              className="flex items-center gap-3"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {/* Author */}
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center"
                                  style={{
                                    background:
                                      "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                                  }}
                                >
                                  <User className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-xs">{author.name}</span>
                              </div>
                            </div>
                            <div
                              className="flex items-center gap-3 text-xs"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readingTime}
                              </span>
                            </div>
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

      {/* Guest Author CTA */}
      <section className="pb-16">
        <Container>
          <FadeIn>
            <div
              className="rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
              style={{
                background: "var(--background-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="text-center mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Want to Share Your Story?
                </h2>
                <p style={{ color: "var(--text-secondary)" }}>
                  We love featuring guest contributors! Share your knowledge, experience, 
                  or insights with our community — we&apos;ll publish your post with full credit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(0, 212, 255, 0.1)", color: "var(--accent)" }}
                  >
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Write your post
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    Markdown or plain text
                  </p>
                </div>
                <div className="text-center p-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(0, 212, 255, 0.1)", color: "var(--accent)" }}
                  >
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Send it to us
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    Include your bio & social links
                  </p>
                </div>
                <div className="text-center p-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(0, 212, 255, 0.1)", color: "var(--accent)" }}
                  >
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Get published
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    With your name & profile
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="mailto:support@nexbrothers.com?subject=Blog Submission"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                    color: "white",
                  }}
                >
                  <Mail className="w-5 h-5" />
                  Submit to support@nexbrothers.com
                </a>
                <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
                  We review all submissions and respond within 48 hours
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Subscribe CTA */}
      <section className="pb-24">
        <Container>
          <FadeIn>
            <div
              className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto"
              style={{
                background: "var(--background-card)",
                borderColor: "var(--border)",
              }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Stay Updated
              </h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Get notified when we publish new articles. No spam, just quality
                content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://x.com/nexbrothers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                    color: "white",
                  }}
                >
                  Follow on X
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
