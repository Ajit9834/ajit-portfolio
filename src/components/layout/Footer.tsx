"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/BrandIcons";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Ajit Angad Zori.</span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <span>Built with</span>
          <Heart className="h-3.5 w-3.5 text-[var(--accent-pink)] fill-[var(--accent-pink)]" />
          <span>using Next.js & Three.js</span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] text-[var(--muted)] transition-all"
            >
              <Icon width={15} height={15} />
            </a>
          ))}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Scroll to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] text-[var(--muted)] transition-all"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
