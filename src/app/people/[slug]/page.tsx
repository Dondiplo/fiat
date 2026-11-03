import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand, FocusList } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { displayName, team } from "@/data/people";
import { getPractice } from "@/data/practices";

type Props = { params: Promise<{ slug: string }> };

const getMember = (slug: string) => team.find((x) => x.slug === slug);

export const dynamicParams = false;
export const generateStaticParams = () => team.map((x) => ({ slug: x.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const x = getMember((await params).slug);
  return x ? { title: displayName(x), description: `${x.name}, ${x.role} at Fiat Justitia Attorneys.` } : {};
}

export default async function PersonPage({ params }: Props) {
  const person = getMember((await params).slug);
  if (!person) notFound();

  const portrait = person.portrait ?? person.photo;
  const practices = person.practices.map(getPractice).filter((x) => x !== undefined);
  const firstName = person.name.split(" ").slice(-2, -1)[0] ?? person.name;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-canvas">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full border border-gold/30 sm:size-[36rem]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-[20rem] rounded-full border border-navy-900/10 sm:size-[28rem]" />
        <div className="container-x relative grid gap-10 py-10 sm:py-14 md:grid-cols-12 md:items-end lg:py-20">
          <div className="md:col-span-7 lg:col-span-8">
            <Breadcrumbs items={[{ label: "People", href: "/people" }, { label: person.name }]} />
            <p className="eyebrow reveal mt-8 sm:mt-10">{person.role}</p>
            <h1 className="display-lg reveal reveal-delay-1 mt-3 max-w-3xl text-navy-900">{displayName(person)}</h1>
            {person.focus && (
              <div className="reveal reveal-delay-2">
                <FocusList items={person.focus} />
              </div>
            )}
            <Link href="/contact" className="btn reveal reveal-delay-2 mt-8 bg-navy-900 text-white hover:bg-navy-700">
              Contact {firstName} <ArrowRight className="size-4" />
            </Link>
          </div>
          {portrait && (
            <div className="reveal relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-navy-900 shadow-[0_30px_60px_-30px_rgba(11,31,77,0.55)] ring-1 ring-gold/40 md:col-span-5 md:max-w-none lg:col-span-4">
              <Image src={portrait} alt={`Portrait of ${person.name}`} fill priority sizes="(min-width: 1024px) 33vw, (min-width: 768px) 42vw, 384px" placeholder="blur" className="object-cover object-top" />
            </div>
          )}
        </div>
      </section>

      <div className="container-x grid gap-12 py-12 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <article data-reveal className="prose-firm lg:col-span-8">
          <h2 className="!mt-0">Profile</h2>
          {person.bio.map((t) => (
            <p key={t} className="text-[1.0625rem]">
              {t}
            </p>
          ))}
        </article>

        <aside data-reveal className="space-y-6 lg:col-span-4">
          <Facts title="Education" items={person.education} />
          <Facts title="Admissions" items={person.admissions} />
          {practices.length > 0 && (
            <div className="rounded-sm bg-canvas p-6">
              <p className="eyebrow">Practice areas</p>
              <ul className="mt-3 divide-y divide-line">
                {practices.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/practice-areas/${p.slug}`} className="group flex items-center justify-between py-3 text-navy-900">
                      {p.name}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <CtaBand title={`Speak to ${firstName} about your matter.`} />
    </>
  );
}

function Facts({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-sm border border-line p-6">
      <p className="eyebrow">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
