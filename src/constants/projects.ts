export type Project = {
  title: string;
  slug: string;
  role: string;
  category: string;
  description: string;
  problem: string;
  solution?: string;
  impact: string[];
  stack: string[];
  href?: string;
  image?: string;
  images?: string[];
  timeline?: string;
  press?: { title: string; url: string }[];
  video?: string;
};

export const projects: Project[] = [
  {
    title: "Yayzy",
    slug: "yayzy",
    role: "Co-founder & CTO",
    category: "Fintech / Sustainability / AI",
    timeline: "2019 – 2025",
    description:
      "Carbon footprint tracking through Open Banking — turning messy transaction data into actionable environmental insights.",
    problem:
      "Banking data is messy and carbon footprinting was manual/inaccurate.",
    impact: [
      "Integrated 2,500+ banks via Open Banking APIs",
      "Featured as Apple App of the Day",
      "Processed millions of transactions with real-time ML classification",
      "Raised ~$1.5M, built team of 7 engineers",
    ],
    stack: ["Node.js", "React Native", "AWS", "Python", "Terraform"],
    href: "https://apps.apple.com/gb/app/yayzy-carbon-footprint-co2/id1518567565",
  },
  {
    title: "Elektrik Network",
    slug: "elektrik",
    role: "Engineering Manager",
    category: "DeFi / Blockchain",
    timeline: "2024 (6-month contract)",
    description:
      "Decentralized exchange on LightLink (Ethereum L2) with gasless trading and token governance.",
    problem:
      "External agency had built the DEX but with zero documentation. Client needed to ship V1 and bring development in-house without losing momentum.",
    impact: [
      "Shipped V1 on schedule",
      "Hired 5-person internal team (frontend, backend, Solidity, QA, design)",
      "Documented entire undocumented codebase and infrastructure",
      "Migrated from agency to internal team with zero downtime",
      "Coordinated full smart contract security audit",
    ],
    stack: ["Solidity", "React", "Node.js", "AWS", "LightLink"],
    href: "https://elektrik.network",
  },
  {
    title: "Stint",
    slug: "stint",
    role: "CTO",
    category: "Staffing / Gig Economy",
    timeline: "2018 – 2019",
    description:
      "On-demand student workforce platform connecting employers with university students.",
    problem:
      "Employers needed flexible student workers; students needed flexible income.",
    impact: [
      "Grew platform from MVP to 4,000+ users and 150+ job postings/week",
      "Built and led team of 6 engineers",
      "Delivered MVP in under 4 months",
    ],
    stack: ["React", "React Native", "Node.js", "Firebase"],
  },
  {
    title: "Zebra Fuel",
    slug: "zebra",
    role: "Senior Engineer / Mobile Lead",
    category: "On-demand Delivery / Logistics",
    timeline: "2017 – 2018",
    description:
      "On-demand fuel delivery with real-time routing and fleet management.",
    problem:
      "Fuel delivery logistics needed real-time routing and high-reliability consumer apps.",
    impact: [
      "Managed technology used by 1000s of individual users and 70 business fleets",
      "Architected dashboard with GraphQL/Relay for real-time fleet visibility",
    ],
    stack: ["React Native", "Redux", "GraphQL", "Relay", "Google Maps API"],
  },
  {
    title: "Risky Business",
    slug: "risky-business",
    role: "Product Associate",
    category: "Venture Capital",
    timeline: "2017",
    description:
      "Early-stage VC firm — hands-on product work with portfolio startups.",
    problem:
      "Early-stage startups needed technical guidance and product strategy.",
    impact: [
      "Worked with 15+ startups across product ideation and refinement",
      "Provided technical guidance to non-technical founders",
      "Learned product management from experienced entrepreneurs",
    ],
    stack: ["Product Strategy", "Technical Advisory", "Startup Operations"],
  },
  {
    title: "City365",
    slug: "city365",
    role: "Technical Co-founder",
    category: "Hyper-local Marketplace / AI",
    timeline: "2015 – 2017",
    description:
      "Real-time deals platform with proprietary AI that automatically fills empty venues by targeting nearby users.",
    problem: "Restaurants lose money on empty tables. Traditional marketing can't bring customers right when you need them.",
    solution: "Built a SaaS platform that integrates with venue POS systems, detects low occupancy in real-time, and automatically generates targeted offers to nearby users — filling venues in minutes without human intervention.",
    impact: [
      "Built from hackathon win to Spherik Accelerator in Romania",
      "Raised €15K pre-seed at €150K valuation",
      "Partnered with UNTOLD festival (biggest in Europe) — investor is festival owner",
      "30+ venue partners, 5,000 pre-registered users",
      "Pilot: 10 bars, 1,000 users validated",
      "Pitched at Startup Avalanche to Tim Draper and top EU VCs",
      "Featured in Forbes Romania and Ziarul Financiar",
      "Led all technical work while juggling a part-time job to pay the bills and a master's program",
    ],
    stack: ["Ionic", "Angular", "Node.js", "Azure", "Proprietary AI"],
    href: "https://www.youtube.com/watch?v=WhJngwDFqsM",
    video: "https://www.youtube.com/watch?v=WhJngwDFqsM",
    images: [
      "/images/projects/city365/team.jpg",
      "/images/projects/city365/pitching.jpg",
      "/images/projects/city365/offers-list.png",
      "/images/projects/city365/offers-2.png",
      "/images/projects/city365/login.png",
      "/images/projects/city365/working.jpg",
      "/images/projects/city365/coding.jpg",
      "/images/projects/city365/offer-confirm.jpg",
    ],
    press: [
      { title: "Forbes Romania", url: "https://www.forbes.ro/articles/cele-mai-interesante-proiecte-si-aplicatii-ale-viitorilor-antreprenori-din-ul-romanesc-39761" },
      { title: "Ziarul Financiar", url: "https://www.zf.ro/business-hi-tech/patru-studenti-din-cluj-au-o-aplicatie-care-ajuta-restaurantele-sa-gaseasca-clienti-14770260" },
      { title: "Techsylvania", url: "https://medium.com/techsylvania/the-16-international-startup-finalists-at-startup-avalanche-c21e243c5d1f" },
    ],
  },
  {
    title: "clawdev.to",
    slug: "clawdev",
    role: "Creator",
    category: "Developer Community",
    timeline: "2024 – Present",
    description:
      "Community hub for OpenClaw/Clawdbot developers — tutorials, skills, and bot-to-bot knowledge sharing.",
    problem: "AI agent developers had no dedicated space to share workflows and learn from each other.",
    impact: [
      "Tutorials, guides, and troubleshooting for AI agent builders",
      "Bot-readable/writable API for agent-to-agent knowledge transfer",
      "Integration with ClawdHub skills marketplace",
    ],
    stack: ["TypeScript", "Next.js", "Node.js"],
    href: "https://clawdev.to",
  },
];
