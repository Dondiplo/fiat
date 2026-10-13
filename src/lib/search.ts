import { practices } from "@/data/practices";
import { insights } from "@/data/insights";

export type SearchHit = { kind: "Practice" | "Insight"; title: string; meta: string; href: string; text: string };

export const searchIndex: SearchHit[] = [
  ...practices.map((x) => ({
    kind: "Practice" as const,
    title: x.name,
    meta: "Practice area",
    href: `/practice-areas/${x.slug}`,
    text: `${x.name} ${x.summary} ${x.services.join(" ")}`,
  })),
  ...insights.map((x) => ({
    kind: "Insight" as const,
    title: x.title,
    meta: x.type,
    href: `/insights/${x.slug}`,
    text: `${x.title} ${x.summary}`,
  })),
];

export function search(q: string, limit = 12): SearchHit[] {
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return searchIndex
    .map((hit) => {
      const title = hit.title.toLowerCase();
      const text = hit.text.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (title.startsWith(t)) score += 6;
        else if (title.includes(t)) score += 4;
        else if (text.includes(t)) score += 1;
        else return null;
      }
      return { hit, score };
    })
    .filter((x): x is { hit: SearchHit; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.hit);
}
