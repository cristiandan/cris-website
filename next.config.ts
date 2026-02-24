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
};

export default nextConfig;
