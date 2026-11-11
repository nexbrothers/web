import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { EFFECTIVE_DATE, LAST_UPDATED, SUPPORT_EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "QuickHang privacy policy | No data collected",
  description: "QuickHang does not collect, transmit, share or sell personal data. No account, no ads, no analytics and no internet access.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="QuickHang privacy policy"
      path="/privacy-policy"
      meta={<>Effective: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED} · Published by NexBrothers</>}
    >
      <section>
        <h2>1. Summary</h2>
        <p>
          <strong>QuickHang does not collect, transmit, share or sell personal data.</strong> It has no account, no ads, no analytics and no internet access.
        </p>
      </section>

      <section>
        <h2>2. What stays on your phone</h2>
        <p>
          Your choices (which apps are in your dock and their order, your character and look, and your gesture settings) are saved only on your device. Uninstalling QuickHang deletes them. They are excluded from Android cloud backup and device transfer.
        </p>
      </section>

      <section>
        <h2>3. Installed apps</h2>
        <p>
          To let you pick shortcuts, QuickHang reads the list of apps on your phone that can be opened from the launcher and shows their names and icons. This stays on your device and is never sent anywhere.
        </p>
      </section>

      <section>
        <h2>4. Permissions</h2>
        <ul>
          <li><strong>Display over other apps:</strong> shows the character on screen, on top of other apps.</li>
          <li><strong>Notifications:</strong> shows a status notification with Pause and Turn off actions.</li>
          <li><strong>Run at startup:</strong> brings the character back after a restart if it was on.</li>
          <li><strong>Foreground service:</strong> keeps the character visible while you have it turned on.</li>
          <li><strong>Motion sensors (accelerometer, gravity, gyroscope):</strong> readings are used live to swing the character and are never stored.</li>
        </ul>
        <p className="mt-4">
          QuickHang can switch on the flashlight or open your camera app as a quick action. It does not take photos or use the camera itself. It never reads, captures or records your screen, keystrokes or notifications.
        </p>
      </section>

      <section>
        <h2>5. Diagnostics you choose to share</h2>
        <p>
          Help → Share diagnostics creates a short text (Android version, phone model, whether permissions are on, and simple counters). Nothing is sent automatically. You decide whether and where to send it.
        </p>
      </section>

      <section>
        <h2>6. Third parties</h2>
        <p>
          None. QuickHang contains no advertising, analytics or crash-reporting SDKs. Opening an app from your dock simply starts that app, and that app&apos;s own privacy policy applies to it.
        </p>
      </section>

      <section>
        <h2>7. Children</h2>
        <p>
          QuickHang is not directed at children under 13 and does not knowingly collect data from anyone.
        </p>
      </section>

      <section>
        <h2>8. Your rights</h2>
        <p>
          Because no personal data is collected or held by us, there is nothing to access, correct or delete on our side. You can remove all local data by clearing the app&apos;s storage or uninstalling it.
        </p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>Your data stays on your device under Android&apos;s app sandbox.</p>
      </section>

      <section>
        <h2>10. Changes</h2>
        <p>Updates are posted on this page with a new date.</p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Questions about this policy? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
