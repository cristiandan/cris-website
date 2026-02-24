"use client";
import { motion } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const items = [
  {
    title: "AI + fintech infrastructure",
    description:
      "Systems that make financial data usable: pipelines, integrations, automation.",
  },
  {
    title: "0→1 product + technical leadership",
    description:
      "Ship quickly, then harden: observability, security, data quality.",
  },
];

export const WhatIDo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: true }}
      className="my-10 px-4"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        What I do
      </p>
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * idx }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <IconCircleCheckFilled className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
