export type Project = {
  title: string;
  role: string;
  category: string;
  description: string;
  problem: string;
  impact: string[];
  stack: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Yayzy",
    role: "Co-founder & CTO",
    category: "Fintech / Sustainability / AI",
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
    role: "Engineering Manager",
    category: "DeFi / Blockchain",
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
    role: "CTO",
    category: "Staffing / Gig Economy",
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
    role: "Senior Engineer / Mobile Lead",
    category: "On-demand Delivery / Logistics",
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
    role: "Product Associate",
    category: "Venture Capital",
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
    role: "Technical Co-founder",
    category: "Hyper-local Marketplace / AI",
    description:
      "Real-time deals platform with proprietary AI that automatically fills empty venues by targeting nearby users.",
    problem: "Restaurants lose money on empty tables. Traditional marketing can't bring customers right when you need them.",
    impact: [
      "Built from hackathon win to Spherik Accelerator in Romania",
      "Raised €15K pre-seed, partnered with UNTOLD festival (biggest in Europe)",
      "30+ venue partners, 5,000 pre-registered users",
      "Pitched at Startup Avalanche to Tim Draper and top EU VCs",
      "Featured in Forbes Romania and Ziarul Financiar",
      "Built while working part-time and completing master's degree",
    ],
    stack: ["Ionic", "Angular", "Node.js", "Azure", "Proprietary AI"],
    href: "https://www.youtube.com/watch?v=WhJngwDFqsM",
  },
  {
    title: "clawdev.to",
    role: "Creator",
    category: "Developer Community",
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
