import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at top, rgba(59,130,246,0.16), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f6f8fc 100%)",
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
          NeuraFlow Studio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "920px" }}>
          <div style={{ fontSize: 72, lineHeight: 1.04, fontWeight: 700 }}>
            AI systems, product engineering, and scalable software delivery.
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.4, color: "#475569" }}>{siteConfig.description}</div>
        </div>
        <div style={{ fontSize: 24, color: "#64748b", letterSpacing: "0.08em" }}>{siteConfig.url.replace("https://", "")}</div>
      </div>
    ),
    size
  );
}
