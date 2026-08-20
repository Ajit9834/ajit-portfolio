"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code2, Palette, Rocket, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Type-safe, tested, and maintainable architecture that scales with your product.",
  },
  {
    icon: Palette,
    title: "Design Sense",
    desc: "An eye for typography, motion, and interaction that feels premium and deliberate.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Fast by default — optimized bundles, smart caching, and measurable Core Web Vitals.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Hands-on with LLMs, embeddings, RAG, and production-grade AI features.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Building <span className="text-gradient">thoughtful</span> software
              for the modern web
            </>
          }
          description="I'm a full-stack developer who enjoys the full product lifecycle — from ideation and design to shipping production code. I care equally about strong engineering and great user experience."
        />

        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass-strong rounded-3xl p-7 md:p-9"
          >
            <div className="prose prose-invert:false max-w-none leading-relaxed text-[var(--muted)] space-y-4 text-[15px] md:text-base">
              <p>
                Hi, I'm Ajit — a full-stack developer with a strong foundation in
                modern web technologies. I specialize in building performant web
                applications with <strong className="text-[var(--foreground)] font-semibold">React, Next.js, TypeScript, Node.js</strong>, and backend systems in Java and Python.
              </p>
              <p>
                I love turning complex problems into clean, elegant interfaces
                and reliable backend services. I'm especially interested in
                developer tools, AI-powered products, and experiences where
                motion and design help — rather than distract.
              </p>
              <p>
                When I'm not coding, I'm exploring new tools, contributing to
                side projects, or studying how great products are built.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {[
                { label: "Years building", value: "3+" },
                { label: "Projects shipped", value: "20+" },
                { label: "Tech stack", value: "Full-stack" },
                { label: "Focus", value: "Web + AI" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[var(--border)] p-4"
                >
                  <div className="text-2xl font-semibold text-gradient">
                    {s.value}
                  </div>
                  <div className="text-xs mt-1 text-[var(--muted)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="glass rounded-2xl p-5 hover:border-[var(--accent-purple)] transition-colors group"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-purple)]/20 to-[var(--accent-cyan)]/20 border border-[var(--border)] text-[var(--accent-purple)] mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">
                    {h.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
