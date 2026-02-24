import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com",
      },
      {
        hostname: "img.logo.dev",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles",
        destination: "/press",
        permanent: true, // 301 redirect
      },
      {
        source: "/articles/:path*",
        destination: "/press/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Durable cache for /about - reduces function invocations
        source: "/about",
        headers: [
          {
            key: "Netlify-CDN-Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400, durable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
