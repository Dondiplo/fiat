// Firm-wide details. The firm publishes no physical address.

export const site = {
  name: "Fiat Justitia Attorneys",
  shortName: "Fiat Justitia",
  tagline: "Let justice be done",
  email: "fiatjustitia@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    instagram: "https://www.instagram.com/fiatjustitia_attorneys",
  },
};

export type Office = {
  city: string;
  phone: string;
  hours: string;
};

export const offices: Office[] = [
  {
    city: "Lagos",
    phone: "+234 708 691 0449",
    hours: "Mon–Fri, 8:00–18:00 WAT",
  },
  {
    city: "Abuja",
    phone: "+234 913 008 0833",
    hours: "Mon–Fri, 8:00–17:30 WAT",
  },
  {
    city: "Port Harcourt",
    phone: "+234 913 008 0833",
    hours: "Mon–Fri, 8:00–17:30 WAT",
  },
];

export const mainNav = [
  { label: "Practice Areas", href: "/practice-areas", menu: "practices" as const },
  { label: "People", href: "/people" },
  { label: "Insights", href: "/insights" },
];

/** "+234 (0) 1 000 0000" -> "tel:+23410000000" (drops the domestic trunk 0). */
export const tel = (phone: string) => `tel:${phone.replace("(0)", "").replace(/[^\d+]/g, "")}`;
