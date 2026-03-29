import type { Metadata } from "next";

import { StructuredData } from "@/components/structured-data";
import { PostCard } from "@/components/post-card";
import { Container } from "@/components/ui/container";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "Technical articles on AI agents, automation, application architecture, and scalable systems.",
  path: "/blog",
  keywords: [...siteConfig.keywords, "engineering blog", "technical articles"]
});

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    description: "Technical articles on AI agents, automation, application architecture, and scalable systems.",
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: absoluteUrl(`/blog/${post.slug}`)
    }))
  };

  return (
    <Container className="py-24">
      <StructuredData data={blogSchema} />
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-500">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Technical writing for teams building modern software.
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Notes on architecture, AI implementation, delivery systems, and the engineering decisions behind resilient products.
        </p>
      </div>
      <div className="mt-12 grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
