export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type Post = PostFrontmatter & {
  slug: string;
  readingTime: string;
};
