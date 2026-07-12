"use client";

import { useEffect, useRef } from "react";

const ORBS = [
  {
    layer: 0,
    className:
      "left-[-8%] top-[8%] h-[420px] w-[420px] bg-[radial-gradient(circle,var(--color-glow-purple)_0%,transparent_70%)] opacity-[0.35]",
  },
  {
    layer: 1,
    className:
      "right-[-5%] top-[22%] h-[360px] w-[360px] bg-[radial-gradient(circle,var(--color-glow-cyan)_0%,transparent_70%)] opacity-[0.28]",
  },
  {
    layer: 2,
    className:
      "left-[28%] top-[48%] h-[500px] w-[500px] bg-[radial-gradient(circle,var(--color-glow-indigo)_0%,transparent_70%)] opacity-[0.22]",
  },
  {
    layer: 3,
    className:
      "right-[18%] bottom-[8%] h-[320px] w-[320px] bg-[radial-gradient(circle,var(--color-glow-purple)_0%,transparent_70%)] opacity-[0.25]",
  },
] as const;

export function ParallaxBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;

    root.style.perspective = "1200px";
    root.style.perspectiveOrigin = "50% 20%";

    let raf = 0;
    const layers = root.querySelectorAll<HTMLElement>("[data-parallax-layer]");

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const rotateX = Math.min(scrollY * 0.015, 12);

        root.style.transform = `rotateX(${rotateX}deg)`;

        layers.forEach((layer) => {
          const speed = Number(layer.dataset.speed ?? 0.1);
          const depth = Number(layer.dataset.depth ?? 0);
          layer.style.transform = `translate3d(0, ${scrollY * speed}px, ${depth}px) scale(${1 + depth * 0.0003})`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden md:block"
      aria-hidden
    >
      {/* Soft mesh base */}
      <div
        className="absolute inset-0 opacity-80 dark:opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 10%, color-mix(in srgb, var(--color-glow-purple) 18%, transparent), transparent 50%),
            radial-gradient(ellipse 60% 40% at 85% 25%, color-mix(in srgb, var(--color-glow-cyan) 14%, transparent), transparent 50%),
            radial-gradient(ellipse 70% 45% at 50% 90%, color-mix(in srgb, var(--color-glow-indigo) 12%, transparent), transparent 50%)
          `,
        }}
      />

      {/* Grid depth layer */}
      <div
        data-parallax-layer
        data-speed="0.04"
        data-depth="-80"
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(color-mix(in srgb, var(--color-accent) 40%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 40%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          transform: "rotateX(60deg) translateY(-20%) scale(2)",
          transformOrigin: "center top",
        }}
      />

      {/* Floating orbs */}
      {ORBS.map((orb) => (
        <div
          key={orb.layer}
          data-parallax-layer
          data-speed={String(0.06 + orb.layer * 0.05)}
          data-depth={String(40 + orb.layer * 30)}
          className={`absolute rounded-full blur-3xl will-change-transform ${orb.className}`}
        />
      ))}
    </div>
  );
}
