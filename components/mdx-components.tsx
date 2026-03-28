import type { ComponentProps } from "react";

import Link from "next/link";

export const mdxComponents = {
  a: (props: ComponentProps<"a">) => (
    <Link
      href={props.href ?? "#"}
      className="font-medium text-blue-600 underline decoration-blue-200 underline-offset-4 dark:text-blue-300 dark:decoration-blue-500/40"
    >
      {props.children}
    </Link>
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-10 text-xl font-semibold tracking-tight text-slate-950 dark:text-white" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-6 leading-8 text-slate-700 dark:text-slate-300" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-300" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="mt-6 list-decimal space-y-3 pl-6 text-slate-700 dark:text-slate-300" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="mt-8 border-l-2 border-blue-500/40 pl-6 italic text-slate-600 dark:text-slate-300" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-900 dark:bg-white/10 dark:text-white" {...props} />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mt-8 overflow-x-auto rounded-3xl border border-black/5 bg-slate-950 p-5 text-sm text-slate-100 dark:border-white/10"
      {...props}
    />
  )
};
