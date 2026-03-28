import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-slate-950 dark:text-white">
          NEURAFLOW STUDIO
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={`mailto:hello@neuraflow.studio`}
            className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 md:inline-flex"
          >
            Start a Project
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
