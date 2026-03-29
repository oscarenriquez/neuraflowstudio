import { ImageResponse } from "next/og";

import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

type BlogPostOgImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostOgImage({ params }: BlogPostOgImageProps) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((entry) => entry.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.16), transparent 32%), linear-gradient(180deg, #ffffff 0%, #f6f8fc 100%)",
          padding: "64px",
          color: "#0f172a"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            borderRadius: "999px",
            border: "1px solid rgba(37,99,235,0.18)",
            background: "rgba(37,99,235,0.08)",
            color: "#1d4ed8",
            fontSize: 24,
            letterSpacing: "0.2em",
            padding: "14px 22px",
            textTransform: "uppercase"
          }}
        >
          Blog Article
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "920px" }}>
          <div style={{ fontSize: 64, lineHeight: 1.06, fontWeight: 700 }}>{post?.title ?? siteConfig.name}</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#475569" }}>
            {post?.description ?? siteConfig.description}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#64748b" }}>
          <div>{siteConfig.name}</div>
          <div>{siteConfig.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size
  );
}
