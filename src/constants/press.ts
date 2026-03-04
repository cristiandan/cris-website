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
    href: "https://www.edie.net/pwc-reveals-50-uk-businesses-at-the-forefront-of-net-zero-innovation/",
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
// PRESS COVERAGE — Ordered by methodology score (see press-analysis-final-2.md)
// Score = Publication Prestige (40) + Coverage Depth (40) + Personal Brand (20)
// =============================================================================

export const pressCoverage: PressItem[] = [
  // =========================================================================
  // SCORE 75+ (Tier 1 - Show prominently)
  // =========================================================================
  
  // #1 - TechCrunch (95) - Global A-list + dedicated article + names "Cristian Dan, CTO"
  {
    name: "TechCrunch",
    description: "\"Yayzy app automatically calculates the environmental impact of your spending\"",
    href: "https://techcrunch.com/2020/12/23/yayzy-app-automatically-calculates-the-environmental-impact-of-your-spending/",
    logo: logoUrl("techcrunch.com"),
  },
  // #2 - BBC (90) - Global A-list + TV interview (Mankaran) + team mentioned
  {
    name: "BBC",
    description: "TV interview discussing climate tech and carbon tracking",
    href: "https://www.youtube.com/watch?v=FlXCRRrPuAs",
    logo: logoUrl("bbc.com"),
  },
  // #3 - Ziarul Financiar (80) - Cristian interviewed directly
  {
    name: "Ziarul Financiar",
    description: "\"ZF IT Generation: Cristian Dan, CTO al Yayzy\" — dedicated interview",
    href: "https://www.zf.ro/zf-it-generation/zf-it-generation-cristian-dan-cofondator-cto-yayzy-aplicatie-21795656",
    logo: logoUrl("zf.ro"),
  },
  // #4 - G4Media (80) - Cristian Q&A interview
  {
    name: "G4Media",
    description: "\"Cristian Dan, tânăr antreprenor în top Forbes Under 30 Europa\" — interview",
    href: "https://www.g4media.ro/cristian-dan-tanar-antreprenor-in-top-forbes-under-30-europa-scolarizarea-in-strainatate-poate-oferi-oportunitati-valoroase-de-networking-dar-nu-consider-ca-e-un-factor-esential-pentru-a-d.html",
    logo: logoUrl("g4media.ro"),
  },
  // #5 - Ziarul Financiar City365 (80) - "Dan Cristian" named first in photo, dedicated article
  {
    name: "Ziarul Financiar",
    description: "City365 — \"Four students from Cluj created an app\" (2015)",
    href: "https://www.zf.ro/business-hi-tech/patru-studenti-din-cluj-au-o-aplicatie-care-ajuta-restaurantele-sa-gaseasca-clienti-14770260",
    logo: logoUrl("zf.ro"),
  },
  // #6 - Business Insider COVID (75) - dedicated section
  {
    name: "Business Insider",
    description: "\"Sustainable banking startup Yayzy\" — COVID startup resilience story",
    href: "https://www.businessinsider.com/tech-startups-covid-19-future-fund-2020-9",
    logo: logoUrl("businessinsider.com"),
  },
  // #6 - TechRound (75) - full interview, mentions "Cris (our CTO)"
  {
    name: "TechRound",
    description: "Full interview — mentions \"Cris (our CTO)\"",
    href: "https://techround.co.uk/interviews/a-chat-with-mankaran-ahluwalia-yayzy/",
    logo: logoUrl("techround.co.uk"),
  },
  // #7 - Adevarul (75) - long-form profile about Cristian
  {
    name: "Adevarul",
    description: "\"A Romanian in London created an app...\" — long-form profile",
    href: "https://adevarul.ro/stil-de-viata/tehnologie/un-roman-stabilit-la-londra-a-creat-o-aplicatie-2283324.html",
    logo: logoUrl("adevarul.ro"),
  },
  // #8 - Gazeta Nord-Vest (75) - hometown feature about Cristian
  {
    name: "Gazeta Nord-Vest",
    description: "Hometown newspaper coverage of Forbes 30 Under 30",
    href: "https://www.gazetanord-vest.ro/2023/03/un-satmarean-se-afla-pe-lista-forbes-a-tinerilor-de-succes-din-europa/",
    logo: logoUrl("gazetanord-vest.ro"),
  },
  // #9 - Sătmăreanul City365 (75) - full bio: "Dan Cristian (21), from Satu Mare"
  {
    name: "Sătmăreanul",
    description: "City365 — full interview, names \"Dan Cristian, 21, from Satu Mare\" (2015)",
    href: "https://www.satmareanul.net/2015/03/28/city365-o-aplicatie-dezvoltata-de-o-echipa-de-studenti-din-care-fac-parte-si-doi-satmareni/",
    logo: logoUrl("satmareanul.net"),
  },
  // #10 - Forbes Romania (75) - names "Cristian Dan, co-fondator & CTO"
  {
    name: "Forbes Romania",
    description: "Yayzy expansion to 30+ European countries",
    href: "https://www.forbes.ro/yayzy-a-ajuns-si-in-romania-si-in-alte-30-de-tari-europene-280260",
    logo: logoUrl("forbes.com"),
  },
  // #10 - Finextra (75) - industry leader + dedicated launch article
  {
    name: "Finextra",
    description: "\"Yayzy launches 'Fitbit for Carbon'\"",
    href: "https://www.finextra.com/pressarticle/85451/yayzy-launches-fitbit-for-carbon",
    logo: logoUrl("finextra.com"),
  },
  // #11 - The Paypers (75) - industry leader + dedicated article
  {
    name: "The Paypers",
    description: "\"Yayzy to help use Open Banking for carbon offsetting\"",
    href: "https://thepaypers.com/online-mobile-banking/yayzy-to-help-use-open-banking-for-off-setting-carbon-emissions--1246402",
    logo: logoUrl("thepaypers.com"),
  },
  // #12 - IBS Intelligence (75) - industry leader + dedicated article
  {
    name: "IBS Intelligence",
    description: "\"Yayzy rolls out iOS app to track carbon emissions\"",
    href: "https://ibsintelligence.com/ibsi-news/yayzy-rolls-out-new-ios-app-to-track-carbon-emissions-of-spendings/",
    logo: logoUrl("ibsintelligence.com"),
  },
  // #13 - UK Tech News Launch (75) - dedicated + names Cristian Dan
  {
    name: "UK Tech News",
    description: "Launch coverage — names Cristian Dan as co-founder",
    href: "https://www.uktech.news/news/london-startup-launches-app-to-track-carbon-emissions-20201223",
    logo: logoUrl("uktech.news"),
  },

  // =========================================================================
  // SCORE 60-74 (Tier 2)
  // =========================================================================
  
  // #14 - This Is Money (70) - #1 pick + CEO quote
  {
    name: "This Is Money",
    description: "\"Six tools to track your carbon footprint\" — #1 pick",
    href: "https://www.thisismoney.co.uk/money/bills/article-9126055/Six-tools-track-personal-carbon-footpring.html",
    logo: logoUrl("dailymail.co.uk"),
  },
  // #15 - Fintech Times (70) - dedicated launch coverage
  {
    name: "Fintech Times",
    description: "\"London Startup YAYZY Launches Carbon Tracking App\"",
    href: "https://thefintechtimes.com/london-startup-yayzy-launches-carbon-purchase-tracking-app/",
    logo: logoUrl("thefintechtimes.com"),
  },
  // #16 - Crowdfund Insider £625k (70) - dedicated funding article
  {
    name: "Crowdfund Insider",
    description: "\"Yayzy closes Seedrs campaign with £625k+ secured\"",
    href: "https://www.crowdfundinsider.com/2020/10/167799-uk-banking-app-yayzy-to-close-seedrs-campaign-with-more-than-625000-in-funding-secured/",
    logo: logoUrl("crowdfundinsider.com"),
  },
  // #17 - Business Insider Climate (65) - 25 Climate Startups list
  {
    name: "Business Insider",
    description: "Featured in \"25 European Startups Fighting Climate Change\"",
    href: "https://www.businessinsider.com/climate-change-environmental-technology-startups-2020-11",
    logo: logoUrl("businessinsider.com"),
  },
  // #18 - Daily Mirror (65) - #2 of 6 apps
  {
    name: "Daily Mirror",
    description: "\"Six free apps that can help you save the planet\" — #2",
    href: "https://www.mirror.co.uk/money/six-free-apps-can-help-25408989",
    logo: logoUrl("mirror.co.uk"),
  },
  // #19 - Input/Inverse (65) - dedicated launch article
  {
    name: "Input (Inverse)",
    description: "Dedicated launch article about Yayzy",
    href: "https://www.inverse.com/input/tech/the-yayzy-app-calculates-your-spendings-toll-on-climate-change",
    logo: logoUrl("inverse.com"),
  },
  // #20 - Good With Money (65) - section + CEO quote
  {
    name: "Good With Money",
    description: "\"'Fitbit for carbon' app launches\" + CEO quote",
    href: "https://good-with-money.com/2021/01/04/uk-to-miss-climate-target-as-green-bonds-boom/",
    logo: logoUrl("good-with-money.com"),
  },
  // #21 - The Independent (60) - #5 of 5 apps
  {
    name: "The Independent",
    description: "\"Five financial apps to save the planet\"",
    href: "https://www.independent.co.uk/money/financial-apps-reuse-save-free-help-food-clothes-green-eco-b1958402.html",
    logo: logoUrl("independent.co.uk"),
  },
  // #22 - Evening Standard (60) - 1 of 5 apps
  {
    name: "Evening Standard",
    description: "Featured in \"Five apps to track your carbon footprint\"",
    href: "https://www.standard.co.uk/reveller/restaurants/how-to-eat-like-a-climatarian-vegan-sustainable-meat-cop26-b964164.html",
    logo: logoUrl("standard.co.uk"),
  },
  // #23 - TEDxLondon (60) - podcast recommendation
  {
    name: "TEDxLondon",
    description: "Featured as recommended carbon tracking app",
    href: "https://tedxlondon.com/podcast/how-to-make-big-oil-go-bust-mark-campanale/",
    logo: logoUrl("ted.com"),
  },
  // #24 - International Banker IBM (60) - dedicated paragraph
  {
    name: "International Banker",
    description: "IBM partnership feature — dedicated paragraph",
    href: "https://internationalbanker.com/banking/its-time-for-banks-to-invest-in-deeper-modernisation-to-unlock-competitiveness/",
    logo: logoUrl("internationalbanker.com"),
  },
  // #25 - Retail Banker Int'l (60) - business model section
  {
    name: "Retail Banker International",
    description: "Business model and revenue details coverage",
    href: "https://www.retailbankerinternational.com/comment/tighter-compression-around-nii-means-that-traditional-providers-should-embrace-innovation-to-generate-revenues-from-alternative-models/",
    logo: logoUrl("retailbankerinternational.com"),
  },
  // #26 - Crowdfund Insider Overfunding (60)
  {
    name: "Crowdfund Insider",
    description: "\"Overfunding: Yayzy surpasses £200k target\"",
    href: "https://www.crowdfundinsider.com/2020/09/166375-overfunding-sustainable-banking-app-yayzy-quickly-surpasses-200000-funding-target",
    logo: logoUrl("crowdfundinsider.com"),
  },

  // =========================================================================
  // SCORE 45-59 (Tier 3)
  // =========================================================================
  
  // #27 - CNN (55) - Global A-list but brief mention only
  {
    name: "CNN",
    description: "Featured in carbon footprint tracking apps coverage",
    href: "https://www.cnn.com/2021/03/15/tech/evocco-carbon-footprint-app-ireland-spc-intl/index.html",
    logo: logoUrl("cnn.com"),
  },
  // #28 - Sifted Watchlist (55) - 10 green fintechs
  {
    name: "Sifted",
    description: "\"10 European green fintechs to watch\" — Sifted Watchlist",
    href: "https://sifted.eu/articles/fintechs-going-green/",
    logo: logoUrl("sifted.eu"),
  },
  // #29 - GlobalData (50) - industry report mention
  {
    name: "GlobalData",
    description: "\"Green banking gains momentum\" — industry analysis",
    href: "https://www.globaldata.com/media/disruptor/green-banking-gains-momentum-fight-climate-change-says-globaldata/",
    logo: logoUrl("globaldata.com"),
  },
  // #30 - Sifted ESG (45) - passing mention
  {
    name: "Sifted",
    description: "Antler ESG portfolio example",
    href: "https://sifted.eu/articles/vc-esg-goals/",
    logo: logoUrl("sifted.eu"),
  },
  // #31 - UK Tech News Antler (45) - investment news
  {
    name: "UK Tech News",
    description: "Antler invests £1.56m in 13 tech companies",
    href: "https://www.uktech.news/news/antler-invests-156m-in-13-tech-companies-founded-on-its-first-uk-program-wednesday-2pm-20200120",
    logo: logoUrl("uktech.news"),
  },
  // #32 - Product Hunt (45) - newsletter feature
  {
    name: "Product Hunt",
    description: "Featured in Product Hunt newsletter",
    href: "https://www.producthunt.com/newsletter/6333",
    logo: logoUrl("producthunt.com"),
  },

  // =========================================================================
  // SCORE 50 — Collapsed by default (Score < 45)
  // =========================================================================
  
  // #33 - International Banker 2024 (40)
  {
    name: "International Banker",
    description: "Financial services transformation — by IBM executive",
    href: "https://internationalbanker.com/technology/2024-is-set-to-be-another-transformative-year-for-financial-services/",
    logo: logoUrl("internationalbanker.com"),
  },
  // #34 - TrendHunter (40)
  {
    name: "TrendHunter",
    description: "Carbon tracking trend feature",
    href: "https://www.trendhunter.com/trends/yayzy-app",
    logo: logoUrl("trendhunter.com"),
  },
  // #35 - Finextra Blog (40)
  {
    name: "Finextra Blog",
    description: "Fintechs forging the future of financial services",
    href: "https://www.finextra.com/blogposting/23431/fintechs-forging-the-future-of-financial-services",
    logo: logoUrl("finextra.com"),
  },
  // #36 - Startups Magazine (35)
  {
    name: "Startups Magazine",
    description: "Antler Demo Day — 1 of 13 featured startups",
    href: "https://startupsmagazine.co.uk/article-antler-demo-day-next-big-wave-tech",
    logo: logoUrl("startupsmagazine.co.uk"),
  },
  // #37 - Acropolium (35)
  {
    name: "Acropolium",
    description: "Fintech trends — case study mention",
    href: "https://acropolium.com/blog/top-financial-technology-trends-transforming-fintech/",
    logo: logoUrl("acropolium.com"),
  },
  // #38 - MyBigPlunge (50) - dedicated but very minor pub
  {
    name: "MyBigPlunge",
    description: "Yayzy app calculates carbon footprint of spending",
    href: "https://mybigplunge.com/tech-plunge/technology/yayzy-app-calculates-carbon-footprint-of-users-spending/",
    logo: logoUrl("mybigplunge.com"),
  },
  // #39 - FT Adviser (45) - prestigious but just a mention
  {
    name: "FT Adviser",
    description: "Moneyhub pilot — passing mention",
    href: "https://www.ftadviser.com/your-industry/2022/04/20/moneyhub-to-pilot-automated-financial-planning/",
    logo: logoUrl("ftadviser.com"),
  },
  // #40 - EcoVoice Australia (25)
  {
    name: "EcoVoice Australia",
    description: "Green banking gains momentum — syndicated coverage",
    href: "https://www.ecovoice.com.au/green-banking-gains-momentum-to-fight-climate-change-says-globaldata/",
    logo: logoUrl("ecovoice.com.au"),
  },

  // =========================================================================
  // CITY365 — Cristian's first startup (2015) — Lower-scored articles
  // =========================================================================
  
  // Playtech.ro (45) - Innovation Labs Cluj, City365 = "author's favorite"
  {
    name: "Playtech.ro",
    description: "City365 — Innovation Labs Cluj \"author's favorite\" (2015)",
    href: "https://playtech.ro/2015/cum-vor-tinerii-din-cluj-sa-faca-tehnologia-mai-utila-acestea-sunt-proiectele-care-ne-ar-ajuta/",
    logo: logoUrl("playtech.ro"),
  },
  // Actual de Cluj (40) - Spherik Accelerator coverage
  {
    name: "Actual de Cluj",
    description: "City365 — Spherik Accelerator coverage (2015)",
    href: "https://actualdecluj.ro/ce-aplicatii-si-idei-de-afaceri-cresc-in-accelerator-de-business-la-cluj/",
    logo: logoUrl("actualdecluj.ro"),
  },
  // Forbes Romania City365 (35) - passing mention in Innovation Labs overview
  {
    name: "Forbes Romania",
    description: "City365 — Innovation Labs 2015 overview (passing mention)",
    href: "https://www.forbes.ro/articles/cele-mai-interesante-proiecte-si-aplicatii-ale-viitorilor-antreprenori-din-ul-romanesc-39761",
    logo: logoUrl("forbes.com"),
  },
];

