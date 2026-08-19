import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/prix-deratisation-liege-2026",
        destination: "/deratisation-liege",
        permanent: true,
      },
      {
        source: "/blog/prix-desinsectisation-liege-2026",
        destination: "/desinsectisation-liege",
        permanent: true,
      },
      {
        source: "/blog/prix-punaises-lit-liege-2026",
        destination: "/punaises-de-lit-liege",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
