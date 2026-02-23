"use client";
import { motion } from "motion/react";
import { proofLogos } from "@/constants/press";
import Image from "next/image";

export const ProofStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="my-12 px-4"
    >
      <p className="mb-6 text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        Featured in
      </p>
      <div className="flex flex-wrap items-center gap-8 md:gap-12">
        {proofLogos.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * idx }}
            viewport={{ once: true }}
            className="group grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={100}
              height={32}
              className="h-6 w-auto rounded-lg ring-1 ring-neutral-200/50 transition-all duration-300 group-hover:ring-2 group-hover:ring-neutral-400/50 group-hover:shadow-lg dark:ring-neutral-700/50 dark:group-hover:ring-neutral-500/50 md:h-8"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