// Press coverage counts:
// Score 75+: 34 items (17 rows on desktop) — includes ZF City365 (80), Sătmăreanul (75)
// Score <75: 10 items (collapsed) — includes Playtech (45), Actual de Cluj (40)
export const PRESS_SCORE_100_COUNT = 34;

// =============================================================================
// BACKED BY — Score 100 first, then Score 50
// =============================================================================

export const backedBy: PressItem[] = [
  // =========================================================================
  // SCORE 60+ — Visible (6 items) — Ordered by methodology score
  // =========================================================================
  
  // #1 - Oxford (90) - Elite uni + dedicated case study
  {
    name: "University of Oxford",
    description: "Featured case study — Saïd Business School entrepreneurship program",
    href: "https://enspire.ox.ac.uk/article/startup-case-study-yayzy",
    logo: logoUrl("ox.ac.uk"),
  },
  // #2 - LBS (75) - Top B-school + incubator portfolio
  {
    name: "London Business School",
    description: "LBS Incubator 2020 — official portfolio company",
    href: "https://foundersbook.eclublbs.com/yayzy/",
    logo: logoUrl("london.edu"),
  },
  // #3 - Antler (75) - Names "Cristian Dan, CTO" explicitly
  {
    name: "Antler VC",
    description: "Backed by leading early-stage venture capital",
    href: "https://www.antler.co/blog/meet-13-companies-antler-london",
    logo: logoUrl("antler.co"),
  },
  // #4 - IBM (70) - Major tech partnership
  {
    name: "IBM Cloud",
    description: "Official technology partnership for scalability & security",
    href: "https://www.yayzy.com/blog/yayzy-ibm",
    logo: logoUrl("ibm.com"),
  },
  // #5 - UK Gov (65) - National programme selection
  {
    name: "UK Government",
    description: "Selected for Net Zero Innovation Programme",
    href: "https://www.gov.uk/government/news/uk-net-zero-innovation-handbook-unveiled",
    logo: logoUrl("gov.uk"),
  },
  // #6 - Babeș-Bolyai (60) - Cristian's alma mater
  {
    name: "Babeș-Bolyai University",
    description: "Official recognition of Cristian as notable alumnus",
    href: "https://www.cs.ubbcluj.ro/alatura-te-provocarii-alaturi-de-yayzy-un-start-up-dezvoltat-de-un-absolvent-al-facultatii-de-matematica-si-informatica/",
    logo: logoUrl("ubbcluj.ro"),
  },

  // =========================================================================
  // SCORE 50 — Collapsed by default (3 items)
  // =========================================================================
  {
    name: "University of Edinburgh",
    description: "Academic citation in sustainable finance research",
    href: "https://edinburgh-innovations.ed.ac.uk/news/sustainable-finance",
    logo: logoUrl("ed.ac.uk"),
  },
  {
    name: "Save Your Wardrobe",
    description: "B2B partnership for carbon neutrality",
    href: "https://www.saveyourwardrobe.com/en-gb/blog/joining-hands-with-yayzy-for-carbon-neutrality",
    logo: logoUrl("saveyourwardrobe.com"),
  },
  {
    name: "10x Banking",
    description: "Technical integration for ESG banking products",
    href: "https://www.10xbanking.com/learn/using-10x-and-yayzy-to-build-esg-into-banking-products",
    logo: logoUrl("10xbanking.com"),
  },
];

// Backed By counts: 6 Score 100, 3 Score 50
export const BACKED_BY_SCORE_100_COUNT = 6;

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
