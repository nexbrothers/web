import { Metadata } from "next";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/animations";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how NexBrothers and Scanvo collect, use, and protect your personal information.",
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
              Last updated: March 16, 2025
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background), var(--background-secondary))",
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
                Policy explains how our applications — including{" "}
                <strong style={{ color: "var(--text-primary)" }}>Scanvo</strong>{" "}
                — collect, use, and protect your information. By using our apps,
                you agree to this policy.
              </p>

              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                1. Permissions We Request
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Scanvo requests the following permissions to provide its core functionality:
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Camera
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We use your device camera solely to scan documents, ID cards,
                and multi-page files within the app. Camera access is only
                activated when you initiate a scan. We do not record video, take
                photos silently, or transmit any camera data to external servers.
                All scanned images remain on your device.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Storage (Read &amp; Write)
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Storage access is used to save scanned documents and exported
                PDF/image files to your device. We only read files that you
                explicitly select within the app. We do not access or transmit
                any other files stored on your device.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Internet Access
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Internet access is used only for displaying ads via Google
                AdMob and for anonymous crash/analytics reporting via Firebase.
                All core scanning, PDF export, and OCR features work completely
                offline without internet.
              </p>

              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                2. Data We Collect
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Scanned documents:
                  </strong>{" "}
                  Stored locally on your device only. Never uploaded to any server.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Crash reports:
                  </strong>{" "}
                  Anonymous crash data via Firebase Crashlytics to help us fix bugs.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Usage analytics:
                  </strong>{" "}
                  Anonymous app usage data via Firebase Analytics (no personal data).
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Ad data:
                  </strong>{" "}
                  Google AdMob may collect device identifiers for ad personalization
                  as per Google&apos;s own privacy policy.
                </li>
              </ul>

              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                3. Data We Do NOT Collect
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>We do NOT upload your scanned documents to any cloud or server</li>
                <li>We do NOT collect your name, email, or any personal identity</li>
                <li>We do NOT sell your data to any third party</li>
                <li>We do NOT access your contacts, messages, or call logs</li>
                <li>We do NOT track your location</li>
              </ul>

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
                Scanvo uses the following third-party services, each governed by
                their own privacy policies:
              </p>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Google AdMob
                  </strong>{" "}
                  — for displaying ads
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Firebase Analytics &amp; Crashlytics
                  </strong>{" "}
                  — for anonymous usage and crash reporting
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Google ML Kit
                  </strong>{" "}
                  — for on-device OCR text recognition (fully offline, no data sent)
                </li>
              </ul>

              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                5. Data Security
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                All scanned documents and files are stored exclusively on your
                local device. Scanvo does not transmit any document data over
                the internet. Your documents are as secure as your device itself.
              </p>

              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                6. Children&apos;s Privacy
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Scanvo is not directed to children under 13. We do not knowingly
                collect any personal information from children. If you believe
                your child has provided us with personal data, please contact us
                and we will delete it immediately.
              </p>

              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                7. Your Rights
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>You can revoke camera permission at any time in device Settings</li>
                <li>You can delete all app data via device Settings → Apps → Scanvo → Clear Data</li>
                <li>You can opt out of personalized ads in your Google account settings</li>
              </ul>

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
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date. Continued use
                of the app after changes means you accept the updated policy.
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
