"use client";

import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { ShieldCheck, Lock, WifiOff, FileText, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-28 relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10 max-w-4xl">
        <FadeIn className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Waura Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
            <ShieldCheck className="w-4 h-4" />
            Official Policy
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Waura Privacy Policy
          </h1>
          <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
            Effective Date: 29 October 2026 • Published by NexBrothers
          </p>
        </FadeIn>

        {/* Highlight Card */}
        <FadeIn delay={0.1} className="mb-10">
          <div
            className="p-6 rounded-2xl glass border"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Waura turns intentional phone use into an aura score. It is engineered from the ground up so that{" "}
              <strong className="text-purple-600 dark:text-purple-400">your data never leaves your phone</strong>.
            </p>
          </div>
        </FadeIn>

        {/* Policy Body */}
        <FadeIn delay={0.15}>
          <div
            className="space-y-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {/* The short version */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                The Short Version
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Waura has no internet permission.</strong> It cannot send anything to us or to anyone else.
                </li>
                <li>
                  There is <strong style={{ color: "var(--text-primary)" }}>no account, no sign-up, no ads, no analytics</strong> and no crash reporting.
                </li>
                <li>
                  Waura reads <strong style={{ color: "var(--text-primary)" }}>only how long each app was open</strong>. It never reads messages, photos, or what you watch or post.
                </li>
                <li>
                  You can <strong style={{ color: "var(--text-primary)" }}>export or delete all of your Waura data at any time</strong> with a single tap.
                </li>
              </ul>
            </section>

            {/* What Waura uses on your phone */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                What Waura Uses on Your Phone
              </h2>
              <p className="mb-4">
                All data listed below is stored solely inside Waura&apos;s private on-device sandbox:
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>App usage time:</strong> With your permission (Android&apos;s usage access), Waura reads how long each app was in the foreground, to score your daily limits. It does not read any content inside apps.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>The apps you choose:</strong> The package identifiers/names of the apps you mark as limited, neutral or essential, and the specific daily limits you set.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Your focus sessions and scores:</strong> Session lengths and timestamps, daily scores, streaks and aura level progression.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Your settings:</strong> The display name you enter, notification preferences, quiet hours windows and user configurations.
                </li>
              </ul>
              <div
                className="mt-4 p-4 rounded-xl border text-sm"
                style={{
                  backgroundColor: "var(--brand-subtle)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                All of this is stored only on your phone, in Waura&apos;s private storage. It is not sent to NexBrothers or any third party, because the application cannot connect to the internet.
              </div>
            </section>

            {/* Permissions */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Permissions Waura Asks For
              </h2>
              <div className="space-y-3">
                <div
                  className="p-4 rounded-xl glass border"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Usage Access
                  </h3>
                  <p className="text-sm">
                    Required to determine how long chosen apps remain in the active foreground to calculate limit thresholds.
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl glass border"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Notifications
                  </h3>
                  <p className="text-sm">
                    Used strictly for 5-minute limit warnings, session completion reminders, and the optional morning recap.
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl glass border"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Exact Alarms
                  </h3>
                  <p className="text-sm">
                    Ensures focus session conclusions and limit alerts fire precisely on time rather than being batched or delayed by OS power management.
                  </p>
                </div>

                <div
                  className="p-4 rounded-xl glass border"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Run After Restart
                  </h3>
                  <p className="text-sm">
                    Allows alarms and scheduled local session reminders to be registered again after your device restarts.
                  </p>
                </div>
              </div>
            </section>

            {/* Backups and moving to a new phone */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Backups and Moving to a New Phone
              </h2>
              <p>
                Waura explicitly excludes its database and cache from Android cloud backups and from device-to-device transfers. If you migrate to a new phone, Waura starts completely fresh there. Your history never leaves the physical hardware it was generated on.
              </p>
            </section>

            {/* Notifications */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Notifications and Lock-Screen Privacy
              </h2>
              <p>
                If you permit notifications, they are generated entirely on your device. When your phone is locked, lock-screen notifications only state that something is ready; they never display app names, categories, or usage durations to bystanders.
              </p>
            </section>

            {/* Sharing */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Sharing
              </h2>
              <p>
                Waura never shares anything automatically. Data leaves your phone solely when you explicitly initiate an action: for instance, when tapping &ldquo;Export my data&rdquo; or sharing a milestone level-up badge, Android prompts you to choose which external app to send it to.
              </p>
            </section>

            {/* Google Play */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Google Play
              </h2>
              <p>
                If you install Waura from the Google Play Store, Google may collect telemetry or transactional metrics regarding the installation under Google&apos;s own privacy policy. Waura itself receives none of this data.
              </p>
            </section>

            {/* Your Choices */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Your Choices &amp; Data Control
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Turn usage access off:</strong> You can revoke Android usage access at any time in system Settings. Limits will immediately cease counting and will never penalize your aura.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Notification controls:</strong> Disable any notification channel in Waura&apos;s Profile or in Android system settings.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Export or delete:</strong> Use &ldquo;Export my data&rdquo; inside your profile to obtain a portable copy of your records, or choose &ldquo;Delete all data&rdquo; to permanently wipe everything. Uninstalling the app also completely removes all stored data.
                </li>
              </ul>
            </section>

            {/* Children */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Children&apos;s Privacy
              </h2>
              <p>
                Waura is designed and intended for individuals <strong style={{ color: "var(--text-primary)" }}>aged 16 and over</strong>. It is not directed at or targeted towards children.
              </p>
            </section>

            {/* Changes */}
            <section className="policy-section">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Changes to this Policy
              </h2>
              <p>
                If this policy is updated, the new version will be published on this URL with an updated effective date. Because we collect no contact information, we recommend checking this page periodically.
              </p>
            </section>

            {/* Contact */}
            <section
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Contact NexBrothers Privacy Team
              </h2>
              <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                If you have questions or inquiries regarding our privacy standards:
              </p>
              <a
                href="mailto:nexbrotherss@gmail.com"
                className="text-sm font-mono text-purple-600 dark:text-purple-400 hover:underline font-bold"
              >
                nexbrotherss@gmail.com
              </a>
            </section>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
