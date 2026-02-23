const LOGO_TOKEN = "pk_etnHgcM4RAC7WuVUVOE4nQ";
const logoUrl = (domain: string) => `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}`;

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
    logo: logoUrl("apple.com"),
  },
  {
    name: "Forbes 30 Under 30 Romania",
    description: "Tech & Innovation — Class of 2021",
    href: "https://www.forbes.ro/articles/forbes-30-sub-30-2021-cristian-dan-si-aspiratorul-digital-de-co2-232128",
    logo: logoUrl("forbes.com"),
  },
  {
    name: "Forbes 30 Under 30 Europe",
    description: "Finance — Class of 2023",
    href: "https://www.forbes.com/30-under-30/2023/europe/finance",
    logo: logoUrl("forbes.com"),
  },
  {
    name: "PwC Future50",
    description: "Selected as one of the UK's most innovative startups",
    href: "https://www.pwc.co.uk/future50",
    logo: logoUrl("pwc.com"),
  },
  {
    name: "TechCrunch",
    description: "\"Yayzy app automatically calculates the environmental impact of your spending\"",
    href: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/",
    logo: logoUrl("techcrunch.com"),
  },
  {
    name: "BBC Interview",
    description: "Featured on BBC discussing climate tech",
    href: "https://www.youtube.com/watch?v=FlXCRRrPuAs",
    logo: logoUrl("bbc.com"),
  },
  {
    name: "UK Government Net Zero",
    description: "Selected for Net Zero Innovation Programme",
    href: "https://eu-admin.eventscloud.com/docs/200008108/200179015",
    logo: logoUrl("gov.uk"),
  },
  {
    name: "Antler",
    description: "Backed by leading early-stage VC",
    href: "https://www.antler.co/blog/meet-13-companies-antler-london",
    logo: logoUrl("antler.co"),
  },
  {
    name: "Product Hunt Golden Kitty",
    description: "Social Impact — Finalist 2020",
    href: "https://www.producthunt.com/stories/announcing-the-2020-golden-kitty-award-winners",
    logo: logoUrl("producthunt.com"),
  },
];

// Simplified logo strip for homepage
export const proofLogos = [
  { name: "Apple", logo: logoUrl("apple.com") },
  { name: "Forbes", logo: logoUrl("forbes.com") },
  { name: "PwC", logo: logoUrl("pwc.com") },
  { name: "TechCrunch", logo: logoUrl("techcrunch.com") },
  { name: "BBC", logo: logoUrl("bbc.com") },
  { name: "Antler", logo: logoUrl("antler.co") },
];
