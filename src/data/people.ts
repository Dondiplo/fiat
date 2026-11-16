import type { StaticImageData } from "next/image";
import adeleSheriff from "../../public/images/people/adele-sheriff.jpg";
import yusufAmudaKannike from "../../public/images/people/yusuf-amuda-kannike.jpg";

export type Person = {
  slug: string;
  name: string;
  shortName: string; // how buttons and headings refer to them
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
};

export const people: Person[] = [
  {
    slug: "adele-sheriff",
    name: "Adele C. Sheriff",
    shortName: "Sheriff",
    role: "Founder/Principal Partner",
    practices: ["criminal-law-defence", "dispute-resolution", "property-conveyancing", "real-estate-construction", "corporate-m-and-a", "entertainment-law"],
    focus: ["Criminal Law", "Civil Litigation", "Property Law", "Corporate Law", "Business Law", "Entertainment Law"],
    photo: adeleSheriff,
    bio: [
      "Sheriff is the Founder and Principal Partner of Fiat Justitia Attorneys, a full-service law firm dedicated to providing strategic, forward-thinking legal solutions. As a versatile and result-driven legal practitioner, Sheriff specializes in Criminal, Civil, Property, Corporate, Business, and Entertainment Law. He combines rigorous legal research, sharp analytical strategy, and persuasive advocacy to help clients navigate complex disputes and secure their commercial interests.",
      "Prior to establishing Fiat Justitia Attorneys, Sheriff built a solid foundation in core legal practice, developing a reputation for meticulous drafting, keen contract negotiation, and pragmatic counsel. Whether advising emerging businesses, protecting creative IP, managing high-stakes property transactions, or asserting client rights in litigation, his practice is rooted in uncompromising standards of excellence and client dedication.",
      "Sheriff earned his Bachelor of Laws degree (LL.B. Hons.) from the prestigious Afe Babalola University, Ado-Ekiti (ABUAD). He went on to fulfill the mandatory National Youth Service Corps (NYSC) service, before successfully completing his practical legal training at the Nigerian Law School, Bagauda Campus (Kano State).",
      "A passionate advocate for justice and sound governance, Sheriff remains committed to advancing the legal profession through impactful representation and relentless legal excellence.",
    ],
    education: ["B.L., Nigerian Law School, Bagauda Campus, Kano", "LL.B. (Hons.), Afe Babalola University, Ado-Ekiti"],
  },
  {
    slug: "yusuf-amuda-kannike",
    name: "Yusuf Amuda-Kannike",
    shortName: "Yusuf",
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
];

/** The firm's real lawyers, most senior first. */
const seniority: Person["role"][] = ["Founder/Principal Partner", "Managing Partner", "Partner", "Counsel", "Senior Associate", "Associate"];
export const team = [...people].sort((a, b) => seniority.indexOf(a.role) - seniority.indexOf(b.role));

export const getPerson = (slug: string) => people.find((x) => x.slug === slug);
export const displayName = (x: Person) => (x.honorific ? `${x.name}, ${x.honorific}` : x.name);
export const initials = (name: string) =>
  name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
