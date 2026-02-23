"use client";
import { motion } from "motion/react";

export const TechStack = ({ stack }: { stack: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Current Stack
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech, idx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
