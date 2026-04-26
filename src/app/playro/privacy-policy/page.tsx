import { Metadata } from "next";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/animations";

export const metadata: Metadata = {
  title: "Privacy Policy — Playro",
  description:
    "Learn how Playro collects, uses, and protects your personal information when you use our cricket tournament management app.",
};

export default function PlayroPrivacyPolicyPage() {
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
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Playro
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Last updated: April 26, 2026
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
                This Privacy Policy describes how{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  NexBrothers
                </strong>{" "}
                (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles
                your information when you use{" "}
                <strong style={{ color: "var(--text-primary)" }}>Playro</strong>
                , our cricket tournament management application. By using
                Playro, you agree to this policy.
              </p>

              {/* 1 */}
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
                Account Information
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                When you create an account, we collect your name, phone number
                or email address, and profile photo (optional). This information
                is used to identify you within the app and to display your
                profile to other tournament participants.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Tournament &amp; Match Data
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We collect information you enter while organizing or
                participating in tournaments — including tournament names, team
                names, player names, match schedules, scores, and statistics.
                This data is stored on our servers to enable real-time syncing
                across devices.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Device &amp; Usage Data
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We automatically collect device information (OS version, device
                model, app version) and usage data (features used, session
                duration) to improve the app experience. This data is
                anonymised and not linked to your identity.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Crash &amp; Error Reports
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Anonymous crash reports are collected via Firebase Crashlytics
                to help us identify and fix bugs. These reports contain no
                personal data.
              </p>

              {/* 2 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                2. Permissions We Request
              </h2>

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
                Required to sync tournament data, scores, and standings in real
                time across all participants&apos; devices.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Camera (Optional)
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Used only if you choose to upload a profile photo or team logo
                by taking a photo. Camera access is never used without your
                explicit action. No images are captured silently or transmitted
                without your consent.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Storage (Optional)
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Used to save or share tournament scorecards, schedules, or
                reports to your device. Only accessed when you trigger an
                export or download action.
              </p>

              <h3
                className="text-xl font-semibold mt-6 mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Notifications
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Used to send you match alerts, score updates, and tournament
                announcements. You can disable notifications at any time in
                your device settings.
              </p>

              {/* 3 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                3. How We Use Your Information
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>To create and manage your account</li>
                <li>
                  To enable real-time tournament management and live scoring
                </li>
                <li>
                  To display leaderboards, points tables, and player statistics
                </li>
                <li>To send match and tournament notifications</li>
                <li>
                  To improve the app through anonymised usage analysis and crash
                  reporting
                </li>
                <li>To respond to your support requests</li>
              </ul>

              {/* 4 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                4. Data We Do NOT Collect
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>We do NOT track your location</li>
                <li>We do NOT access your contacts or call logs</li>
                <li>We do NOT read your messages or emails</li>
                <li>We do NOT sell your data to any third party</li>
                <li>
                  We do NOT collect financial or payment information (all
                  payments, if any, are handled by the respective payment
                  provider)
                </li>
              </ul>

              {/* 5 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                5. Data Sharing
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We do not sell or rent your personal data. We may share limited
                data only in the following cases:
              </p>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Within Playro:
                  </strong>{" "}
                  Your name and team info are visible to other participants in
                  tournaments you join or create.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Service providers:
                  </strong>{" "}
                  Firebase (Google) for authentication, database, and crash
                  reporting — governed by Google&apos;s Privacy Policy.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Legal requirements:
                  </strong>{" "}
                  If required by law or to protect users&apos; safety.
                </li>
              </ul>

              {/* 6 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                6. Third-Party Services
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Firebase Authentication
                  </strong>{" "}
                  — secure sign-in via phone number or email
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Firebase Firestore
                  </strong>{" "}
                  — cloud database for tournament data and real-time sync
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Firebase Crashlytics
                  </strong>{" "}
                  — anonymous crash reporting
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Firebase Cloud Messaging
                  </strong>{" "}
                  — push notifications for match alerts
                </li>
              </ul>

              {/* 7 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                7. Data Retention
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We retain your account and tournament data for as long as your
                account is active. If you delete your account, all personal
                data associated with it is permanently deleted within 30 days.
                Anonymised usage and crash data may be retained for up to 12
                months for analysis purposes.
              </p>

              {/* 8 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                8. Data Security
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                All data transmitted between the app and our servers is
                encrypted using HTTPS/TLS. We use Firebase&apos;s
                industry-standard security rules to restrict data access. Only
                you and authorised participants in your tournaments can access
                your tournament data.
              </p>

              {/* 9 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                9. Children&apos;s Privacy
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Playro is not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
                If you believe your child has created an account, please
                contact us and we will delete the account and all associated
                data immediately.
              </p>

              {/* 10 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                10. Your Rights
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Access:
                  </strong>{" "}
                  Request a copy of the data we hold about you
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Correction:
                  </strong>{" "}
                  Update your profile information directly in the app
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Deletion:
                  </strong>{" "}
                  Delete your account from Settings → Account → Delete Account
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Notifications:
                  </strong>{" "}
                  Opt out of push notifications via device Settings at any time
                </li>
              </ul>

              {/* 11 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                11. Changes to This Policy
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We may update this Privacy Policy from time to time. Any
                significant changes will be notified via the app or email.
                Continued use after changes constitutes acceptance of the
                updated policy.
              </p>

              {/* 12 */}
              <h2
                className="text-2xl font-bold mt-12 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                12. Contact Us
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Questions or requests regarding this Privacy Policy? Contact us:
              </p>
              <p
                className="mt-2 font-medium"
                style={{ color: "var(--accent)" }}
              >
                nexbrotherss@gmail.com
              </p>
              <p
                className="mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                NexBrothers, India
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
