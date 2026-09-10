# Samiullah Khan — Portfolio

A Next.js (App Router) portfolio site built from Samiullah Khan's CV, covering
English teaching/linguistics work alongside digital & office skills (IT
support, MS Office, PowerPoint, content writing, SEO, digital marketing).

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm start
```

## Editing content
- `src/components/Hero.tsx` — name, rotating role tags, intro line
- `src/components/Lexicon.tsx` — Language & Teaching / Digital & Office skills
- `src/components/Timeline.tsx` — work experience & education
- `src/components/Certificates.tsx` — certificates
- `src/components/Contact.tsx` — email, phone, location, languages

## Deploying
This is a standard Next.js app, so it deploys as-is to Vercel, Netlify, or any
Node host. On Vercel: push to a GitHub repo, then "Import Project" and it will
detect Next.js automatically.
