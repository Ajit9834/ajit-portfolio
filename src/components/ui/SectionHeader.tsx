"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium tracking-wide text-[var(--muted)] mb-4 ${
            align === "center" ? "" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-purple)] shadow-[0_0_10px_var(--glow)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight leading-tight text-[var(--foreground)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
