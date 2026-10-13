"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useMemo, useState } from "react";
import { search } from "@/lib/search";
import { ArrowRight, Search } from "./icons";

export function SpecialistFinder() {
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const listId = useId();
  const results = useMemo(() => search(q, 6), [q]);
  const show = focused && q.length > 0;

  return (
    <div className="relative">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) router.push(results[0].href);
          else router.push("/practice-areas");
        }}
        className="flex items-center gap-2 rounded-full border border-line bg-white p-1.5 pl-5 shadow-[0_20px_50px_-30px_rgba(11,31,77,0.45)] focus-within:border-navy-900"
      >
        <Search className="size-5 shrink-0 text-navy-900" />
        <label htmlFor="finder" className="sr-only">
          Search practice areas and insights
        </label>
        <input
          id="finder"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="e.g. entertainment law or property & conveyancing"
          autoComplete="off"
          role="combobox"
          aria-controls={listId}
          aria-expanded={show}
          className="h-11 w-full min-w-0 bg-transparent text-base outline-none placeholder:text-sm placeholder:text-muted/70 sm:placeholder:text-base"
        />
        <button type="submit" className="btn btn-primary !min-h-11 shrink-0 !px-4 sm:!px-6">
          <span className="hidden sm:inline">Search</span>
          <ArrowRight className="size-4 sm:hidden" />
          <span className="sr-only sm:hidden">Search</span>
        </button>
      </form>

      {show && (
        <ul id={listId} className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
          {results.length === 0 && <li className="px-5 py-4 text-sm text-muted">No matches. Press Enter to browse all practice areas.</li>}
          {results.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="flex items-center gap-3 px-5 py-3 hover:bg-navy-50">
                <span className="hidden w-16 shrink-0 text-[11px] font-bold tracking-widest text-gold uppercase sm:block">{r.kind}</span>
                <span className="min-w-0 flex-1 font-medium text-navy-900 sm:truncate">{r.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
