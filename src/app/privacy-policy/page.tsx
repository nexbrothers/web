import { Metadata } from "next";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/animations";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how NexBrothers collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background)" }}
        />
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Last updated: December 25, 2024
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
          }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl prose prose-invert prose-lg">
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                At NexBrothers, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our services and applications.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                1. Information We Collect
              </h2>
              <h3 
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Personal Information
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We may collect personal information that you voluntarily
                provide when using our services, including:
              </p>
              <ul 
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Profile information</li>
                <li>Contact information</li>
              </ul>

              <h3 
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Usage Information
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We automatically collect certain information when you use our
                services:
              </p>
              <ul 
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>Device information and identifiers</li>
                <li>Log data and usage statistics</li>
                <li>Location data (with your permission)</li>
                <li>Performance and crash data</li>
              </ul>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                2. How We Use Your Information
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We use the collected information for various purposes:
              </p>
              <ul 
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>To provide and maintain our services</li>
                <li>To improve and personalize user experience</li>
                <li>To communicate with you about updates and promotions</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                3. Data Storage and Security
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the Internet is 100% secure, and
                we cannot guarantee absolute security.
              </p>
              <p 
                className="leading-relaxed mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Your data is stored on secure servers and is retained only
                for as long as necessary to fulfill the purposes outlined in
                this policy.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                4. Third-Party Services
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Our services may contain links to third-party websites or
                services. We are not responsible for their privacy practices.
                We may use third-party services for analytics, advertising,
                and other purposes, which may collect information about you.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                5. Cookies and Tracking
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We use cookies and similar tracking technologies to track
                activity on our services and hold certain information. You
                can instruct your browser to refuse all cookies or indicate
                when a cookie is being sent.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                6. Your Rights
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul 
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data</li>
                <li>Right to data portability</li>
                <li>Right to opt-out of marketing communications</li>
              </ul>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                7. Children&apos;s Privacy
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If we become aware that we have collected
                such information, we will take steps to delete it.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                8. Changes to This Policy
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page and updating the &quot;Last updated&quot; date.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                9. Contact Us
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p 
                className="mt-2"
                style={{ color: "var(--accent)" }}
              >
                support@nexbrothers.com
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
