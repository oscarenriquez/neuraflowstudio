import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container className="relative">
        <div className="absolute inset-x-0 top-4 -z-10 mx-auto h-80 max-w-4xl rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] blur-3xl" />
        <div className="mx-auto max-w-4xl text-center">
          <Badge>AI + Product Engineering</Badge>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
            AI + Software Development Agency
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Build scalable, intelligent systems with a studio that ships automation, modern apps, and resilient cloud platforms.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:hello@neuraflow.studio"
              className="inline-flex min-w-44 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex min-w-44 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Explore Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
