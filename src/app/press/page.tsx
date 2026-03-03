import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { PressCard } from "@/components/press-card";
import { ExpandableGrid } from "@/components/expandable-grid";
import { awards, pressCoverage, backedBy, reference } from "@/constants/press";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description: "Featured in TechCrunch, BBC, Forbes 30 Under 30, Business Insider, CNN, Apple App Store, and 50+ publications. Backed by Oxford, LBS, Antler, and IBM.",
  openGraph: {
    title: "Press & Media — Cristian Dan",
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
      </Container>
    </div>
  );
}
