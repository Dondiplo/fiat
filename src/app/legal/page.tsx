import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Legal & Privacy" };

export default function Legal() {
  return (
    <>
      <PageHero crumbs={[{ label: "Legal & Privacy" }]} title="Legal & privacy" />
      <section className="container-x prose-firm max-w-3xl py-12 sm:py-16">
        <h2 id="disclaimer" className="!mt-0">
          Disclaimer
        </h2>
        <p>The content of this website is for general information only and does not constitute legal advice. Using this site, or contacting us through it, does not create a lawyer–client relationship.</p>
        <h2 id="privacy">Privacy notice</h2>
        <p>We process personal data in accordance with the Nigeria Data Protection Act 2023. [Placeholder: insert the firm’s full privacy notice.]</p>
        <h2 id="cookies">Cookie policy</h2>
        <p>
          This website does not use cookies or track visitors; it only remembers your cookie choice. Read our{" "}
          <Link href="/cookie-policy" className="underline decoration-gold underline-offset-4">
            full cookie policy
          </Link>
          .
        </p>
        <h2>Image credits</h2>
        <p>
          Lady Justice photograph by DP Singh Bhullar, via{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Close-up_of_Lady_Justice_statue_holding_scales,_symbolizing_justice_and_fairness.jpg" className="underline decoration-gold underline-offset-4">
            Wikimedia Commons
          </a>
          , licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline decoration-gold underline-offset-4">
            CC BY-SA 4.0
          </a>
          .
        </p>
        <h2 id="accessibility">Accessibility</h2>
        <p>We aim to meet WCAG 2.2 AA. If anything on this site is difficult to use, please let us know.</p>
      </section>
    </>
  );
}
