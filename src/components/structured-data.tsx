import { siteConfig } from "@/constants/site";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cristian Dan",
    url: siteConfig.url,
    image: `${siteConfig.url}/headshot.webp`,
    jobTitle: "Fractional CTO & Technical Co-founder",
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ],
    knowsAbout: [
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "Python",
      "AWS",
      "Fintech",
      "AI/ML",
      "DeFi",
      "Mobile Development",
      "React Native",
    ],
    award: [
      "Forbes 30 Under 30 Europe - Finance 2023",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Babeș-Bolyai University",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent Consultant",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: "Cristian Dan",
    },
    publisher: {
      "@type": "Person",
      name: "Cristian Dan",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
