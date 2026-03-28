import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { portfolioProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected software, AI, and cloud product engagements by NeuraFlow Studio."
};

export default function PortfolioPage() {
  return (
    <Container className="py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-500">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Product and platform work designed for growth.
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600">
          A curated set of representative projects spanning AI operations, commerce systems, and analytics-driven SaaS.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
          >
            <div className="relative aspect-[16/10]">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-500">{project.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
