"use client";
import { motion } from "motion/react";

type Principle = {
  title: string;
  description: string;
};

export const Principles = ({ principles }: { principles: Principle[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        How I Work
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {principles.map((principle, idx) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 className="font-medium text-neutral-900 dark:text-white">
              {principle.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
