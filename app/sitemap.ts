import type { MetadataRoute } from "next";
import { CATEGORIES, getAllPosts } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", ...CATEGORIES.map((c) => `/${c.slug}`)];

  const postRoutes = CATEGORIES.flatMap((c) =>
    getAllPosts(c.slug).map((p) => ({
      url: `${SITE.url}/${c.slug}/${p.slug}`,
      lastModified: p.date,
    }))
  );

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...postRoutes,
  ];
}
