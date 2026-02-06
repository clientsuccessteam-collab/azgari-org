# CLAUDE.md

Guide for AI assistants working on the Azgari Foundation codebase.

## Project Overview

Marketing website for **Azgari Foundation**, a service business consulting company that helps entrepreneurs launch local service businesses. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16.x (App Router, `src/app/` directory)
- **UI:** React 19.x with TypeScript
- **Styling:** Tailwind CSS 4.x via PostCSS
- **Linting:** ESLint 9.x (flat config) with `next/core-web-vitals` and `next/typescript`
- **No testing framework** is currently configured
- **No CI/CD pipelines** are configured

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint (eslint flat config)
```

Always run `npm run build` to verify changes compile without errors. Run `npm run lint` to check for lint issues.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (metadata, fonts, global providers)
│   ├── page.tsx          # Homepage — composes ~11 section components
│   ├── globals.css       # Theme variables, base styles, .btn classes
│   ├── about/page.tsx
│   ├── acquisition/page.tsx
│   ├── contact/page.tsx
│   ├── courses/page.tsx
│   ├── faq/page.tsx
│   ├── guides/page.tsx
│   ├── media/page.tsx
│   ├── privacy/page.tsx
│   ├── scholarships/page.tsx
│   ├── services/page.tsx
│   ├── state/page.tsx
│   ├── state/[state]/page.tsx   # Dynamic route for 50 US states
│   ├── terms/page.tsx
│   └── tools/page.tsx
├── components/           # Reusable React components
│   ├── Navbar.tsx        # Fixed nav with mobile menu ("use client")
│   ├── Hero.tsx
│   ├── TrustBanner.tsx
│   ├── Problem.tsx
│   ├── Process.tsx
│   ├── Stats.tsx
│   ├── Transformation.tsx
│   ├── Pricing.tsx
│   ├── Transparency.tsx
│   ├── CTA.tsx
│   ├── CTAButton.tsx     # Shared CTA button with variant support
│   ├── Footer.tsx
│   ├── FAQAccordion.tsx  # Interactive accordion ("use client")
│   ├── PaymentCalculator.tsx  # Monthly payment calc ("use client")
│   ├── ShareButton.tsx
│   └── UrgencyContextPanel.tsx
└── lib/                  # Utilities and data
    ├── links.ts          # Centralized GHL links, pricing, courses, tools config
    └── stateData.ts      # US state business data and ranking logic
```

## Key Files

- **`src/lib/links.ts`** — Single source of truth for all external links (GoHighLevel CRM), program pricing, course data, and tool data. Update here when links or pricing change.
- **`src/lib/stateData.ts`** — State-level business ranking data with regional prioritization logic. Used by dynamic `/state/[state]` routes.
- **`src/app/globals.css`** — Theme definition using Tailwind v4 `@theme` block. Defines brand colors, fonts, and button classes.
- **`src/app/layout.tsx`** — Root layout with global metadata (OpenGraph, Twitter cards), Inter font, Navbar, and Footer.

## Code Conventions

### Component Patterns
- **Functional components only** — no class components
- **Default exports** for page components (`export default function PageName()`)
- **TypeScript interfaces** for all component props (defined in same file)
- **`"use client"` directive** only on components that need browser APIs (useState, onClick handlers, etc.). Most components are server components by default.
- Client components: `Navbar`, `FAQAccordion`, `PaymentCalculator`, `UrgencyContextPanel`, `ShareButton`

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
- No other third-party APIs, analytics, or backend services.
