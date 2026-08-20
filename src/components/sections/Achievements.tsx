"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, Trophy, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner — CodeSprint 2023",
    description:
      "Won first place out of 200+ teams for building an AI-powered code review assistant in 36 hours.",
    tag: "1st Place",
    color: "var(--accent-pink)",
  },
  {
    icon: Award,
    title: "Google Cloud Skills Boost",
    description:
      "Completed the Professional Cloud Developer path with hands-on labs on GCP services and deployment.",
    tag: "Certification",
    color: "var(--accent-cyan)",
  },
  {
    icon: Medal,
    title: "Meta Frontend Developer Specialization",
    description:
      "Completed the comprehensive React and frontend specialization on Coursera with a 98% score.",
    tag: "Specialization",
    color: "var(--accent-purple)",
  },
  {
    icon: Star,
    title: "Top 1% GitHub Contributor (University)",
    description:
      "Recognized among the top student contributors for consistent open-source work during the academic year.",
    tag: "Open Source",
    color: "var(--accent-blue)",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Achievements"
          title={
            <>
              Recognition & <span className="text-gradient">milestones</span>
            </>
          }
          description="Awards, certifications, and moments I'm proud of along the journey."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex gap-4 hover:border-[color:var(--a-color)] transition-colors group relative overflow-hidden"
                style={{ ["--a-color" as string]: a.color }}
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: a.color }}
                />
                <div
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)]"
                  style={{
                    background: `linear-gradient(135deg, ${a.color}30, ${a.color}10)`,
                    color: a.color,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3 className="font-semibold text-[var(--foreground)] leading-tight">
                      {a.title}
                    </h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-medium border"
                      style={{
                        borderColor: a.color + "50",
                        color: a.color,
                        background: a.color + "12",
                      }}
                    >
                      {a.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {a.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
