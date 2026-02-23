"use client";
import React, { useRef } from "react";
import { useInView, motion } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the revenue milestone of $20K MRR with my VSCode fork.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Launched my own developer tools startup",
          description:
            "Founded a company focused on creating innovative tools for software developers.",
        },
        {
          title: "Spoke at React Conference",
          description:
            "Delivered a keynote presentation about modern frontend architecture patterns.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Contributed to open source",
          description:
            "Became a core contributor to several popular React and Next.js libraries.",
        },
        {
          title: "Published technical book",
          description:
            "Authored 'Advanced Frontend Architecture' which sold over 10,000 copies.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Led engineering team at tech startup",
          description:
            "Managed a team of 12 engineers building a SaaS platform with over 50,000 users.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Graduated with Computer Science degree",
          description:
            "Completed my Bachelor's degree with honors and specialization in software engineering.",
        },
        {
          title: "Built my first production application",
          description:
            "Developed and deployed a web application that gained 5,000 monthly active users.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Started learning web development",
          description:
            "Began my journey into programming with JavaScript, HTML, and CSS.",
        },
      ],
    },
  ];
  return (
    <div
      ref={ref}
      className="shadow-section-inset dark:shadow-section-inset-dark my-6 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800"
    >
      <SectionHeading className="mt-4 mb-10">
        Timeline of Achievements
      </SectionHeading>
      {data.map((year, index) => (
        <div content="px-4 py-1 " key={year.title} className="mb-4">
          <motion.h2
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className="mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-neutral-900 shadow-[var(--shadow-aceternity)] dark:text-neutral-100"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400 dark:text-neutral-500"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      {children}
    </motion.div>
  );
};
