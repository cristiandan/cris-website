"use client";

import { useState } from "react";
import { motion } from "motion/react";
import useMeasure from "react-use-measure";
import { Plus, Minus } from "lucide-react";

interface ExpandableGridProps {
  children: React.ReactNode[];
  initialRows?: number;
}

export function ExpandableGrid({
  children,
  initialRows = 2,
}: ExpandableGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, bounds] = useMeasure();

  const totalCount = children.length;
  // 2 columns on md+, so initialRows * 2 items visible when collapsed
  const initialCount = initialRows * 2;
  const hasMore = totalCount > initialCount;
  const hiddenCount = totalCount - initialCount;

  const visibleChildren = isExpanded ? children : children.slice(0, initialCount);

  return (
    <div>
      <motion.div
        animate={{ height: bounds.height || "auto" }}
        initial={false}
        transition={{
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="overflow-hidden"
      >
        <div
          ref={ref}
          className="grid gap-4 px-4 md:grid-cols-2"
        >
          {visibleChildren}
        </div>
      </motion.div>

      {hasMore && (
        <div className="mt-6 flex justify-center px-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            {isExpanded ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            <span>
              {isExpanded ? "Show less" : `Show ${hiddenCount} more`}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
