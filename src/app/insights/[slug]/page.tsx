import type { Metadata } from "next";
import Image from "next/image";
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
  const authors = insight.authors.map(getPerson).filter((x) => x !== undefined);
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
            {authors.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                {authors.map((author) => (
                  <Link key={author.slug} href={`/people/${author.slug}`} className="inline-flex items-center gap-3">
                    <Avatar name={author.name} photo={author.photo} size="sm" />
                    <span className="text-sm leading-tight">
                      <span className="block font-semibold text-navy-900">{displayName(author)}</span>
                      <span className="text-muted">{author.role}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="container-x max-w-4xl py-12 sm:py-16">
          {insight.image && (
            <figure className="mb-10 sm:mb-14">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-navy-900">
                <Image src={insight.image.src} alt={insight.image.alt} fill priority sizes="(min-width: 896px) 864px, 100vw" placeholder="blur" className="object-cover" />
              </div>
              {insight.image.credit && <figcaption className="mt-2 text-xs text-muted">{insight.image.credit}</figcaption>}
            </figure>
          )}
          <div data-reveal className="prose-firm max-w-[68ch] text-[1.0625rem]">
            {insight.body.map((b) =>
              b.startsWith("### ") ? <h3 key={b}>{b.slice(4)}</h3> : b.startsWith("## ") ? <h2 key={b}>{b.slice(3)}</h2> : <Paragraph key={b} text={b} />,
            )}
          </div>
          {insight.references && (
            <section className="mt-12 border-t border-line pt-8">
              <h2 className="eyebrow">References</h2>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed break-words text-muted">
                {insight.references.map((r) => (
                  <li key={r}>
                    <Linkified text={r} />
                  </li>
                ))}
              </ol>
            </section>
          )}
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

      {more.length > 0 && (
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
      )}
      <CtaBand />
    </>
  );
}

/** A paragraph that may open with a bold lead-in: "**Lead-in:** rest". */
function Paragraph({ text }: { text: string }) {
  const m = text.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
  if (!m) return <p>{text}</p>;
  return (
    <p>
      <strong className="font-semibold text-navy-900">{m[1]}</strong> {m[2]}
    </p>
  );
}

/** Turns bare URLs in a citation into links that open in a new tab. */
function Linkified({ text }: { text: string }) {
  return text.split(/(https?:\/\/\S+)/).map((part, i) =>
    i % 2 ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-navy-900 underline decoration-gold underline-offset-2 hover:text-navy-700">
        {part}
      </a>
    ) : (
      part
    ),
  );
}
