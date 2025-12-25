import { Metadata } from "next";
import { Container, ProductCard, Button, Input } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Trophy, Rocket, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover NexBrothers products - innovative solutions designed for real-world impact. Explore Playro and upcoming products.",
};

const products = [
  {
    name: "Playro",
    tagline: "Cricket Tournament Management",
    description:
      "The complete solution for managing cricket tournaments. Create tournaments, manage teams, track live scores, and generate automatic standings - all in one powerful app.",
    icon: <Trophy className="w-8 h-8" />,
    status: "live" as const,
    href: "/playro",
    featured: true,
    features: [
      "Tournament Creation & Setup",
      "Team & Player Management",
      "Live Score Updates",
      "Automatic Points Table",
      "Match Fixtures & Scheduling",
      "Real-time Statistics",
    ],
  },
  {
    name: "Project Alpha",
    tagline: "Coming Soon",
    description:
      "We're working on something revolutionary. A new way to streamline your daily workflows and boost productivity like never before.",
    icon: <Rocket className="w-8 h-8" />,
    status: "coming-soon" as const,
    href: "/products",
  },
  {
    name: "Project Beta",
    tagline: "In Development",
    description:
      "Our next innovation is brewing. Stay tuned for updates on this exciting new project that will transform how you connect and collaborate.",
    icon: <Sparkles className="w-8 h-8" />,
    status: "coming-soon" as const,
    href: "/products",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background)" }}
        />
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Our <span className="gradient-text">Products</span>
            </h1>
            <p 
              className="text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Innovative solutions designed for real-world impact. From sports
              management to productivity tools, we build technology that makes a
              difference.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
          }}
        />

        <Container className="relative z-10">
          <StaggerChildren className="space-y-8">
            {/* Featured Product - Playro */}
            <StaggerItem>
              <div 
                className="relative p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
                style={{ 
                  backgroundColor: "var(--background-card)",
                  borderColor: "var(--border)" 
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom right, var(--accent), transparent, var(--accent-purple))",
                    opacity: 0.05
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ 
                          background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                          opacity: 0.9 
                        }}
                      >
                        <div style={{ color: "white" }}>{products[0].icon}</div>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#10B981]/20 text-[#10B981] mb-1">
                          Live
                        </span>
                        <h2 
                          className="text-3xl font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {products[0].name}
                        </h2>
                      </div>
                    </div>

                    <p 
                      className="font-medium mb-4"
                      style={{ color: "var(--accent)" }}
                    >
                      {products[0].tagline}
                    </p>
                    <p 
                      className="text-lg mb-8"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {products[0].description}
                    </p>

                    <Link href="/playro">
                      <Button size="lg" className="group">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h3 
                      className="text-xl font-semibold mb-6"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {products[0].features?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 rounded-xl border"
                          style={{ 
                            backgroundColor: "var(--background-card)",
                            borderColor: "var(--border)" 
                          }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: "var(--accent)" }}
                          />
                          <span style={{ color: "var(--text-secondary)" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Coming Soon Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.slice(1).map((product, index) => (
                <StaggerItem key={index}>
                  <ProductCard
                    name={product.name}
                    tagline={product.tagline}
                    description={product.description}
                    icon={product.icon}
                    status={product.status}
                    href={product.href}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background-secondary)" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Stay Updated
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Be the first to know when we launch new products. Subscribe to
                our newsletter for exclusive updates and early access.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>

              <p 
                className="text-sm mt-4"
                style={{ color: "var(--text-muted)" }}
              >
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
