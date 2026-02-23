"use client";
import { motion } from "motion/react";
import Link from "next/link";

const routes = [
  {
    label: "Hiring?",
    description: "See my work and experience",
    href: "/work",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Partnering?",
    description: "Read the press coverage",
    href: "/press",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export const AudienceRoutes = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="my-8 flex flex-wrap gap-4 px-4"
    >
      {routes.map((route, idx) => (
        <Link
          key={route.href}
          href={route.href}
          className="group flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 transition-all hover:border-neutral-400 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
        >
          <span className="text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
            {route.icon}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-neutral-900 dark:text-white">
              {route.label}
            </span>
            <span className="text-sm text-neutral-500 sm:ml-2 dark:text-neutral-400">
              {route.description}
            </span>
          </div>
          <svg
            className="ml-2 h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </motion.div>
  );
};
