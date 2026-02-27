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
  hrefLabel?: string;
  image?: string;
  images?: string[];
  timeline?: string;
  press?: { title: string; url: string }[];
  links?: { title: string; url: string }[];
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
    title: "Risky Business / Spherik",
    slug: "risky-business",
    role: "Product Apprentice",
    category: "Venture Capital / Accelerator",
    timeline: "2016 – 2017",
    description:
      "Joined Romania's first pre-seed fund and accelerator after my own startup journey — helping portfolio startups refine ideas, prepare for pitching, and implement technical strategy.",
    problem:
      "After City365, I wanted to learn the other side: how accelerators and VCs evaluate startups, guide product development, and help founders succeed.",
    solution: "Joined Spherik/Risky Business as Product Apprentice — working hands-on with startups on product refinement, pitch preparation, and technical strategy. Also helped organize Techsylvania and Startup Avalanche, judged pitching competitions, and scouted talent at hackathons.",
    impact: [
      "Part of the team recognized by CEE Awards as best entrepreneurship program in Romania",
      "Helped startups like Ebriza (€70K investment at €500K valuation), Clever Taxi, ChatX.ai, Skillview, ZigZad, BounceMatch, NiftyLearning, and Mushin",
      "Co-organized Startup Avalanche — international competition with €150K prize, featuring Tim Draper and Mark Shuttleworth as judges",
      "Judged pitching competitions and scouted new talent at student hackathons across Romania",
      "Worked alongside advisors from LiveRail (€500M exit to Facebook) and Skobbler (€24M exit to Telenav)",
      "Later became CTO of Yayzy — Risky Business promoted the launch, calling me 'our very own product ninja who went on to do impactful things'",
    ],
    stack: ["Product Strategy", "Technical Advisory", "Pitch Coaching", "Due Diligence", "Event Organization"],
    press: [
      { title: "EU-Startups", url: "https://www.eu-startups.com/2019/04/clujs-startup-ecosystem-at-a-glance/" },
      { title: "Business Review", url: "https://business-review.eu/tech/startup-avalanche-competition-organized-by-risky-business-during-techsylvania-gives-out-a-winning-prize-of-eur-150000-to-the-australian-startup-agunity-213596" },
      { title: "Startup Cafe", url: "https://startupcafe.ro/stiri-afaceri-21677254-risky-business-ebrize-investitie-casa-marcat-virtuala-htm-3406" },
      { title: "Start-up.ro", url: "https://start-up.ro/risky-business-si-universitatea-babes-bolyai-lanseaza-un-accelerator/" },
    ],
    links: [
      { title: "Accelerate Romania", url: "https://accelerate.gov.ro/en/entities/risky-business" },
      { title: "Yayzy Launch Shoutout", url: "https://www.facebook.com/share/1831T1L8oY/" },
    ],
    images: [
      "/images/projects/risky-business/yayzy-shoutout.jpg",
    ],
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
    hrefLabel: "View Pitch",
    video: "https://www.youtube.com/watch?v=WhJngwDFqsM",
    images: [
      "/images/projects/city365/team.jpg",
      "/images/projects/city365/pitching.jpg",
      "/images/projects/city365/screen696x696.jpeg",
      "/images/projects/city365/screen696x696-2.jpeg",
      "/images/projects/city365/IMG_3386-2.PNG",
      "/images/projects/city365/IMG_1300.PNG",
      "/images/projects/city365/login.png",
      "/images/projects/city365/working.jpg",
      "/images/projects/city365/coding.jpg",
    ],
    press: [
      { title: "Forbes Romania", url: "https://www.forbes.ro/articles/cele-mai-interesante-proiecte-si-aplicatii-ale-viitorilor-antreprenori-din-ul-romanesc-39761" },
      { title: "Ziarul Financiar", url: "https://www.zf.ro/business-hi-tech/patru-studenti-din-cluj-au-o-aplicatie-care-ajuta-restaurantele-sa-gaseasca-clienti-14770260" },
      { title: "Techsylvania", url: "https://medium.com/techsylvania/the-16-international-startup-finalists-at-startup-avalanche-c21e243c5d1f" },
      { title: "Sătmăreanul", url: "https://www.satmareanul.net/2015/03/28/city365-o-aplicatie-dezvoltata-de-o-echipa-de-studenti-din-care-fac-parte-si-doi-satmareni/" },
      { title: "Playtech", url: "https://playtech.ro/2015/cum-vor-tinerii-din-cluj-sa-faca-tehnologia-mai-utila-acestea-sunt-proiectele-care-ne-ar-ajuta/" },
    ],
    links: [
      { title: "Spherik Accelerator", url: "https://web.archive.org/web/20170728161813/https://spherikaccelerator.com/startups/" },
      { title: "Innovation Labs", url: "https://2016.innovationlabs.ro/2016.innovationlabs.ro/team/2015/city365/index.html" },
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
