import type { Metadata } from "next";
import { InsightsHub } from "@/components/InsightsHub";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Insights" }]} eyebrow="Knowledge" title="Insights" lead="Articles and analysis from our lawyers on the legal questions shaping business and everyday life in Nigeria." />
      <section className="container-x py-10 sm:py-16">
        <InsightsHub />
      </section>
    </>
  );
}
