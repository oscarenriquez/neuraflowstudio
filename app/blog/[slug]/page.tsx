import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <Container className="py-24">
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {post.frontmatter.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{post.frontmatter.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12">{post.content}</div>
        </article>
      </Container>
    );
  } catch {
    notFound();
  }
}
