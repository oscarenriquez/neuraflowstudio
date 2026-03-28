import Link from "next/link";

import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),rgba(255,255,255,0.95)_55%)] px-8 py-12 shadow-[0_30px_90px_rgba(15,23,42,0.06)] sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-600">Ready to build</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Turn the next complex roadmap item into a system your team can actually scale.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We partner with startups and product teams that need reliable execution across AI, software, and infrastructure.
          </p>
          <Link
            href="mailto:hello@neuraflow.studio"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Start a Project
          </Link>
        </div>
      </Container>
    </section>
  );
}
