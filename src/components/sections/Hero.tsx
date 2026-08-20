"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15, duration: 0.5 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden flex items-center"
    >
      {/* No local WebGL here — the global fixed TubesBackground covers every
          section, including the hero. We just add a soft radial highlight
          to make the headline pop against the tubes. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, color-mix(in oklab, var(--accent-purple) 18%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.a
            variants={item}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-8 hover:border-[var(--accent-purple)] transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[var(--muted)]">Available for new opportunities</span>
            <Sparkles className="h-3 w-3 text-[var(--accent-purple)]" />
          </motion.a>

          <motion.h1
            variants={item}
            className="text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
          >
            <span className="block text-[var(--foreground)]">Ajit Angad</span>
            <span className="block text-gradient">Zori</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-2 text-[clamp(1.1rem,2.2vw,1.35rem)] font-medium text-[var(--muted)]"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--muted)]"
          >
            I build modern, scalable web applications using React, Next.js,
            Node.js, Java, Python, and AI technologies — focused on clean
            architecture, delightful UX, and measurable performance.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary group"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-secondary"
            >
              Contact Me
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-secondary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
              { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Mail, label: "Email", href: "mailto:hello@ajit.dev" },
            ].map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] transition-all text-[var(--muted)]"
              >
                <Icon width={18} height={18} />
              </Link>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-2 text-xs text-[var(--muted)]"
          >
            <span className="inline-block h-px w-10 bg-[var(--border-strong)]" />
            <span className="uppercase tracking-[0.25em]">Scroll to explore</span>
            <span className="inline-block h-px w-10 bg-[var(--border-strong)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
