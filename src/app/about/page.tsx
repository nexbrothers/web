import { Metadata } from "next";
import { Container, Card } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Lightbulb,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Zap,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NexBrothers, our mission to build innovative technology, and the values that drive us forward.",
};

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new possibilities to create groundbreaking solutions.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality",
    description:
      "We maintain the highest standards in everything we build, ensuring reliability and excellence.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Focus",
    description:
      "Every decision we make starts with our users. Their needs drive our innovation.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparency",
    description:
      "We believe in open communication and honest practices with our users and partners.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion",
    description:
      "We love what we do, and that passion reflects in every product we create.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Impact",
    description:
      "We build solutions that transcend borders and make technology accessible worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background)" }}
        />
        <div 
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              About <span className="gradient-text">NexBrothers</span>
            </h1>
            <p 
              className="text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              We&apos;re on a mission to build technology that empowers people and
              transforms ideas into impactful digital experiences.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
          }}
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-8 text-center"
                style={{ color: "var(--text-primary)" }}
              >
                Our Story
              </h2>
              <div className="prose prose-invert max-w-none">
                <p 
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  NexBrothers was born from a simple belief: technology should
                  make life better, not more complicated. Founded by a team of
                  passionate developers and designers, we set out to create
                  products that people actually love to use.
                </p>
                <p 
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Our journey began with a focus on solving everyday problems.
                  We noticed how difficult it was for cricket enthusiasts to
                  organize and manage tournaments. This led to the creation of
                  Playro, our flagship product that has since helped thousands
                  of organizers run seamless cricket events.
                </p>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Today, we continue to innovate and expand our product
                  portfolio. With each new project, we stay true to our core
                  values: building user-centric solutions with cutting-edge
                  technology and unwavering attention to quality.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background-secondary)" }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full p-8" gradient>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                      opacity: 0.9 
                    }}
                  >
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Mission
                  </h3>
                </div>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  To create innovative digital solutions that simplify complex
                  tasks, enhance productivity, and bring joy to everyday
                  experiences. We are committed to building technology that
                  makes a positive difference in people&apos;s lives.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full p-8" gradient>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: "linear-gradient(to bottom right, var(--accent-purple), var(--accent))",
                      opacity: 0.9 
                    }}
                  >
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Vision
                  </h3>
                </div>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  To be a leading force in technology innovation, recognized
                  globally for creating products that set new standards in
                  usability, design, and functionality. We envision a world
                  where technology seamlessly integrates into life.
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to bottom, var(--background-secondary), var(--background))" 
          }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Our Core Values
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              The principles that guide every decision we make and every product
              we build.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                      opacity: 0.9 
                    }}
                  >
                    <div style={{ color: "white" }}>{value.icon}</div>
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
