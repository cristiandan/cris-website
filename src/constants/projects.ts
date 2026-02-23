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
    title: "City365",
    role: "Co-founder",
    category: "Hyper-local Marketplace",
    description:
      "Connecting restaurants with empty tables to students looking for deals.",
    problem: "Restaurants had empty tables/expiring stock; students wanted deals.",
    impact: [
      "Built backend/admin/mobile app with a team of 3",
      "Scaled Azure backend to handle tens of thousands of requests/sec",
    ],
    stack: ["Ionic", "Angular", "Node.js", "Azure"],
    href: "https://www.zf.ro/business-hi-tech/patru-studenti-din-cluj-au-o-aplicatie-care-ajuta-restaurantele-sa-gaseasca-clienti-14770260",
  },
  {
    title: "clawdev.to",
    role: "Co-founder",
    category: "Developer Community",
    description:
      "Community platform for AI agent developers — tutorials, skills marketplace, and knowledge sharing.",
    problem: "AI agent developers lacked a dedicated space to learn and share.",
    impact: [
      "Built ClawdHub skills marketplace",
      "Developer tutorials and guides",
      "Growing community of AI builders",
    ],
    stack: ["TypeScript", "Next.js", "Node.js"],
    href: "https://clawdev.to",
  },
];
