"use client";

import { useMemo, useState } from "react";
import { insightTypes, sortedInsights } from "@/data/insights";
import { InsightCard } from "./ui";
import { Search } from "./icons";

const PAGE = 6;

export function InsightsHub() {
  const [type, setType] = useState<string>("All");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);

  const results = useMemo(() => {
    const t = q.toLowerCase().trim();
    return sortedInsights.filter((x) => (type === "All" || x.type === type) && (!t || x.title.toLowerCase().includes(t) || x.summary.toLowerCase().includes(t)));
  }, [type, q]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Horizontal scroller on phones keeps all filters on one line */}
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
          <div role="tablist" aria-label="Filter by type" className="flex w-max gap-2">
            {["All", ...insightTypes].map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={type === t}
                onClick={() => {
                  setType(t);
                  setShown(PAGE);
                }}
                className={`h-10 rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition ${type === t ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white text-navy-900 hover:border-navy-900"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <label className="relative w-full lg:w-80">
          <span className="sr-only">Search insights</span>
          <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-navy-900" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setShown(PAGE);
            }}
            placeholder="Search insights"
            className="h-11 w-full rounded-full border border-line bg-white pr-4 pl-11 text-base outline-none sm:text-sm focus:border-navy-900"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {results.length} result{results.length === 1 ? "" : "s"}
      </p>
      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {results.slice(0, shown).map((x) => (
          <InsightCard key={x.slug} insight={x} />
        ))}
      </div>
      {results.length === 0 && <p className="py-16 text-center text-muted">Nothing found. Try another filter.</p>}
      {shown < results.length && (
        <div className="mt-10 text-center">
          <button onClick={() => setShown((s) => s + PAGE)} className="btn btn-outline">
            Load more
          </button>
        </div>
      )}
    </>
  );
}
