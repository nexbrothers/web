import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { ShieldCheck, WifiOff, Eye, Smartphone } from "lucide-react";

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
    title: "2. No Data Collection — Truly Offline",
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
    title: "5. SMS Permissions — On-Device Only",
    content: (
      <>
        <p>
          The App requests the following Android permissions solely to help you automatically
          track financial transactions from SMS messages:
        </p>
        <ul>
          <li><strong>READ_SMS</strong> — to read financial transaction SMS messages</li>
          <li><strong>RECEIVE_SMS</strong> — to receive and process incoming financial SMS messages</li>
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
            SMS message content <strong>never leaves your device</strong> — it is not
            transmitted to us or any third party.
          </li>
          <li>
            The App only reads messages that contain financial transaction information; it does
            not read personal or non-financial messages unnecessarily.
          </li>
          <li>
            You can revoke SMS permissions at any time via{" "}
            <strong>Android Settings → Apps → My Money Report → Permissions</strong>.
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
    title: "7. Network Access — Font Downloads Only",
    content: (
      <>
        <p>
          The App makes exactly <strong>one type</strong> of network request: downloading the
          Outfit font family from Google Fonts CDN for UI rendering. This is a one-time download of
          publicly available font files.
        </p>
        <ul>
          <li><strong>No user data</strong> is transmitted during this process.</li>
          <li>The download is initiated by your device and contains only standard HTTP headers.</li>
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
          information, please contact us.
        </p>
      </>
    ),
  },
  {
    title: "9. Your Control — Data Deletion",
    content: (
      <>
        <p>
          Since all data is stored locally on your device, you have full control over it. To
          delete all your data, you can:
        </p>
        <ul>
          <li>
            <strong>Clear app data:</strong> Android Settings → Apps → My Money Report
            → Storage → Clear Data
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
          device (screen lock, encryption, etc.) protects your data.
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
          effective immediately upon posting.
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
          <p><strong>Email:</strong> support@nexbrothers.com</p>
          <p><strong>Company:</strong> NexBrothers</p>
          <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
        </div>
      </>
    ),
  },
];

export default function MyMoneyReportPrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#5844EE" }}>
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(88, 68, 238, 0.15)", color: "#5844EE" }}
              >
                My Money Report
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Effective date: July 4, 2026
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              {/* Privacy Promise */}
              <div
                className="rounded-2xl p-8 mb-12"
                style={{
                  backgroundColor: "var(--background-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5844EE, #7C3AED)" }}>
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      Our Privacy Promise
                    </h2>
                    <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      My Money Report operates entirely on your device. We never have access to your
                      financial data, SMS content, budgets, or goals. There is no account system, no
                      cloud sync, and no data collection. Your financial data stays on your device — period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="policy-content">
                {sections.map((section, index) => (
                  <div key={index} className="policy-section">
                    <h2>{section.title}</h2>
                    {section.content}
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-6 mt-10 flex gap-4 items-start"
                style={{
                  backgroundColor: "rgba(88, 68, 238, 0.05)",
                  border: "1px solid rgba(88, 68, 238, 0.15)",
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <WifiOff className="w-5 h-5" style={{ color: "#5844EE" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Fully Offline Finance
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    My Money Report does not require internet access. Your financial data, SMS
                    transactions, budgets, and goals never leave your device. No accounts, no cloud,
                    no tracking.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
