"use client";
import { motion } from "motion/react";
import { Project } from "@/constants/projects";
import Link from "next/link";

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <Link href={`/work/${project.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 cursor-pointer"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              <span className="text-neutral-400 transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {project.role}
              {project.timeline && <span className="ml-2 text-neutral-400">· {project.timeline}</span>}
            </p>
          </div>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>

        {/* Problem */}
        <div className="mt-4">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Problem
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {project.problem}
          </p>
        </div>

        {/* Impact */}
        <div className="mt-4">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Impact
          </p>
          <ul className="mt-2 space-y-1">
            {project.impact.slice(0, 4).map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
            {project.impact.length > 4 && (
              <li className="text-sm text-neutral-400 dark:text-neutral-500">
                +{project.impact.length - 4} more...
              </li>
            )}
          </ul>
        </div>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};
