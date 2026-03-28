import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <div className="text-base leading-7 text-slate-600">{description}</div>
    </div>
  );
}
