import Link from "next/link";

import type { Post } from "@/types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">{post.title}</h2>
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
  );
}
