import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString()
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: new Date().toISOString()
    },
    ...blogEntries
  ];
}
