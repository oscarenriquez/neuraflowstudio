import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

const defaultOgImage = `${siteConfig.url}/opengraph-image`;

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
};

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = siteConfig.keywords,
  type = "website",
  publishedTime,
  tags
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  const metadata: Metadata = {
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      type,
      url,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
      publishedTime,
      tags,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [defaultOgImage]
    }
  };

  if (title) {
    metadata.title = title;
  }

  return metadata;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.ctaEmail,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.socialLinks),
    logo: absoluteUrl("/favicon.svg")
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US"
  };
}
