import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, InsightCard, PageHero, SectionHeading } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { getPractice, practices } from "@/data/practices";
import { sortedInsights } from "@/data/insights";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => practices.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPractice((await params).slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function PracticePage({ params }: Props) {
  const practice = getPractice((await params).slug);
  if (!practice) notFound();

  const related = practice.related.map(getPractice).filter((x) => x !== undefined);
  const insights = sortedInsights.filter((x) => x.practices.includes(practice.slug)).slice(0, 3);

  return (
    <>
      <PageHero crumbs={[{ label: "Practice Areas", href: "/practice-areas" }, { label: practice.name }]} eyebrow="Practice area" title={practice.name} lead={practice.summary}>
        <ul className="mt-8 flex flex-wrap gap-2">
          {practice.services.slice(0, 4).map((s) => (
            <li key={s} className="rounded-full border border-navy-900/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-900 sm:text-sm">
              {s}
            </li>
          ))}
        </ul>
      </PageHero>

      <div className="container-x grid gap-12 py-12 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <article data-reveal className="prose-firm lg:col-span-8">
          <h2 className="!mt-0">Overview</h2>
          {practice.overview.map((t) => (
            <p key={t} className="text-[1.0625rem]">
              {t}
            </p>
          ))}

          <h2>How we help</h2>
          <ul className="sm:columns-2 sm:gap-8">
            {practice.services.map((s) => (
              <li key={s} className="break-inside-avoid">
                {s}
              </li>
            ))}
          </ul>
        </article>

        <aside data-reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="hidden rounded-sm bg-navy-900 p-6 text-white sm:p-8 lg:block">
              <p className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Speak to the team</p>
              <p className="mt-3 text-xl font-semibold tracking-tight">Discuss a {practice.name} matter with us.</p>
              <Link href="/contact" className="btn mt-6 bg-white text-navy-900 hover:bg-gold-light">
                Contact us <ArrowRight className="size-4" />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="rounded-sm bg-canvas p-6 lg:mt-6">
                <p className="eyebrow">Related practice areas</p>
                <ul className="mt-3 divide-y divide-line">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/practice-areas/${r.slug}`} className="group flex items-center justify-between py-3 text-navy-900">
                        {r.name}
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {insights.length > 0 && (
        <section className="bg-mist/60">
          <div className="container-x py-16 sm:py-20">
            <SectionHeading eyebrow="Insights" title={`Latest from ${practice.name}`} action={{ label: "All insights", href: "/insights" }} />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((x) => (
                <InsightCard key={x.slug} insight={x} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand title={`Discuss a ${practice.name.toLowerCase()} matter.`} />
    </>
  );
}
