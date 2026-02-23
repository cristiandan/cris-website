const LOGO_TOKEN = "pk_etnHgcM4RAC7WuVUVOE4nQ";
const logoUrl = (domain: string) => `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}`;

export type PressItem = {
  name: string;
  description: string;
  href: string;
  logo: string;
};

// =============================================================================
// AWARDS & RECOGNITION
// =============================================================================

export const awards: PressItem[] = [
  {
    name: "Forbes 30 Under 30 Europe",
    description: "Finance — Class of 2023",
    href: "https://www.forbes.com/profile/cristian-dan/",
    logo: logoUrl("forbes.com"),
  },
  {
    name: "Forbes 30 Under 30 Romania",
    description: "Tech & Innovation — Class of 2021",
    href: "https://www.forbes.ro/articles/forbes-30-sub-30-2021-cristian-dan-si-aspiratorul-digital-de-co2-232128",
    logo: logoUrl("forbes.com"),
  },
  {
    name: "Apple App of the Day",
    description: "Yayzy featured globally on the App Store",
    href: "https://apps.apple.com/gb/story/id1539957783",
    logo: logoUrl("apple.com"),
  },
  {
    name: "PwC Net Zero Future 50",
    description: "UK's most innovative climate startups — 2022",
    href: "https://www.pwc.co.uk/issues/esg/net-zero-future-50.html",
    logo: logoUrl("pwc.com"),
  },
  {
    name: "Product Hunt Golden Kitty",
    description: "Social Impact — #3 Finalist 2020",
    href: "https://www.producthunt.com/stories/announcing-the-2020-golden-kitty-award-winners",
    logo: logoUrl("producthunt.com"),
  },
  {
    name: "Digital Top 50",
    description: "Europe's leading tech award by McKinsey & Freshfields",
    href: "https://www.dt50.org/",
    logo: logoUrl("dt50.org"),
  },
  {
    name: "SET100 Award",
    description: "Top 100 Energy Transition Startups Worldwide",
    href: "https://www.startup-energy-transition.com/set100-database/yayzy-limited/",
    logo: logoUrl("startup-energy-transition.com"),
  },
  {
    name: "WorldFestival Top 50",
    description: "World Impact & Environment Category — UK",
    href: "https://worldfestival.com/awards/top-50-startup-award-winners/",
    logo: logoUrl("worldfestival.com"),
  },
];

// =============================================================================
// PRESS COVERAGE — TOP TIER (Dedicated articles, major outlets)
// =============================================================================

