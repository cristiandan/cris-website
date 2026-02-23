export type PressItem = {
  name: string;
  description: string;
  href: string;
  logo: string;
};

export const press: PressItem[] = [
  {
    name: "Apple App of the Day",
    description: "Yayzy featured globally on the App Store",
    href: "https://apps.apple.com/gb/story/id1539957783",
    logo: "/logos/apple.svg",
  },
  {
    name: "Forbes 30 Under 30 Romania",
    description: "Tech & Innovation — Class of 2021",
    href: "https://www.forbes.ro/articles/forbes-30-sub-30-2021-cristian-dan-si-aspiratorul-digital-de-co2-232128",
    logo: "/logos/forbes.svg",
  },
  {
    name: "Forbes 30 Under 30 Europe",
    description: "Finance — Class of 2023",
    href: "https://www.forbes.com/30-under-30/2023/europe/finance",
    logo: "/logos/forbes.svg",
  },
  {
    name: "PwC Future50",
    description: "Selected as one of the UK's most innovative startups",
    href: "https://www.pwc.co.uk/future50",
    logo: "/logos/pwc.svg",
  },
  {
    name: "TechCrunch",
    description: "\"Yayzy app automatically calculates the environmental impact of your spending\"",
    href: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/",
    logo: "/logos/techcrunch.svg",
  },
  {
    name: "BBC Interview",
    description: "Featured on BBC discussing climate tech",
    href: "https://www.youtube.com/watch?v=FlXCRRrPuAs",
    logo: "/logos/bbc.svg",
  },
  {
    name: "UK Government Net Zero",
    description: "Selected for Net Zero Innovation Programme",
    href: "https://eu-admin.eventscloud.com/docs/200008108/200179015",
    logo: "/logos/uk-gov.svg",
  },
  {
    name: "Antler",
    description: "Backed by leading early-stage VC",
    href: "https://www.antler.co/blog/meet-13-companies-antler-london",
    logo: "/logos/antler.svg",
  },
];

// Simplified logo strip for homepage
export const proofLogos = [
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "Forbes", logo: "/logos/forbes.svg" },
  { name: "PwC", logo: "/logos/pwc.svg" },
  { name: "TechCrunch", logo: "/logos/techcrunch.svg" },
  { name: "BBC", logo: "/logos/bbc.svg" },
  { name: "Antler", logo: "/logos/antler.svg" },
];
