import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline critical CSS via critters → réduit le CSS render-blocking (~50-150ms)
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
