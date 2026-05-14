"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

/**
 * Container com scroll vertical encadeado (snap) + navegação por setas / Page Up/Down / Space.
 * Pensado para apresentação em call (sem depender de CTAs).
 */
export function PresentationShell({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus({ preventScroll: true });
  }, []);

  const getSlides = useCallback(() => {
    const root = containerRef.current;
    if (!root) return [];
    return Array.from(root.querySelectorAll<HTMLElement>("[data-slide]"));
  }, []);

  const slideIndexAtCenter = useCallback(() => {
    const root = containerRef.current;
    const slides = getSlides();
    if (!root || slides.length === 0) return 0;
    const centerY = root.scrollTop + root.clientHeight / 2;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((el, i) => {
      const mid = el.offsetTop + el.offsetHeight / 2;
      const d = Math.abs(mid - centerY);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  }, [getSlides]);

  const goTo = useCallback(
    (direction: 1 | -1) => {
      const root = containerRef.current;
      const slides = getSlides();
      if (!root || slides.length === 0) return;
      const idx = slideIndexAtCenter();
      const next = Math.min(slides.length - 1, Math.max(0, idx + direction));
      const targetTop = slides[next].offsetTop;
      root.scrollTo({ top: targetTop, behavior: "smooth" });
    },
    [getSlides, slideIndexAtCenter],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("[contenteditable='true']")) return;
      if (t && ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName)) return;

      const keysNext = ["ArrowDown", "ArrowRight", "PageDown", " ", "Enter"];
      const keysPrev = ["ArrowUp", "ArrowLeft", "PageUp"];

      if (keysNext.includes(e.key)) {
        e.preventDefault();
        goTo(1);
      } else if (keysPrev.includes(e.key)) {
        e.preventDefault();
        goTo(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo]);

  const stopPropagationIfNeeded = (e: ReactKeyboardEvent) => {
    const keys = [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "PageDown",
      "PageUp",
      " ",
      "Enter",
    ];
    if (keys.includes(e.key)) e.stopPropagation();
  };

  return (
    <>
      <div
        ref={containerRef}
        tabIndex={0}
        role="application"
        aria-label="Apresentação — use as setas verticais para avançar ou voltar slides"
        onKeyDown={stopPropagationIfNeeded}
        className="h-[100dvh] overflow-y-auto overflow-x-hidden scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 snap-y snap-mandatory overscroll-y-contain"
      >
        {children}
      </div>
      <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)] backdrop-blur-md">
        ↑ ↓ navegam · Space / Page Down avançam
      </div>
    </>
  );
}
