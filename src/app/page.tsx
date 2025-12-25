import { Hero, Features, Stats, CTA } from "@/components/sections";
import { Container, ProductCard, Button } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Lightbulb,
  Users,
  Cpu,
  TrendingUp,
  Trophy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Innovation First",
    description:
      "We push boundaries and explore new technologies to create solutions that make a real difference in people's lives.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "User-Centric Design",
    description:
      "Every feature we build starts with understanding our users. We design experiences that are intuitive and delightful.",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest technologies and best practices to build robust, scalable, and future-proof solutions.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Continuous Improvement",
    description:
      "We never stop learning and improving. Our products evolve with user feedback and technological advancements.",
  },
];

const stats = [
  { value: 1, suffix: "+", label: "Products Launched" },
  { value: 10, suffix: "K+", label: "Users Impacted" },
  { value: 50, suffix: "+", label: "Countries Reached" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Building the{" "}
            <span className="gradient-text">Future</span> of Technology
          </>
        }
        subtitle="We create innovative apps and digital solutions that transform ideas into impactful experiences. Join us on our journey to shape tomorrow."
        primaryCTA={{ label: "Explore Products", href: "/products" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />

      {/* Products Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background)" }}
        />
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Our Products
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Innovative solutions designed to solve real-world problems and
              make technology accessible to everyone.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Product - Playro */}
            <StaggerItem className="md:col-span-2 lg:col-span-1">
              <ProductCard
                name="Playro"
                tagline="Cricket Tournament Management"
                description="The complete solution for managing cricket tournaments. Create, organize, and track tournaments with real-time scoring, automatic standings, and detailed statistics."
                icon={<Trophy className="w-8 h-8" />}
                status="live"
                href="/playro"
                featured
              />
            </StaggerItem>

            {/* Coming Soon Cards */}
            <StaggerItem>
              <ProductCard
                name="Coming Soon"
                tagline="Next Innovation"
                description="We're working on something exciting. Stay tuned for our next product that will revolutionize how you work."
                status="coming-soon"
                href="/products"
              />
            </StaggerItem>
            <StaggerItem>
              <ProductCard
                name="Coming Soon"
                tagline="Future Release"
                description="Another innovative solution is in development. Subscribe to our newsletter to be the first to know."
                status="coming-soon"
                href="/products"
              />
            </StaggerItem>
          </StaggerChildren>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Link href="/playro">
              <Button size="lg" className="group">
                Discover Playro
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

      {/* CTA */}
      <CTA
        title="Ready to Experience Innovation?"
        description="Explore our products and discover how we're building technology that matters. Join thousands of satisfied users today."
        primaryCTA={{ label: "Get Started", href: "/products" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
