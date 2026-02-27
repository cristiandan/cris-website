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
  videos?: { title: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "Yayzy",
    slug: "yayzy",
    role: "Co-founder & CTO",
    category: "Fintech / Sustainability / AI",
    timeline: "2019 – 2025",
    description:
      "Carbon footprint tracking through Open Banking — turning messy transaction data into actionable environmental insights. 'Fitbit for Carbon' — automatically calculates the CO2 impact of every purchase using proprietary ML.",
    problem:
      "Carbon footprinting was manual, inaccurate, and disconnected from daily life. Banking data is messy and hard to categorize. People wanted to act on climate but didn't know their personal impact — or how to reduce it.",
    solution:
      "Built the entire platform from scratch — React Native mobile app, AWS backend, ML classification engine. Co-founder said 'Chris has been instrumental... churning out the product.' Scaled to 31 countries with 2,500+ bank integrations, then led the B2B pivot to enterprise APIs for banks.",
    impact: [
      "Built iOS/Android app from scratch — 10,000+ users in first 3 months",
      "Featured as Apple App of the Day, TechCrunch (Mike Butcher), BBC",
      "Integrated 2,500+ banks in 31 countries via Open Banking APIs",
      "Scaled team from 2 to 9 engineers across US, India, Eastern Europe",
      "Raised ~$1.5M from Antler VC, angels, and 1,000+ crowdfunding investors (367% overfunded)",
      "Led B2B pivot: IBM Cloud partnership, Mastercard LOI, fintech integrations",
      "Forbes 30 Under 30 Europe (2023), PwC Net Zero Future50, Product Hunt Golden Kitty",
    ],
    stack: ["React Native", "Node.js", "AWS", "Python", "Terraform", "ML/AI"],
    press: [
      { title: "TechCrunch", url: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/" },
      { title: "BBC", url: "https://youtu.be/FlXCRRrPuAs" },
      { title: "Forbes Profile", url: "https://www.forbes.com/profile/cristian-dan/" },
      { title: "Business Insider", url: "https://www.businessinsider.com/climate-change-environmental-technology-startups-2020-11" },
      { title: "Sifted", url: "https://sifted.eu/articles/fintechs-going-green/" },
      { title: "Crowdfund Insider", url: "https://www.crowdfundinsider.com/2020/10/167799-uk-banking-app-yayzy-to-close-seedrs-campaign-with-more-than-625000-in-funding-secured/" },
    ],
    links: [
      { title: "Product Hunt", url: "https://www.producthunt.com/products/yayzy" },
      { title: "PwC Future50 Report", url: "https://www.pwc.co.uk/issues/esg/pdf/net-zero-future-50-2022.pdf" },
      { title: "Apple App of the Day", url: "https://apps.apple.com/gb/story/id1539957783" },
    ],
    videos: [
      { title: "Crowdfunding Campaign 2020", url: "https://youtu.be/zvyYckIAKE4" },
      { title: "Promo Video 2022", url: "https://vimeo.com/736152088" },
      { title: "Crowdfunding Campaign 2022", url: "https://vimeo.com/720574853" },
      { title: "Antler Demo Day 2019", url: "https://www.youtube.com/watch?v=lODg7xSkmvw" },
    ],
    images: [
      "/images/projects/yayzy/founders-banner.jpg",
      "/images/projects/yayzy/team-event.jpg",
      "/images/projects/yayzy/team-zoom.jpg",
      "/images/projects/yayzy/app-climate-positive.png",
      "/images/projects/yayzy/app-offset-month.png",
      "/images/projects/yayzy/app-transactions.png",
      "/images/projects/yayzy/app-insights.png",
      "/images/projects/yayzy/app-footprint.png",
      "/images/projects/yayzy/app-certificate.jpg",
    ],
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
      "On-demand student workforce platform — 'Uber for hospitality labour' — connecting high street businesses with university students for flexible short shifts. Now serving 75,000+ students and 1,000+ businesses including The Ivy, Ted Baker, and Chipotle.",
    problem:
      "The app was being built by an external agency without any in-house technical leadership — no architecture, no roadmap, and no engineering processes. A major fast food chain expected to go live in 3 months. Students needed flexible income that fit around lectures; businesses needed peak-hour support without committing to full shifts.",
    solution:
      "Joined as CTO and immediately implemented structure: Jira for tracking, clean architecture designed for the timeline, and engineering culture with code reviews and standups. Worked elbow-to-elbow with developers to ship on deadline, then rearchitected for scalability and security.",
    impact: [
      "Delivered MVP in under 4 months — major fast food chain went live on schedule",
      "Job postings grew 15x: from 10/week to 150+ per week",
      "Built team from 2 developers to 6 (hired 4 devs + designer)",
      "Migrated Firebase → AWS, cutting infrastructure costs by 70%",
      "Platform grew to 4,000+ verified students in London",
      "Established engineering culture: Jira, code reviews, standups, mentoring",
      "Technology enabled 40,000+ stints at 1,000+ businesses",
    ],
    stack: ["React", "React Native", "Node.js", "Firebase", "AWS", "Jira"],
    press: [
      { title: "Evening Standard", url: "https://www.standard.co.uk/news/tech/stint-app-students-jobs-high-street-a4544136.html" },
      { title: "The Times", url: "https://www.thetimes.com/life-style/food-drink/article/fancy-a-two-hour-shift-try-stint-a-new-app-helping-student-cash-in-q7vv55938" },
      { title: "Eater London", url: "https://london.eater.com/22677117/restaurant-jobs-temporary-work-apps-gig-economy" },
      { title: "TechRound", url: "https://techround.co.uk/interviews/sam-sol-schlagman-stint/" },
    ],
    links: [
      { title: "Stint Website", url: "https://stint.co/" },
    ],
    video: "https://youtube.com/shorts/U7lttoER0oI",
    images: [
      "/images/projects/stint/team-photo.jpg",
      "/images/projects/stint/cristian-hoodie.jpg",
      "/images/projects/stint/app-landing.png",
      "/images/projects/stint/app-calendar.png",
      "/images/projects/stint/app-offer.png",
      "/images/projects/stint/app-chipotle-job.png",
      "/images/projects/stint/app-business-post.png",
    ],
  },
  {
    title: "Zebra Fuel",
    slug: "zebra",
    role: "Senior Engineer / Mobile Lead",
    category: "On-demand Delivery / Logistics",
    timeline: "2017 – 2018",
    description:
      "On-demand fuel delivery startup backed by LocalGlobe, Firstminute Capital, and Zoopla founder Alex Chesterman — bringing fuel directly to vehicles across London. \"Like a Formula 1 pit stop for your car.\"",
    problem:
      "Zebra Fuel was growing its consumer delivery service but needed a strategic pivot to expand revenue beyond individual customers and build scalable fleet management tools.",
    solution:
      "Proposed and built a B2B business vertical from scratch, architecting the mobile apps and real-time fleet dashboard while mentoring a junior developer. The B2B pivot transformed the company from consumer-only to serving commercial fleets overnight.",
    impact: [
      "Grew business clients from 0 to 150, creating new B2B revenue stream",
      "Shipped iOS/Android apps used by thousands of Londoners",
      "Built custom routing logic enabling <30min delivery windows",
      "Architected ZEBRADASH — real-time fleet dashboard with GraphQL/Relay showing live orders, fuel delivery stats, and B2B vs B2C analytics",
      "Part of team during $2.5M seed raise from LocalGlobe, Firstminute Capital (their first investment), and Alex Chesterman",
      "Technology served 3,000+ customers and 15-van fleet at funding",
    ],
    stack: ["React Native", "Redux", "GraphQL", "Relay", "Google Maps API", "WebSocket"],
    press: [
      { title: "TechCrunch", url: "https://techcrunch.com/2018/02/05/zebra-fuel/" },
      { title: "Tech.eu", url: "https://tech.eu/2018/02/05/zebra-fuel-funding/" },
      { title: "Daily Mail", url: "https://www.dailymail.co.uk/news/article-5364769/Deliveroo-style-petrol-app-fuels-car-sleep.html" },
    ],
    links: [
      { title: "Web Archive", url: "https://web.archive.org/web/20190510045016/https://www.zebra-fuel.com/" },
      { title: "TechCrunch (Shutdown)", url: "https://techcrunch.com/2019/11/28/zebra-fuel-no-longer-delivering-london/" },
    ],
    images: [
      "/images/projects/zebra-fuel/dashboard-live-stats.jpg",
      "/images/projects/zebra-fuel/dashboard-b2b-orders.jpg",
      "/images/projects/zebra-fuel/app-intro.jpg",
      "/images/projects/zebra-fuel/app-order-confirmation.png",
      "/images/projects/zebra-fuel/app-booking.jpg",
      "/images/projects/zebra-fuel/website-homepage.jpg",
    ],
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
      "Judged pitching competitions and scouted new talent at student hackathons across Romania",
      "Worked alongside advisors from LiveRail (€500M exit to Facebook) and Skobbler (€24M exit to Telenav)",
      "Full circle: when Yayzy launched years later, the team proudly celebrated it as a win for the whole community — 'our very own going on to do impactful things'",
    ],
    stack: ["Product Strategy", "Technical Advisory", "Pitch Coaching", "Due Diligence", "Tech Talent Scouting"],
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
      "/images/projects/risky-business/techsylvania-working.jpg",
      "/images/projects/risky-business/team-full.jpg",
      "/images/projects/risky-business/team-small.jpg",
      "/images/projects/risky-business/mentoring-session.jpg",
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
