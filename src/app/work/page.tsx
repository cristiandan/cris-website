import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/constants/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects and products I've built — Yayzy (carbon tracking fintech), Open Banking integrations, AI systems. CTO experience with distributed teams.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Projects — Cristian Dan",
    description: "Projects and products I've built — Yayzy (carbon tracking fintech), Open Banking integrations, AI systems.",
  },
};

export default function WorkPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pb-20 md:px-8 md:pt-20 md:pb-10">
        <Heading>Work</Heading>
        <Subheading className="max-w-2xl">
          Products I've built from zero to production — fintech, logistics, AI infrastructure.
        </Subheading>

        <div className="mt-12 space-y-8 px-4">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
}
