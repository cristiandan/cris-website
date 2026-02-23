"use client";
import { motion } from "motion/react";

type Bullet = {
  title: string;
  description: string;
};

export const HeroBullets = ({ bullets }: { bullets: Bullet[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="my-8 grid gap-4 px-4 md:grid-cols-3"
    >
      {bullets.map((bullet, idx) => (
        <motion.div
          key={bullet.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * idx }}
          viewport={{ once: true }}
          className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {bullet.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {bullet.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
