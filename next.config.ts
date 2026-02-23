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
};


export default nextConfig;
