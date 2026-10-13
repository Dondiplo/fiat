// PLACEHOLDER PEOPLE — these profiles are invented for the design build.
// Replace with the firm's real lawyers (names, roles, bios, photos) before launch.

export type Person = {
  slug: string;
  name: string;
  role: "Managing Partner" | "Partner" | "Counsel" | "Senior Associate" | "Associate";
  honorific?: string;
  office: "Lagos" | "Abuja";
  practices: string[]; // practice slugs
  phone: string;
  email: string;
  bio: string[];
  education: string[];
  admissions: string[];
};

const p = (person: Omit<Person, "email" | "phone"> & { phone?: string }): Person => ({
  phone: "+234 (0) 1 000 0000",
  ...person,
  email: `${person.slug.split("-")[0]}.${person.slug.split("-").slice(-1)[0]}@fiatjustitia.com`,
});

export const people: Person[] = [
  p({
    slug: "adaeze-okonkwo",
    name: "Adaeze Okonkwo",
    role: "Managing Partner",
    office: "Lagos",
    practices: ["corporate-m-and-a", "private-equity-venture-capital"],
    bio: [
      "Adaeze leads the firm and its Corporate & M&A practice. She advises Nigerian and international clients on public and private acquisitions, joint ventures and cross-border restructurings, with particular depth in regulated sectors.",
      "She is known for steering transactions through multi-agency approvals, including the FCCPC, SEC and sector regulators, and for keeping complex deals moving to signature.",
    ],
    education: ["LL.M., University of London", "B.L., Nigerian Law School", "LL.B., University of Nigeria, Nsukka"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "babatunde-adeyemi",
    name: "Babatunde Adeyemi",
    honorific: "SAN",
    role: "Partner",
    office: "Lagos",
    practices: ["dispute-resolution", "restructuring-insolvency"],
    bio: [
      "Babatunde heads the Dispute Resolution practice. A Senior Advocate of Nigeria, he appears before the Federal High Court, the Court of Appeal and the Supreme Court, and as counsel in domestic and international arbitrations.",
      "His practice spans shareholder disputes, banking litigation, and enforcement of awards and foreign judgments.",
    ],
    education: ["LL.M., University of Lagos", "B.L., Nigerian Law School", "LL.B., Obafemi Awolowo University"],
    admissions: ["Senior Advocate of Nigeria", "Fellow, Chartered Institute of Arbitrators"],
  }),
  p({
    slug: "ngozi-eze",
    name: "Ngozi Eze",
    role: "Partner",
    office: "Lagos",
    practices: ["banking-finance", "capital-markets"],
    bio: [
      "Ngozi advises lenders, sponsors and borrowers on syndicated and bilateral facilities, acquisition finance and structured debt, and issuers on bond and commercial paper programmes.",
    ],
    education: ["LL.M., London School of Economics", "B.L., Nigerian Law School", "LL.B., University of Ibadan"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "ibrahim-musa",
    name: "Ibrahim Musa",
    role: "Partner",
    office: "Abuja",
    phone: "+234 (0) 9 000 0000",
    practices: ["regulatory-compliance", "public-procurement-ppp", "competition-antitrust"],
    bio: [
      "Ibrahim leads the Abuja office and the firm's Regulatory practice. He advises on licensing, government contracts, public-private partnerships and engagement with federal ministries, departments and agencies.",
    ],
    education: ["LL.M., Ahmadu Bello University", "B.L., Nigerian Law School", "LL.B., Bayero University Kano"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "tamuno-briggs",
    name: "Tamuno Briggs",
    role: "Partner",
    office: "Lagos",
    practices: ["energy-natural-resources", "maritime-shipping"],
    bio: [
      "Tamuno heads the Energy practice. He advises on upstream asset acquisitions, Petroleum Industry Act compliance, host community trusts, gas commercialisation and marine logistics.",
    ],
    education: ["LL.M., University of Aberdeen", "B.L., Nigerian Law School", "LL.B., Rivers State University"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "funmilayo-bakare",
    name: "Funmilayo Bakare",
    role: "Partner",
    office: "Lagos",
    practices: ["tax"],
    bio: [
      "Funmilayo leads the Tax practice, advising on corporate tax planning, transaction structuring, transfer pricing and disputes before the Tax Appeal Tribunal, with a current focus on implementing the 2025 tax reform Acts.",
    ],
    education: ["LL.M., University of Lagos", "B.L., Nigerian Law School", "LL.B., University of Lagos", "ACTI, Chartered Institute of Taxation of Nigeria"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "chukwuemeka-obi",
    name: "Chukwuemeka Obi",
    role: "Partner",
    office: "Lagos",
    practices: ["technology-media-telecoms", "data-protection-privacy", "fintech-payments"],
    bio: [
      "Emeka leads the Technology, Media & Telecoms practice. He advises technology companies, payment service providers and telecoms operators on licensing, data protection, commercial contracts and fundraising.",
    ],
    education: ["LL.M., University of Cape Town", "B.L., Nigerian Law School", "LL.B., University of Benin"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria", "Certified Information Privacy Professional (CIPP/E)"],
  }),
  p({
    slug: "zainab-bello",
    name: "Zainab Bello",
    role: "Counsel",
    office: "Abuja",
    phone: "+234 (0) 9 000 0000",
    practices: ["employment-immigration", "regulatory-compliance"],
    bio: [
      "Zainab advises employers on workforce restructuring, executive contracts, expatriate quota and immigration matters, and employment disputes before the National Industrial Court.",
    ],
    education: ["LL.M., University of Abuja", "B.L., Nigerian Law School", "LL.B., University of Abuja"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "oluwaseun-adebayo",
    name: "Oluwaseun Adebayo",
    role: "Partner",
    office: "Lagos",
    practices: ["real-estate-construction", "private-client"],
    bio: [
      "Seun advises developers, investors and lenders on real estate acquisitions, development agreements, construction contracts and REIT structures, and families on succession and estate planning.",
    ],
    education: ["LL.M., University of Lagos", "B.L., Nigerian Law School", "LL.B., Lagos State University"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "kelechi-nwosu",
    name: "Kelechi Nwosu",
    role: "Senior Associate",
    office: "Lagos",
    practices: ["intellectual-property", "technology-media-telecoms"],
    bio: [
      "Kelechi advises on trade mark and patent portfolios, brand enforcement, anti-counterfeiting and technology licensing.",
    ],
    education: ["LL.M., University of Lagos", "B.L., Nigerian Law School", "LL.B., Nnamdi Azikiwe University"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "amara-okafor",
    name: "Amara Okafor",
    role: "Senior Associate",
    office: "Lagos",
    practices: ["dispute-resolution", "family-matrimonial", "restructuring-insolvency"],
    bio: [
      "Amara acts in commercial litigation and matrimonial proceedings, including insolvency matters and the enforcement of security.",
    ],
    education: ["B.L., Nigerian Law School", "LL.B., University of Nigeria, Nsukka"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
  p({
    slug: "yusuf-abdullahi",
    name: "Yusuf Abdullahi",
    role: "Associate",
    office: "Abuja",
    phone: "+234 (0) 9 000 0000",
    practices: ["public-procurement-ppp", "energy-natural-resources"],
    bio: [
      "Yusuf supports the Regulatory and Energy teams on power sector licensing, procurement and project documentation.",
    ],
    education: ["B.L., Nigerian Law School", "LL.B., Ahmadu Bello University"],
    admissions: ["Barrister & Solicitor of the Supreme Court of Nigeria"],
  }),
];

export const getPerson = (slug: string) => people.find((x) => x.slug === slug);
export const displayName = (x: Person) => (x.honorific ? `${x.name}, ${x.honorific}` : x.name);
export const initials = (name: string) =>
  name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
