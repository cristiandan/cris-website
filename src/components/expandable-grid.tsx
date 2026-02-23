"use client";

import { useState } from "react";
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
  const visibleChildren = isExpanded ? children : children.slice(0, initialCount);
  const hiddenCount = totalCount - initialCount;

  return (
    <div>
      <div className="grid gap-4 px-4 md:grid-cols-2">
        {visibleChildren}
      </div>
      {hasMore && (
        <div className="mt-4 flex justify-center px-4">
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
        </div>
      )}
    </div>
  );
}
