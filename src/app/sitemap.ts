import type { MetadataRoute } from "next";

const BASE_URL = "https://www.azgari.org";

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
      url: `${BASE_URL}/answers/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/answers/aging-out-of-foster-care.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/answers/free-programs-for-foster-youth.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/answers/how-to-make-money-at-18.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy.html`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
