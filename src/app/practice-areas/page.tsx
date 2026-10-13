import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { practicesByName } from "@/data/practices";

export const metadata: Metadata = { title: "Practice Areas" };

export default function PracticeAreas() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Practice Areas" }]}
        eyebrow="Expertise"
        title="Practice areas"
        lead="A full-service firm for businesses, institutions, families and individuals, from major transactions and disputes to the personal legal matters that need careful advice."
      />
      <section className="container-x py-12 sm:py-20">
        <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {practicesByName.map((p) => (
            <li key={p.slug} className="group relative flex flex-col bg-white p-6 transition hover:bg-navy-50/60 sm:p-8">
              <div data-reveal className="flex h-full flex-col">
                <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
                  <Link href={`/practice-areas/${p.slug}`} className="after:absolute after:inset-0">
                    {p.name}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                <span className="link-arrow mt-auto pt-6">
                  Explore <ArrowRight className="size-4" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
