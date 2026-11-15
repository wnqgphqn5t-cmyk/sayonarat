import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI crawlers — explicit allow for GEO/citation indexing (same policy as antinox.be).
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.sayonarat.be/sitemap.xml",
  };
}
