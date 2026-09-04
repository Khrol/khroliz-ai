import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/career", "/presentations", "/contact"].map((path) => ({
    url: `https://khroliz.com${path}`,
    lastModified,
  }));
}
