import { getLatestRuns } from "@/lib/strava";
import {
  IconRun,
  IconCalendar,
  IconClock,
  IconMapPin,
} from "@tabler/icons-react";

export const StravaRuns = async () => {
  const runs = await getLatestRuns();

  if (!runs || runs.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Outside Work
      </h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        I clear my head with morning runs around London.
      </p>

      <div className="mt-4 grid gap-3">
        {runs.map((run) => (
          <a
            key={run.id}
            href={`https://www.strava.com/activities/${run.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-all hover:border-neutral-300 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-500">
              <IconRun className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-neutral-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-500 truncate">
                {run.name}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1">
                  <IconCalendar className="h-3 w-3" />
                  {run.startDateLocal}
                </span>
                {run.distance && (
                  <span className="flex items-center gap-1">
                    <IconMapPin className="h-3 w-3" />
                    {run.distance}
                  </span>
                )}
                {run.movingTime && (
                  <span className="flex items-center gap-1">
                    <IconClock className="h-3 w-3" />
                    {run.movingTime}
                  </span>
                )}
              </div>
            </div>
            <svg
              className="h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ))}
      </div>

      <div className="mt-3 text-right">
        <a
          href="https://www.strava.com/athletes/50964359"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-orange-600 hover:underline dark:text-orange-500"
        >
          View on Strava →
        </a>
      </div>
    </div>
  );
};
