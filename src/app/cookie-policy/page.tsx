import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Fiat Justitia Attorneys website uses cookies and similar technologies.",
};

// Keep this table in sync with what the site actually stores. Last verified: no
// cookies and no third-party requests (fonts and images are self-hosted); one
// local-storage entry, "fj-cookie-consent", holds the banner choice (src/lib/consent.ts).
const categories = [
  { name: "Strictly necessary", purpose: "Remembers whether you accepted or declined optional cookies, so we don't ask on every visit. Stored as “fj-cookie-consent” in your browser for 12 months.", used: "Used" },
  { name: "Analytics", purpose: "Count visits and show how people use the website so it can be improved.", used: "Not used" },
  { name: "Functional", purpose: "Remember preferences such as language or region.", used: "Not used" },
  { name: "Marketing", purpose: "Track browsing across websites to show relevant advertising.", used: "Not used" },
];

const EFFECTIVE = "13 October 2026";

export default function CookiePolicy() {
  return (
    <>
      <PageHero crumbs={[{ label: "Legal & Privacy", href: "/legal" }, { label: "Cookie Policy" }]} eyebrow="Legal" title="Cookie policy" lead={`Effective ${EFFECTIVE}`} />
      <section className="container-x prose-firm max-w-3xl py-12 sm:py-16">
        <div className="mb-10 rounded-sm border-l-4 border-gold bg-canvas p-5 sm:p-6">
          <p className="!mb-0 font-semibold text-navy-900">In short: we only remember your cookie choice.</p>
          <p className="!mb-0 mt-2 text-sm text-muted">We do not track you, run analytics or show advertising. The only thing we store on your device is whether you accepted or declined optional cookies.</p>
        </div>

        <h2 className="!mt-0">What are cookies?</h2>
        <p>
          Cookies are small text files that a website stores on your device when you visit it. Similar technologies include browser storage (such as local storage) and tracking pixels. This policy covers all of them, and we call them
          “cookies” for simplicity.
        </p>

        <h2>How we use cookies</h2>
        <p>
          The {site.name} website does not set any cookies. The only information it stores on your device is your answer to our cookie banner, kept in your browser’s local storage so we don’t ask you again on every visit. It
          contains your choice and the date you made it, nothing that identifies you. Our fonts and images are served from our own website, so loading a page does not send your information to other companies.
        </p>

        {/* Phones get a stacked list so the "On this website" answer is never off-screen. */}
        <ul className="my-6 grid gap-3 sm:hidden">
          {categories.map((c) => (
            <li key={c.name} className="!mb-0 rounded-sm border border-line !p-4 before:!hidden">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-navy-900">{c.name}</span>
                <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-semibold text-navy-900">{c.used}</span>
              </div>
              <p className="!mb-0 mt-1.5 text-sm leading-relaxed text-muted">{c.purpose}</p>
            </li>
          ))}
        </ul>
        <div className="my-6 hidden overflow-hidden rounded-sm border border-line sm:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-canvas text-navy-900">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Category
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Purpose
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  On this website
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {categories.map((c) => (
                <tr key={c.name}>
                  <th scope="row" className="px-4 py-3 align-top font-semibold text-navy-900">
                    {c.name}
                  </th>
                  <td className="px-4 py-3 align-top text-muted">{c.purpose}</td>
                  <td className="px-4 py-3 align-top whitespace-nowrap text-navy-900">{c.used}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Links to other websites</h2>
        <p>
          Our website links to our profiles on LinkedIn, X and Instagram. Selecting an email address opens your own email application. Once you leave our website, those services may set their own cookies, and their own cookie and
          privacy policies apply.
        </p>

        <h2>Server logs</h2>
        <p>
          Like most websites, our hosting provider may record basic technical information, such as your IP address, browser type and the pages requested, in server logs. These logs help keep the website secure and working. They are not
          stored on your device and are not used to identify or profile you.
        </p>

        <h2>Managing cookies</h2>
        <p>
          You can change your choice at any time using{" "}
          <CookieSettingsButton className="font-semibold text-navy-900 underline decoration-gold underline-offset-4" /> at the bottom of every page. You can also clear stored website data in your browser settings. If you do, we will
          simply ask again on your next visit. Blocking cookies will not affect how this website works.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          At present, accepting optional cookies does not switch anything on, because we do not use any. If we introduce optional cookies in future, for example to understand how visitors use the website, we will update this policy
          first and only set them if you have accepted. Where the law requires it, including under the Nigeria Data Protection Act 2023, we will ask for your consent again.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have any questions about this policy or how we handle personal data, email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-navy-900 underline decoration-gold underline-offset-4">
            {site.email}
          </a>
          . You can read more in our{" "}
          <Link href="/legal" className="font-semibold text-navy-900 underline decoration-gold underline-offset-4">
            legal and privacy information
          </Link>
          .
        </p>
      </section>
    </>
  );
}
