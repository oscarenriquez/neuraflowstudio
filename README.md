# NeuraFlow Studio

Premium Next.js marketing site and MDX blog for an AI and software agency.

## Stack

- Next.js App Router
- TypeScript in strict mode
- Tailwind CSS
- Local MDX content for the blog
- ESLint + Prettier
- Light-only premium UI system

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run format
```

## Content

- Blog posts live in `content/*.mdx`
- Portfolio and service data live in `lib/site.ts`
- Blog routes are generated from local MDX files under `/blog/[slug]`
