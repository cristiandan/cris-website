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

type NextData = {
  props?: {
    pageProps?: {
      recentActivities?: unknown;
      athleteData?: {
        recentActivities?: unknown;
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

export const getLatestRuns = unstable_cache(
  async (): Promise<StravaActivity[]> => {
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
        return [];
      }

      const html = await res.text();
      const nextDataJson = extractNextDataJson(html);

      if (!nextDataJson) {
        console.warn("Strava: __NEXT_DATA__ not found in HTML");
        return [];
      }

      const nextData = JSON.parse(nextDataJson) as NextData;
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
    } catch (error) {
      console.error("Strava: error fetching/parsing:", error);
      return [];
    } finally {
      clearTimeout(timeout);
    }
  },
  ["strava-runs"],
  { revalidate: 3600 }
);
