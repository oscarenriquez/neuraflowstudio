import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";

import { StructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createMetadata, organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NeuraFlow Studio | AI + Software Development Agency",
    template: `%s | ${siteConfig.name}`
  },
  applicationName: siteConfig.name,
  authors: siteConfig.authors,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  ...createMetadata({
    description: siteConfig.description,
    path: "/"
  })
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,248,252,1))]">
          <StructuredData data={[organizationSchema(), websiteSchema()]} />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
