"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { search } from "@/lib/search";
import { ArrowRight, Close, Search } from "./icons";

const popular = ["Corporate & M&A", "Divorce", "Property", "Criminal Defence", "Dispute Resolution", "Wills", "Tax", "Immigration"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Mounting the panel only while open gives each search a fresh state.
  return open ? <SearchPanel onClose={onClose} /> : null;
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const listId = useId();
  const results = useMemo(() => search(q), [q]);

  useEffect(() => {
    input.current?.focus();
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      router.push(results[active].href);
      onClose();
    }
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="Search the site" className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-white" onKeyDown={onKey}>
      <div className="container-x pt-5 pb-16 sm:pt-8">
        <div className="flex justify-end">
          <button onClick={onClose} className="grid size-11 place-items-center rounded-full border border-line text-navy-900 hover:bg-navy-50" aria-label="Close search">
            <Close />
          </button>
        </div>

        <div className="mx-auto mt-4 max-w-3xl sm:mt-10">
          <p className="eyebrow">Search</p>
          <h2 className="display-md mt-3 text-navy-900">How can we help you?</h2>
          <label className="mt-6 flex items-center gap-3 border-b-2 border-navy-900 pb-3 sm:mt-8">
            <Search className="size-6 shrink-0 text-navy-900" />
            <span className="sr-only">Search practice areas and insights</span>
            <input
              ref={input}
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setActive(0);
              }}
              placeholder="Practice area or topic"
              className="w-full min-w-0 bg-transparent text-xl outline-none placeholder:text-muted/70 sm:text-2xl"
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls={listId}
              aria-activedescendant={results.length ? `${listId}-${active}` : undefined}
              autoComplete="off"
            />
          </label>

          {!q && (
            <div className="mt-8">
              <p className="text-sm font-semibold text-muted">Popular searches</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {popular.map((term) => (
                  <button key={term} onClick={() => setQ(term)} className="rounded-full border border-line px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-navy-900 hover:bg-navy-50">
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && (
            <ul id={listId} role="listbox" className="mt-6 divide-y divide-line">
              {results.length === 0 && <li className="py-6 text-muted">No results for “{q}”. Try a practice area or topic.</li>}
              {results.map((r, i) => (
                <li key={r.href} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex items-center gap-4 px-2 py-4 transition sm:px-3 ${i === active ? "bg-navy-50" : ""}`}
                  >
                    <span className="hidden w-20 shrink-0 text-[11px] font-bold tracking-widest text-gold uppercase sm:block">{r.kind}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-navy-900 sm:truncate">{r.title}</span>
                      <span className="block truncate text-sm text-muted">{r.meta}</span>
                    </span>
                    <ArrowRight className="shrink-0 text-navy-900 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
