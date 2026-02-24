import { getLatestRuns, getStravaStats, StravaActivity } from "@/lib/strava";
import {
  IconRun,
  IconCalendar,
  IconClock,
  IconMapPin,
  IconTarget,
  IconTrendingUp,
} from "@tabler/icons-react";

// Goals (hardcoded - Strava API doesn't expose goals)
const YEARLY_GOAL_KM = 1310;
const MONTHLY_GOAL_KM = 110;

function ProgressBar({
  current,
  goal,
  label,
  icon: Icon,
}: {
  current: number;
  goal: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 font-medium text-neutral-900 dark:text-white">
          <Icon className="h-4 w-4 text-orange-500" />
          {label}
        </div>
        <span className="text-neutral-500 dark:text-neutral-400">
          {Math.round(current)} / {goal} km
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-1 text-right text-xs text-neutral-500 dark:text-neutral-400">
        {percentage}%
      </div>
    </div>
  );
}

function formatTime(input: number | string | undefined): string {
  if (typeof input === "string") {
    return input; // Already formatted (from public scraping)
  }
  if (typeof input !== "number" || !input) {
    return "0m";
  }
  const seconds = input;
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hrs > 0) {
    return `${hrs}h ${mins}m`;
  }
  return `${mins}m`;
}

function formatDistance(input: number | string | undefined): string {
  if (typeof input === "string") {
    // Could be "4.1 km" from public scraping
    if (input.includes("km")) return input;
    const km = parseFloat(input) / 1000;
    return `${km.toFixed(1)} km`;
  }
  if (typeof input !== "number" || !input) {
    return "0 km";
  }
  const km = input / 1000;
  return `${km.toFixed(1)} km`;
}

function formatDate(dateString: string | undefined): string {
  if (!dateString) return "";
  
  // Handle "Today", "Yesterday", etc. from public scraping
  if (dateString === "Today" || dateString === "Yesterday" || dateString.includes("ago")) {
    return dateString;
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
}

function getActivityDate(run: StravaActivity): string {
  return run.start_date_local || run.startDateLocal || "";
}

function getActivityTime(run: StravaActivity): string {
  return formatTime(run.moving_time || run.movingTime);
}

export const StravaRuns = async () => {
  const [runs, stats] = await Promise.all([getLatestRuns(), getStravaStats()]);

  if ((!runs || runs.length === 0) && !stats) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });

  return (
    <div>
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Outside Work
      </h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        I clear my head with morning runs around London.
      </p>

      {/* Stats */}
      {stats && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <ProgressBar
            current={stats.ytdRunDistanceKm}
            goal={YEARLY_GOAL_KM}
            label={`${currentYear} Running${stats.source === "public" ? "*" : ""}`}
            icon={IconTarget}
          />
          <ProgressBar
            current={stats.monthlyDistanceKm}
            goal={MONTHLY_GOAL_KM}
            label={`${currentMonth} Running`}
            icon={IconTrendingUp}
          />
        </div>
      )}

      {/* Note if using public fallback */}
      {stats?.source === "public" && (
        <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
          * All activities (API unavailable)
        </p>
      )}

      {/* Recent Runs */}
      {runs && runs.length > 0 && (
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
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-medium text-neutral-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-500">
                  {run.name}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <IconCalendar className="h-3 w-3" />
                    {formatDate(getActivityDate(run))}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconMapPin className="h-3 w-3" />
                    {formatDistance(run.distance)}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconClock className="h-3 w-3" />
                    {getActivityTime(run)}
                  </span>
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
      )}

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
