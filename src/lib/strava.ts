import { unstable_cache } from "next/cache";

export type StravaActivity = {
  id: number;
  name: string;
  type: string;
  detailedType?: string;
  startDateLocal: string;
  distance?: string;
  elevation?: string;
  movingTime?: string;
  images?: { defaultSrc: string }[];
};

export type StravaStats = {
  monthlyDistanceKm: number;
  monthlyTime: string;
  yearToDateKm: number;
  yearToDateHours: number;
};

type ChartDataPoint = {
  month: string;
  miles: number;
  hours: number;
  elev_gain: number;
};

type NextData = {
  props?: {
    pageProps?: {
      recentActivities?: unknown;
      athleteData?: {
        recentActivities?: unknown;
        stats?: {
          monthlyDistance?: string;
          monthlyTime?: string;
          chartData?: ChartDataPoint[];
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

async function fetchStravaData(): Promise<NextData | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch("https://www.strava.com/athletes/50964359", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error("Strava: failed to fetch athlete page:", res.status);
      return null;
    }

    const html = await res.text();
    const nextDataJson = extractNextDataJson(html);

    if (!nextDataJson) {
      console.warn("Strava: __NEXT_DATA__ not found in HTML");
      return null;
    }

    return JSON.parse(nextDataJson) as NextData;
  } catch (error) {
    console.error("Strava: error fetching/parsing:", error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export const getLatestRuns = unstable_cache(
  async (): Promise<StravaActivity[]> => {
    const nextData = await fetchStravaData();
    if (!nextData) return [];

    const pageProps = nextData?.props?.pageProps;
    const recent =
      pageProps?.athleteData?.recentActivities ?? pageProps?.recentActivities;

    if (!Array.isArray(recent)) {
      console.warn("Strava: recentActivities missing or not an array");
      return [];
    }

    return (recent as any[])
      .filter((act) => act && act.type === "run")
      .slice(0, 3)
      .map((act) => ({
        id: Number(act.id),
        name: String(act.name ?? "Run"),
        type: String(act.type ?? ""),
        detailedType: act.detailedType ? String(act.detailedType) : undefined,
        startDateLocal: String(act.startDateLocal ?? ""),
        distance: act.distance ? String(act.distance) : undefined,
        elevation: act.elevation ? String(act.elevation) : undefined,
        movingTime: act.movingTime ? String(act.movingTime) : undefined,
        images: Array.isArray(act.images) ? act.images : undefined,
      }));
  },
  ["strava-runs"],
  { revalidate: 3600 }
);

export const getStravaStats = unstable_cache(
  async (): Promise<StravaStats | null> => {
    const nextData = await fetchStravaData();
    if (!nextData) return null;

    const pageProps = nextData?.props?.pageProps;
    const stats = pageProps?.athleteData?.stats;

    if (!stats) {
      console.warn("Strava: stats missing");
      return null;
    }

    // Parse monthly distance (e.g., "66.9 km")
    const monthlyDistanceKm = parseFloat(stats.monthlyDistance?.replace(/[^\d.]/g, "") ?? "0");

    // Calculate YTD from chart data
    const currentYear = new Date().getFullYear();
    const chartData = stats.chartData ?? [];
    
    const ytdData = chartData.filter((point) => {
      const pointYear = new Date(point.month).getFullYear();
      return pointYear === currentYear;
    });

    const yearToDateMiles = ytdData.reduce((sum, point) => sum + (point.miles || 0), 0);
    const yearToDateHours = ytdData.reduce((sum, point) => sum + (point.hours || 0), 0);

    return {
      monthlyDistanceKm,
      monthlyTime: stats.monthlyTime ?? "0:00:00",
      yearToDateKm: Math.round(yearToDateMiles * MILES_TO_KM * 10) / 10,
      yearToDateHours: Math.round(yearToDateHours * 10) / 10,
    };
  },
  ["strava-stats"],
  { revalidate: 3600 }
);
