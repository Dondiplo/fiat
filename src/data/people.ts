import type { StaticImageData } from "next/image";
import chinonsoSheriff from "../../public/images/people/chinonso-sheriff.jpg";
import yusufAmudaKannike from "../../public/images/people/yusuf-amuda-kannike.jpg";

// Real lawyers are written out in full and appear on the People pages. Profiles
// made with p() are PLACEHOLDERS invented for the design build (they only author
// sample insights); replace or remove them before launch.

export type Person = {
  slug: string;
  name: string;
  role: "Founder/Principal Partner" | "Managing Partner" | "Partner" | "Counsel" | "Senior Associate" | "Associate";
  honorific?: string;
  office?: "Lagos" | "Abuja";
  practices: string[]; // practice slugs
  focus?: string[]; // specialisms as the lawyer describes them
  photo?: StaticImageData;
  phone?: string;
  email?: string;
  bio: string[];
  education: string[];
  admissions?: string[];
  placeholder?: true;
};

const p = (person: Omit<Person, "email" | "phone" | "placeholder"> & { phone?: string }): Person => ({
  phone: "+234 (0) 1 000 0000",
  placeholder: true,
  ...person,
  email: `${person.slug.split("-")[0]}.${person.slug.split("-").slice(-1)[0]}@fiatjustitia.com`,
});

export const people: Person[] = [
  {
    slug: "chinonso-sheriff",
    name: "Adele Chinonso Sheriff",
    role: "Founder/Principal Partner",
    practices: ["criminal-law-defence", "dispute-resolution", "property-conveyancing", "real-estate-construction", "corporate-m-and-a", "entertainment-law"],
    focus: ["Criminal Law", "Civil Litigation", "Property Law", "Corporate Law", "Business Law", "Entertainment Law"],
    photo: chinonsoSheriff,
    bio: [
      "Chinonso is the Founder and Principal Partner of Fiat Justitia Attorneys, a full-service law firm dedicated to providing strategic, forward-thinking legal solutions. As a versatile and result-driven legal practitioner, Chinonso specializes in Criminal, Civil, Property, Corporate, Business, and Entertainment Law. He combines rigorous legal research, sharp analytical strategy, and persuasive advocacy to help clients navigate complex disputes and secure their commercial interests.",
      "Prior to establishing Fiat Justitia Attorneys, Chinonso built a solid foundation in core legal practice, developing a reputation for meticulous drafting, keen contract negotiation, and pragmatic counsel. Whether advising emerging businesses, protecting creative IP, managing high-stakes property transactions, or asserting client rights in litigation, his practice is rooted in uncompromising standards of excellence and client dedication.",
      "Chinonso earned his Bachelor of Laws degree (LL.B. Hons.) from the prestigious Afe Babalola University, Ado-Ekiti (ABUAD). He went on to fulfill the mandatory National Youth Service Corps (NYSC) service, before successfully completing his practical legal training at the Nigerian Law School, Bagauda Campus (Kano State).",
      "A passionate advocate for justice and sound governance, Chinonso remains committed to advancing the legal profession through impactful representation and relentless legal excellence.",
    ],
    education: ["B.L., Nigerian Law School, Bagauda Campus, Kano", "LL.B. (Hons.), Afe Babalola University, Ado-Ekiti"],
  },
  {
    slug: "yusuf-amuda-kannike",
    name: "Yusuf Amuda-Kannike",
    role: "Partner",
    practices: ["technology-media-telecoms", "data-protection-privacy", "dispute-resolution", "energy-natural-resources", "corporate-m-and-a", "regulatory-compliance"],
    focus: ["Technology Law", "Litigation & Advocacy", "Alternative Dispute Resolution", "Energy Law", "Corporate Practice"],
    photo: yusufAmudaKannike,
    bio: [
      "Yusuf is a Partner at Fiat Justitia Attorneys, a legal practitioner whose work sits where sound legal tradition meets the demands of a fast-changing economy. He has built a distinguished practice across technology law, litigation and courtroom advocacy, alternative dispute resolution, energy law and corporate practice. Clients seek him out for his sharp analysis, strategic judgment and results-driven counsel.",
      "His advisory work spans data protection and privacy, technology and digital-economy regulation, commercial transactions, regulatory compliance and corporate governance. In dispute resolution, he is a formidable advocate in the courtroom and an equally skilled negotiator, arbitrator-facing counsel and mediator-minded problem solver. He has handled and participated in notable matters across Nigeria’s court system, up to the Supreme Court of Nigeria.",
      "Yusuf holds a Master’s degree in Information Technology Law, which grounds his practice in the legal questions raised by emerging technologies. He is also preparing to pursue doctoral research as a prospective Ph.D. candidate. A respected voice in legal scholarship, he has authored over ten published articles in leading domestic and international journals.",
      "His approach pairs rigorous scholarship with practical, commercially minded advocacy. He is committed to giving clients clear, strategic and dependable counsel, whether in the boardroom, at the negotiating table or before the highest court in the land.",
    ],
    education: ["Master’s degree in Information Technology Law"],
  },
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

/** The firm's real lawyers, most senior first. */
const seniority: Person["role"][] = ["Founder/Principal Partner", "Managing Partner", "Partner", "Counsel", "Senior Associate", "Associate"];
export const team = people.filter((x) => !x.placeholder).sort((a, b) => seniority.indexOf(a.role) - seniority.indexOf(b.role));

export const getPerson = (slug: string) => people.find((x) => x.slug === slug);
export const displayName = (x: Person) => (x.honorific ? `${x.name}, ${x.honorific}` : x.name);
export const initials = (name: string) =>
  name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
