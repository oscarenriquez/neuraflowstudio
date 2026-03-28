import type { Metadata } from "next";

import { PostCard } from "@/components/post-card";
import { Container } from "@/components/ui/container";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles on AI agents, automation, application architecture, and scalable systems."
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container className="py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-500">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Technical writing for teams building modern software.
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
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