export const pressCoverage: PressItem[] = [
  // TOP TIER
  {
    name: "TechCrunch",
    description: "\"Yayzy app automatically calculates the environmental impact of your spending\"",
    href: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/",
    logo: logoUrl("techcrunch.com"),
  },
  {
    name: "BBC",
    description: "TV interview discussing climate tech and carbon tracking",
    href: "https://www.youtube.com/watch?v=FlXCRRrPuAs",
    logo: logoUrl("bbc.com"),
  },
  {
    name: "Business Insider",
    description: "Featured in \"25 European Startups Fighting Climate Change\"",
    href: "https://www.businessinsider.com/climate-change-environmental-technology-startups-2020-11",
    logo: logoUrl("businessinsider.com"),
  },
  {
    name: "Business Insider",
    description: "\"Sustainable banking startup Yayzy\" — COVID startup resilience story",
    href: "https://www.businessinsider.com/tech-startups-covid-19-future-fund-2020-9",
    logo: logoUrl("businessinsider.com"),
  },
  {
    name: "CNN",
    description: "Featured in carbon footprint tracking apps coverage",
    href: "https://www.cnn.com/2021/03/15/tech/evocco-carbon-footprint-app-ireland-spc-intl/index.html",
    logo: logoUrl("cnn.com"),
  },
  // TIER 1 - Major UK/Global Publications
  {
    name: "The Independent",
    description: "\"Five financial apps to save the planet\"",
    href: "https://www.independent.co.uk/money/financial-apps-reuse-save-free-help-food-clothes-green-eco-b1958402.html",
    logo: logoUrl("independent.co.uk"),
  },
  {
    name: "Daily Mirror",
    description: "\"Six free apps that can help you save the planet\" — #2",
    href: "https://www.mirror.co.uk/money/six-free-apps-can-help-25408989",
    logo: logoUrl("mirror.co.uk"),
  },
  {
    name: "This Is Money",
    description: "\"Six tools to track your carbon footprint\" — #1 pick",
    href: "https://www.thisismoney.co.uk/money/bills/article-9126055/Six-tools-track-personal-carbon-footpring.html",
    logo: logoUrl("dailymail.co.uk"),
  },
  {
    name: "Evening Standard",
    description: "Featured in \"Five apps to track your carbon footprint\"",
    href: "https://www.standard.co.uk/reveller/restaurants/how-to-eat-like-a-climatarian-vegan-sustainable-meat-cop26-b964164.html",
    logo: logoUrl("standard.co.uk"),
  },
  {
    name: "Sifted",
    description: "\"10 European green fintechs to watch\" — Sifted Watchlist",
    href: "https://sifted.eu/articles/fintechs-going-green/",
    logo: logoUrl("sifted.eu"),
  },
  // TIER 2 - Dedicated Articles & Interviews
  {
    name: "Input (Inverse)",
    description: "Dedicated launch article about Yayzy",
    href: "https://www.inverse.com/input/tech/the-yayzy-app-calculates-your-spendings-toll-on-climate-change",
    logo: logoUrl("inverse.com"),
  },
  {
    name: "TEDxLondon",
    description: "Featured as recommended carbon tracking app",
    href: "https://tedxlondon.com/podcast/how-to-make-big-oil-go-bust-mark-campanale/",
    logo: logoUrl("ted.com"),
  },
  {
    name: "TechRound",
    description: "Full interview — mentions \"Cris (our CTO)\"",
    href: "https://techround.co.uk/interviews/a-chat-with-mankaran-ahluwalia-yayzy/",
    logo: logoUrl("techround.co.uk"),
  },
  {
    name: "International Banker",
    description: "IBM partnership feature — dedicated paragraph",
    href: "https://internationalbanker.com/banking/its-time-for-banks-to-invest-in-deeper-modernisation-to-unlock-competitiveness/",
    logo: logoUrl("internationalbanker.com"),
  },
  // Romanian Press (about Cristian)
  {
    name: "Ziarul Financiar",
    description: "\"ZF IT Generation: Cristian Dan, CTO al Yayzy\" — dedicated interview",
    href: "https://www.zf.ro/zf-it-generation/zf-it-generation-cristian-dan-cofondator-cto-yayzy-aplicatie-21795656",
    logo: logoUrl("zf.ro"),
  },
  {
    name: "G4Media",
    description: "\"Cristian Dan, tânăr antreprenor în Forbes Under 30\" — Q&A interview",
    href: "https://www.g4media.ro/cristian-dan-tanar-antreprenor-in-top-forbes-under-30-europa",
    logo: logoUrl("g4media.ro"),
  },
  {
    name: "Adevarul",
    description: "\"A Romanian in London created an app...\" — long-form profile",
    href: "https://adevarul.ro/stil-de-viata/tehnologie/un-roman-stabilit-la-londra-a-creat-o-aplicatie-2283324.html",
    logo: logoUrl("adevarul.ro"),
  },
  {
    name: "Gazeta Nord-Vest",
    description: "Hometown newspaper coverage of Forbes 30 Under 30",
    href: "https://www.gazetanord-vest.ro/2023/03/un-satmarean-se-afla-pe-lista-forbes-a-tinerilor-de-succes-din-europa/",
    logo: logoUrl("gazetanord-vest.ro"),
  },
  {
    name: "Forbes Romania",
    description: "Yayzy expansion to 30+ European countries",
    href: "https://www.forbes.ro/yayzy-a-ajuns-si-in-romania-si-in-alte-30-de-tari-europene-280260",
    logo: logoUrl("forbes.com"),
  },
  // TIER 3 - Industry Publications
  {
    name: "Fintech Times",
    description: "\"London Startup YAYZY Launches Carbon Tracking App\"",
    href: "https://thefintechtimes.com/london-startup-yayzy-launches-carbon-purchase-tracking-app/",
    logo: logoUrl("thefintechtimes.com"),
  },
  {
    name: "The Paypers",
    description: "\"Yayzy to help use Open Banking for carbon offsetting\"",
    href: "https://thepaypers.com/online-mobile-banking/yayzy-to-help-use-open-banking-for-off-setting-carbon-emissions--1246402",
    logo: logoUrl("thepaypers.com"),
  },
  {
    name: "IBS Intelligence",
    description: "\"Yayzy rolls out iOS app to track carbon emissions\"",
    href: "https://ibsintelligence.com/ibsi-news/yayzy-rolls-out-new-ios-app-to-track-carbon-emissions-of-spendings/",
    logo: logoUrl("ibsintelligence.com"),
  },
  {
    name: "Finextra",
    description: "\"Yayzy launches 'Fitbit for Carbon'\"",
    href: "https://www.finextra.com/pressarticle/85451/yayzy-launches-fitbit-for-carbon",
    logo: logoUrl("finextra.com"),
  },
  {
    name: "Good With Money",
    description: "\"'Fitbit for carbon' app launches\" + CEO quote",
    href: "https://good-with-money.com/2021/01/04/uk-to-miss-climate-target-as-green-bonds-boom/",
    logo: logoUrl("good-with-money.com"),
  },
  {
    name: "Retail Banker International",
    description: "Business model and revenue details coverage",
    href: "https://www.retailbankerinternational.com/comment/tighter-compression-around-nii-means-that-traditional-providers-should-embrace-innovation-to-generate-revenues-from-alternative-models/",
    logo: logoUrl("retailbankerinternational.com"),
  },
  {
    name: "GlobalData",
    description: "\"Green banking gains momentum\" — industry analysis",
    href: "https://www.globaldata.com/media/disruptor/green-banking-gains-momentum-fight-climate-change-says-globaldata/",
    logo: logoUrl("globaldata.com"),
  },
  {
    name: "UK Tech News",
    description: "Launch coverage — names Cristian Dan as co-founder",
    href: "https://www.uktech.news/news/london-startup-launches-app-to-track-carbon-emissions-20201223",
    logo: logoUrl("uktech.news"),
  },
  {
    name: "Crowdfund Insider",
    description: "\"Yayzy closes Seedrs campaign with £625k+ secured\"",
    href: "https://www.crowdfundinsider.com/2020/10/167799-uk-banking-app-yayzy-to-close-seedrs-campaign-with-more-than-625000-in-funding-secured/",
    logo: logoUrl("crowdfundinsider.com"),
  },
];

