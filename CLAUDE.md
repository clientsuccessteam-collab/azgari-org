# CLAUDE.md

Guide for AI assistants working on the Azgari Foundation codebase.

## Project Overview

Marketing website for **Azgari Foundation**, a service business consulting company that helps entrepreneurs launch local service businesses. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16.x (App Router, `src/app/` directory)
- **UI:** React 19.x with TypeScript
- **Styling:** Tailwind CSS 4.x via PostCSS
- **Linting:** ESLint 9.x (flat config) with `next/core-web-vitals` and `next/typescript`
- **Analytics:** Vercel Analytics (`@vercel/analytics`)
- **Video:** Remotion 4.x for generated promo/stats/testimonial videos
- **No testing framework** is currently configured
- **No CI/CD pipelines** are configured

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint (eslint flat config)
```

Remotion scripts (video generation):
```bash
npm run remotion:studio               # Open Remotion Studio
npm run remotion:render:promo         # Render promo video
npm run remotion:render:stats         # Render stats video
npm run remotion:render:testimonials  # Render testimonial video
```

Always run `npm run build` to verify changes compile without errors. Run `npm run lint` to check for lint issues.

**Lint must pass with 0 errors and 0 warnings before committing.** Fix all issues before pushing.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (metadata, JSON-LD, Vercel Analytics)
│   ├── page.tsx          # Homepage — 17-section conversion funnel
│   ├── globals.css       # Theme variables, base styles, .btn classes
│   ├── JsonLd.tsx        # JSON-LD structured data component
│   ├── about/page.tsx
│   ├── acquisition/page.tsx
│   ├── case-studies/page.tsx
│   ├── contact/page.tsx
│   ├── courses/page.tsx
│   ├── faq/page.tsx
│   ├── guides/page.tsx
│   ├── media/page.tsx
│   ├── media/MediaPromoPlayer.tsx  # Remotion player ("use client", currently disabled)
│   ├── privacy/page.tsx
│   ├── qualify/page.tsx            # Belief-first qualification page with GHL quiz
│   ├── scholarships/page.tsx    # Scholarship application (links to GHL nonprofit page)
│   ├── services/page.tsx
│   ├── state/page.tsx
│   ├── state/[state]/page.tsx      # Dynamic route for 50 US states
│   ├── terms/page.tsx
│   ├── tools/page.tsx
│   ├── videos/page.tsx
│   ├── videos/VideoShowcase.tsx    # Video gallery ("use client")
│   └── webinar/page.tsx
├── components/           # Reusable React components
│   ├── Navbar.tsx        # Fixed nav with mobile menu ("use client") — includes Scholarships link
│   ├── Hero.tsx
│   ├── MissionWrapper.tsx
│   ├── TrustBanner.tsx
│   ├── Problem.tsx
│   ├── Process.tsx
│   ├── ValueComparison.tsx  # Franchise vs MBA vs DIY vs Azgari
│   ├── Stats.tsx
│   ├── Transformation.tsx
│   ├── Testimonials.tsx     # Client social proof ("use client")
│   ├── Qualification.tsx    # "Who this is for / not for" pre-qualification
│   ├── ImpactModule.tsx     # Mission bridge
│   ├── ValueStack.tsx       # What's included breakdown
│   ├── Pricing.tsx
│   ├── ScholarshipCallout.tsx
│   ├── HomeFAQ.tsx          # Homepage FAQ section ("use client")
│   ├── Transparency.tsx
│   ├── CallPreview.tsx      # Strategy call agenda + disqualifiers
│   ├── CTA.tsx
│   ├── CTAButton.tsx        # Shared CTA button with variant support
│   ├── Footer.tsx           # Footer with YouTube, Instagram, LinkedIn links
│   ├── Card.tsx
│   ├── FAQAccordion.tsx     # Interactive accordion ("use client")
│   ├── PaymentCalculator.tsx
│   ├── ReinvestmentDisclosure.tsx
│   ├── ShareButton.tsx      # ("use client")
│   ├── UrgencyContextPanel.tsx
│   └── VideoPlayer.tsx      # ("use client")
└── lib/                  # Utilities and data
    ├── links.ts          # Centralized GHL links, pricing, courses, tools, media config
    └── stateData.ts      # US state business data and ranking logic
```

## Key Files

- **`src/lib/links.ts`** — Single source of truth for all external links (GoHighLevel CRM), program pricing, course data, tool data, and media entries. Update here when links or pricing change.
- **`src/lib/stateData.ts`** — State-level business ranking data with regional prioritization logic. Used by dynamic `/state/[state]` routes.
- **`src/app/globals.css`** — Theme definition using Tailwind v4 `@theme` block. Defines brand colors, fonts, and button classes.
- **`src/app/layout.tsx`** — Root layout with global metadata (OpenGraph, Twitter cards), JSON-LD structured data, and Vercel Analytics.
- **`src/app/JsonLd.tsx`** — Reusable JSON-LD structured data component for SEO.
- **`src/app/qualify/page.tsx`** — Belief-first qualification page. Main qualify CTA routes here instead of directly to GHL. Quiz URL configurable via `NEXT_PUBLIC_QUALIFY_QUIZ_URL` env var.

