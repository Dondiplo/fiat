// Sample Insights. These are written to show the layout; replace them with
// the firm's own published articles.

export type InsightType = "Insight" | "News" | "Deal" | "Event" | "Podcast" | "Report";

export type Insight = {
  slug: string;
  title: string;
  type: InsightType;
  date: string; // ISO
  author: string; // person slug
  practices: string[];
  summary: string;
  body: string[];
  readMins: number;
};

export const insights: Insight[] = [
  {
    slug: "buying-land-in-lagos-due-diligence-checklist",
    title: "Buying land in Lagos: a due diligence checklist",
    type: "Insight",
    date: "2026-09-30",
    author: "oluwaseun-adebayo",
    practices: ["property-conveyancing"],
    summary: "The searches and documents to check before you pay for land or a home, and how to perfect your title afterwards.",
    body: [
      "Many land disputes in Lagos could have been avoided with proper checks before payment. Start with a search at the Lands Registry to confirm the seller's root of title and any encumbrances.",
      "Check whether the land is affected by government acquisition, confirm the survey plan with the Surveyor-General's office, and verify the identity and authority of everyone signing for the seller.",
      "After completion, apply for Governor's consent so that the transfer is valid under the Land Use Act. Until consent is granted, your title is not fully protected.",
    ],
    readMins: 6,
  },
  {
    slug: "divorce-in-nigeria-how-it-works",
    title: "Divorce in Nigeria: how the process works",
    type: "Insight",
    date: "2026-09-16",
    author: "amara-okafor",
    practices: ["family-matrimonial"],
    summary: "A plain-language guide to divorce under the Matrimonial Causes Act: grounds, timelines, children and property.",
    body: [
      "For a statutory marriage, a divorce petition is filed at the State High Court, and the only ground is that the marriage has broken down irretrievably. This is proved by one of the facts listed in the Matrimonial Causes Act, such as separation or intolerable behaviour.",
      "Generally, no petition may be filed within two years of the marriage without the court's leave. The court first grants a decree nisi, which becomes absolute after three months.",
      "Arrangements for children are decided on the basis of their best interests, and the court can make orders for maintenance and settlement of property. Customary and Islamic marriages follow different procedures.",
    ],
    readMins: 7,
  },
  {
    slug: "nigeria-tax-act-2025-what-changes-for-companies",
    title: "The Nigeria Tax Act 2025: what changes for companies",
    type: "Insight",
    date: "2026-10-06",
    author: "funmilayo-bakare",
    practices: ["tax"],
    summary: "Nigeria's tax laws have been consolidated and the administration reformed. This note sets out the changes boards should now be acting on.",
    body: [
      "The 2025 tax reform package consolidates Nigeria's main tax statutes into a single Nigeria Tax Act, alongside new legislation on tax administration and the revenue service.",
      "For most companies, the immediate work is reviewing group structures, intercompany arrangements and incentive claims against the new rules, and updating compliance calendars.",
      "Boards should ask management for a readiness plan that covers systems, contracts with gross-up and tax indemnity clauses, and the treatment of transactions currently in progress.",
    ],
    readMins: 6,
  },
  {
    slug: "isa-2025-capital-markets-reset",
    title: "ISA 2025: a reset for Nigeria's capital markets",
    type: "Insight",
    date: "2026-09-22",
    author: "ngozi-eze",
    practices: ["capital-markets"],
    summary: "The Investments and Securities Act 2025 widens the SEC's powers and brings digital assets inside the regulatory perimeter.",
    body: [
      "The Investments and Securities Act 2025 replaces the 2007 Act and updates the framework for issuers, intermediaries and investors.",
      "Key changes include express regulation of digital assets and virtual asset service providers, a stronger enforcement toolkit for the SEC, and updated rules on collective investment schemes.",
      "Issuers and market operators should review their registration status and continuing obligations now.",
    ],
    readMins: 5,
  },
  {
    slug: "fiat-justitia-advises-on-solar-joint-venture",
    title: "Fiat Justitia advises on a 50MW solar joint venture",
    type: "Deal",
    date: "2026-09-10",
    author: "adaeze-okonkwo",
    practices: ["corporate-m-and-a", "energy-natural-resources"],
    summary: "Our Corporate and Energy teams advised a European investor on a joint venture to develop a portfolio of commercial and industrial solar assets.",
    body: [
      "The transaction involved structuring the joint venture, negotiating shareholder arrangements and securing the regulatory approvals the project needs.",
      "The team was led from Lagos, with support from our Energy and Abuja-based regulatory lawyers.",
    ],
    readMins: 2,
  },
  {
    slug: "enforcing-foreign-arbitral-awards-in-nigeria",
    title: "Enforcing foreign arbitral awards in Nigeria: a practical guide",
    type: "Report",
    date: "2026-08-28",
    author: "babatunde-adeyemi",
    practices: ["dispute-resolution"],
    summary: "Timelines, procedure and the defences we see most often under the Arbitration and Mediation Act 2023.",
    body: [
      "Nigeria is party to the New York Convention, and the Arbitration and Mediation Act 2023 modernised the procedure for recognising and enforcing awards.",
      "This guide walks through the application, the evidence required, the limited grounds for refusal and practical steps to speed up enforcement.",
    ],
    readMins: 9,
  },
  {
    slug: "ndpa-two-years-on",
    title: "The Nigeria Data Protection Act, two years on",
    type: "Podcast",
    date: "2026-08-12",
    author: "chukwuemeka-obi",
    practices: ["data-protection-privacy"],
    summary: "Emeka Obi discusses NDPC enforcement trends, cross-border transfers and what regulators expect from controllers.",
    body: [
      "In this episode we look at the NDPC's enforcement activity, the compliance audit regime and what good practice looks like for organisations of different sizes.",
    ],
    readMins: 28,
  },
  {
    slug: "host-community-trusts-under-the-pia",
    title: "Host community development trusts under the PIA: lessons so far",
    type: "Insight",
    date: "2026-07-30",
    author: "tamuno-briggs",
    practices: ["energy-natural-resources"],
    summary: "What we've learned helping settlors set up and run host community trusts.",
    body: [
      "The Petroleum Industry Act requires settlors to incorporate host community development trusts and fund them annually.",
      "Getting the governance right early, including board composition, needs assessments and reporting, avoids disputes later.",
    ],
    readMins: 7,
  },
  {
    slug: "fiat-justitia-welcomes-new-partners",
    title: "Fiat Justitia announces two new partners",
    type: "News",
    date: "2026-07-01",
    author: "adaeze-okonkwo",
    practices: [],
    summary: "We are pleased to announce two promotions to partnership, in our Real Estate and Technology practices.",
    body: ["The promotions reflect the growth of both practices and our commitment to developing talent from within the firm."],
    readMins: 2,
  },
  {
    slug: "breakfast-briefing-merger-control-2026",
    title: "Breakfast briefing: merger control in 2026",
    type: "Event",
    date: "2026-06-18",
    author: "ibrahim-musa",
    practices: ["competition-antitrust"],
    summary: "A briefing in Lagos and Abuja on FCCPC merger review practice, timelines and filing strategy.",
    body: ["Our competition team shared practical guidance on notification thresholds, timetables and remedies."],
    readMins: 3,
  },
  {
    slug: "workforce-restructuring-checklist",
    title: "Restructuring your workforce: a legal checklist for employers",
    type: "Insight",
    date: "2026-05-20",
    author: "zainab-bello",
    practices: ["employment-immigration"],
    summary: "Consultation, redundancy benefits and the litigation risks to manage before you announce.",
    body: [
      "Nigerian law requires employers to inform unions and employee representatives and to apply the 'last in, first out' principle, subject to merit and other factors.",
      "This checklist covers the steps to take before, during and after a restructuring.",
    ],
    readMins: 6,
  },
];

export const insightTypes: InsightType[] = ["Insight", "News", "Deal", "Report", "Podcast", "Event"];
export const getInsight = (slug: string) => insights.find((x) => x.slug === slug);
export const sortedInsights = [...insights].sort((a, b) => b.date.localeCompare(a.date));
export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
