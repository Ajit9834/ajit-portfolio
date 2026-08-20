"use client";

import dynamic from "next/dynamic";
import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Dynamically import the WebGL canvas so it never runs during SSR.
const TubesBackground = dynamic(
  () => import("./TubesBackground").then((m) => m.TubesBackground),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 tubes-fallback"
      />
    ),
  },
);

/**
 * GlobalBackground mounts the threejs-components Tubes1 cursor effect once,
 * fixed behind every section on the page. It also adds a soft scrim /
 * vignette so all text and glass cards remain readable as the user scrolls,
 * plus a tiny "tap/click to randomize" hint.
 */
export function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themeKey = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <TubesBackground enableClickInteraction>
      {/* Theme-aware soft scrim / vignette to keep all sections readable.
          Pointer events disabled so it never intercepts clicks. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            themeKey === "light"
              ? // Light mode: bright top/bottom, subtle edges
                "linear-gradient(to bottom, color-mix(in oklab, #F8FAFC 35%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in oklab, #F8FAFC 55%, transparent) 100%), radial-gradient(120% 80% at 50% 50%, transparent 0%, color-mix(in oklab, #F8FAFC 25%, transparent) 85%)"
              : // Dark mode: keep hero open, slightly dim middle so cards pop
                "linear-gradient(to bottom, rgba(5,5,5,0.0) 0%, rgba(5,5,5,0.35) 30%, rgba(5,5,5,0.55) 60%, rgba(5,5,5,0.75) 100%), radial-gradient(120% 80% at 50% 50%, transparent 0%, rgba(5,5,5,0.35) 85%)",
        }}
      />

      {/* Subtle "click to randomize" hint — only visible briefly and on desktop */}
      <div className="pointer-events-none absolute bottom-4 right-4 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]/60">
        <MousePointer2 className="h-3.5 w-3.5" />
        <span>Click empty space to randomize</span>
      </div>
    </TubesBackground>
  );
}

export default GlobalBackground;
