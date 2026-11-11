import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalPage } from "../../components/legal-page";
import { SUPPORT_EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "QuickHang support | Help and contact",
  description: "Get help with QuickHang: fix a disappearing character, turn on the overlay permission, and contact the developer.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <LegalPage title="QuickHang support" path="/support">
      <section>
        <h2>Contact us</h2>
        <p>Something not working? Email us and we will help.</p>
        <p className="mt-4">
          <a href={`mailto:${SUPPORT_EMAIL}?subject=QuickHang%20support`} className="qh-btn qh-btn-primary !no-underline" style={{ color: "#1e1b18" }}>
            <Mail className="h-5 w-5" aria-hidden="true" /> {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="mt-4">Tip: in the app, Help → Share diagnostics makes a short text (Android version, phone model, permission status) you can paste into your email. Nothing is sent automatically.</p>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li><strong>The character disappears after a restart.</strong> Make sure QuickHang was turned on before you restarted, and that &ldquo;Run at startup&rdquo; is allowed. Some phones also stop apps from starting on their own, so check the battery and autostart settings for QuickHang.</li>
          <li><strong>He never appears (overlay permission).</strong> Open Android Settings → Apps → QuickHang → &ldquo;Display over other apps&rdquo; and turn it on. On some phones this is under Special app access.</li>
          <li><strong>The app is paused.</strong> Open the QuickHang notification and tap Resume, or open the app and turn him back on. &ldquo;Turn off&rdquo; in the notification stops him completely.</li>
          <li><strong>Battery restrictions.</strong> If your phone closes QuickHang in the background, set its battery use to Unrestricted (or &ldquo;Don&apos;t optimise&rdquo;) in Settings → Apps → QuickHang → Battery.</li>
        </ul>
      </section>

      <section>
        <h2>How to delete your data</h2>
        <p>Uninstall QuickHang and everything is removed. Nothing is stored anywhere else, because QuickHang has no account and no internet access. You can also clear data in Android Settings → Apps → QuickHang → Storage → Clear data.</p>
      </section>
    </LegalPage>
  );
}
