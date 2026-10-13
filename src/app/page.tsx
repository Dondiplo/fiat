import Link from "next/link";
import { LogoMark, LogoSpin } from "@/components/Logo";
import { SpecialistFinder } from "@/components/SpecialistFinder";
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
        <div className="container-x grid grid-cols-2 divide-x divide-line">
          {[
            { n: "1", l: "Firm, one standard" },
            { n: practices.length, l: "Practice areas" },
          ].map((s) => (
            <div key={s.l} data-reveal className="px-3 py-6 first:pl-0 sm:px-6 sm:py-8">
              <p data-count={s.n} className="text-4xl font-semibold tracking-tight text-navy-900 tabular-nums sm:text-5xl">
                {s.n}
              </p>
              <p className="mt-1 text-sm text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice areas */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading eyebrow="Expertise" title={<>Legal advice for <span className="text-navy-700">every</span> part of business and life.</>} action={{ label: `All ${practices.length} practice areas`, href: "/practice-areas" }} />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <li key={p.slug} className="group relative bg-white p-6 transition hover:bg-navy-50/60 sm:p-8">
              <div data-reveal>
                <h3 className="font-semibold tracking-tight text-2xl text-navy-900 sm:text-[1.75rem]">
                  <Link href={`/practice-areas/${p.slug}`} className="after:absolute after:inset-0">
                    {p.name}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                <ArrowRight className="mt-6 text-navy-900 transition group-hover:translate-x-1" />
              </div>
            </li>
          ))}
        </ul>
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
              <li key={x.title} data-reveal className="border-t-2 border-navy-900 pt-5">
                <span className="text-xs font-bold tracking-widest text-gold">{`0${i + 1}`}</span>
                <h3 className="mt-2 font-semibold tracking-tight text-2xl text-navy-900">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.body}</p>
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
