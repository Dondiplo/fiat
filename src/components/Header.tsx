"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, offices, tel } from "@/data/site";
import { practicesByName } from "@/data/practices";
import { LogoLockup } from "./Logo";
import { SearchOverlay } from "./SearchOverlay";
import { ArrowRight, ChevronDown, Close, Menu, Phone, Search } from "./icons";

type MenuKey = "practices";

const menus: Record<MenuKey, { title: string; href: string; blurb: string; items: { name: string; href: string }[] }> = {
  practices: {
    title: "Practice Areas",
    href: "/practice-areas",
    blurb: "A full-service firm for businesses, institutions, families and individuals.",
    items: practicesByName.map((p) => ({ name: p.name, href: `/practice-areas/${p.slug}` })),
  },
};

export function Header() {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [mega, setMega] = useState<MenuKey | null>(null);
  const [accordion, setAccordion] = useState<MenuKey | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close any open menus when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setDrawer(false);
    setMega(null);
    setSearchOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setMega(null);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = drawer || searchOpen ? "hidden" : "";
  }, [drawer, searchOpen]);

  const openMega = (k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(k);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMega(null), 140);
  };
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <a href="#main" className="sr-only z-[70] rounded bg-navy-900 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>

      <header className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] ${scrolled || drawer || mega ? "border-line shadow-[0_1px_0_rgba(11,31,77,0.04)]" : "border-transparent"}`}>
        <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
          <LogoLockup />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {mainNav.map((item) =>
                item.menu ? (
                  <li key={item.href} onMouseEnter={() => openMega(item.menu!)} onMouseLeave={scheduleClose}>
                    <button
                      onClick={() => setMega(mega === item.menu ? null : item.menu!)}
                      aria-expanded={mega === item.menu}
                      className={`flex items-center gap-1 rounded-full px-3 py-2 text-[0.9rem] font-semibold transition hover:text-navy-700 ${isActive(item.href) || mega === item.menu ? "text-navy-900" : "text-ink/80"}`}
                    >
                      {item.label}
                      <ChevronDown className={`size-4 transition ${mega === item.menu ? "rotate-180" : ""}`} />
                    </button>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`relative rounded-full px-3 py-2 text-[0.9rem] font-semibold transition hover:text-navy-700 ${isActive(item.href) ? "text-navy-900" : "text-ink/80"}`}
                    >
                      {item.label}
                      {isActive(item.href) && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gold" />}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(true)} className="group flex h-11 items-center gap-2 rounded-full border border-line px-3 text-sm text-muted transition hover:border-navy-900 hover:text-navy-900 sm:px-4" aria-label="Search">
              <Search className="size-5" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="hidden rounded border border-line px-1.5 text-[11px] text-muted xl:inline">⌘K</kbd>
            </button>
            <Link href="/contact" className="btn btn-primary hidden !min-h-11 md:inline-flex">
              Contact us
            </Link>
            <button onClick={() => setDrawer((d) => !d)} className="grid size-11 place-items-center rounded-full bg-navy-900 text-white lg:hidden" aria-expanded={drawer} aria-controls="mobile-menu" aria-label={drawer ? "Close menu" : "Open menu"}>
              {drawer ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        {mega && (
          <div className="absolute inset-x-0 top-full hidden border-t border-line bg-white shadow-[0_24px_48px_-24px_rgba(11,31,77,0.25)] lg:block" onMouseEnter={() => openMega(mega)} onMouseLeave={scheduleClose}>
            <div className="container-x grid grid-cols-12 gap-8 py-10 xl:gap-10">
              <div className="col-span-3 border-r border-line pr-8">
                <p className="eyebrow">{menus[mega].title}</p>
                <p className="mt-3 text-xl leading-snug font-semibold tracking-tight text-navy-900 xl:text-2xl">{menus[mega].blurb}</p>
                <Link href={menus[mega].href} className="link-arrow mt-6 whitespace-nowrap">
                  View all {menus[mega].title.toLowerCase()} <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="col-span-9">
                  <ul className="columns-3 gap-x-8">
                    {menus[mega].items.map((i) => (
                      <li key={i.href} className="break-inside-avoid">
                        <Link href={i.href} className="group flex items-center justify-between gap-2 border-b border-transparent py-1.5 text-[0.92rem] text-ink transition hover:border-line hover:text-navy-700">
                          {i.name}
                          <ArrowRight className="size-4 shrink-0 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile / tablet drawer */}
      <div id="mobile-menu" hidden={!drawer} className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-white sm:top-20 lg:hidden">
        <nav aria-label="Mobile" className="container-x pb-10">
          <ul className="divide-y divide-line">
            {mainNav.map((item) =>
              item.menu ? (
                <li key={item.href}>
                  <button onClick={() => setAccordion(accordion === item.menu ? null : item.menu!)} aria-expanded={accordion === item.menu} className="flex w-full items-center justify-between py-5 text-left font-semibold tracking-tight text-[1.7rem] text-navy-900">
                    {item.label}
                    <ChevronDown className={`size-6 transition ${accordion === item.menu ? "rotate-180" : ""}`} />
                  </button>
                  {accordion === item.menu && (
                    <div className="pb-5">
                      <Link href={item.href} className="link-arrow py-2">
                        All {item.label.toLowerCase()} <ArrowRight className="size-4" />
                      </Link>
                      <ul className="mt-2 grid gap-x-6 sm:grid-cols-2">
                        {menus[item.menu].items.map((i) => (
                          <li key={i.href}>
                            <Link href={i.href} className="block py-2 text-ink/85">
                              {i.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center justify-between py-5 font-semibold tracking-tight text-[1.7rem] text-navy-900">
                    {item.label}
                    <ArrowRight className="size-5 text-gold" />
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link href="/contact" className="btn btn-primary mt-6 w-full">
            Contact us
          </Link>
          <div className="mt-8 grid gap-3 text-sm">
            {offices.map((o) => (
              <a key={o.city} href={tel(o.phone)} className="flex items-center gap-3 text-muted">
                <Phone className="size-4 text-gold" />
                <span className="font-semibold text-navy-900">{o.city}</span> {o.phone}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
