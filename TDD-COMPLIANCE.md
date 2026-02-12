# Technical Design Document — Nonprofit Compliance + Conversion Alignment

**Project:** Azgari Foundation Website
**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · GoHighLevel (external checkout/CRM)
**Source BRD:** Business Requirements Document — Conversion + Compliance Alignment
**Org type:** 501(c)(3) nonprofit
**Conversion model:** Hybrid — direct GHL checkout + sales-call-to-invoice

---

## Table of Contents

1. [Current-State Audit Summary](#1-current-state-audit-summary)
2. [Gap Analysis Matrix](#2-gap-analysis-matrix)
3. [Data Layer Changes (`src/lib/links.ts`)](#3-data-layer-changes)
4. [Component Specifications](#4-component-specifications)
5. [Page-Level Integration Map](#5-page-level-integration-map)
6. [CTA Language Rules](#6-cta-language-rules)
7. [Copy Framework Enforcement](#7-copy-framework-enforcement)
8. [Build Order + Dependencies](#8-build-order--dependencies)
9. [Acceptance Criteria (testable)](#9-acceptance-criteria)
10. [What NOT to Build](#10-what-not-to-build)

---

## 1. Current-State Audit Summary

| Area | Score | Notes |
|------|-------|-------|
| Mission language | 40/100 | Exists on `/about` and `/scholarships` but not on conversion pages; no reusable component |
| Revenue reinvestment | 50/100 | "10% of enrollments fund scholarships" on `/scholarships` — missing from footer, pricing, homepage |
| Scholarship visibility | 75/100 | Dedicated `/scholarships` page; missing from homepage and pricing proximity |
| Impact metrics | 35/100 | Financial stats only (160+ launched, $285K); zero social-mission metrics |
| Compliance footer | 5/100 | Generic copyright line; no EIN, no nonprofit status, no reinvestment disclosure |
| Nonprofit positioning | 0/100 | 501(c)(3) status never stated anywhere on the site |
| Mission-aligned CTAs | 0/100 | Every CTA is business-transaction language ("Get Started", "See If You Qualify") |

**Bottom line:** The site reads as a premium consulting business. It does not read as a mission-driven nonprofit. BRD requires that every conversion surface carry mission framing, reinvestment disclosure, and scholarship visibility — none of which currently exist at those touchpoints.

---

## 2. Gap Analysis Matrix

Each row maps a BRD requirement to what exists today, what must change, and which component delivers it.

| # | BRD Requirement | Exists? | Gap | Component to Build/Modify |
|---|-----------------|---------|-----|---------------------------|
| 1 | Mission wrapper on every conversion page | No | No reusable mission component; language scattered | `MissionWrapper.tsx` (new) |
| 2 | Revenue reinvestment disclosure near pricing | Partial | Only on `/scholarships`; not near pricing or footer | `ReinvestmentDisclosure.tsx` (new) |
| 3 | Scholarship visibility before payment decision | No | Scholarships page exists but not surfaced near pricing | `ScholarshipCallout.tsx` (new) |
| 4 | Impact module with social metrics | No | Only financial stats; no jobs created, scholarships awarded, communities served | `ImpactModule.tsx` (new) |
| 5 | Compliance footer (EIN, nonprofit status, mission) | No | Footer is generic copyright only | `Footer.tsx` (modify) |
| 6 | Nonprofit status sitewide | No | Never stated | Data in `links.ts` + Footer + MissionWrapper |
| 7 | Results disclaimer on homepage | No | Earnings disclaimer only on `/case-studies` | Add to `Stats.tsx` or `Transformation.tsx` |
| 8 | "Apply" vs "Buy" CTA shift | Partial | Uses "See If You Qualify" and "Get Started" — no mission framing | CTA label updates in `Pricing.tsx`, `CTAButton.tsx` |
| 9 | Economic mobility / workforce framing | No | Marketing copy is wealth/income focused | Copy updates across Hero, Pricing, CTA |
| 10 | Governance presence (light) | No | No EIN, no 501(c)(3) claim, no transparency link slots | Footer + `links.ts` constants |

---

## 3. Data Layer Changes

### `src/lib/links.ts` — New Constants

Add a new `NONPROFIT` export block as the single source of truth for all compliance data. This keeps compliance copy centralized and prevents hardcoding across components.

```ts
// ============================================
// NONPROFIT COMPLIANCE DATA
// Single source of truth for all compliance copy
// ============================================
export const NONPROFIT = {
  name: "Azgari Foundation",
  type: "501(c)(3) Nonprofit Organization",
  ein: "XX-XXXXXXX", // ← Insert real EIN

  // Mission statement — the BRD "north star" (used in MissionWrapper + Footer)
  mission:
    "Azgari Foundation delivers entrepreneurship training that increases income potential, expands economic mobility, and creates jobs in local communities.",

  // Short mission (for tight spaces like footer tagline)
  missionShort:
    "Entrepreneurship training for economic mobility and community job creation.",

  // Revenue reinvestment disclosure (BRD §5.2, §10)
  reinvestmentStatement:
    "Program fees support training delivery, scholarships, and expansion of our nonprofit workforce initiatives.",

  // Global legal disclosure (BRD §10)
  legalDisclosure:
    "Azgari Foundation is a nonprofit organization. Program revenue is reinvested into training, scholarships, and economic mobility initiatives.",

  // Results disclaimer (FTC-safe)
  resultsDisclaimer:
    "Individual results vary based on effort, market conditions, and capital. Stated figures reflect aggregate client outcomes, not guarantees.",
};

// ============================================
// IMPACT METRICS (Social Mission)
// Used by ImpactModule component
// ============================================
export const IMPACT_METRICS = {
  businessesLaunched: { value: "160+", label: "Businesses Launched" },
  jobsCreated: { value: "XXX", label: "Jobs Created" },           // ← needs real data
  scholarshipsAwarded: { value: "XX", label: "Scholarships Awarded" }, // ← needs real data
  communitiesServed: { value: "XX", label: "Communities Served" },     // ← needs real data
};
```

**Why centralized:** BRD §12 says marketing cannot remove mission statements or reinvestment disclosures. Keeping them in a single data file makes accidental deletion visible in code review and ensures consistency across all placements.

---

## 4. Component Specifications

### 4.1 `MissionWrapper.tsx` — Mission Alignment Block

**Purpose:** BRD §5.1 — Reusable mission framing that appears on every conversion page.

**Type:** Server component (no interactivity needed)

**Props Interface:**
```ts
interface MissionWrapperProps {
  variant?: "hero" | "section" | "inline";
  // hero: full-width bar below page hero (homepage, program pages)
  // section: standalone card with border (pricing pages, book-call page)
  // inline: single-line text (checkout reinforcement)
}
```

**Content Structure:**
- `variant="hero"` — Full-width cream background strip. Renders `NONPROFIT.mission` as centered text with a small leaf/community icon. Subtle, not a modal.
- `variant="section"` — Bordered card (cream bg, forest-green left border). Renders mission + `NONPROFIT.reinvestmentStatement` stacked.
- `variant="inline"` — Single paragraph with forest-green text. Renders `NONPROFIT.legalDisclosure`.

**Design Rules:**
- Background: `var(--color-cream)` / `#F8F6F0`
- Text: `text-sm` or `text-xs` depending on variant
- Must never gate or interrupt checkout flow (BRD §Addendum 10)
- Placement philosophy: *reassure, not interrupt*

**Placement Map:**

| Page | Variant | Position |
|------|---------|----------|
| Homepage (`/`) | `hero` | Below `<Hero />`, above `<TrustBanner />` |
| Services (`/services`) | `section` | Above program cards |
| Pricing component | `section` | Between quick-match grid and program cards |
| Contact / Book-call (`/contact`) | `section` | Above form |
| About (`/about`) | `inline` | Within existing mission section |

---

### 4.2 `ReinvestmentDisclosure.tsx` — Revenue Transparency Block

**Purpose:** BRD §5.2 — Disclose how program fees are used. Required near every pricing surface.

**Type:** Server component

**Props Interface:**
```ts
interface ReinvestmentDisclosureProps {
  size?: "default" | "compact";
  // default: card with icon + statement (near pricing tables)
  // compact: single line (footer, confirmation contexts)
}
```

**Content:**
- Renders `NONPROFIT.reinvestmentStatement`
- `size="default"`: Includes a small icon (shield or circular-arrows), forest-green left border, cream background
- `size="compact"`: Single `text-xs text-white/70` line (for footer)

**Placement Map:**

| Page / Component | Size | Position |
|------------------|------|----------|
| `Pricing.tsx` | `default` | Below program cards grid, above Quick Win bundle |
| `/services` page | `default` | Below program listing |
| `/courses` page | `default` | Below course grid |
| `Footer.tsx` | `compact` | In compliance footer section |

**Acceptance:** Any page rendering `PROGRAMS` data or pricing must also render this component.

---

### 4.3 `ScholarshipCallout.tsx` — Scholarship Visibility Near Pricing

**Purpose:** BRD §5.3 — Ensure scholarship path is visible before payment decision.

**Type:** Server component

**Props Interface:**
```ts
interface ScholarshipCalloutProps {
  variant?: "card" | "banner";
  // card: standalone module with CTA (homepage, near pricing)
  // banner: slim horizontal strip (program pages)
}
```

**Content:**
- Headline: "Scholarships Available"
- Body: "We fund scholarships for foster youth, veterans, single parents, and first-generation entrepreneurs. 10% of every paid enrollment goes directly to scholarship funding."
- CTA: Link to `/scholarships` — label: "Learn About Scholarships" (not "Apply" — that's on the scholarships page itself)

**Design:**
- `card` variant: Rounded card, dashed border (like existing Quick Win bundle style), centered text
- `banner` variant: Slim horizontal bar, cream background, single line + link

**Placement Map:**

| Page / Component | Variant | Position |
|------------------|---------|----------|
| Homepage (`/`) | `card` | After `<Pricing />`, before `<HomeFAQ />` |
| `/services` page | `banner` | Below program cards |
| `/contact` page | `banner` | Above or below contact form |
| `Pricing.tsx` | Embedded mention | Text link within existing "Still unsure?" line |

---

### 4.4 `ImpactModule.tsx` — Impact Through Entrepreneurship

**Purpose:** BRD §9 — Conversion-positive impact section with social metrics.

**Type:** Server component

**Props Interface:**
```ts
interface ImpactModuleProps {
  variant?: "full" | "compact";
  // full: 4-stat grid with headline (homepage, program pages)
  // compact: inline stat strip (about page, donor-readiness)
}
```

**Content:**
- Section title: "Impact Through Entrepreneurship"
- 4-stat grid sourced from `IMPACT_METRICS`:
  - Businesses Launched
  - Jobs Created
  - Scholarships Awarded
  - Communities Served
- Below stats: `NONPROFIT.missionShort` as a one-liner

**Design:**
- Forest-green background, white text (mirrors existing `Stats.tsx` pattern)
- Stats in `grid sm:grid-cols-2 lg:grid-cols-4` layout
- Each stat: large number + small label

**Placement Map:**

| Page | Variant | Position |
|------|---------|----------|
| Homepage (`/`) | `full` | Between `<Transformation />` and `<Testimonials />` |
| `/about` page | `full` | After mission section |
| `/services` page | `compact` | Near page footer area |
| `/case-studies` page | `compact` | Below aggregate stats bar |

**Data dependency:** `IMPACT_METRICS` values must be filled with real data before launch. Use placeholder "—" values in dev to make gaps visible.

---

### 4.5 `Footer.tsx` — Compliance Footer Upgrade

**Purpose:** BRD §5.5, §7.5, §10 — Persistent global compliance presence.

**Modify:** Existing `src/components/Footer.tsx`

**Changes:**

1. **Replace tagline** — Current: "Helping professionals build real wealth through service business ownership." New: `NONPROFIT.missionShort`

2. **Add compliance section** — New block between link columns and copyright. Contains:
   - Nonprofit status line: `NONPROFIT.type`
   - EIN: `NONPROFIT.ein`
   - Reinvestment disclosure: `<ReinvestmentDisclosure size="compact" />`
   - Results disclaimer: `NONPROFIT.resultsDisclaimer`

3. **Add future nav slots** (hidden/placeholder, BRD §Addendum 11):
   - Comment placeholders for: Financials, Governance, Impact Reports
   - Do NOT render links yet — just `{/* Future: Financials link */}` comments

4. **Update copyright line:**
   Current: `© {year} Azgari Foundation. All rights reserved.`
   New: `© {year} Azgari Foundation. {NONPROFIT.type}. All rights reserved.`

**Resulting footer structure:**
```
┌─────────────────────────────────────────────────┐
│  Logo + Mission tagline                          │
│  Programs | Resources | Company (existing cols)  │
├─────────────────────────────────────────────────┤
│  [NONPROFIT.type] · EIN: [NONPROFIT.ein]         │
│  [NONPROFIT.reinvestmentStatement]                │
│  [NONPROFIT.resultsDisclaimer]                    │
├─────────────────────────────────────────────────┤
│  © 2026 Azgari Foundation. 501(c)(3)...          │
└─────────────────────────────────────────────────┘
```

**Design:** Compliance section uses `text-xs text-white/50` — visually lighter than link columns. Present but not attention-competing.

---

### 4.6 Results Disclaimer — Inline Addition

**Purpose:** BRD §8, FTC compliance — substantiation for income claims on homepage.

**Modify:** Existing `src/components/Stats.tsx` or `src/components/Transformation.tsx`

**Change:** Add `NONPROFIT.resultsDisclaimer` as a `text-xs text-white/60` line below the stats grid. No component needed — inline text addition using the centralized string.

**Pattern:**
```tsx
<p className="text-xs text-white/60 mt-4 max-w-lg mx-auto text-center">
  {NONPROFIT.resultsDisclaimer}
</p>
```

**Apply to:**
- `Stats.tsx` — below the 4-stat grid
- `Transformation.tsx` — below revenue/outcome figures
- Homepage `Pricing.tsx` — below the "Average client first-year revenue: $285K" pill

---

## 5. Page-Level Integration Map

This table shows every page and what compliance elements it must contain after implementation. Checked (Y) = required. Dash (—) = not required.

| Page | MissionWrapper | Reinvestment | ScholarshipCallout | ImpactModule | Results Disclaimer | Compliance Footer |
|------|:-:|:-:|:-:|:-:|:-:|:-:|
| `/` (Homepage) | Y (hero) | Y (in pricing) | Y (card, post-pricing) | Y (full) | Y (stats + pricing) | Y (global) |
| `/services` | Y (section) | Y (default) | Y (banner) | Y (compact) | — | Y (global) |
| `/scholarships` | — (page IS the mission) | — (already present) | — (self-referential) | — | — | Y (global) |
| `/courses` | — | Y (default) | — | — | — | Y (global) |
| `/about` | Y (inline) | — | — | Y (full) | — | Y (global) |
| `/contact` | Y (section) | — | Y (banner) | — | — | Y (global) |
| `/acquisition` | Y (section) | Y (default) | — | — | Y | Y (global) |
| `/case-studies` | — | — | — | Y (compact) | Y (already exists) | Y (global) |
| `/faq` | — | — | — | — | — | Y (global) |
| `/guides` | — | — | — | — | — | Y (global) |
| `/tools` | — | Y (default) | — | — | — | Y (global) |
| `/webinar` | Y (section) | — | Y (banner) | — | — | Y (global) |
| `/media` | — | — | — | — | — | Y (global) |
| `/state/[state]` | — | — | — | — | — | Y (global) |
| `/privacy` | — | — | — | — | — | Y (global) |
| `/terms` | — | — | — | — | — | Y (global) |

**Key rule (BRD §Addendum 5, Rules 1-3):**
1. Every page with pricing → must have `ReinvestmentDisclosure`
2. Every conversion page → must have `MissionWrapper`
3. `ScholarshipCallout` must appear at least once before payment decision

---

## 6. CTA Language Rules

### Current → Updated Labels

| Location | Current CTA | Updated CTA | Rationale |
|----------|-------------|-------------|-----------|
| Hero primary | "Book Your Free Discovery Call" | "Start Your Path" or "Explore Programs" | Reduce transactional feel (BRD §2.5) |
| Hero secondary | "View Pricing" | "Compare Programs" | Already used on services page — align |
| Pricing cards | "Get Started" | "Apply Now" or "Get Started" | "Apply" preferred for compliance; "Get Started" acceptable |
| Pricing secondary | "Book a Call First" | "Book a Free Call" | Keep — already compliant |
| Services cards | "See If You Qualify →" | Keep as-is | Good — implies qualification gate, not purchase |
| Final CTA | "Book Your Free Discovery Call" | Keep or shift to "Start Your Journey" | Low priority |
| Book-call pages | N/A (external GHL) | N/A | CTA labels on GHL pages are outside this scope |

### Prohibited CTA Language (BRD §6)
- "Buy", "Purchase", "Order"
- "Guaranteed income", "Get rich"
- Personal wealth focus without community framing

### Required: Every conversion CTA page must also contain at least one of:
- Economic mobility framing
- Workforce development framing
- Community impact framing

This is satisfied by the `MissionWrapper` component placement (see §5).

---

## 7. Copy Framework Enforcement

### Homepage Hero — Add Mission Line

**Current Hero headline area** ends with CTAs. Add `<MissionWrapper variant="hero" />` immediately after `</Hero>` in `page.tsx`.

This renders the BRD §5.1 required language pattern:
> *"We train individuals to build income-generating businesses and create jobs in their communities."*

### Metadata Updates

Update `generateMetadata()` or static metadata on conversion pages to include mission framing:

| Page | Current description | Suggested addition |
|------|--------------------|--------------------|
| `/` (layout.tsx) | Business consulting focused | Append: "A 501(c)(3) nonprofit expanding economic mobility through entrepreneurship." |
| `/services` | "Choose Your Program" | Prepend: "Nonprofit entrepreneurship training —" |
| `/about` | Founder wealth focus | Shift to: "Our mission: economic mobility through business ownership." |

### Copy Patterns to Update

These are inline copy changes (not component-level) across existing files:

1. **Footer tagline** — "Helping professionals build real wealth through service business ownership" → `NONPROFIT.missionShort`
2. **About page mission section** — Add explicit 501(c)(3) status to existing mission points
3. **Scholarships page** — Already strong; no changes needed
4. **Stats component** — Add results disclaimer text below stats

---

## 8. Build Order + Dependencies

Priority order based on BRD §Addendum 7 and dependency chain.

| Priority | Component | Dependencies | Estimated Scope |
|----------|-----------|--------------|-----------------|
| **P0** | `NONPROFIT` + `IMPACT_METRICS` data in `links.ts` | None — prerequisite for everything | 1 file edit |
| **P1** | `Footer.tsx` compliance upgrade | `NONPROFIT` data, `ReinvestmentDisclosure` | 1 file edit + 1 new component |
| **P2** | `MissionWrapper.tsx` | `NONPROFIT` data | 1 new component |
| **P3** | `ReinvestmentDisclosure.tsx` | `NONPROFIT` data | 1 new component |
| **P4** | `ScholarshipCallout.tsx` | None | 1 new component |
| **P5** | `ImpactModule.tsx` | `IMPACT_METRICS` data | 1 new component |
| **P6** | Homepage integration (`page.tsx`) | P1–P5 components | 1 file edit |
| **P7** | Services + Pricing page integration | P2, P3, P4 | 2 file edits |
| **P8** | Results disclaimers (Stats, Transformation, Pricing) | `NONPROFIT.resultsDisclaimer` | 3 file edits |
| **P9** | CTA language updates | None | 2–3 file edits |
| **P10** | Metadata updates | None | 2–3 file edits |
| **P11** | Remaining page integrations (contact, acquisition, webinar, etc.) | P2–P5 | 4–6 file edits |

**New files created:** 4 (`MissionWrapper.tsx`, `ReinvestmentDisclosure.tsx`, `ScholarshipCallout.tsx`, `ImpactModule.tsx`)
**Files modified:** ~12–15 (links.ts, Footer.tsx, page.tsx, Pricing.tsx, Stats.tsx, Transformation.tsx, services/page.tsx, contact/page.tsx, about/page.tsx, acquisition/page.tsx, webinar/page.tsx, layout.tsx, CTAButton.tsx)

---

## 9. Acceptance Criteria

### Marketing Success (conversion must not regress)
- [ ] All existing CTA links remain functional and point to correct GHL URLs
- [ ] Primary conversion flow (Hero → Pricing → GHL checkout) is uninterrupted
- [ ] No compliance element gates, blocks, or modals between user and checkout
- [ ] Quick-match grid and program cards remain visually dominant on pricing section
- [ ] Sales call booking flow remains one-click from homepage

### Compliance Success (BRD requirements met)
- [ ] **Mission present on all conversion pages:** Homepage, `/services`, `/contact`, `/acquisition`, `/webinar` each render `MissionWrapper`
- [ ] **Reinvestment statement visible near all pricing:** `Pricing.tsx`, `/services`, `/courses`, `/tools` each render `ReinvestmentDisclosure`
- [ ] **Scholarship path clear before payment decision:** `ScholarshipCallout` appears on homepage (after pricing) and `/services`
- [ ] **Public benefit framing included:** `ImpactModule` on homepage and `/about` shows social metrics (jobs, scholarships, communities)
- [ ] **EIN + nonprofit status in footer:** `Footer.tsx` displays `NONPROFIT.type` and `NONPROFIT.ein`
- [ ] **Results disclaimer on homepage:** Appears below `Stats` component and within `Pricing` section
- [ ] **No prohibited language:** No instances of "guaranteed income", "get rich", or personal-wealth-only framing

### Technical Success (reusable, maintainable)
- [ ] `MissionWrapper` renders correctly in all 3 variants (hero, section, inline)
- [ ] `ReinvestmentDisclosure` renders correctly in both sizes (default, compact)
- [ ] `ScholarshipCallout` renders correctly in both variants (card, banner)
- [ ] `ImpactModule` renders correctly in both variants (full, compact)
- [ ] All compliance text sourced from `NONPROFIT` / `IMPACT_METRICS` constants — zero hardcoded compliance copy in components
- [ ] `npm run build` passes with zero errors
- [ ] `npm run lint` passes with zero errors
- [ ] All new components are server components (no `"use client"` directive)
- [ ] All new components follow project conventions: functional, default export, TypeScript interfaces, Tailwind utilities

### Page-Level Validation Checklist

A page **fails** compliance if:
- Pricing appears without `ReinvestmentDisclosure`
- Conversion CTA appears without `MissionWrapper` on the same page
- Book-a-call page lacks mission framing

A build **passes** when:
- All rows in the §5 integration matrix are satisfied
- Footer compliance section renders on every page (global via `layout.tsx`)
- No `NONPROFIT` constant references resolve to placeholder `"XX"` values in production

---

## 10. What NOT to Build

Per BRD §15 — explicitly out of scope:

| Item | Reason |
|------|--------|
| Form 990 page | Future expansion — add nav slot comment only |
| Board governance page | Future expansion — add nav slot comment only |
| Annual report section | Future expansion — add nav slot comment only |
| Donation flow | Not part of current conversion model |
| Grant application pages | Future donor-readiness phase |
| CMS permission enforcement | No CMS exists — site is static Next.js |
| Analytics/tracking implementation | BRD mentions it but no analytics platform is configured |
| Admin alert system for removed components | No admin system exists — enforce via code review |
| GHL page modifications | External platform — out of scope for this codebase |
| Invoice page compliance blocks | Invoices are generated in GHL — out of scope |

---

## Appendix A: Conversion Flow Diagrams

### Flow A — Direct Checkout
```
Homepage → [MissionWrapper] → Program page → [MissionWrapper + ReinvestmentDisclosure]
→ Pricing → [ReinvestmentDisclosure + ScholarshipCallout] → GHL Checkout (external)
```

### Flow B — Sales Funnel
```
Homepage → [MissionWrapper] → Program page → [MissionWrapper + ReinvestmentDisclosure]
→ Contact/Book-call → [MissionWrapper + ScholarshipCallout] → Sales call → Invoice (external)
```

### Compliance Touchpoints (both flows)
```
Entry (any page)
  ↓
Mission framing (MissionWrapper — hero or section variant)
  ↓
Social proof + impact (ImpactModule + Stats with disclaimer)
  ↓
Program/pricing (ReinvestmentDisclosure + ScholarshipCallout)
  ↓
Conversion action (GHL — external; compliance already reinforced)
  ↓
Every page exit (Footer with compliance section)
```

---

## Appendix B: Component File Map

```
src/
├── components/
│   ├── MissionWrapper.tsx          ← NEW (P2)
│   ├── ReinvestmentDisclosure.tsx   ← NEW (P3)
│   ├── ScholarshipCallout.tsx       ← NEW (P4)
│   ├── ImpactModule.tsx             ← NEW (P5)
│   ├── Footer.tsx                   ← MODIFY (P1)
│   ├── Pricing.tsx                  ← MODIFY (P7, P8)
│   ├── Stats.tsx                    ← MODIFY (P8)
│   ├── Transformation.tsx           ← MODIFY (P8)
│   ├── Hero.tsx                     ← MODIFY (P9 — CTA labels)
│   ├── CTA.tsx                      ← MODIFY (P9 — CTA labels)
│   └── CTAButton.tsx                ← MODIFY (P9 — CTA labels)
├── app/
│   ├── page.tsx                     ← MODIFY (P6 — add components)
│   ├── layout.tsx                   ← MODIFY (P10 — metadata)
│   ├── services/page.tsx            ← MODIFY (P7)
│   ├── contact/page.tsx             ← MODIFY (P11)
│   ├── about/page.tsx               ← MODIFY (P11)
│   ├── acquisition/page.tsx         ← MODIFY (P11)
│   ├── webinar/page.tsx             ← MODIFY (P11)
│   ├── courses/page.tsx             ← MODIFY (P7)
│   └── tools/page.tsx               ← MODIFY (P7)
└── lib/
    └── links.ts                     ← MODIFY (P0 — add NONPROFIT + IMPACT_METRICS)
```

---

## Appendix C: Placeholder Values Requiring Real Data

Before production deployment, the following values must be replaced with verified data:

| Constant | Placeholder | Owner |
|----------|-------------|-------|
| `NONPROFIT.ein` | `"XX-XXXXXXX"` | Legal/Finance |
| `IMPACT_METRICS.jobsCreated.value` | `"XXX"` | Operations |
| `IMPACT_METRICS.scholarshipsAwarded.value` | `"XX"` | Scholarships team |
| `IMPACT_METRICS.communitiesServed.value` | `"XX"` | Operations |
