"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Animates elements marked `data-reveal` (optionally `="fade" | "scale" | "iris"`)
 * as they scroll into view. Elements that enter together are staggered, and
 * `data-count` numbers count up from zero. The inline script in the root layout
 * adds `reveal-ready` before first paint; without it (reduced motion, no JS)
 * nothing is hidden.
 */

const STAGGER_MS = 90;
const MAX_STAGGER_MS = 450;

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target) || target < 2) return;
  const start = performance.now();
  const duration = 1200;
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal-ready")) return;
    root.classList.add("reveal-live");

    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${Math.min(i++ * STAGGER_MS, MAX_STAGGER_MS)}ms`;
          el.classList.add("is-visible");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const scan = () => document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    scan();
    // Catch content added later, e.g. "Load more" on Insights.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
