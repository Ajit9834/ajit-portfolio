"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/BrandIcons";

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { label: "Twitter / X", icon: TwitterIcon, href: "https://twitter.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">amazing</span> together
            </>
          }
          description="I'm currently open to full-time roles, freelance projects, and interesting collaborations. The fastest way to reach me is via email."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-30"
            style={{ background: "var(--accent-purple)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--accent-cyan)" }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                Ready to talk?
              </h3>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                Whether you're a recruiter, founder, or fellow developer — I'd
                love to hear from you. I typically respond within 24 hours.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:hello@ajit.dev"
                  className="flex items-center gap-3 text-[var(--foreground)] group"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full glass group-hover:border-[var(--accent-purple)] transition">
                    <Mail className="h-4 w-4 text-[var(--accent-purple)]" />
                  </span>
                  <span className="group-hover:text-gradient transition">
                    hello@ajit.dev
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--muted)] group-hover:text-[var(--accent-purple)] transition" />
                </a>
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full glass">
                    <MapPin className="h-4 w-4 text-[var(--accent-cyan)]" />
                  </span>
                  <span>India · Open to remote worldwide</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full glass hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] text-[var(--muted)] transition-all"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Lightweight client-only contact handler (no backend for template)
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Portfolio contact from ${data.get("name") ?? ""}`,
                );
                const body = encodeURIComponent(
                  `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${(data.get("email") ?? "") as string})`,
                );
                window.location.href = `mailto:hello@ajit.dev?subject=${subject}&body=${body}`;
              }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent-purple)] focus:ring-2 focus:ring-[var(--ring)] transition placeholder:text-[var(--muted)]"
                />
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent-purple)] focus:ring-2 focus:ring-[var(--ring)] transition placeholder:text-[var(--muted)]"
                />
              </div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, role, or idea..."
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent-purple)] focus:ring-2 focus:ring-[var(--ring)] transition placeholder:text-[var(--muted)] resize-none"
              />
              <button type="submit" className="btn btn-primary w-full justify-center">
                <Send className="h-4 w-4" />
                Send Message
              </button>
              <p className="text-[11px] text-[var(--muted)] text-center">
                This form opens your email client — no information is stored.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
