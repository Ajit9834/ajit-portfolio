"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="h-9 w-9 rounded-full glass"
      />
    );
  }

  const current = theme === "system" ? "system" : resolvedTheme;

  const cycle = () => {
    const order = ["light", "dark", "system"] as const;
    const idx = order.indexOf((theme as (typeof order)[number]) ?? "system");
    const next = order[(idx + 1) % order.length];
    setTheme(next);
  };

  return (
    <div className="relative">
      <button
        aria-label={`Theme: ${current}. Click to change.`}
        onClick={cycle}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:border-[var(--accent-purple)] transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ y: -6, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 6, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute"
          >
            {current === "dark" ? (
              <Moon className="h-4 w-4 text-[var(--accent-cyan)]" />
            ) : current === "light" ? (
              <Sun className="h-4 w-4 text-[var(--accent-purple)]" />
            ) : (
              <Monitor className="h-4 w-4 text-[var(--muted)]" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-11 z-50 min-w-[140px] rounded-xl glass-strong p-1.5 shadow-xl"
          >
            {(
              [
                { key: "light", label: "Light", icon: Sun },
                { key: "dark", label: "Dark", icon: Moon },
                { key: "system", label: "System", icon: Monitor },
              ] as const
            ).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                  theme === key
                    ? "bg-[var(--surface-strong)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
