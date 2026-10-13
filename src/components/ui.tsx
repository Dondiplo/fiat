import Link from "next/link";
import type { ReactNode } from "react";
import { getPerson, initials, displayName } from "@/data/people";
import { formatDate, type Insight } from "@/data/insights";
import { ArrowRight } from "./icons";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted">
        <li>
          <Link href="/" className="-my-2 inline-block py-2 hover:text-navy-700">
            Home
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span aria-hidden className="text-gold">
              /
            </span>
            {it.href ? (
              <Link href={it.href} className="-my-2 inline-block py-2 hover:text-navy-700">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy-900">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, lead, crumbs, children }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; crumbs: { label: string; href?: string }[]; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full border border-gold/30 sm:size-[36rem]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-[20rem] rounded-full border border-navy-900/10 sm:size-[28rem]" />
      <div className="container-x relative py-10 sm:py-14 lg:py-20">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="eyebrow reveal mt-8 sm:mt-10">{eyebrow}</p>}
        <h1 className={`display-lg reveal reveal-delay-1 max-w-4xl text-navy-900 ${eyebrow ? "mt-3" : "mt-8 sm:mt-10"}`}>{title}</h1>
        {lead && <div className="reveal reveal-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</div>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, action, className = "" }: { eyebrow: string; title: ReactNode; action?: { label: string; href: string }; className?: string }) {
  return (
    <div data-reveal className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-md mt-3 max-w-2xl text-navy-900">{title}</h2>
      </div>
      {action && (
        <Link href={action.href} className="link-arrow shrink-0">
          {action.label} <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

export function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const s = { sm: "size-10 text-sm", md: "size-16 text-xl", lg: "size-32 text-4xl sm:size-40 sm:text-5xl" }[size];
  return (
    <span aria-hidden className={`relative grid shrink-0 place-items-center rounded-full bg-navy-900 font-semibold tracking-tight text-white ring-1 ring-gold/60 ring-offset-2 ring-offset-white ${s}`}>
      {initials(name)}
    </span>
  );
}

export function InsightCard({ insight, featured = false }: { insight: Insight; featured?: boolean }) {
  const author = getPerson(insight.author);
  return (
    <article data-reveal className={`group relative flex h-full flex-col rounded-sm border border-line bg-white transition hover:border-navy-900/40 hover:shadow-[0_18px_40px_-24px_rgba(11,31,77,0.35)] ${featured ? "p-6 sm:p-10" : "p-5 sm:p-6"}`}>
      <div className="flex items-center gap-3 text-xs font-semibold">
        <span className="rounded-full bg-navy-50 px-2.5 py-1 tracking-wider text-navy-900 uppercase">{insight.type}</span>
        <time dateTime={insight.date} className="text-muted">
          {formatDate(insight.date)}
        </time>
      </div>
      <h3 className={`mt-4 font-semibold tracking-tight leading-tight text-navy-900 ${featured ? "text-2xl sm:text-4xl" : "text-2xl"}`}>
        <Link href={`/insights/${insight.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold group-hover:decoration-1 group-hover:underline-offset-4">
          {insight.title}
        </Link>
      </h3>
      <p className={`mt-3 leading-relaxed text-muted ${featured ? "line-clamp-4 text-sm sm:line-clamp-none sm:text-lg" : "line-clamp-3 text-sm"}`}>{insight.summary}</p>
      {author && (
        <div className="mt-auto flex items-center gap-3 pt-6">
          <Avatar name={author.name} size="sm" />
          <div className="text-sm leading-tight">
            <p className="font-semibold text-navy-900">{displayName(author)}</p>
            <p className="text-muted">{author.role}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export function CtaBand({ title = "Tell us what you need to achieve.", body = "We will put you in touch with the right specialist, usually within one working day." }: { title?: string; body?: string }) {
  return (
    <section className="container-x py-16 sm:py-24">
      <div data-reveal="scale" className="relative overflow-hidden rounded-sm bg-navy-900 px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full border border-gold/40" />
        <div aria-hidden className="pointer-events-none absolute -right-10 -bottom-10 size-52 rounded-full border border-white/10" />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
              Speak to us
            </p>
            <h2 className="display-md mt-4 text-white">{title}</h2>
            <p className="mt-4 max-w-xl text-white/75">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Link href="/contact" className="btn bg-white text-navy-900 hover:bg-gold-light">
              Contact us <ArrowRight className="size-4" />
            </Link>
            <Link href="/practice-areas" className="btn border border-white/40 text-white hover:bg-white/10">
              Practice areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
