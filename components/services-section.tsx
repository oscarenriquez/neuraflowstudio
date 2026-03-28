import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Engineering teams use NeuraFlow to move faster without lowering the bar."
          description="From discovery to deployment, we design and ship systems that balance polish, performance, and maintainability."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
