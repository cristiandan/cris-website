"use client";

import Link from "next/link";
import { Project } from "@/constants/projects";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";

interface RelatedProjectsProps {
  currentSlug: string;
  projects: Project[];
  maxProjects?: number;
}

export function RelatedProjects({
  currentSlug,
  projects,
  maxProjects = 2,
}: RelatedProjectsProps) {
  // Get current project to find related ones
  const currentProject = projects.find((p) => p.slug === currentSlug);
  
  // Filter out current project and get related ones
  const otherProjects = projects.filter((p) => p.slug !== currentSlug);
  
  // Sort by category match (same category first), then take maxProjects
  const relatedProjects = otherProjects
    .sort((a, b) => {
      const aMatch = currentProject && a.category === currentProject.category ? 1 : 0;
      const bMatch = currentProject && b.category === currentProject.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, maxProjects);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
        More Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {relatedProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <span className="mb-1 inline-block rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {project.category.split(" / ")[0]}
                  </span>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {project.role}
                  </p>
                </div>
                <IconArrowRight
                  className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white"
                  stroke={1.5}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
