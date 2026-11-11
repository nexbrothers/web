import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { LAST_UPDATED, SUPPORT_EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "QuickHang terms of use",
  description: "Plain-English terms of use for the QuickHang Android app by NexBrothers.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage title="QuickHang terms of use" path="/terms-and-conditions" meta={<>Last updated: {LAST_UPDATED}</>}>
      <section>
        <h2>1. The short version</h2>
        <p>QuickHang is a free Android app by NexBrothers. By installing or using it you agree to these terms. If you do not agree, please uninstall it.</p>
      </section>
      <section>
        <h2>2. Provided as is</h2>
        <p>QuickHang is provided &ldquo;as is&rdquo;, without warranty of any kind beyond what the law requires. We do not promise that it will work on every device or be free of errors.</p>
      </section>
      <section>
        <h2>3. Personal use</h2>
        <p>You may use QuickHang for your own personal, non-commercial use. Please do not copy, resell, reverse-engineer or redistribute the app or its artwork.</p>
      </section>
      <section>
        <h2>4. Liability</h2>
        <p>To the extent the law allows, NexBrothers is not liable for any indirect or consequential loss arising from your use of QuickHang. Nothing in these terms limits any right you have that cannot be limited by law.</p>
      </section>
      <section>
        <h2>5. Updates and changes</h2>
        <p>We may update, change or discontinue QuickHang, and we may update these terms. The latest version is always on this page.</p>
      </section>
      <section>
        <h2>6. Governing law</h2>
        <p>These terms are governed by the laws of India.</p>
      </section>
      <section>
        <h2>7. Contact</h2>
        <p>Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
      </section>
    </LegalPage>
  );
}
