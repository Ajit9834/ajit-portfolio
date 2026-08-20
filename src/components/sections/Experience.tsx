"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 — Present",
    description:
      "Designing and building modern web applications and AI-powered tools for startups and clients.",
    bullets: [
      "Built and shipped 15+ production web apps using Next.js, React and Node.js",
      "Integrated LLMs and RAG pipelines into client products for search, summarization, and agents",
      "Delivered pixel-perfect, accessible UIs with strong Core Web Vitals",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AI APIs"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "TechNova Labs",
    location: "Hyderabad, India",
    period: "2022 — 2023",
    description:
      "Worked on a SaaS analytics platform serving thousands of users, contributing to both frontend and backend.",
    bullets: [
      "Rebuilt the dashboard UI using React + TypeScript, reducing time-to-interactive by 38%",
      "Designed REST APIs in Node.js/Express with PostgreSQL and Redis caching",
      "Collaborated with design and product to ship 4 major feature releases",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Software Engineering Fellow",
    company: "Open Source Contributions",
    location: "Remote",
    period: "2021 — 2022",
    description:
      "Contributed to multiple open-source projects in the JavaScript/TypeScript ecosystem.",
    bullets: [
      "Merged PRs for DX tools, UI libraries, and documentation",
      "Collaborated with maintainers on bug fixes and feature proposals",
      "Built small community plugins used by hundreds of developers",
    ],
    tech: ["TypeScript", "JavaScript", "React", "Git", "CI/CD"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              A track record of <span className="text-gradient">shipping</span>
            </>
          }
          description="Roles where I've designed, built, and scaled production software."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 timeline-line opacity-40"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Node */}
                  <div
                    aria-hidden
                    className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--accent-purple)] shadow-[0_0_0_4px_var(--background),0_0_20px_var(--glow)] ring-2 ring-[var(--accent-purple)]"
                  />

                  {/* Mobile spacer */}
                  <div className="md:hidden h-4" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="glass-strong rounded-2xl p-6 hover:border-[var(--accent-purple)] transition-colors">
                      <div
                        className={`flex flex-wrap items-center gap-2 text-xs text-[var(--muted)] mb-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        {exp.role}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 text-sm mt-0.5 text-[var(--accent-purple)] font-medium">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        {exp.description}
                      </p>
                      <ul
                        className={`mt-3 space-y-1.5 text-sm text-[var(--muted)] ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {exp.bullets.map((b) => (
                          <li
                            key={b}
                            className={`flex gap-2 ${
                              isLeft ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
