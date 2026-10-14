"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "./icons";

type Item = { slug: string; name: string; summary: string };

/**
 * Expertise section that animates as it comes into view. Cards fill with navy
 * strictly one after another, and each card waits until it is on screen, so on
 * a phone the sequence pauses until you scroll to the next row. The gold line
 * and counter follow the fills, and the scales sway while the cards fill and
 * settle level once the last one is done. Reduced motion: static cards, level scales.
 */

const FILL_MS = 520; // per card
const SETTLE_MS = 700; // scales come to rest after the last card
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

// Scales geometry, in SVG units.
const PIVOT = { x: 120, y: 54 };
const ARM = 82;
const PAN_DROP = 58;
const MAX_TILT = 14; // degrees

// One pan with its chains, drawn around the beam-end attachment point (0, 0).
const pan = (
  <>
    <path d={`M0 0L-24 ${PAN_DROP}M0 0L24 ${PAN_DROP}`} className="stroke-navy-900/50" strokeWidth="1.5" />
    <path d={`M-30 ${PAN_DROP}h60a30 14 0 0 1-60 0z`} className="fill-gold" />
    <circle r="3.5" className="fill-navy-900" />
  </>
);

export function ExpertiseFlow({ items, total }: { items: Item[]; total: number }) {
  const track = useRef<HTMLDivElement>(null);
  const beam = useRef<SVGGElement>(null);
  const panL = useRef<SVGGElement>(null);
  const panR = useRef<SVGGElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const media = window.matchMedia(REDUCED_QUERY);
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".xflow-card"));
    const n = cards.length;
    const ease = (t: number) => t * t * (3 - 2 * t);
    const visible = cards.map(() => false);
    const startAt: (number | null)[] = cards.map(() => null);
    let doneAt: number | null = null;
    let raf = 0;
    let lastIndex = -1;

    // q runs 0 → 1: the sway plays while cards fill (to 0.86), then settles.
    const drawScales = (q: number) => {
      const tilt = media.matches ? 0 : -MAX_TILT * (1 - q) ** 2 * Math.cos(q * 3 * Math.PI);
      const rad = (tilt * Math.PI) / 180;
      const dx = ARM * Math.cos(rad);
      const dy = ARM * Math.sin(rad);
      beam.current?.setAttribute("transform", `rotate(${tilt.toFixed(3)} ${PIVOT.x} ${PIVOT.y})`);
      panL.current?.setAttribute("transform", `translate(${(PIVOT.x - dx).toFixed(2)} ${(PIVOT.y - dy).toFixed(2)})`);
      panR.current?.setAttribute("transform", `translate(${(PIVOT.x + dx).toFixed(2)} ${(PIVOT.y + dy).toFixed(2)})`);
      root.toggleAttribute("data-balanced", q >= 1 || media.matches);
    };

    const setCounter = (index: number) => {
      if (index === lastIndex) return;
      lastIndex = index;
      if (counter.current) counter.current.textContent = `${String(index + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
      if (label.current) label.current.textContent = items[index].name;
    };

    const tick = (now: number) => {
      let total = 0;
      let active = 0;
      let animating = false;
      for (let i = 0; i < n; i++) {
        const prevDone = i === 0 || (startAt[i - 1] !== null && now >= startAt[i - 1]! + FILL_MS);
        if (startAt[i] === null && prevDone && visible[i]) startAt[i] = now;
        const f = startAt[i] === null ? 0 : ease(Math.min(1, (now - startAt[i]!) / FILL_MS));
        if (startAt[i] !== null) active = i;
        if (startAt[i] !== null && now < startAt[i]! + FILL_MS) animating = true;
        cards[i].style.setProperty("--fill", f.toFixed(4));
        total += f;
      }
      const filled = total / n;
      root.style.setProperty("--p", filled.toFixed(4));
      setCounter(active);

      if (filled >= 1 && doneAt === null) doneAt = now;
      const settle = doneAt === null ? 0 : Math.min(1, (now - doneAt) / SETTLE_MS);
      drawScales(filled * 0.86 + settle * 0.14);

      // Sleep while waiting for the next card to come into view; the observer wakes us.
      const waiting = filled < 1 && !animating && !startAt.some((t, i) => t === null && visible[i]);
      raf = settle < 1 && !waiting ? requestAnimationFrame(tick) : 0;
    };

    setCounter(0);
    drawScales(media.matches ? 1 : 0);
    if (media.matches) return;

    // One observer: marks cards as seen (they stay seen) and wakes the loop.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          visible[cards.indexOf(e.target as HTMLElement)] = true;
          io.unobserve(e.target);
        }
        if (!raf && doneAt === null) raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div ref={track} className="xflow relative" style={{ "--p": 0, "--n": items.length } as React.CSSProperties}>
      <div className="container-x flex flex-col gap-5 py-16 sm:gap-6 sm:py-24">
        {/* Heading + scales */}
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow">Expertise</p>
            <h2 className="display-md mt-3 max-w-2xl text-navy-900">
              Legal advice for <span className="text-navy-700">every</span> part of business and life.
            </h2>
          </div>
          <figure className="xflow-scales shrink-0 text-center" aria-hidden>
            <svg viewBox="0 0 240 200" className="h-auto w-20 sm:w-28 lg:w-36 xl:w-40">
              {/* plinth and pillar */}
              <path d="M84 192h72M96 184h48" className="stroke-gold" strokeWidth="4" strokeLinecap="round" />
              <path d={`M120 184V${PIVOT.y}`} className="stroke-navy-900" strokeWidth="4" strokeLinecap="round" />
              <circle cx={PIVOT.x} cy={PIVOT.y - 16} r="5" className="fill-gold" />
              {/* beam */}
              <g ref={beam}>
                <path d={`M${PIVOT.x - ARM} ${PIVOT.y}H${PIVOT.x + ARM}`} className="stroke-navy-900" strokeWidth="4" strokeLinecap="round" />
                <path d={`M${PIVOT.x - 7} ${PIVOT.y}l7-7 7 7-7 7z`} className="fill-gold" />
              </g>
              {/* pans hang straight down from the beam ends */}
              <g ref={panL} transform={`translate(${PIVOT.x - ARM} ${PIVOT.y})`}>
                {pan}
              </g>
              <g ref={panR} transform={`translate(${PIVOT.x + ARM} ${PIVOT.y})`}>
                {pan}
              </g>
            </svg>
            <figcaption className="xflow-caption mt-1 text-[11px] font-bold tracking-widest text-gold uppercase sm:text-xs">Balance, restored.</figcaption>
          </figure>
        </div>

        {/* Progress */}
        <div className="xflow-progress flex items-center gap-4 text-xs font-semibold text-navy-900 sm:text-sm">
          <span ref={counter} className="w-14 shrink-0 tabular-nums">
            01 / {String(items.length).padStart(2, "0")}
          </span>
          <span className="relative h-px flex-1 bg-line">
            <span className="xflow-bar absolute inset-0 origin-left bg-gold" />
          </span>
          <span ref={label} className="hidden w-52 shrink-0 truncate text-right text-muted lg:block">
            {items[0]?.name}
          </span>
          <Link href="/practice-areas" className="link-arrow shrink-0 !text-xs sm:!text-sm">
            All {total} practice areas <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Cards: a navy layer with white text is clipped open from the bottom, card by card. */}
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
          {items.map((p, i) => (
            <li key={p.slug} className="xflow-card group relative overflow-hidden rounded-sm border border-line bg-white/85" style={{ "--i": i } as React.CSSProperties}>
              <CardBody item={p} i={i} />
              <div aria-hidden className="xflow-fill pointer-events-none absolute inset-0 bg-navy-900">
                <CardBody item={p} i={i} filled />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CardBody({ item, i, filled = false }: { item: Item; i: number; filled?: boolean }) {
  const num = String(i + 1).padStart(2, "0");
  return (
    <div className="flex h-full min-h-24 flex-col p-3.5 sm:min-h-36 sm:p-5 lg:min-h-0">
      <span className={`text-xs font-bold tracking-widest ${filled ? "text-gold-light" : "text-gold"}`}>{num}</span>
      <h3 className={`mt-auto pt-2 text-base leading-snug font-semibold tracking-tight sm:pt-3 sm:text-xl lg:text-[1.375rem] ${filled ? "text-white" : "text-navy-900"}`}>
        {filled ? (
          item.name
        ) : (
          <Link href={`/practice-areas/${item.slug}`} className="after:absolute after:inset-0 after:z-10">
            {item.name}
          </Link>
        )}
      </h3>
      <p className={`mt-1.5 hidden text-sm leading-relaxed sm:line-clamp-2 ${filled ? "text-white/75" : "text-muted"}`}>{item.summary}</p>
      <ArrowRight className={`mt-2 size-4 transition group-hover:translate-x-1 sm:mt-3 sm:size-5 ${filled ? "text-gold-light" : "text-navy-900"}`} />
    </div>
  );
}
