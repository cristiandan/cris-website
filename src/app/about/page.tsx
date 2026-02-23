import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { AboutNarrative } from "@/components/about-narrative";
import { TechStack } from "@/components/tech-stack";
import { Principles } from "@/components/principles";
import { about } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cristian Dan",
  description: "From bootstrapping in Romania to leading fintech teams in London.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Heading>About</Heading>
        <Subheading className="max-w-2xl">
          From bootstrapping in Romania to building fintech infrastructure in London.
        </Subheading>

        <div className="mt-12 space-y-12 px-4">
          <AboutNarrative narrative={about.narrative} />
          <TechStack stack={about.stack} />
          <Principles principles={about.principles} />
        </div>
      </Container>
    </div>
  );
}
