import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Post } from "@/types/post";

type BlogPreviewSectionProps = {
  posts: Post[];
};

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Technical writing that turns decisions into repeatable systems."
            description="We publish practical engineering notes, architecture ideas, and AI implementation patterns twice a week."
          />
          <Link href="/blog" className="text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-300">
            Visit the blog
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/5 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-300">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
