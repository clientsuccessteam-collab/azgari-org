# Azgari Foundation

Marketing website for **Azgari Foundation**, a done-for-you business building firm. We build service businesses professionals own 100% — single flagship offer at $50K with manager in seat within 180 days.

## Tech Stack

- **Framework:** Next.js 16.x (App Router)
- **UI:** React 19.x with TypeScript
- **Styling:** Tailwind CSS 4.x
- **Linting:** ESLint 9.x (flat config)
- **Analytics:** Vercel Analytics
- **Video:** Remotion 4.x (promo/stats/testimonial generation)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run remotion:studio` | Open Remotion Studio |
| `npm run remotion:render:promo` | Render promo video |
| `npm run remotion:render:stats` | Render stats video |
| `npm run remotion:render:testimonials` | Render testimonial video |

## Code Quality

**Both checks must pass before every commit:**

```bash
npm run lint     # Must exit with 0 errors and 0 warnings
npm run build    # Must complete without errors
```

### Rules

- **No unused imports** — remove any `import` not referenced in the file
- **No unused variables** — remove parameters and variables that aren't used
- **Escape JSX entities** — use `&apos;` `&quot;` `&amp;` in rendered text, not raw characters
- **No dead code** — delete commented-out code and orphaned components

## Project Structure

```
src/
├── app/            # Next.js App Router pages (19 routes)
│   ├── layout.tsx  # Root layout (metadata, JSON-LD, Vercel Analytics)
│   ├── page.tsx    # Homepage — 17-section conversion funnel
│   └── ...         # about, acquisition, case-studies, contact, courses,
│                   # faq, guides, media, privacy, qualify, scholarships,
│                   # services, state/[state], terms, tools, videos, webinar
├── components/     # 28 reusable React components
└── lib/            # Utilities, data, and configuration
    ├── links.ts    # All external URLs, pricing, course/tool/media data
    └── stateData.ts # US state business ranking data
```

### Key Files

- `src/lib/links.ts` — Single source of truth for all external URLs, flagship pricing ($50K), course/tool/media data. Fake testimonials/case studies removed.
- `src/lib/stateData.ts` — US state business ranking data
- `src/app/globals.css` — Theme colors, fonts, button classes
- `src/app/page.tsx` — Homepage funnel (see CLAUDE.md for section order)
- `src/app/qualify/page.tsx` — Qualification page for $50K done-for-you offer with GHL quiz integration

## External Integrations

- **GoHighLevel (GHL)** — CRM, booking, and enrollment. All links centralized in `src/lib/links.ts`.
- **Vercel Analytics** — Page-level analytics loaded in root layout.
- **Remotion** — Video generation for promo, stats, and testimonial content.
- **IndexNow** — SEO indexing key for search engines.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_QUALIFY_QUIZ_URL` | GHL qualification quiz URL | GHL landing page |
