import { unstable_cache } from "next/cache";

export type StravaActivity = {
  id: number;
  name: string;
  type: string;
  sport_type: string;
  start_date_local: string;
  distance: number;
  total_elevation_gain: number;
  moving_time: number;
};

export type StravaStats = {
  ytdRunDistanceKm: number;
  ytdRunCount: number;
  ytdRunTimeHours: number;
  recentRunDistanceKm: number;
  recentRunCount: number;
};

type TokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
};

type AthleteStats = {
  ytd_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elevation_gain: number;
  };
  recent_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
  };
};

const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;
const STRAVA_ATHLETE_ID = "50964359";

async function getAccessToken(): Promise<string | null> {
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    console.error("Strava: Missing environment variables");
    return null;
  }

  try {
    const res = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        refresh_token: STRAVA_REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
    });

    if (!res.ok) {
      console.error("Strava: Failed to refresh token:", res.status);
      return null;
    }

    const data = (await res.json()) as TokenResponse;
    return data.access_token;
  } catch (error) {
    console.error("Strava: Error refreshing token:", error);
    return null;
  }
}

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hrs > 0) {
    return `${hrs}h ${mins}m`;
  }
  return `${mins}m`;
}

function formatDistance(meters: number): string {
  const km = meters / 1000;
  return `${km.toFixed(1)} km`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return date.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
}

export const getStravaStats = unstable_cache(
  async (): Promise<StravaStats | null> => {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    try {
      const res = await fetch(
        `https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!res.ok) {
        console.error("Strava: Failed to fetch stats:", res.status);
        return null;
      }

      const data = (await res.json()) as AthleteStats;

      return {
        ytdRunDistanceKm: Math.round(data.ytd_run_totals.distance / 1000 * 10) / 10,
        ytdRunCount: data.ytd_run_totals.count,
        ytdRunTimeHours: Math.round(data.ytd_run_totals.moving_time / 3600 * 10) / 10,
        recentRunDistanceKm: Math.round(data.recent_run_totals.distance / 1000 * 10) / 10,
        recentRunCount: data.recent_run_totals.count,
      };
    } catch (error) {
      console.error("Strava: Error fetching stats:", error);
      return null;
    }
  },
  ["strava-stats-api"],
  { revalidate: 3600 }
);

export const getLatestRuns = unstable_cache(
  async (): Promise<StravaActivity[]> => {
    const accessToken = await getAccessToken();
    if (!accessToken) return [];

    try {
      const res = await fetch(
        "https://www.strava.com/api/v3/athlete/activities?per_page=10",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!res.ok) {
        console.error("Strava: Failed to fetch activities:", res.status);
        return [];
      }

      const activities = (await res.json()) as StravaActivity[];

      // Filter to runs only and take first 3
      return activities
        .filter((act) => act.sport_type === "Run" || act.type === "Run")
        .slice(0, 3)
        .map((act) => ({
          ...act,
          // Add formatted fields for display
          distanceFormatted: formatDistance(act.distance),
          movingTimeFormatted: formatTime(act.moving_time),
          dateFormatted: formatDate(act.start_date_local),
        }));
    } catch (error) {
      console.error("Strava: Error fetching activities:", error);
      return [];
    }
  },
  ["strava-runs-api"],
  { revalidate: 3600 }
);
