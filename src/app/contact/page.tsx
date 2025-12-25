"use client";

import { useState } from "react";
import { Container, Button, Input, Textarea, Select, Card } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { Mail, MessageSquare, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "contact@nexbrothers.com",
    description: "Drop us a line anytime",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Support",
    value: "support@nexbrothers.com",
    description: "For product-related queries",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Response Time",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "general", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "var(--background)" }}
        />
        <div 
          className="absolute top-0 right-1/3 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p 
              className="text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Have a question, feedback, or just want to say hello? We&apos;d
              love to hear from you. Fill out the form below and we&apos;ll get
              back to you as soon as possible.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <FadeIn className="lg:col-span-1">
              <div className="space-y-6">
                <h2 
                  className="text-2xl font-bold mb-8"
                  style={{ color: "var(--text-primary)" }}
                >
                  Contact Information
                </h2>
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6" hover={false}>
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ 
                          background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                          opacity: 0.9 
                        }}
                      >
                        <div style={{ color: "white" }}>{info.icon}</div>
                      </div>
                      <div>
                        <h3 
                          className="font-medium mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {info.title}
                        </h3>
                        <p 
                          className="text-sm mb-1"
                          style={{ color: "var(--accent)" }}
                        >
                          {info.value}
                        </p>
                        <p 
                          className="text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <Card className="p-8" hover={false}>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Thank you for reaching out. We&apos;ll get back to you
                      soon.
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
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                      />
                      <Input
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Select
                      id="subject"
                      label="Subject"
                      options={subjectOptions}
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                    />

                    <Textarea
                      id="message"
                      label="Message"
                      placeholder="Tell us what's on your mind..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      className="min-h-[160px]"
                    />

                    <div className="flex items-center justify-between">
                      <p 
                        className="text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        We&apos;ll never share your information with anyone.
                      </p>
                      <Button type="submit" loading={isSubmitting}>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
