import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { AboutNarrative } from "@/components/about-narrative";
import { TechStack } from "@/components/tech-stack";
import { Principles } from "@/components/principles";
import { StravaRuns } from "@/components/strava-runs";
import { PageCTA } from "@/components/page-cta";
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
                src="/images/headshot.webp"
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

          {/* CTAs */}
          <div className="mt-16 space-y-4">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              What's next?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <PageCTA
                title="See my work"
                description="Projects I've built from zero to production"
                href="/work"
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              <PageCTA
                title="Get in touch"
                description="Let's talk about your project"
                href="/contact"
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