// =============================================================================
// BACKED BY — Institutional recognition & partnerships
// =============================================================================

export const backedBy: PressItem[] = [
  {
    name: "University of Oxford",
    description: "Featured case study — Saïd Business School entrepreneurship program",
    href: "https://enspire.ox.ac.uk/article/startup-case-study-yayzy",
    logo: logoUrl("ox.ac.uk"),
  },
  {
    name: "Antler VC",
    description: "Backed by leading early-stage venture capital",
    href: "https://www.antler.co/blog/meet-13-companies-antler-london",
    logo: logoUrl("antler.co"),
  },
  {
    name: "London Business School",
    description: "LBS Incubator 2020 — official portfolio company",
    href: "https://foundersbook.eclublbs.com/yayzy/",
    logo: logoUrl("london.edu"),
  },
  {
    name: "IBM Cloud",
    description: "Official technology partnership for scalability & security",
    href: "https://www.yayzy.com/blog/yayzy-ibm",
    logo: logoUrl("ibm.com"),
  },
  {
    name: "UK Government",
    description: "Selected for Net Zero Innovation Programme",
    href: "https://www.gov.uk/government/news/uk-net-zero-innovation-handbook-unveiled",
    logo: logoUrl("gov.uk"),
  },
  {
    name: "Babeș-Bolyai University",
    description: "Official recognition of Cristian as notable alumnus",
    href: "https://www.cs.ubbcluj.ro/alatura-te-provocarii-alaturi-de-yayzy-un-start-up-dezvoltat-de-un-absolvent-al-facultatii-de-matematica-si-informatica/",
    logo: logoUrl("ubbcluj.ro"),
  },
];

// =============================================================================
// REFERENCE — Wikipedia
// =============================================================================

export const reference: PressItem[] = [
  {
    name: "Wikipedia",
    description: "Yayzy has a Wikipedia page with 40+ citations",
    href: "https://en.wikipedia.org/wiki/Yayzy",
    logo: logoUrl("wikipedia.org"),
  },
];

// =============================================================================
// Combined for backwards compatibility
// =============================================================================

export const press: PressItem[] = [...awards, ...pressCoverage, ...backedBy];

// =============================================================================
// Homepage "As Seen In" logo strip — Top tier only
// =============================================================================

export const proofLogos = [
  { name: "Forbes", logo: logoUrl("forbes.com") },
  { name: "TechCrunch", logo: logoUrl("techcrunch.com") },
  { name: "BBC", logo: logoUrl("bbc.com") },
  { name: "CNN", logo: logoUrl("cnn.com") },
  { name: "Business Insider", logo: logoUrl("businessinsider.com") },
  { name: "The Independent", logo: logoUrl("independent.co.uk") },
  { name: "Apple", logo: logoUrl("apple.com") },
  { name: "Oxford", logo: logoUrl("ox.ac.uk") },
  { name: "PwC", logo: logoUrl("pwc.com") },
  { name: "Sifted", logo: logoUrl("sifted.eu") },
];
