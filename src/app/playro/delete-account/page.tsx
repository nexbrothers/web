"use client";

import { useState } from "react";
import { Container, Button, Input, Card } from "@/components/ui";
import { FadeIn } from "@/components/animations";
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
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div
          className="absolute top-0 right-1/3 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
        />
        <Container className="relative z-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-red-500/10">
              <Trash2 className="w-8 h-8 text-red-500" />
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Delete Your <span className="gradient-text">Playro Account</span>
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              We&apos;re sorry to see you go. Submit your request below and we&apos;ll
              permanently delete your account and all associated data within 7 business days.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Warning + Form */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))",
          }}
        />
        <Container className="relative z-10 max-w-2xl mx-auto">
          {/* Warning */}
          <FadeIn>
            <Card className="p-6 mb-8 border border-red-500/20" hover={false}>
              <div className="flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    This action is permanent and cannot be undone
                  </h3>
                  <ul className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li>• Your profile, teams, and match history will be deleted</li>
                    <li>• You will be removed from all tournaments you joined</li>
                    <li>• Any data associated with your account will be permanently removed</li>
                    <li>• You will not be able to recover your account after deletion</li>
                  </ul>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <Card className="p-8" hover={false}>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Request Submitted
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                    Your email client should have opened with a pre-filled message.
                    Please send that email to complete your deletion request.
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
                    <h2
                      className="text-xl font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Account Deletion Request
                    </h2>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Enter the email address associated with your Playro account.
                    </p>
                  </div>

                  <Input
                    id="email"
                    type="email"
                    label="Registered Email Address"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <div className="space-y-1.5">
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Reason for deletion{" "}
                      <span style={{ color: "var(--text-muted)" }}>(optional)</span>
                    </label>
                    <textarea
                      id="reason"
                      placeholder="Help us improve by sharing why you're leaving..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={4}
                      className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-colors"
                      style={{
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <Trash2 className="mr-2 w-4 h-4" />
                    Submit Deletion Request
                  </Button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    By submitting this request, you confirm you want to permanently delete your
                    account. We will process this within 7 business days.
                  </p>
                </form>
              )}
            </Card>
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
