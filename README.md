# Azgari Foundation

Marketing website for **Azgari Foundation**, a service business consulting company that helps entrepreneurs launch local service businesses.

## Tech Stack

- **Framework:** Next.js 16.x (App Router)
- **UI:** React 19.x with TypeScript
- **Styling:** Tailwind CSS 4.x
- **Linting:** ESLint 9.x (flat config)

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
├── app/            # Next.js App Router pages
├── components/     # Reusable React components
└── lib/            # Utilities, data, and configuration
```

### Key Files

- `src/lib/links.ts` — Single source of truth for all external URLs, program pricing, course/tool data
- `src/lib/stateData.ts` — US state business ranking data
- `src/app/globals.css` — Theme colors, fonts, button classes
- `src/app/page.tsx` — Homepage funnel (see CLAUDE.md for section order)

## External Integrations

- **GoHighLevel (GHL)** — CRM, booking, and enrollment. All links centralized in `src/lib/links.ts`.
