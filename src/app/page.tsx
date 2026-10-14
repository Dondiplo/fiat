import Image from "next/image";
import Link from "next/link";
import ladyJustice from "../../public/images/lady-justice.jpg";
import { LogoMark, LogoSpin } from "@/components/Logo";
import { SpecialistFinder } from "@/components/SpecialistFinder";
import { ExpertiseFlow } from "@/components/ExpertiseFlow";
import { CtaBand, InsightCard, SectionHeading } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { practices } from "@/data/practices";
import { sortedInsights } from "@/data/insights";

const promise = [
  { title: "Clarity", body: "A clear recommendation, not a list of options. We tell you what we think you should do, why, and what it will cost." },
  { title: "Rigour", body: "Detailed knowledge of Nigerian law and regulation, applied by people who take the time to understand your situation." },
  { title: "Courage", body: "We take firm positions and see them through, at the negotiating table, before regulators and in court." },
];

export default function Home() {
  const featured = practices.filter((p) => p.featured);
  const [lead, ...rest] = sortedInsights;

  return (
    <>
      {/* Hero */}
      {/* z-10 so the search dropdown can extend over the next section; only the decoration layer clips. */}
      <section className="relative z-10 bg-canvas">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_60%_45%,rgba(176,138,69,0.12),transparent_60%)] lg:block" />
          <LogoMark className="absolute -right-16 bottom-0 w-72 opacity-[0.06] select-none sm:w-96 lg:hidden" />
        </div>

        <div className="container-x relative grid items-center gap-10 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:min-h-[min(calc(100dvh-5rem),52rem)] lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <h1 className="display-xl reveal text-navy-900">
              Let justice <span className="whitespace-nowrap text-navy-700">be done.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Fiat Justitia is a full-service Nigerian law firm. We act for companies, investors and institutions, and for families and individuals, on transactions, disputes and the personal matters that need careful legal advice, always with sound judgement and a clear focus on the result.
            </p>
            <div className="reveal reveal-delay-3 relative z-20 mt-8 max-w-xl">
              <p className="mb-3 text-sm font-semibold text-navy-900">How can we help?</p>
              <SpecialistFinder />
            </div>
            <div className="reveal reveal-delay-3 mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/practice-areas" className="link-arrow">
                Our practice areas <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className="link-arrow">
                Book a consultation <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-[24rem]">
              <div aria-hidden className="spin-slow absolute inset-0 rounded-full border border-dashed border-gold/40" />
              <div aria-hidden className="absolute inset-6 rounded-full border border-navy-900/10 bg-white/70 shadow-[0_40px_80px_-40px_rgba(11,31,77,0.35)]" />
              <div className="reveal reveal-delay-2 absolute inset-0 grid place-items-center">
                <LogoSpin className="w-[60%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm at a glance */}
      <section className="border-y border-line bg-white">
        {/* Full-bleed halves so the hover fill reaches the screen edge; .stat padding keeps text on the content grid. */}
        <div className="grid grid-cols-2 divide-x divide-line">
          {[
            { n: "1", l: "Firm, one standard" },
            { n: practices.length, l: "Practice areas" },
          ].map((s) => (
            <div key={s.l} data-reveal className="stat relative overflow-hidden">
              <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
                <p data-count={s.n} className="text-4xl font-semibold tracking-tight text-navy-900 tabular-nums sm:text-5xl">
                  {s.n}
                </p>
                <p className="mt-1 text-sm text-muted">{s.l}</p>
              </div>
              {/* Navy copy revealed left to right on hover; text turns white at the edge. */}
              <div aria-hidden className="stat-fill pointer-events-none absolute inset-0 bg-navy-900 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
                <p className="text-4xl font-semibold tracking-tight text-white tabular-nums sm:text-5xl">{s.n}</p>
                <p className="mt-1 text-sm text-gold-light">{s.l}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice areas, over a fixed background photo. clip-path confines the fixed
          layer to this section and, unlike background-attachment: fixed, works on iOS. */}
      <section className="relative isolate bg-white [clip-path:inset(0)]">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <Image src={ladyJustice} alt="" fill sizes="100vw" placeholder="blur" quality={70} className="object-cover object-[50%_30%] opacity-[0.24]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        </div>
        <ExpertiseFlow items={featured.map(({ slug, name, summary }) => ({ slug, name, summary }))} total={practices.length} />
      </section>

      {/* Promise */}
      <section className="bg-canvas">
        <div className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow">Our promise</p>
            <blockquote className="mt-4">
              <p className="font-semibold tracking-tight text-3xl leading-tight text-navy-900 sm:text-4xl lg:text-5xl">“Fiat justitia ruat caelum.”</p>
              <footer className="mt-4 text-muted">Let justice be done, though the heavens fall. The maxim we are named after, and the standard we hold ourselves to.</footer>
            </blockquote>
          </div>
          <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:gap-6">
            {promise.map((x, i) => (
              // Description is revealed on hover/focus where hover exists; always shown on touch screens.
              // The space stays reserved so revealing it never shifts the page.
              <li key={x.title} data-reveal tabIndex={0} className="promise-card group relative cursor-default border-t-2 border-navy-900 pt-5 transition-colors hover:border-gold focus-visible:border-gold">
                <span className="promise-plus absolute top-4 right-0 grid size-6 place-items-center text-navy-900 transition duration-300 group-hover:rotate-45 group-hover:text-gold group-focus-visible:rotate-45 group-focus-visible:text-gold" aria-hidden>
                  <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </span>
                <span className="text-xs font-bold tracking-widest text-gold">{`0${i + 1}`}</span>
                <h3 className="mt-2 font-semibold tracking-tight text-2xl text-navy-900">{x.title}</h3>
                <p className="promise-body mt-2 text-sm leading-relaxed text-muted">
                  {/* Each word is its own span so they can "write in" one after another (see .pw). */}
                  {x.body.split(" ").map((word, j) => (
                    <span key={j}>
                      <span className="pw" style={{ "--w": j } as React.CSSProperties}>
                        {word}
                      </span>{" "}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-mist/60">
        <div className="container-x py-16 sm:py-24">
          <SectionHeading eyebrow="Insights" title="Latest thinking, news and deals." action={{ label: "All insights", href: "/insights" }} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <InsightCard insight={lead} featured />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {rest.slice(0, 2).map((x) => (
                <InsightCard key={x.slug} insight={x} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
