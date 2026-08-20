"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Skill {
  name: string;
  level?: number;
}
interface Category {
  title: string;
  color: string; // css var name or hex
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    color: "var(--accent-purple)",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Three.js / R3F" },
      { name: "Redux" },
      { name: "HTML / CSS" },
    ],
  },
  {
    title: "Backend",
    color: "var(--accent-cyan)",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Java / Spring Boot" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    title: "Database",
    color: "var(--accent-pink)",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prisma" },
      { name: "Drizzle ORM" },
    ],
  },
  {
    title: "Programming Languages",
    color: "var(--accent-blue)",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Python" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "var(--accent-purple)",
    skills: [
      { name: "Git / GitHub" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Linux" },
      { name: "CI/CD" },
      { name: "Figma" },
    ],
  },
  {
    title: "AI & ML",
    color: "var(--accent-cyan)",
    skills: [
      { name: "OpenAI API" },
      { name: "LangChain" },
      { name: "RAG Pipelines" },
      { name: "Embeddings" },
      { name: "Vector Databases" },
      { name: "Prompt Engineering" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Tools I use to build <span className="text-gradient">great products</span>
            </>
          }
          description="A curated toolkit I've refined through shipping real projects — with deep expertise across the modern web stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 group hover:border-[color:var(--cat-color)] transition-colors relative overflow-hidden"
              style={{ ["--cat-color" as string]: cat.color }}
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: cat.color }}
              />
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: cat.color,
                    boxShadow: `0 0 12px ${cat.color}`,
                  }}
                />
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {cat.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s.name}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[color:var(--cat-color)] transition-colors cursor-default"
                  >
                    {s.name}
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
