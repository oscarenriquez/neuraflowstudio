import type { Metadata } from "next";

import { StructuredData } from "@/components/structured-data";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { getLatestPosts } from "@/lib/posts";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { portfolioProjects, services, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  description:
    "NeuraFlow Studio designs AI agents, automation systems, modern web and mobile apps, and scalable cloud architecture for product-driven teams.",
  path: "/"
});

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.ctaEmail,
    areaServed: "Worldwide",
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description
        }
      }))
    },
    subjectOf: portfolioProjects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      image: absoluteUrl(project.image)
    }))
  };

  return (
    <>
      <StructuredData data={homePageSchema} />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogPreviewSection posts={latestPosts} />
      <CtaSection />
    </>
  );
}
