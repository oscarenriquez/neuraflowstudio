import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-950 dark:text-white">
            NEURAFLOW STUDIO
          </p>
          <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">{siteConfig.description}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/blog" className="transition hover:text-slate-950 dark:hover:text-white">
            Blog
          </Link>
          <Link href="/portfolio" className="transition hover:text-slate-950 dark:hover:text-white">
            Portfolio
          </Link>
          <Link href={`mailto:${siteConfig.ctaEmail}`} className="transition hover:text-slate-950 dark:hover:text-white">
            {siteConfig.ctaEmail}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
