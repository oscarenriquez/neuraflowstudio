import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NeuraFlow Studio | AI + Software Development Agency",
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-[var(--background)] font-sans text-[var(--foreground)] antialiased`}>
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,248,252,1))]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <AnalyticsPlaceholder />
        </div>
      </body>
    </html>
  );
}
