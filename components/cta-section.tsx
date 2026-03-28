import Link from "next/link";

import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-blue-500/20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),rgba(15,23,42,0.96)_60%)] px-8 py-12 text-white shadow-[0_30px_90px_rgba(30,64,175,0.28)] sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-200">Ready to build</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Turn the next complex roadmap item into a system your team can actually scale.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50/80">
            We partner with startups and product teams that need reliable execution across AI, software, and infrastructure.
          </p>
          <Link
            href="mailto:hello@neuraflow.studio"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Start a Project
          </Link>
        </div>
      </Container>
    </section>
  );
}
