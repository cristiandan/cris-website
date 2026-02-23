import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { PressCard } from "@/components/press-card";
import { press } from "@/constants/press";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Cristian Dan",
  description: "Featured in Apple App Store, Forbes 30 Under 30, TechCrunch, BBC, and more.",
};

export default function PressPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Heading>Press</Heading>
        <Subheading className="max-w-2xl">
          Publicly verifiable signals — every claim backed by a link.
        </Subheading>

        <div className="mt-12 grid gap-4 px-4 md:grid-cols-2">
          {press.map((item, idx) => (
            <PressCard key={item.name} item={item} index={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
}
