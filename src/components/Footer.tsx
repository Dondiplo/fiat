import Link from "next/link";
import { offices, site, tel } from "@/data/site";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { LogoFull } from "./Logo";
import { ArrowRight, Instagram, LinkedIn, Mail, Phone, XLogo } from "./icons";

const quick = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const legal = [
  { label: "Disclaimer", href: "/legal#disclaimer" },
  { label: "Privacy Notice", href: "/legal#privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/legal#accessibility" },
];

const social = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedIn },
  { href: site.social.x, label: "X", Icon: XLogo },
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
];

/*
 * Below lg the footer is a single centred column: brand, a contact card with one
 * tappable row per office plus email, pill links, then the legal bar. From lg up
 * it becomes the four-column layout.
 */
export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-x py-12 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-20">
        {/* Brand */}
        <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
          <div data-reveal="iris" className="w-fit">
            <LogoFull className="h-auto w-40 sm:w-48 lg:w-52" />
          </div>
          <p data-reveal className="mt-5 max-w-sm text-sm leading-relaxed text-muted lg:max-w-xs">
            A full-service Nigerian law firm advising businesses, institutions, families and individuals from Lagos and Abuja.
          </p>
          <div data-reveal className="mt-5 flex gap-2">
            {social.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Fiat Justitia on ${label}`} className="grid size-11 place-items-center rounded-full border border-line bg-white text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white lg:size-10">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Phones and tablets: contact card + pill links */}
        <div className="mx-auto mt-10 max-w-md lg:hidden">
          <div aria-hidden className="mx-auto mb-10 h-px w-16 bg-gold/70" />
          <p className="eyebrow text-center">Get in touch</p>
          <ul data-reveal className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {offices.map((o) => (
              <li key={o.city}>
                <a href={tel(o.phone)} className="flex items-center gap-4 px-4 py-3.5 transition active:bg-navy-50">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900">
                    <Phone className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-navy-900">{o.city}</span>
                    <span className="block text-sm text-ink/80">{o.phone}</span>
                    <span className="block text-xs text-muted">{o.hours}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold" />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 px-4 py-3.5 transition active:bg-navy-50">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900">
                  <Mail className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-navy-900">Email</span>
                  <span className="block text-sm wrap-anywhere text-ink/80">{site.email}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-gold" />
              </a>
            </li>
          </ul>

          <nav data-reveal aria-label="Footer" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-2">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link href={q.href} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-medium text-navy-900 transition active:bg-navy-50">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop: explore + contact columns */}
        <nav data-reveal aria-label="Footer" className="hidden lg:col-span-2 lg:block">
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 text-sm">
            {quick.map((q) => (
              <li key={q.href}>
                <Link href={q.href} className="inline-block py-2 text-ink/80 hover:text-navy-700">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal className="hidden lg:col-span-6 lg:block">
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 grid grid-cols-2 gap-6 xl:grid-cols-3">
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
            <li className="col-span-2 text-sm xl:col-span-1">
              <p className="text-xl font-semibold tracking-tight text-navy-900">Email</p>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center gap-2 font-semibold wrap-anywhere text-navy-900 hover:text-navy-700">
                <Mail className="size-4 text-gold" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-line">
        <div className="container-x flex flex-col-reverse items-center gap-3 py-6 text-center text-xs text-muted lg:flex-row lg:justify-between lg:gap-4 lg:text-left">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} {site.name}.<span className="block sm:inline"> </span>
            Powered by{" "}
            <a href="https://www.aravusstrategypartners.com/" target="_blank" rel="noopener noreferrer" className="-my-2 inline-block py-2 font-semibold text-navy-900 underline decoration-gold underline-offset-4 hover:text-navy-700">
              Aravus
            </a>
          </p>
          <ul className="-my-1 flex max-w-sm flex-wrap items-center justify-center gap-x-4 sm:max-w-none lg:-my-2 lg:justify-end lg:gap-x-5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block py-2 hover:text-navy-700">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton className="inline-block py-2 hover:text-navy-700" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
