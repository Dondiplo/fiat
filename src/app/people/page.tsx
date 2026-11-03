import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Avatar, CtaBand, FocusList, PageHero } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { displayName, team, type Person } from "@/data/people";

export const metadata: Metadata = {
  title: "People",
  description: "Meet the lawyers of Fiat Justitia Attorneys.",
};

const isLeader = (x: Person) => x.role === "Founder/Principal Partner" || x.role === "Managing Partner";

export default function People() {
  const leaders = team.filter(isLeader);
  const others = team.filter((x) => !isLeader(x));

  return (
    <>
      <PageHero
        crumbs={[{ label: "People" }]}
        eyebrow="Our people"
        title="The lawyers behind your matter"
        lead="Careful research, clear advice and determined advocacy, from the first conversation to the final outcome."
      />

      <section className="container-x py-12 sm:py-20">
        <div className="grid gap-8">
          {leaders.map((x) => (
            <article key={x.slug} data-reveal className="group relative grid overflow-hidden rounded-sm border border-line bg-white transition hover:border-navy-900/40 hover:shadow-[0_18px_40px_-24px_rgba(11,31,77,0.35)] md:grid-cols-12">
              <div className="relative aspect-[4/5] bg-navy-900 md:col-span-5 md:aspect-auto md:min-h-[28rem] lg:col-span-4">
                {x.photo && <Image src={x.photo} alt={`Portrait of ${x.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 42vw, 100vw" placeholder="blur" className="object-cover object-top" />}
              </div>
              <div className="flex flex-col p-6 sm:p-10 md:col-span-7 lg:col-span-8 lg:p-12">
                <p className="eyebrow">{x.role}</p>
                <h2 className="display-md mt-3 text-navy-900">
                  <Link href={`/people/${x.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold group-hover:decoration-1 group-hover:underline-offset-4">
                    {displayName(x)}
                  </Link>
                </h2>
                {x.focus && <FocusList items={x.focus} />}
                <p className="mt-6 max-w-2xl leading-relaxed text-muted sm:text-lg">{x.bio[0]}</p>
                <span className="link-arrow mt-auto pt-8">
                  View full profile <ArrowRight className="size-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {others.length > 0 && (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((x) => (
              <li key={x.slug} data-reveal className="group relative flex flex-col rounded-sm border border-line bg-white transition hover:border-navy-900/40">
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-t-sm bg-canvas">
                  {x.photo ? <Image src={x.photo} alt={`Portrait of ${x.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" placeholder="blur" className="object-cover object-top" /> : <Avatar name={x.name} size="lg" />}
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-navy-900">
                    <Link href={`/people/${x.slug}`} className="after:absolute after:inset-0">
                      {displayName(x)}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-muted">{x.role}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CtaBand />
    </>
  );
}
