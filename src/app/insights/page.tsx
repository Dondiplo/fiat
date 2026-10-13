import type { Metadata } from "next";
import { InsightsHub } from "@/components/InsightsHub";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Insights" }]} eyebrow="Knowledge" title="Insights" lead="Analysis, news, deals and events from our practice groups, written for decision-makers." />
      <section className="container-x py-10 sm:py-16">
        <InsightsHub />
      </section>
    </>
  );
}
