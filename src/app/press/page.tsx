import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { PressCard } from "@/components/press-card";
import { ExpandableGrid } from "@/components/expandable-grid";
import { awards, pressCoverage, backedBy, reference } from "@/constants/press";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Cristian Dan",
  description: "Featured in Apple App Store, Forbes 30 Under 30, TechCrunch, BBC, and more.",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 mt-12 px-4 text-lg font-semibold text-neutral-900 dark:text-white">
    {children}
  </h2>
);

export default function PressPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Heading>Press</Heading>
        <Subheading className="max-w-2xl">
          Publicly verifiable signals — every claim backed by a link.
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
        <div className="grid gap-4 px-4 md:grid-cols-2">
          {backedBy.map((item, idx) => (
            <PressCard key={item.name} item={item} index={idx} />
          ))}
        </div>

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
