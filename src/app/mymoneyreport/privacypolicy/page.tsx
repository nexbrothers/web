import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";

export const metadata: Metadata = {
  title: "Privacy Policy - My Money Report",
  description:
    "Privacy Policy for My Money Report - a 100% offline expense tracking app. Your financial data never leaves your device.",
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          NexBrothers (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the My Money Report
          mobile application (the &quot;App&quot;). This Privacy Policy explains how we handle your
          information when you use our App. We take your privacy seriously and have designed the
          App to be <strong>100% offline</strong> &mdash; meaning your financial data never leaves
          your device.
        </p>
        <p>
          By using the App, you agree to the practices described in this policy. If you do not
          agree, please do not use the App.
        </p>
      </>
    ),
  },
  {
    title: "2. No Data Collection &mdash; Truly Offline",
    content: (
      <>
        <p>
          My Money Report is a <strong>fully offline application</strong>. All data you enter or
          import is stored exclusively on your device using local SQLite databases and
          SharedPreferences. We do <strong>not</strong> collect, transmit, or share any of the
          following:
        </p>
        <ul>
          <li>Personal information (name, email address, phone number, physical address)</li>
          <li>Device identifiers (IMEI, Android ID, MAC address, serial number)</li>
          <li>Location data (GPS or network-based)</li>
          <li>Usage analytics or crash reports</li>
          <li>Advertising ID (AAID / IDFA)</li>
          <li>Contact lists or address book data</li>
          <li>Biometric data</li>
          <li>Any other personally identifiable information</li>
        </ul>
        <div className="highlight-box">
          <p>
            <strong>Key fact:</strong> There are no servers, no cloud storage, and no backend.
            Your data stays on your phone. Period.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "3. No Third-Party SDKs",
    content: (
      <>
        <p>
          The App does <strong>not</strong> integrate any third-party software development kits
          (SDKs) that could collect or process your data. Specifically, we do{" "}
          <strong>not</strong> use:
        </p>
        <ul>
          <li>Firebase (including Firebase Analytics, Crashlytics, Cloud Messaging, or any Firebase service)</li>
          <li>Google Analytics</li>
          <li>Advertising SDKs (AdMob, Meta Audience Network, etc.)</li>
          <li>Analytics SDKs (Mixpanel, Amplitude, Segment, etc.)</li>
          <li>Crash reporting SDKs (Sentry, Bugsnag, etc.)</li>
          <li>Social media SDKs (Facebook, Twitter, Google Sign-In, etc.)</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. No User Accounts",
    content: (
      <>
        <p>
          The App has <strong>no login, signup, registration, or authentication system</strong>.
          There are no user profiles, no passwords to manage, and no account data stored
          anywhere. Simply install and start using the App immediately.
        </p>
      </>
    ),
  },
  {
    title: "5. SMS Permissions &mdash; On-Device Only",
    content: (
      <>
        <p>
          The App requests the following Android permissions solely to help you automatically
          track financial transactions from SMS messages:
        </p>
        <ul>
          <li><strong>READ_SMS</strong> &mdash; to read financial transaction SMS messages</li>
          <li><strong>RECEIVE_SMS</strong> &mdash; to receive and process incoming financial SMS messages</li>
        </ul>
        <p>Here is exactly how these permissions work:</p>
        <ul>
          <li>
            SMS content is parsed <strong>entirely on your device</strong> using local regex
            patterns to identify bank debits, credits, and other financial transactions.
          </li>
          <li>
            Extracted transaction data is stored <strong>only in your device&apos;s local SQLite
            database</strong>.
          </li>
          <li>
            SMS message content <strong>never leaves your device</strong> &mdash; it is not
            transmitted to us or any third party.
          </li>
          <li>
            The App only reads messages that contain financial transaction information; it does
            not read personal or non-financial messages unnecessarily.
          </li>
          <li>
            You can revoke SMS permissions at any time via{" "}
            <strong>Android Settings &rarr; Apps &rarr; My Money Report &rarr; Permissions</strong>.
          </li>
          <li>
            If you prefer, you can enter all transactions manually without granting SMS
            permissions.
          </li>
        </ul>
        <div className="highlight-box">
          <p>
            <strong>Your privacy is protected:</strong> SMS data is processed locally and never
            transmitted. No financial SMS content is ever sent to any server.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "6. Financial Data You Enter or Import",
    content: (
      <>
        <p>
          The App allows you to manage your personal financial information, including:
        </p>
        <ul>
          <li>Transaction amounts, categories, dates, and descriptions</li>
          <li>Bank or account names and the last four digits of account numbers</li>
          <li>Budget limits and financial goals</li>
          <li>Recurring transaction templates</li>
        </ul>
        <p>
          This information is stored <strong>exclusively on your device</strong> in a local
          SQLite database. We do <strong>not</strong> have access to this data, nor can we
          retrieve it. You are solely responsible for backing up or exporting your data as
          needed.
        </p>
      </>
    ),
  },
  {
    title: "7. Network Access &mdash; Font Downloads Only",
    content: (
      <>
        <p>
          The App makes exactly <strong>one type</strong> of network request: downloading the
          Inter font family from Google Fonts CDN (<code>fonts.googleapis.com</code> and{" "}
          <code>fonts.gstatic.com</code>) for UI rendering. This is a one-time download of
          publicly available font files.
        </p>
        <ul>
          <li>
            <strong>No user data</strong> is transmitted during this process.
          </li>
          <li>
            The download is initiated by your device and contains only standard HTTP headers.
          </li>
          <li>
            This interaction is subject to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>.
          </li>
          <li>No other network requests are made by the App.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. No Children Under 13",
    content: (
      <>
        <p>
          The App is not directed at children under the age of 13. We do not knowingly collect
          any information from children. If you believe a child has provided us with personal
          information, please contact us, and we will take steps to delete such information
          (though, as explained above, we do not collect personal information from any user).
        </p>
      </>
    ),
  },
  {
    title: "9. Your Control &mdash; Data Deletion",
    content: (
      <>
        <p>
          Since all data is stored locally on your device, you have full control over it. To
          delete all your data, you can:
        </p>
        <ul>
          <li>
            <strong>Clear app data:</strong> Android Settings &rarr; Apps &rarr; My Money Report
            &rarr; Storage &rarr; Clear Data
          </li>
          <li>
            <strong>Uninstall</strong> the App entirely
          </li>
        </ul>
        <p>
          Both methods permanently delete all locally stored financial data, SMS transaction
          records, preferences, and settings. We cannot recover this data, as we never had access
          to it.
        </p>
      </>
    ),
  },
  {
    title: "10. Data Security",
    content: (
      <>
        <p>
          Your data is stored in a local SQLite database on your device&apos;s internal storage.
          Because the App has <strong>no server component</strong>, your data is not at risk of
          server-side breaches, hacking, or unauthorized remote access. The security of your
          device (screen lock, encryption, etc.) protects your data. We recommend using your
          device&apos;s built-in security features.
        </p>
      </>
    ),
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. If we make changes, we will notify
          you via an in-app notification the next time you update the App. Changes become
          effective immediately upon posting. We encourage you to review this policy periodically.
          The &quot;Last updated&quot; date at the top of this page indicates when the policy was
          last revised.
        </p>
      </>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy, please
          contact us:
        </p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@nexbrothers.com">privacy@nexbrothers.com</a>
          </p>
          <p>
            <strong>Company:</strong> NexBrothers
          </p>
          <p>
            <strong>Address:</strong> Mumbai, Maharashtra, India
          </p>
        </div>
      </>
    ),
  },
];

export default function MyMoneyReportPrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#3d0cde" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(61, 12, 222, 0.15)", color: "#3d0cde" }}>
                My Money Report
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Effective date: July 4, 2026
            </p>
          </FadeIn>
        </Container>
      </section>

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
            <div className="max-w-3xl">
              <p
                className="text-sm mb-10 pb-4"
                style={{
                  color: "var(--text-muted)",
                  borderBottom: "1px solid var(--border)",
                  textAlign: "right",
                }}
              >
                Last updated: July 4, 2026
              </p>

              <div className="policy-content">
                {sections.map((section, index) => (
                  <div key={index} className="policy-section">
                    <h2>{section.title}</h2>
                    {section.content}
                  </div>
                ))}
              </div>

              <div
                className="mt-16 pt-8 text-center text-sm"
                style={{
                  color: "var(--text-muted)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                &copy; 2026 NexBrothers. All rights reserved.
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
