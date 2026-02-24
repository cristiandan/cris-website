import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { ProofStrip } from "@/components/proof-strip";
import { HeroBullets } from "@/components/hero-bullets";
import { WhatIDo } from "@/components/what-i-do";
import { AudienceRoutes } from "@/components/audience-routes";
import { siteConfig, hero } from "@/constants/site";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pb-20 md:px-8 md:pt-20 md:pb-10">
        {/* Hero */}
        <Heading>{hero.headline}</Heading>
        <Subheading className="max-w-2xl">{hero.subheadline}</Subheading>

        {/* Core Bullets */}
        <HeroBullets bullets={hero.bullets} />

        {/* What I Do */}
        <WhatIDo />

        {/* Proof Strip */}
        <ProofStrip />

        {/* Audience Routes */}
        <AudienceRoutes />

        {/* Primary CTA */}
        <div className="mt-12 px-4">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Get in touch
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  );
}
