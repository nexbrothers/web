"use client";

import { useState } from "react";
import { Container, Input } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { Trash2, AlertTriangle, CheckCircle, Mail } from "lucide-react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Playro Account Deletion Request");
    const body = encodeURIComponent(
      `Account Deletion Request\n\nEmail: ${email}\n\nReason: ${reason || "Not specified"}\n\n---\nSent from Playro Delete Account page`
    );

    window.location.href = `mailto:nexbrotherss@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(217,45,32,0.1)" }}>
              <Trash2 className="w-6 h-6" style={{ color: "var(--danger)" }} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
              Delete your Playro account
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              We&apos;re sorry to see you go. Submit your request below and we&apos;ll
              permanently delete your account and all associated data within 7 business days.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Warning + Form */}
      <section className="pb-24" style={{ backgroundColor: "var(--background)" }}>
        <Container className="max-w-2xl mx-auto">
          {/* Warning */}
          <FadeIn>
            <div className="p-6 mb-6 rounded-[24px] border" style={{ backgroundColor: "rgba(217,45,32,0.05)", borderColor: "rgba(217,45,32,0.25)" }}>
              <div className="flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--danger)" }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    This action is permanent and cannot be undone
                  </h3>
                  <ul className="space-y-1 text-sm list-disc list-inside" style={{ color: "var(--text-secondary)" }}>
                    <li>Your profile, teams, and match history will be deleted</li>
                    <li>You will be removed from all tournaments you joined</li>
                    <li>Any data associated with your account will be permanently removed</li>
                    <li>You will not be able to recover your account after deletion</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-[28px] border" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(30,157,91,0.12)" }}>
                    <CheckCircle className="w-7 h-7" style={{ color: "var(--success)" }} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    Request submitted
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                    Your email client should have opened with a pre-filled message. Please
                    send that email to complete your deletion request.
                  </p>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                    <Mail className="w-4 h-4" />
                    <span>nexbrotherss@gmail.com</span>
                  </div>
                  <p className="text-sm mt-4" style={{ color: "var(--text-muted)" }}>
                    We&apos;ll process your request within 7 business days and send a confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      Account deletion request
                    </h2>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Enter the email address associated with your Playro account.
                    </p>
                  </div>

                  <Input
                    id="email"
                    type="email"
                    label="Registered email address"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <div className="space-y-1.5">
                    <label htmlFor="reason" className="block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                      Reason for deletion <span style={{ color: "var(--text-muted)" }}>(optional)</span>
                    </label>
                    <textarea
                      id="reason"
                      placeholder="Help us improve by sharing why you're leaving..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={4}
                      className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-colors"
                      style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
                    style={{ backgroundColor: "var(--danger)", color: "#fff" }}
                  >
                    <Trash2 className="w-4 h-4" />
                    Submit deletion request
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    By submitting this request, you confirm you want to permanently delete your
                    account. We will process this within 7 business days.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Alternative */}
          <FadeIn delay={0.2}>
            <p className="text-center text-sm mt-6" style={{ color: "var(--text-muted)" }}>
              You can also email us directly at{" "}
              <a
                href="mailto:nexbrotherss@gmail.com?subject=Playro%20Account%20Deletion%20Request"
                className="underline"
                style={{ color: "var(--accent)" }}
              >
                nexbrotherss@gmail.com
              </a>{" "}
              with subject &quot;Playro Account Deletion Request&quot;.
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
