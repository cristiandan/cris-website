import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { PressCard } from "@/components/press-card";
import { ExpandableGrid } from "@/components/expandable-grid";
import { PageCTA } from "@/components/page-cta";
import { awards, pressCoverage, backedBy, reference } from "@/constants/press";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press — Forbes, TechCrunch & Apple Featured",
  description: "Featured in TechCrunch, BBC, Forbes 30 Under 30, Business Insider, CNN, Apple App Store, and 50+ publications. Backed by Oxford, LBS, Antler, and IBM.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Press Coverage — Forbes, TechCrunch & Apple Featured | Cristian Dan",
    description: "Featured in TechCrunch, BBC, Forbes 30 Under 30, Business Insider, CNN, and 50+ publications.",
  },
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 mt-12 px-4 text-lg font-semibold text-neutral-900 dark:text-white">
    {children}
  </h2>
);

export default function PressPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pb-20 md:px-8 md:pt-20 md:pb-10">
        <Heading>Press</Heading>
        <Subheading className="max-w-2xl">
          A few highlights over the years. Okay, all of them.
        </Subheading>

        <SectionTitle>Awards & Recognition</SectionTitle>
        <div className="grid gap-4 px-4 md:grid-cols-2">
          {awards.map((item, idx) => (
            <PressCard key={item.name} item={item} index={idx} />
          ))}
        </div>

        <SectionTitle>Press Coverage</SectionTitle>
        <ExpandableGrid initialRows={17}>
          {pressCoverage.map((item, idx) => (
            <PressCard key={item.name + idx} item={item} index={idx} />
          ))}
        </ExpandableGrid>

        <SectionTitle>Backed By</SectionTitle>
        <ExpandableGrid initialRows={3}>
          {backedBy.map((item, idx) => (
            <PressCard key={item.name + idx} item={item} index={idx} />
          ))}
        </ExpandableGrid>

        <SectionTitle>Reference</SectionTitle>
        <div className="grid gap-4 px-4 md:grid-cols-2">
          {reference.map((item, idx) => (
            <PressCard key={item.name} item={item} index={idx} />
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-16 px-4">
          <h2 className="mb-6 text-lg font-semibold text-neutral-900 dark:text-white">
            What's next?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <PageCTA
              title="See the projects"
              description="The work behind the headlines"
              href="/work"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <PageCTA
              title="Get in touch"
              description="Let's discuss your next project"
              href="/contact"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
