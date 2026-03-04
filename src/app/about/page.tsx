import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { AboutNarrative } from "@/components/about-narrative";
import { TechStack } from "@/components/tech-stack";
import { Principles } from "@/components/principles";
import { StravaRuns } from "@/components/strava-runs";
import { about } from "@/constants/site";
import { Metadata } from "next";
import Image from "next/image";

// ISR: revalidate page every hour, CDN caches between revalidations
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About — Fractional CTO and startup founder",
  description: "From bootstrapping City365 in Romania to co-founding Yayzy in London. Forbes 30 Under 30, featured by Apple, TechCrunch, and BBC.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cristian Dan — Fractional CTO and startup founder",
    description: "From bootstrapping City365 in Romania to co-founding Yayzy in London. Forbes 30 Under 30, featured by Apple, TechCrunch, and BBC.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pb-20 md:px-8 md:pt-20 md:pb-10">
        <Heading>About</Heading>
        <Subheading className="max-w-2xl">
          From bootstrapping in Romania to building fintech infrastructure in London.
        </Subheading>

        <div className="mt-12 space-y-12 px-4">
          {/* Headshot + Narrative */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex-shrink-0">
              <Image
                src="/images/headshot.jpg"
                alt="Cristian Dan — Fractional CTO and startup founder"
                width={200}
                height={200}
                className="rounded-2xl ring-1 ring-neutral-200/50 shadow-lg dark:ring-neutral-700/50"
                priority
              />
            </div>
            <div className="flex-1">
              <AboutNarrative narrative={about.narrative} />
            </div>
          </div>

          {/* Rest of content */}
          <div className="space-y-12">
            <TechStack stack={about.stack} />
            <Principles principles={about.principles} />
            <StravaRuns />
          </div>
        </div>
      </Container>
    </div>
  );
}
