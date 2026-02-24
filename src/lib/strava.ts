import { unstable_cache } from "next/cache";

export type StravaActivity = {
  id: number;
  name: string;
  type: string;
  sport_type?: string;
  start_date_local?: string;
  startDateLocal?: string;
  distance: number | string;
  total_elevation_gain?: number;
  moving_time?: number;
  movingTime?: string;
};

export type StravaStats = {
  ytdRunDistanceKm: number;
  ytdRunCount: number;
  ytdRunTimeHours: number;
  monthlyDistanceKm: number;
  source: "api" | "public";
};

// =============================================================================
// Strava API (primary)
// =============================================================================

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
    console.warn("Strava API: Missing environment variables, will use public fallback");
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
      console.error("Strava API: Failed to refresh token:", res.status);
      return null;
    }

    const data = (await res.json()) as TokenResponse;
    return data.access_token;
  } catch (error) {
    console.error("Strava API: Error refreshing token:", error);
    return null;
  }
}

async function fetchStatsFromAPI(): Promise<StravaStats | null> {
  const accessToken = await getAccessToken();
  if (!accessToken) return null;

  try {
    const res = await fetch(
      `https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!res.ok) {
      console.error("Strava API: Failed to fetch stats:", res.status);
      return null;
    }

    const data = (await res.json()) as AthleteStats;

    return {
      ytdRunDistanceKm: Math.round((data.ytd_run_totals.distance / 1000) * 10) / 10,
      ytdRunCount: data.ytd_run_totals.count,
      ytdRunTimeHours: Math.round((data.ytd_run_totals.moving_time / 3600) * 10) / 10,
      monthlyDistanceKm: Math.round((data.recent_run_totals.distance / 1000) * 10) / 10,
      source: "api",
    };
  } catch (error) {
    console.error("Strava API: Error fetching stats:", error);
    return null;
  }
}

async function fetchRunsFromAPI(): Promise<StravaActivity[]> {
  const accessToken = await getAccessToken();
  if (!accessToken) return [];

  try {
    const res = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=10",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!res.ok) {
      console.error("Strava API: Failed to fetch activities:", res.status);
      return [];
    }

    const activities = (await res.json()) as StravaActivity[];

    return activities
      .filter((act) => act.sport_type === "Run" || act.type === "Run")
      .slice(0, 3);
  } catch (error) {
    console.error("Strava API: Error fetching activities:", error);
    return [];
  }
}

// =============================================================================
// Public Profile Scraping (fallback)
// =============================================================================

type PublicNextData = {
  props?: {
    pageProps?: {
      athleteData?: {
        recentActivities?: any[];
        stats?: {
          monthlyDistance?: string;
          monthlyTime?: string;
          chartData?: { month: string; miles: number; hours: number }[];
        };
      };
    };
  };
};

function extractNextDataJson(html: string): string | null {
  const match = html.match(
    /<script[^>]*id="__NEXT_DATA__"[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/
  );
  return match?.[1] ?? null;
}

const MILES_TO_KM = 1.60934;

async function fetchFromPublicProfile(): Promise<PublicNextData | null> {
  try {
    const res = await fetch(`https://www.strava.com/athletes/${STRAVA_ATHLETE_ID}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      console.error("Strava Public: Failed to fetch profile:", res.status);
      return null;
    }

    const html = await res.text();
    const json = extractNextDataJson(html);
    if (!json) {
      console.warn("Strava Public: __NEXT_DATA__ not found");
      return null;
    }

    return JSON.parse(json) as PublicNextData;
  } catch (error) {
    console.error("Strava Public: Error fetching profile:", error);
    return null;
  }
}

async function fetchStatsFromPublic(): Promise<StravaStats | null> {
  const data = await fetchFromPublicProfile();
  if (!data) return null;

  const stats = data.props?.pageProps?.athleteData?.stats;
  if (!stats) return null;

  // Parse monthly distance
  const monthlyKm = parseFloat(stats.monthlyDistance?.replace(/[^\d.]/g, "") ?? "0");

  // Calculate YTD from chart data (note: this is ALL sports, not running only)
  const currentYear = new Date().getFullYear();
  const chartData = stats.chartData ?? [];
  const ytdData = chartData.filter((p) => new Date(p.month).getFullYear() === currentYear);
  const ytdMiles = ytdData.reduce((sum, p) => sum + (p.miles || 0), 0);
  const ytdHours = ytdData.reduce((sum, p) => sum + (p.hours || 0), 0);

  return {
    ytdRunDistanceKm: Math.round(ytdMiles * MILES_TO_KM * 10) / 10,
    ytdRunCount: 0, // Not available in public data
    ytdRunTimeHours: Math.round(ytdHours * 10) / 10,
    monthlyDistanceKm: monthlyKm,
    source: "public",
  };
}

async function fetchRunsFromPublic(): Promise<StravaActivity[]> {
  const data = await fetchFromPublicProfile();
  if (!data) return [];

  const activities = data.props?.pageProps?.athleteData?.recentActivities ?? [];

  return activities
    .filter((act: any) => act && act.type === "run")
    .slice(0, 3)
    .map((act: any) => ({
      id: Number(act.id),
      name: String(act.name ?? "Run"),
      type: "Run",
      startDateLocal: String(act.startDateLocal ?? ""),
      distance: act.distance ?? "0",
      movingTime: act.movingTime ?? "0:00",
    }));
}

// =============================================================================
// Exported functions (API with public fallback)
// =============================================================================

export const getStravaStats = unstable_cache(
  async (): Promise<StravaStats | null> => {
    // Try API first
    const apiStats = await fetchStatsFromAPI();
    if (apiStats) {
      console.log("Strava: Using API data");
      return apiStats;
    }

    // Fall back to public scraping
    console.log("Strava: Falling back to public profile scraping");
    return fetchStatsFromPublic();
  },
  ["strava-stats-v2"],
  { revalidate: 3600 }
);

export const getLatestRuns = unstable_cache(
  async (): Promise<StravaActivity[]> => {
    // Try API first
    const apiRuns = await fetchRunsFromAPI();
    if (apiRuns.length > 0) {
      return apiRuns;
    }

    // Fall back to public scraping
    console.log("Strava: Falling back to public profile for runs");
    return fetchRunsFromPublic();
  },
  ["strava-runs-v2"],
  { revalidate: 3600 }
);
