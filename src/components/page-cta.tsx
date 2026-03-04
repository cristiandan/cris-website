"use client";
import { motion } from "motion/react";
import Link from "next/link";

interface PageCTAProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export const PageCTA = ({ title, description, href, icon }: PageCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-400 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
      >
        {icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400">
            {icon}
          </span>
        )}
        <div className="flex-1">
          <p className="font-medium text-neutral-900 dark:text-white">
            {title}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <svg
          className="h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};
