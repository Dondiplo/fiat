import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Legal & Privacy" };

export default function Legal() {
  return (
    <>
      <PageHero crumbs={[{ label: "Legal & Privacy" }]} title="Legal & privacy" />
      <section className="container-x prose-firm max-w-3xl py-12 sm:py-16">
        <h2 className="!mt-0">Disclaimer</h2>
        <p>The content of this website is for general information only and does not constitute legal advice. Using this site, or contacting us through it, does not create a lawyer–client relationship.</p>
        <h2>Privacy notice</h2>
        <p>We process personal data in accordance with the Nigeria Data Protection Act 2023. [Placeholder: insert the firm’s full privacy notice.]</p>
        <h2>Cookie policy</h2>
        <p>This site uses only the cookies it needs to function. [Placeholder: update if analytics are added.]</p>
        <h2>Accessibility</h2>
        <p>We aim to meet WCAG 2.2 AA. If anything on this site is difficult to use, please let us know.</p>
      </section>
    </>
  );
}
