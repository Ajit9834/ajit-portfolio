"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTheme } from "next-themes";
import { darkTubes, lightTubes, type TubesConfig } from "./tubesConfig";

// ---- Reference threejs-components tubes1 cursor types ----
type TubesAppLike = {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
  dispose: () => void;
};

type TubesFactory = (
  canvas: HTMLCanvasElement,
  options?: {
    bloom?: { threshold?: number; strength?: number; radius?: number };
    tubes?: {
      colors?: string[];
      lights?: { intensity?: number; colors?: string[] };
    };
    sleepRadiusX?: number;
    sleepRadiusY?: number;
    sleepTimeScale1?: number;
    sleepTimeScale2?: number;
  },
) => TubesAppLike;

function randomColors(count: number) {
  return new Array(count)
    .fill(0)
    .map(
      () =>
        "#" +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, "0"),
    );
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext("webgl2") ||
        c.getContext("webgl") ||
        c.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export interface TubesBackgroundProps {
  children?: ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<TubesAppLike | null>(null);
  const factoryRef = useRef<TubesFactory | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mount detection
  useEffect(() => {
    setMounted(true);
    setHasWebGL(detectWebGL());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Load factory + initialize app once on mount
  useEffect(() => {
    if (!mounted || !hasWebGL || !canvasRef.current) return;
    let cancelled = false;

    const init = async () => {
      try {
        // Dynamic import keeps this server-safe and out of the initial JS for
        // pages that don't render the background.
        const mod = await import(
          /* webpackIgnore: false */
          // @ts-expect-error - no types for the bundled cursor build
          "threejs-components/build/cursors/tubes1.min.js"
        );
        const factory = mod.default as TubesFactory;
        factoryRef.current = factory;
        if (cancelled || !canvasRef.current) return;

        const isDark = resolvedTheme !== "light";
        const cfg = isDark ? darkTubes : lightTubes;

        const app = factory(canvasRef.current, {
          bloom: {
            threshold: 0,
            strength: prefersReducedMotion ? cfg.bloomStrength * 0.5 : cfg.bloomStrength,
            radius: 0.5,
          },
          tubes: {
            colors: [...cfg.colors],
            lights: {
              intensity: cfg.lightIntensity,
              colors: [...cfg.lights],
            },
          },
        });
        appRef.current = app;
      } catch (err) {
        console.error("Failed to initialize tubes background:", err);
        if (!cancelled) setHasWebGL(false);
      }
    };

    init();

    return () => {
      cancelled = true;
      try {
        appRef.current?.dispose?.();
      } catch {
        /* ignore */
      }
      appRef.current = null;
      factoryRef.current = null;
    };
    // We intentionally run this once on mount. Theme changes are handled in
    // the next effect to avoid tearing down/recreating the WebGL context.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, hasWebGL]);

  // Update colors live when theme changes (no page reload, no scene rebuild)
  useEffect(() => {
    const app = appRef.current;
    if (!app) return;
    const isDark = resolvedTheme !== "light";
    const cfg: TubesConfig = isDark ? darkTubes : lightTubes;
    try {
      app.tubes.setColors([...cfg.colors]);
      app.tubes.setLightsColors([...cfg.lights]);
      // Note: the tubes1 build does not expose a live setter for bloom strength
      // or light intensity. The palette swap alone is enough to convey a
    } catch {
      /* ignore */
    }
  }, [resolvedTheme]);

  // Click to randomize — attached to window, but ignored when the click
  // originates from any interactive element so that buttons/links/forms do
  // not accidentally trigger randomization.
  useEffect(() => {
    if (!enableClickInteraction) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          "a, button, input, textarea, select, label, summary, [role='button'], [role='link'], [contenteditable='true']",
        )
      ) {
        return;
      }
      // Also ignore clicks inside sections' glass cards — only on the
      // background "empty" areas.
      const app = appRef.current;
      if (!app) return;
      try {
        app.tubes.setColors(randomColors(3));
        app.tubes.setLightsColors(randomColors(4));
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [enableClickInteraction]);

  const themeKey = mounted && resolvedTheme === "light" ? "light" : "dark";
  const cfg = themeKey === "light" ? lightTubes : darkTubes;

  return (
    <div
      aria-hidden="false"
      className={
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden " +
        (className ?? "")
      }
    >
      {/* Solid theme-colored layer behind the canvas so the alpha
          canvas blends into the correct base color per theme. */}
      <div
        className="absolute inset-0"
        style={{ background: themeKey === "light" ? "#f8fafc" : "#050505" }}
      />

      {mounted && hasWebGL ? (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          role="presentation"
          className="absolute inset-0 block h-full w-full"
          style={{ touchAction: "none" }}
        />
      ) : (
        <div className="pointer-events-none absolute inset-0 tubes-fallback">
          <div
            className="orb"
            style={{
              top: "15%",
              left: "10%",
              width: 360,
              height: 360,
              background: cfg.colors[0],
              opacity: themeKey === "light" ? 0.18 : 0.5,
            }}
          />
          <div
            className="orb"
            style={{
              bottom: "5%",
              right: "5%",
              width: 420,
              height: 420,
              background: cfg.colors[2],
              opacity: themeKey === "light" ? 0.16 : 0.45,
              animationDelay: "-6s",
            }}
          />
          <div
            className="orb"
            style={{
              top: "50%",
              left: "55%",
              width: 300,
              height: 300,
              background: cfg.colors[1],
              opacity: themeKey === "light" ? 0.14 : 0.35,
              animationDelay: "-12s",
            }}
          />
        </div>
      )}

      {children}
    </div>
  );
}

export default TubesBackground;