## Code Conventions

### Code Quality Rules (Enforced)
- **Zero lint errors and zero warnings** — `npm run lint` must pass clean before every commit
- **No unused imports** — remove any `import` that isn't referenced in the file
- **No unused variables/parameters** — remove or prefix with `_` only if semantically needed (e.g. `_event`)
- **Escape all entities in JSX** — use `&apos;` not `'`, `&quot;` not `"`, `&amp;` not `&` in rendered text
- **No dead code** — delete commented-out code, unused functions, and orphaned components
- **Build must succeed** — `npm run build` must complete without errors before every commit

### Component Patterns
- **Functional components only** — no class components
- **Default exports** for page components (`export default function PageName()`)
- **TypeScript interfaces** for all component props (defined in same file)
- **`"use client"` directive** only on components that need browser APIs (useState, onClick handlers, etc.). Most components are server components by default.
- Client components: `Navbar`, `FAQAccordion`, `HomeFAQ`, `Testimonials`, `ShareButton`, `VideoPlayer`, `VideoShowcase`, `MediaPromoPlayer`

### Naming
- Components: PascalCase files (`CTAButton.tsx`, `FAQAccordion.tsx`)
- Pages: `page.tsx` inside route directories (Next.js App Router convention)
- Lib files: camelCase (`links.ts`, `stateData.ts`)

### Styling
- Tailwind utility classes for layout and responsive design
- Inline `style={{ }}` for dynamic values referencing CSS variables
- Brand colors: Forest Green (`#1B4332`), Gold (`#D4A029`), Cream (`#F8F6F0`)
- Responsive patterns: `grid sm:grid-cols-2 lg:grid-cols-4`, section padding `px-6 py-24`
- Custom `.btn` classes defined in `globals.css` for buttons

### Data Management
- All external URLs and configuration live in `src/lib/links.ts` — never hardcode GHL links in components
- State business data centralized in `src/lib/stateData.ts`
- No backend or database — this is a static/SSG marketing site

### Next.js Patterns
- `generateStaticParams()` for static generation of dynamic routes (state pages)
- `generateMetadata()` for per-page SEO metadata
- `next/image` for optimized images, `next/link` for internal navigation
- Path alias: `@/*` maps to `./src/*` (configured in tsconfig.json)

### TypeScript
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler
- All props typed with interfaces

## Homepage Funnel Order

The homepage (`src/app/page.tsx`) follows a mechanism-first conversion funnel designed for paid traffic (Facebook ads). Sections must stay in this order:

1. **Hero** — Qualification-first CTAs ("See If You Qualify", not "Book a Call")
2. **MissionWrapper** — Mission statement
3. **TrustBanner** — Third-party trust badges
4. **Problem** — Cost of inaction
5. **Process** — 8-step mechanism (builds belief before proof)
6. **ValueComparison** — Franchise vs MBA vs DIY vs Azgari
7. **Stats** — Proof numbers (AFTER mechanism, not before)
8. **Transformation** — Financial + life outcomes
9. **Testimonials** — Client social proof
10. **Qualification** — "This IS for you / This is NOT for you" (filters before pricing)
11. **ImpactModule** — Mission bridge
12. **ValueStack** — What's included
13. **Pricing** — Program tiers
14. **ScholarshipCallout** — Compliance
15. **HomeFAQ + Transparency** — Objection handling
16. **CallPreview** — What happens on the strategy call (reduces call uncertainty)
17. **CTA** — Final "Apply for a Strategy Call"

**Key principle:** Mechanism (how it works) → Proof (that it works) → Qualification (who it's for) → Call. Never lead with revenue claims before explaining the process.

## Brand & Design Context

The site uses a professional, trust-focused design:
- **Primary color:** Forest Green (`#1B4332`) — authority, reliability
- **Accent color:** Gold (`#D4A029`) — premium positioning
- **Background:** Cream (`#F8F6F0`) — warm, approachable
- **Font:** Inter (Google Fonts)
- **Trust elements:** Google Business, Trustpilot, BBB badges in TrustBanner
- **CTA pattern:** Primary buttons link to GoHighLevel booking/enrollment pages

## External Integrations

- **GoHighLevel (GHL):** CRM and booking platform. All lead capture, booking, and enrollment links point to GHL. Links are centralized in `src/lib/links.ts`.
- **Vercel Analytics:** Page-level analytics via `@vercel/analytics`, loaded in root layout.
- **Remotion:** Video generation framework for promo, stats, and testimonial videos. Studio and render scripts in `package.json`.
- **IndexNow:** SEO indexing key at `public/fc4bdac4958808d967a1608b1cf413b8.txt`.
