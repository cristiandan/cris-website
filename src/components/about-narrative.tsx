"use client";
import { motion } from "motion/react";

export const AboutNarrative = ({ narrative }: { narrative: string }) => {
  const paragraphs = narrative.split("\n\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        The Journey
      </h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-neutral-600 dark:text-neutral-300"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-neutral-900 dark:text-white">$1</strong>'
              ),
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
