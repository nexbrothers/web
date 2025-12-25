import { Metadata } from "next";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/animations";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using NexBrothers services and applications.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background)" }}
        />
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Terms and Conditions
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Effective date: December 25, 2024
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
                Welcome to NexBrothers. These Terms and Conditions govern your
                use of our website, applications, and services. By accessing
                or using our services, you agree to be bound by these terms.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                1. Acceptance of Terms
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                By accessing or using NexBrothers services, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms and Conditions. If you do not agree to these terms, you
                may not use our services.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                2. Use of Services
              </h2>
              <h3 
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Eligibility
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                You must be at least 13 years old to use our services. By
                using our services, you represent that you meet this age
                requirement and have the legal capacity to enter into these
                terms.
              </p>

              <h3 
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Account Responsibilities
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                If you create an account, you are responsible for:
              </p>
              <ul 
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>Maintaining the confidentiality of your credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us of any unauthorized access</li>
                <li>Keeping your account information accurate and current</li>
              </ul>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                3. Intellectual Property
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                All content, features, and functionality of our services,
                including but not limited to text, graphics, logos, icons,
                images, audio clips, and software, are the exclusive property
                of NexBrothers and are protected by copyright, trademark, and
                other intellectual property laws.
              </p>
              <p 
                className="leading-relaxed mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, or exploit any of our content
                without prior written permission.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                4. Prohibited Activities
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                When using our services, you agree not to:
              </p>
              <ul 
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Upload malicious code or attempt to hack our systems</li>
                <li>Use our services for spam or unauthorized advertising</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with the proper operation of our services</li>
                <li>Attempt to access data not intended for you</li>
              </ul>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                5. Disclaimer of Warranties
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>
              <p 
                className="leading-relaxed mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                We do not warrant that our services will be uninterrupted,
                error-free, secure, or free of viruses or other harmful
                components.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                6. Limitation of Liability
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXBROTHERS SHALL NOT
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR
                RELATED TO YOUR USE OF OUR SERVICES.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                7. Indemnification
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                You agree to indemnify, defend, and hold harmless NexBrothers
                and its affiliates, officers, directors, employees, and
                agents from and against any claims, liabilities, damages,
                losses, and expenses arising out of or in any way connected
                with your use of our services or violation of these terms.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                8. Governing Law
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                These Terms and Conditions shall be governed by and construed
                in accordance with the laws of India, without regard to its
                conflict of law provisions. Any disputes arising from these
                terms shall be resolved in the courts of India.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                9. Changes to Terms
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We reserve the right to modify these Terms and Conditions at
                any time. We will notify users of any material changes by
                posting the updated terms on our website. Your continued use
                of our services after such modifications constitutes
                acceptance of the updated terms.
              </p>

              <h2 
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                10. Contact Information
              </h2>
              <p 
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                If you have any questions about these Terms and Conditions,
                please contact us at:
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
