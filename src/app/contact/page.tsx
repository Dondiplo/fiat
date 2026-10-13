import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { Mail, Phone } from "@/components/icons";
import { offices, site, tel } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <PageHero crumbs={[{ label: "Contact" }]} eyebrow="Contact" title="Speak to us" lead="Tell us briefly what you need. We will put you in touch with the right specialist." />
      <section className="container-x grid gap-12 py-12 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="order-first space-y-4 lg:order-none lg:col-span-5 lg:space-y-6">
          <a data-reveal href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-sm bg-navy-900 p-6 text-white transition hover:bg-navy-800">
            <Mail className="size-5 text-gold-light" />
            <span>
              <span className="block text-xs tracking-widest text-white/70 uppercase">General enquiries</span>
              <span className="font-semibold">{site.email}</span>
            </span>
          </a>
          {offices.map((o) => (
            <div key={o.city} data-reveal className="rounded-sm border border-line p-6">
              <p className="text-2xl font-semibold tracking-tight text-navy-900">{o.city}</p>
              <a href={tel(o.phone)} className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-900">
                <Phone className="size-4 text-gold" /> {o.phone}
              </a>
              <p className="text-xs text-muted">{o.hours}</p>
            </div>
          ))}
        </aside>
      </section>
    </>
  );
}
