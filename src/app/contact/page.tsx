"use client";

import { useState } from "react";
import { Container, Button, Input, Textarea, Select } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { Mail, MessageSquare, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "support@nexbrothers.com",
    description: "Drop us a line anytime",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Support",
    value: "support@nexbrothers.com",
    description: "For product-related queries",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Response time",
    value: "Within 24-48 hours",
    description: "We reply as soon as possible",
  },
];

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Product Support" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "general", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold mb-4" style={{ color: "var(--accent)" }}>
              Contact
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
              style={{ color: "var(--text-primary)" }}
            >
              Say hello, or ask us anything.
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <FadeIn className="lg:col-span-1">
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 rounded-[24px] p-6 border"
                    style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                        {info.title}
                      </h3>
                      <p className="text-sm mb-1 font-medium" style={{ color: "var(--accent)" }}>
                        {info.value}
                      </p>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.12} className="lg:col-span-2">
              <div
                className="rounded-[28px] p-8 border"
                style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: "rgba(30,157,91,0.12)" }}
                    >
                      <CheckCircle className="w-8 h-8" style={{ color: "var(--success)" }} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      Message sent
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        id="name"
                        label="Name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                      <Input
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </div>

                    <Select
                      id="subject"
                      label="Subject"
                      options={subjectOptions}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />

                    <Textarea
                      id="message"
                      label="Message"
                      placeholder="Tell us what's on your mind..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="min-h-[160px]"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                        We&apos;ll never share your information with anyone.
                      </p>
                      <Button type="submit" loading={isSubmitting} className="rounded-full shrink-0">
                        <Send className="mr-2 w-4 h-4" />
                        Send message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
