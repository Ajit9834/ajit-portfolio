"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string; // tailwind gradient classes
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Nexus AI Platform",
    description:
      "A full-stack AI assistant platform with RAG, streaming responses, and a plugin architecture. Built with Next.js, Python, LangChain and pgvector for embeddings.",
    tech: ["Next.js", "TypeScript", "Python", "LangChain", "PostgreSQL", "pgvector"],
    gradient: "from-purple-500 via-pink-500 to-cyan-500",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "DevFolio CMS",
    description:
      "Headless CMS tailored for developer portfolios. Custom block editor, real-time preview, image optimization, and MDX support.",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "MDX"],
    gradient: "from-violet-500 to-blue-500",
    github: "#",
    demo: "#",
  },
  {
    title: "TubeFlow",
    description:
      "A WebGL-powered interactive background library featuring cursor-reactive 3D neon tubes — the same effect used on this portfolio.",
    tech: ["React Three Fiber", "Three.js", "TypeScript", "GLSL"],
    gradient: "from-fuchsia-500 via-purple-500 to-cyan-400",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Pulse Analytics",
    description:
      "Real-time product analytics dashboard with customizable charts, anomaly detection, and server-sent event streams.",
    tech: ["React", "Node.js", "ClickHouse", "Redis", "WebSockets"],
    gradient: "from-cyan-500 to-blue-600",
    github: "#",
    demo: "#",
  },
  {
    title: "EduTrack LMS",
    description:
      "A learning management system for bootcamps with assignment grading, live sessions, and progress tracking.",
    tech: ["Next.js", "Java Spring Boot", "PostgreSQL", "WebRTC"],
    gradient: "from-pink-500 to-rose-500",
    github: "#",
    demo: "#",
  },
  {
    title: "SmartTasks",
    description:
      "AI-enhanced task manager that prioritizes your backlog and estimates completion time using historical data.",
    tech: ["React Native", "FastAPI", "OpenAI", "MongoDB"],
    gradient: "from-indigo-500 to-purple-500",
    github: "#",
    demo: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`group relative glass-strong rounded-3xl overflow-hidden hover:border-[var(--accent-purple)] transition-all flex flex-col ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Gradient header */}
      <div className="relative h-44 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0%, transparent 35%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25) 0%, transparent 40%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FolderGit2 className="h-14 w-14 text-white/80 drop-shadow-lg group-hover:scale-110 transition-transform" />
        </div>
        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white border border-white/20">
            Featured
          </span>
        )}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur text-white hover:bg-black/60 transition"
            >
              <GithubIcon width={14} height={14} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur text-white hover:bg-black/60 transition"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] flex-1">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Selected <span className="text-gradient">work</span>
            </>
          }
          description="A handful of projects I'm proud of — from AI platforms to design systems and interactive web experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
