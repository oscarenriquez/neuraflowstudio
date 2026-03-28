import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";
import type { Post, PostFrontmatter } from "@/types/post";

const contentDirectory = path.join(process.cwd(), "content");

async function readPostFile(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}

export async function getPostSlugs() {
  const files = await fs.readdir(contentDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .sort();
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readPostFile(slug);
      const { data, content } = matter(source);
      const frontmatter = data as PostFrontmatter;

      return {
        slug,
        ...frontmatter,
        readingTime: readingTime(content).text
      };
    })
  );

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getLatestPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string) {
  const source = await readPostFile(slug);
  const { content, data } = matter(source);
  const frontmatter = data as PostFrontmatter;

  const compiled = await compileMDX<PostFrontmatter>({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug]
      }
    }
  });

  return {
    slug,
    frontmatter,
    content: compiled.content,
    readingTime: readingTime(content).text
  };
}
