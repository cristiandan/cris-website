"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  count?: number;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function CollapsibleSection({
  title,
  count,
  children,
  defaultExpanded = false,
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="mt-12">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group mb-6 flex w-full items-center justify-between px-4 text-left"
      >
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {title}
          {count !== undefined && (
            <span className="ml-2 text-sm font-normal text-neutral-500 dark:text-neutral-400">
              ({count} links)
            </span>
          )}
        </h2>
        <span className="flex items-center gap-2 text-sm text-neutral-500 transition-colors group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
          {isExpanded ? (
            <>
              <span>Collapse</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Expand</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </span>
      </button>
      {isExpanded && children}
    </div>
  );
}
