// Practice areas for businesses, institutions, families and individuals.

export type Practice = {
  slug: string;
  name: string;
  summary: string;
  overview: string[];
  services: string[];
  related: string[];
  featured?: boolean;
};

export const practices: Practice[] = [
  {
    slug: "corporate-m-and-a",
    name: "Corporate & M&A",
    featured: true,
    summary: "Public and private acquisitions, joint ventures and reorganisations, run from term sheet to completion.",
    overview: [
      "Corporate transactions are at the core of our practice. We act for Nigerian groups, multinationals and investors on acquisitions, disposals, mergers and joint ventures across every major sector of the economy.",
      "We know the Companies and Allied Matters Act 2020, the Investments and Securities Act 2025 and the merger control regime under the FCCPA in detail. We also know how the regulators apply them in practice, which is what keeps deals on timetable.",
    ],
    services: ["Private M&A", "Public takeovers and schemes of arrangement", "Joint ventures and shareholder arrangements", "Corporate governance and board advisory", "Group reorganisations", "Foreign direct investment and market entry"],
    related: ["private-equity-venture-capital", "competition-antitrust", "tax", "banking-finance"],
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    summary: "Lending, structured and acquisition finance for banks, development finance institutions, sponsors and borrowers.",
    overview: [
      "We advise local and international lenders, development finance institutions and corporate borrowers on the full range of finance transactions, from bilateral facilities to multi-tranche syndicated deals.",
      "The team works closely with our regulatory lawyers on CBN requirements, foreign exchange matters and the perfection of security.",
    ],
    services: ["Syndicated and bilateral lending", "Acquisition and leveraged finance", "Trade and commodity finance", "Development finance", "Security perfection and enforcement", "CBN and foreign exchange regulation"],
    related: ["capital-markets", "restructuring-insolvency", "fintech-payments"],
  },
  {
    slug: "capital-markets",
    name: "Capital Markets",
    summary: "Equity and debt offerings, listings and securities regulation on the Nigerian Exchange and beyond.",
    overview: [
      "We act for issuers, issuing houses and trustees on equity and debt capital markets transactions, including IPOs, rights issues, bond and sukuk programmes and commercial paper.",
      "We advise on SEC Nigeria registration, NGX and NASD listing requirements and continuing obligations under the Investments and Securities Act 2025.",
    ],
    services: ["IPOs and secondary offerings", "Rights issues and private placements", "Corporate, state and sukuk bonds", "Commercial paper programmes", "Collective investment schemes and REITs", "Securities regulation and compliance"],
    related: ["banking-finance", "corporate-m-and-a", "real-estate-construction"],
  },
  {
    slug: "dispute-resolution",
    name: "Dispute Resolution & Arbitration",
    featured: true,
    summary: "High-stakes litigation, arbitration and investigations, led by Senior Advocates and experienced trial counsel.",
    overview: [
      "We represent clients in their most significant disputes, before Nigerian courts at every level and in domestic and international arbitration seated in Lagos, London, Paris and elsewhere.",
      "We build our strategy around the commercial outcome the client needs, whether that is an early settlement, an injunction or enforcement of an award, and we handle each step of the case accordingly.",
    ],
    services: ["Commercial litigation", "Domestic and international arbitration", "Enforcement of awards and foreign judgments", "Regulatory investigations", "Shareholder and partnership disputes", "Mediation under the Arbitration and Mediation Act 2023"],
    related: ["restructuring-insolvency", "employment-immigration", "intellectual-property"],
  },
  {
    slug: "energy-natural-resources",
    name: "Energy & Natural Resources",
    summary: "Oil, gas, power and mining across the value chain, under the Petroleum Industry Act and the Electricity Act 2023.",
    overview: [
      "From Lagos and Abuja, we advise indigenous producers, international oil companies, investors and lenders on upstream, midstream and downstream matters.",
      "Our power practice covers generation, transmission and distribution, and we advise on the state electricity markets created by the Electricity Act 2023.",
    ],
    services: ["Upstream asset acquisitions and divestments", "PIA compliance and host community trusts", "Gas commercialisation and midstream infrastructure", "Power generation and mini-grids", "Mining licences and solid minerals", "Energy project finance"],
    related: ["public-procurement-ppp", "maritime-shipping", "banking-finance"],
  },
  {
    slug: "tax",
    name: "Tax",
    featured: true,
    summary: "Tax planning, transaction structuring and disputes, including implementation of Nigeria's 2025 tax reforms.",
    overview: [
      "Tax affects nearly every transaction we work on. Our tax team works alongside our deal lawyers on structuring, and advises clients directly on compliance, incentives and disputes.",
      "We are currently helping clients prepare for and implement the Nigeria Tax Act 2025 and the related administration reforms.",
    ],
    services: ["Corporate and transaction tax", "Transfer pricing", "VAT and indirect taxes", "Tax incentives and pioneer status", "Tax audits and investigations", "Tax Appeal Tribunal and court disputes"],
    related: ["corporate-m-and-a", "private-client", "regulatory-compliance"],
  },
  {
    slug: "technology-media-telecoms",
    name: "Technology, Media & Telecoms",
    summary: "Licensing, commercial contracts and regulation for technology, media and telecoms businesses.",
    overview: [
      "We advise start-ups, scale-ups and established operators on the legal side of building and running technology businesses in Nigeria.",
      "We know the NCC, NITDA and NBC licensing regimes in practice, and we help clients go to market quickly without taking on avoidable regulatory risk.",
    ],
    services: ["Telecoms licensing and spectrum", "Technology contracts and outsourcing", "Content, broadcasting and media", "Digital platforms and e-commerce", "Cloud and data centre projects", "Emerging tech: AI, blockchain and digital assets"],
    related: ["data-protection-privacy", "fintech-payments", "intellectual-property"],
  },
  {
    slug: "fintech-payments",
    name: "Fintech & Payments",
    summary: "Licensing, product structuring and fundraising for payments, lending and digital-asset businesses.",
    overview: [
      "We help fintech companies get licensed and stay compliant, from the CBN's payment service licence categories to SEC rules on digital assets.",
      "We also act for banks and investors partnering with or investing in fintech companies.",
    ],
    services: ["CBN payment and switching licences", "Digital lending and FCCPC registration", "Digital assets and SEC regulation", "Open banking", "Bank–fintech partnerships", "Venture fundraising"],
    related: ["technology-media-telecoms", "banking-finance", "private-equity-venture-capital"],
  },
  {
    slug: "private-equity-venture-capital",
    name: "Private Equity & Venture Capital",
    summary: "Fund formation, buy-outs, growth investments and exits for sponsors, founders and investors.",
    overview: [
      "We act for private equity sponsors, venture capital funds, family offices and founders through the whole investment cycle: fund formation, deal execution, portfolio management and exit.",
    ],
    services: ["Fund formation", "Buy-outs and growth equity", "Venture rounds (seed to Series C+)", "Management incentive plans", "Portfolio support", "Exits and secondaries"],
    related: ["corporate-m-and-a", "fintech-payments", "tax"],
  },
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    summary: "Acquisitions, developments, construction contracts and real estate finance.",
    overview: [
      "We advise developers, investors, occupiers and lenders on all aspects of commercial and residential real estate, including title due diligence, development agreements and construction contracts.",
    ],
    services: ["Acquisitions and title due diligence", "Development and joint venture agreements", "FIDIC and bespoke construction contracts", "Leasing", "Real estate finance", "REITs"],
    related: ["capital-markets", "banking-finance", "private-client"],
  },
  {
    slug: "regulatory-compliance",
    name: "Regulatory & Compliance",
    summary: "Licensing, investigations and compliance programmes across Nigeria's federal and state regulators.",
    overview: [
      "We help clients get the licences and approvals they need, deal with regulators constructively, and respond quickly and calmly when an investigation starts.",
    ],
    services: ["Licensing and permits", "Anti-bribery and corruption", "AML/CFT compliance", "Regulatory investigations", "Compliance programme design", "Government relations"],
    related: ["competition-antitrust", "data-protection-privacy", "public-procurement-ppp"],
  },
  {
    slug: "competition-antitrust",
    name: "Competition & Antitrust",
    summary: "Merger control, conduct investigations and consumer protection under the FCCPA.",
    overview: [
      "We advise on merger notifications to the FCCPC, competition compliance, abuse of dominance and consumer protection matters, including sector-specific regimes.",
    ],
    services: ["Merger notifications", "Conduct investigations", "Consumer protection", "Competition compliance", "Sector regulator interface"],
    related: ["corporate-m-and-a", "regulatory-compliance"],
  },
  {
    slug: "data-protection-privacy",
    name: "Data Protection & Privacy",
    summary: "Compliance with the Nigeria Data Protection Act 2023, breach response and cross-border transfers.",
    overview: [
      "We help organisations build practical privacy programmes under the Nigeria Data Protection Act 2023 and the NDPC's guidance, and we support them when a breach or regulator inquiry arises.",
    ],
    services: ["NDPA compliance programmes", "Data protection impact assessments", "Cross-border data transfers", "Breach response", "NDPC audits and filings", "Privacy by design"],
    related: ["technology-media-telecoms", "regulatory-compliance"],
  },
  {
    slug: "employment-immigration",
    name: "Employment & Immigration",
    summary: "Workforce advice, executive contracts, restructuring and expatriate immigration.",
    overview: [
      "We advise employers on the full employment lifecycle, from hiring and incentives to restructuring and disputes, and handle expatriate quota and residence permit matters.",
    ],
    services: ["Employment contracts and policies", "Restructuring and redundancies", "Executive incentives", "Expatriate quota and immigration", "Pensions", "National Industrial Court disputes"],
    related: ["dispute-resolution", "regulatory-compliance"],
  },
  {
    slug: "entertainment-law",
    name: "Entertainment Law",
    summary: "Music, film, talent and live events: the deals and disputes behind Nigeria's creative industries.",
    overview: [
      "We advise artists, producers, labels, studios, managers and brands across music, film, television and live entertainment, from first contracts to international distribution deals.",
      "We negotiate recording, publishing and distribution agreements, protect rights under the Copyright Act 2022, and resolve royalty and contract disputes, so creative work earns what it should at home and abroad.",
    ],
    services: ["Recording, publishing and distribution agreements", "Artist and talent management contracts", "Film and TV production, financing and distribution", "Brand endorsements and image rights", "Concerts, tours and live events", "Royalty and copyright disputes"],
    related: ["intellectual-property", "technology-media-telecoms", "dispute-resolution"],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    summary: "Brand protection, IP infringement claims, patents, copyright and technology transfer.",
    overview: [
      "We protect and enforce clients' trade marks, patents, designs and copyright, and register technology transfer agreements with NOTAP.",
    ],
    services: ["Trade mark and patent prosecution", "Anti-counterfeiting", "IP infringement and litigation", "Copyright and media", "NOTAP registrations", "IP portfolio strategy"],
    related: ["technology-media-telecoms", "entertainment-law", "dispute-resolution"],
  },
  {
    slug: "restructuring-insolvency",
    name: "Restructuring & Insolvency",
    summary: "Debt restructuring, business rescue and enforcement for creditors and companies.",
    overview: [
      "We advise lenders, boards and insolvency practitioners on restructurings and on the rescue procedures in CAMA 2020, including administration and company voluntary arrangements.",
    ],
    services: ["Debt restructuring", "Administration and CVAs", "Receiverships", "AMCON matters", "Security enforcement", "Distressed M&A"],
    related: ["banking-finance", "dispute-resolution"],
  },
  {
    slug: "public-procurement-ppp",
    name: "Public Procurement & PPP",
    summary: "Concessions, PPPs and government contracts at federal and state level.",
    overview: [
      "We advise governments, sponsors and lenders on PPP and concession projects under the ICRC framework, and bidders on public procurement.",
    ],
    services: ["PPP and concession structuring", "Procurement advice", "Government contracts", "Infrastructure project documentation"],
    related: ["energy-natural-resources", "real-estate-construction", "regulatory-compliance"],
  },
  {
    slug: "maritime-shipping",
    name: "Maritime & Shipping",
    summary: "Vessel finance, charter parties, admiralty claims and port concessions.",
    overview: [
      "We act for shipowners, charterers, financiers and port operators on transactional and contentious maritime matters, including vessel arrests.",
    ],
    services: ["Vessel finance and registration", "Charter parties", "Admiralty claims and arrests", "Cabotage", "Port and terminal concessions"],
    related: ["energy-natural-resources", "dispute-resolution"],
  },
  {
    slug: "debt-recovery",
    name: "Debt Recovery",
    summary: "Fast, cost-effective recovery of unpaid debts for businesses, lenders and individuals.",
    overview: [
      "We recover commercial and consumer debts efficiently, starting with demand letters and negotiated settlements and moving to court when needed, including the undefended list and summary judgment procedures.",
      "After judgment we pursue enforcement through garnishee proceedings, writs of attachment and, where appropriate, insolvency proceedings.",
    ],
    services: ["Letters of demand", "Negotiated repayment plans", "Undefended list and summary judgment", "Garnishee proceedings", "Enforcement of judgments", "Portfolio recovery for lenders"],
    related: ["dispute-resolution", "banking-finance", "restructuring-insolvency"],
  },
  {
    slug: "private-client",
    name: "Wills, Probate & Estates",
    summary: "Wills, trusts, probate and estate administration that protect your family and what you have built.",
    overview: [
      "We help individuals and families plan ahead and settle estates with as little delay and conflict as possible, covering wills, trusts, letters of administration and family governance.",
      "Where an estate is contested, our disputes team acts in probate litigation before the State High Courts.",
    ],
    services: ["Wills and codicils", "Trusts and family foundations", "Probate and letters of administration", "Estate administration", "Succession planning for business owners", "Contested estates"],
    related: ["family-matrimonial", "property-conveyancing", "tax"],
  },
  {
    slug: "family-matrimonial",
    name: "Family & Matrimonial",
    featured: true,
    summary: "Divorce, custody, maintenance and property settlements, handled with discretion and care.",
    overview: [
      "Family matters are among the hardest a person will face. We advise with sensitivity and in confidence, and we try to reach fair outcomes without unnecessary conflict. When court is the right route, we are fully prepared for it.",
      "We act in proceedings under the Matrimonial Causes Act for statutory marriages, and advise on customary and Islamic marriages, child custody under the Child's Rights Act, and cross-border family issues.",
    ],
    services: ["Divorce and judicial separation", "Child custody and access", "Spousal and child maintenance", "Division of matrimonial property", "Prenuptial and postnuptial agreements", "Adoption and guardianship"],
    related: ["private-client", "human-rights-constitutional", "property-conveyancing"],
  },
  {
    slug: "criminal-law-defence",
    name: "Criminal Law & Defence",
    featured: true,
    summary: "Responsive defence from the first police invitation through to trial and appeal.",
    overview: [
      "If you, a family member or a senior executive is invited for questioning, arrested or charged, early advice matters. We respond quickly, attend interviews and work to secure bail.",
      "We defend clients before the Magistrate, State and Federal High Courts in matters brought by the police, EFCC, ICPC and other agencies, applying the protections of the Administration of Criminal Justice Act 2015.",
    ],
    services: ["Police and agency interviews", "Bail applications", "Trial defence", "Appeals", "Financial and economic crime", "Private prosecutions"],
    related: ["human-rights-constitutional", "regulatory-compliance", "dispute-resolution"],
  },
  {
    slug: "property-conveyancing",
    name: "Property & Conveyancing",
    featured: true,
    summary: "Safe purchase, sale and leasing of land and homes, from title search to Governor's consent.",
    overview: [
      "Buying land or a home is a major investment, and title problems are common. We carry out thorough searches, verify title and documents, and handle perfection of title, including Governor's consent under the Land Use Act.",
      "We also advise landlords and tenants on leases, rent disputes and recovery of premises, including under the Lagos State Tenancy Law.",
    ],
    services: ["Land and title searches", "Deeds of assignment and contracts of sale", "Certificate of Occupancy and Governor's consent", "Residential leases", "Landlord and tenant disputes", "Mortgages"],
    related: ["real-estate-construction", "private-client", "dispute-resolution"],
  },
  {
    slug: "human-rights-constitutional",
    name: "Human Rights & Constitutional Law",
    summary: "Enforcing fundamental rights and challenging unlawful action by public authorities.",
    overview: [
      "We bring proceedings to enforce the fundamental rights guaranteed by Chapter IV of the 1999 Constitution, under the Fundamental Rights (Enforcement Procedure) Rules, against unlawful arrest, detention and other abuses of power.",
      "We also act in constitutional litigation, judicial review and election petitions under the Electoral Act 2022.",
    ],
    services: ["Fundamental rights enforcement", "Unlawful arrest and detention", "Judicial review", "Constitutional litigation", "Election petitions", "Public interest litigation"],
    related: ["criminal-law-defence", "dispute-resolution", "public-procurement-ppp"],
  },
  {
    slug: "personal-injury-negligence",
    name: "Personal Injury & Medical Negligence",
    summary: "Compensation for injury caused by accidents, unsafe workplaces or negligent medical care.",
    overview: [
      "We help injured people and bereaved families claim compensation from those responsible, including drivers, employers, property owners, hospitals and their insurers.",
      "We work with medical experts to build each claim, and we negotiate firmly with insurers before going to court.",
    ],
    services: ["Road traffic accidents", "Workplace injuries and employees' compensation", "Medical and clinical negligence", "Fatal accident claims", "Product liability", "Insurance claims"],
    related: ["dispute-resolution", "employment-immigration"],
  },
  {
    slug: "immigration-citizenship",
    name: "Immigration & Citizenship",
    summary: "Visas, residence permits and citizenship for individuals and families moving to or from Nigeria.",
    overview: [
      "We advise foreign nationals and their families on entering, living and working in Nigeria, and Nigerians on citizenship, dual nationality and documents for relocation abroad.",
    ],
    services: ["Visas and entry permits", "Residence permits (CERPAC)", "Citizenship by registration and naturalisation", "Dual citizenship", "Family relocation", "Document legalisation"],
    related: ["employment-immigration", "family-matrimonial"],
  },
];

export const getPractice = (slug: string) => practices.find((x) => x.slug === slug);
export const practicesByName = [...practices].sort((a, b) => a.name.localeCompare(b.name));
