import { BlogPreviewSection } from "@/components/blog-preview-section";
import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { getLatestPosts } from "@/lib/posts";

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogPreviewSection posts={latestPosts} />
      <CtaSection />
    </>
  );
}
