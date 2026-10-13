import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { SpecialistFinder } from "@/components/SpecialistFinder";
import { ArrowRight } from "@/components/icons";
import { practices } from "@/data/practices";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  const popular = practices.filter((p) => p.featured);

  return (
    <section className="relative overflow-hidden bg-canvas">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full border border-gold/30 sm:size-[40rem]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-40 size-[26rem] rounded-full border border-navy-900/10 sm:size-[36rem]" />

      <div className="container-x relative flex flex-col items-center py-14 text-center sm:py-20 lg:py-24">
        {/* "4 [emblem] 4": the scales stand in for the zero. */}
        <div aria-hidden className="reveal flex items-center justify-center gap-1 text-[clamp(6rem,4rem+14vw,13rem)] leading-none font-bold tracking-tighter text-navy-900 select-none sm:gap-3">
          <span>4</span>
          <span className="relative grid w-[0.8em] place-items-center">
            <span className="absolute inset-[4%] rounded-full border border-dashed border-gold/50" />
            <LogoMark priority className="sway h-auto w-[78%]" />
          </span>
          <span>4</span>
        </div>

        <p className="eyebrow reveal reveal-delay-1 mt-8">Error 404</p>
        <h1 className="display-lg reveal reveal-delay-1 mt-3 max-w-2xl text-navy-900">Case not found.</h1>
        <p className="reveal reveal-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          The page you’re looking for may have moved, been renamed or never existed. Let’s get you back on track.
        </p>

        <div className="reveal reveal-delay-2 relative z-20 mt-8 w-full max-w-xl text-left">
          <p className="mb-3 text-sm font-semibold text-navy-900">Search practice areas and insights</p>
          <SpecialistFinder />
        </div>

        <div className="reveal reveal-delay-3 mt-6 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight className="size-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact us
          </Link>
        </div>

        <div className="reveal reveal-delay-3 mt-12 w-full max-w-2xl border-t border-line pt-8">
          <p className="text-xs font-bold tracking-widest text-gold uppercase">Popular practice areas</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {popular.map((p) => (
              <li key={p.slug}>
                <Link href={`/practice-areas/${p.slug}`} className="inline-flex min-h-10 items-center rounded-full border border-navy-900/15 bg-white px-4 text-sm font-medium text-navy-900 transition hover:border-navy-900">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
