import Link from "next/link";
import { offices, site, tel } from "@/data/site";
import { LogoFull } from "./Logo";
import { Instagram, LinkedIn, Mail, XLogo } from "./icons";

const quick = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const legal = ["Disclaimer", "Privacy Notice", "Cookie Policy", "Accessibility"];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-x grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <div data-reveal="iris" className="w-fit">
            <LogoFull className="h-auto w-44 sm:w-52" />
          </div>
          <p data-reveal className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            A full-service Nigerian law firm advising businesses, institutions, families and individuals from Lagos and Abuja.
          </p>
          <div data-reveal className="mt-6 flex gap-2">
            {[
              { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedIn },
              { href: site.social.x, label: "X", Icon: XLogo },
              { href: site.social.instagram, label: "Instagram", Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Fiat Justitia on ${label}`} className="grid size-10 place-items-center rounded-full border border-line bg-white text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav data-reveal aria-label="Footer" className="lg:col-span-2">
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 text-sm sm:grid-cols-1">
            {quick.map((q) => (
              <li key={q.href}>
                <Link href={q.href} className="inline-block py-2 text-ink/80 hover:text-navy-700">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal className="lg:col-span-6">
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 grid gap-6 xs:grid-cols-2 xl:grid-cols-3">
            {offices.map((o) => (
              <li key={o.city} className="text-sm">
                <p className="text-xl font-semibold tracking-tight text-navy-900">{o.city}</p>
                <a href={tel(o.phone)} className="inline-flex min-h-10 items-center font-semibold text-navy-900 hover:text-navy-700">
                  {o.phone}
                </a>
                <p className="text-xs text-muted">{o.hours}</p>
              </li>
            ))}
            {/* Spans the row until there is room for the full address in a third column. */}
            <li className="text-sm xs:col-span-2 xl:col-span-1">
              <p className="text-xl font-semibold tracking-tight text-navy-900">Email</p>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center gap-2 font-semibold [overflow-wrap:anywhere] text-navy-900 hover:text-navy-700">
                <Mail className="size-4 text-gold" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. <span className="font-semibold">Fiat justitia</span>: let justice be done.
          </p>
          <ul className="-my-2 flex flex-wrap gap-x-5">
            {legal.map((l) => (
              <li key={l}>
                <Link href="/legal" className="inline-block py-2 hover:text-navy-700">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
