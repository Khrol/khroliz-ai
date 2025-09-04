import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "khroliz.com",
      },
    ],
  },
};

export default nextConfig;
