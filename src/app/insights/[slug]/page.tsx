import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar, Breadcrumbs, CtaBand, InsightCard } from "@/components/ui";
import { formatDate, getInsight, insights, sortedInsights } from "@/data/insights";
import { displayName, getPerson } from "@/data/people";
import { getPractice } from "@/data/practices";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => insights.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = getInsight((await params).slug);
  return i ? { title: i.title, description: i.summary } : {};
}

export default async function InsightPage({ params }: Props) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();
  const author = getPerson(insight.author);
  const more = sortedInsights.filter((x) => x.slug !== insight.slug).slice(0, 3);
  const tags = insight.practices.map(getPractice).filter((x) => x !== undefined);

  return (
    <>
      <article>
        <header className="border-b border-line bg-canvas">
          <div className="container-x max-w-4xl py-10 sm:py-14 lg:py-20">
            <Breadcrumbs items={[{ label: "Insights", href: "/insights" }, { label: insight.type }]} />
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span className="rounded-full bg-navy-900 px-2.5 py-1 tracking-wider text-white uppercase">{insight.type}</span>
              <time dateTime={insight.date} className="text-muted">
                {formatDate(insight.date)}
              </time>
              <span className="text-muted">· {insight.readMins} min {insight.type === "Podcast" ? "listen" : "read"}</span>
            </div>
            <h1 className="display-lg mt-5 text-navy-900">{insight.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{insight.summary}</p>
            {author && (
              <div className="mt-8 inline-flex items-center gap-3">
                <Avatar name={author.name} size="sm" />
                <span className="text-sm leading-tight">
                  <span className="block font-semibold text-navy-900">{displayName(author)}</span>
                  <span className="text-muted">{author.role}</span>
                </span>
              </div>
            )}
          </div>
        </header>
        <div className="container-x max-w-4xl py-12 sm:py-16">
          <div data-reveal className="prose-firm max-w-[68ch] text-[1.0625rem]">
            {insight.body.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </div>
          {tags.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
              {tags.map((t) => (
                <li key={t.slug}>
                  <Link href={`/practice-areas/${t.slug}`} className="rounded-full border border-line px-3 py-1.5 text-sm text-navy-900 hover:border-navy-900">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-10 rounded-sm bg-canvas p-5 text-xs leading-relaxed text-muted">
            This publication is for general information only and is not legal advice. Please contact us for advice on your specific circumstances.
          </p>
        </div>
      </article>

      <section className="bg-mist/60">
        <div className="container-x py-14 sm:py-20">
          <p className="eyebrow">More insights</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {more.map((x) => (
              <InsightCard key={x.slug} insight={x} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
