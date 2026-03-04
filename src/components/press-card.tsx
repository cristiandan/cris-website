"use client";
import { motion } from "motion/react";
import { PressItem } from "@/constants/press";
import Image from "next/image";
import Link from "next/link";

export const PressCard = ({
  item,
  index,
}: {
  item: PressItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
      >
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
          <Image
            src={item.logo}
            alt={`${item.name} logo`}
            width={48}
            height={48}
            className="h-10 w-10 rounded-lg object-contain ring-1 ring-neutral-200/50 transition-all duration-300 group-hover:ring-2 group-hover:ring-neutral-400/50 group-hover:shadow-lg dark:ring-neutral-700/50 dark:group-hover:ring-neutral-500/50"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {item.name}
          </h3>
          <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
            {item.description}
          </p>
        </div>
        <svg
          className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </Link>
    </motion.div>
  );
};
