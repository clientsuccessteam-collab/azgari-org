import type { MetadataRoute } from "next";

const BASE_URL = "https://azgari.org";

export default function sitemap(): MetadataRoute.Sitemap {
  // The pilot-program site is a single static page served from
  // public/index.html. All legacy routes 301-redirect to the homepage in
  // next.config.ts and are intentionally excluded here.
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy.html`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
