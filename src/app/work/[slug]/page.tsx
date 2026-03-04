import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { ImageGallery } from "@/components/image-gallery";
import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} Case Study — ${project.role}`,
    description: project.description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} — ${project.role} | Cristian Dan`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pb-20 md:px-8 md:pt-20 md:pb-10">
        {/* Back link */}
        <Link
          href="/work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              {project.category}
            </span>
            {project.timeline && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {project.timeline}
              </span>
            )}
          </div>
          <Heading>{project.title}</Heading>
          <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
            {project.role}
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left column - main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Overview
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* The Challenge */}
            <section>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                The Challenge
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* The Solution */}
            {project.solution && (
              <section>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  The Solution
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Impact & Outcomes */}
            <section>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Impact & Outcomes
              </h2>
              <ul className="space-y-2">
                {project.impact.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  Gallery
                </h2>
                <ImageGallery images={project.images} title={project.title} />
              </section>
            )}

            {/* Video */}
            {project.video && (
              <section>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  Video
                </h2>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src={project.video
                      .replace("watch?v=", "embed/")
                      .replace("youtube.com/shorts/", "youtube.com/embed/")
                      .replace("youtu.be/", "youtube.com/embed/")
                      .replace("vimeo.com/", "player.vimeo.com/video/")
                      .replace(/\?.*$/, "")}
                    title={`${project.title} video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {/* Multiple Videos */}
            {project.videos && project.videos.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  Videos
                </h2>
                <div className="space-y-6">
                  {project.videos.map((video, idx) => {
                    let embedUrl = video.url
                      .replace("watch?v=", "embed/")
                      .replace("youtube.com/shorts/", "youtube.com/embed/")
                      .replace("youtu.be/", "youtube.com/embed/");
                    
                    // Handle Vimeo private links: vimeo.com/ID/HASH -> player.vimeo.com/video/ID?h=HASH
                    const vimeoMatch = embedUrl.match(/vimeo\.com\/(\d+)\/([a-zA-Z0-9]+)/);
                    if (vimeoMatch) {
                      embedUrl = `https://player.vimeo.com/video/${vimeoMatch[1]}?h=${vimeoMatch[2]}`;
                    } else {
                      embedUrl = embedUrl.replace("vimeo.com/", "player.vimeo.com/video/");
                    }
                    
                    // Clean up any remaining query params for non-Vimeo
                    if (!embedUrl.includes("vimeo")) {
                      embedUrl = embedUrl.replace(/\?.*$/, "");
                    }
                    
                    return (
                      <div key={idx}>
                        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          {video.title}
                        </h3>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <iframe
                            src={embedUrl}
                            title={video.title}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right column - sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.href || (project.links && project.links.length > 0)) && (
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                  Links
                </h3>
                <ul className="space-y-2">
                  {project.href && (
                    <li>
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {project.hrefLabel || "View Project"}
                      </Link>
                    </li>
                  )}
                  {project.links?.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Press */}
            {project.press && project.press.length > 0 && (
              <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                  Press Coverage
                </h3>
                <ul className="space-y-2">
                  {project.press.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
