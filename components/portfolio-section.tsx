import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/lib/site";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected platforms, automations, and digital products."
            description="Representative engagements that reflect the kind of systems we build for ambitious teams."
          />
          <Link
            href="/portfolio"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-300"
          >
            View all work
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-[16/10]">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-500">{project.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
