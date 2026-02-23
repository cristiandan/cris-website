"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface ExpandableGridProps {
  children: React.ReactNode[];
  initialCount?: number;
}

export function ExpandableGrid({
  children,
  initialCount = 4,
}: ExpandableGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalCount = children.length;
  const hasMore = totalCount > initialCount;
  const initialItems = children.slice(0, initialCount);
  const expandedItems = children.slice(initialCount);
  const hiddenCount = totalCount - initialCount;
  const expandedCount = expandedItems.length;

  // Calculate total exit animation duration for button delay
  const exitDuration = 0.25 + (expandedCount - 1) * 0.03;

  return (
    <motion.div layout transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <motion.div 
        className="grid gap-4 px-4 md:grid-cols-2"
        layout
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {initialItems.map((child, idx) => (
          <motion.div key={`initial-${idx}`} layout transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
            {child}
          </motion.div>
        ))}
        <AnimatePresence mode="popLayout">
          {isExpanded &&
            expandedItems.map((child, idx) => {
              const reverseIdx = expandedCount - 1 - idx;
              return (
                <motion.div
                  key={`expanded-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.35,
                      delay: idx * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.95,
                    y: 20,
                    transition: {
                      duration: 0.25,
                      delay: reverseIdx * 0.03,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {child}
                </motion.div>
              );
            })}
        </AnimatePresence>
      </motion.div>
      {hasMore && (
        <motion.div
          className="mt-4 flex justify-center px-4"
          layout
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            {isExpanded ? (
              <>
                <Minus className="h-4 w-4" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>Show {hiddenCount} more</span>
              </>
            )}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
