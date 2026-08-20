"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Indian Institute of Technology",
    location: "India",
    period: "2020 — 2024",
    description:
      "Focused on software engineering, distributed systems, and AI. Graduated with distinction.",
    highlights: [
      "Core CS: Data Structures, Algorithms, OS, DBMS, Networks, Compilers",
      "Electives: Machine Learning, Cloud Computing, Human-Computer Interaction",
      "Led the university's web development club",
    ],
  },
  {
    degree: "Higher Secondary (Science)",
    school: "Delhi Public School",
    location: "India",
    period: "2018 — 2020",
    description:
      "Specialized in Computer Science, Mathematics, and Physics. Top of the class in CS.",
    highlights: [
      "Computer Science: 98/100",
      "Built multiple small web apps during high school",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-gradient">foundation</span>
            </>
          }
          description="Formal education and training in computer science and software engineering."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school + edu.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-7 hover:border-[var(--accent-cyan)] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 border border-[var(--border)] text-[var(--accent-cyan)]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent-purple)] mt-0.5">
                    {edu.school}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                {edu.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-[var(--muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
