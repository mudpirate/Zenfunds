import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"], // 👈 allow Clerk-hosted images
  },
};

export default nextConfig;
