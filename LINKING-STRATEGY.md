# Azgari Blog → Product Linking Strategy
## Based on SEO Traffic Analysis (February 2026)

---

## Current Product Inventory

### Courses (GHL)
| Course | Price | Best Match for Traffic |
|--------|-------|----------------------|
| Acquisition Accelerator | $297 | SBA/buying content |
| Franchise Blueprint | $247 | Franchise comparison posts |
| 30-Day Launch | $247 | All startup cost posts |
| SBA Masterclass | $297 | SBA loan posts |
| Slack Community | $67 | All (upsell after course) |

### Tools (GHL)
| Tool | Price | Best Match |
|------|-------|------------|
| Startup Checklist | Free | All posts (lead magnet) |
| Business Assessment | Free | State guides |
| Pricing Calculator | $37 | Startup cost posts |
| Boring Business Kit | $97 | High-intent visitors |
| Commercial Cleaning Accelerator | $147 | Cleaning posts |
| Complete Vault | $697 | Power buyers |

### Programs
| Program | Price | Best Match |
|---------|-------|------------|
| Quick Win Bundle | $500 | High-intent from courses |
| Foundation | $10,000 | Serious researchers |
| Full Launch | $25,000 | Corporate escapees |

---

## Traffic → Product Mapping

### 🚿 Pressure Washing Posts (289 impressions/week)
**Current:** Links to azgari.org generic CTA
**Recommended funnel:**
```
Blog post → Free Checklist (email capture)
         → Pricing Calculator ($37)
         → 30-Day Launch Course ($247)
         → Quick Win Bundle ($500)
```

**In-post CTAs to add:**
1. After equipment section: "Get our free Startup Checklist →"
2. After pricing section: "Calculate your exact pricing with our tool ($37)"
3. At bottom: "Ready to launch? Our 30-Day Course has the complete system ($247)"

---

### 🗑️ Junk Removal Posts (62 impressions/week)
**Recommended funnel:**
```
Blog post → Free Checklist
         → Pricing Calculator ($37)
         → 30-Day Launch Course ($247)
```

---

### 🌱 Lawn Care Posts (266 impressions/week – NEW POST)
**Recommended funnel:**
```
Blog post → Free Checklist
         → Pricing Calculator ($37)
         → 30-Day Launch Course ($247)
```

---

### 🌴 State Guides (Florida, Texas, Las Vegas, etc.)
**Recommended funnel:**
```
Blog post → Business Assessment (email capture)
         → 30-Day Launch Course ($247)
         → Full Launch Program ($25K)
```

**In-post CTAs:**
1. Early: "Not sure which business fits you? Take our free assessment →"
2. Bottom: "Ready to launch in [State]? See if you qualify for our Full Launch Program"

---

### 💰 SBA/Financing Posts (100+ impressions/week)
**Recommended funnel:**
```
Blog post → SBA Loan Readiness Guide (email capture)
         → SBA Masterclass ($297)
         → Acquisition Advisory ($2,500+)
```

**In-post CTAs:**
1. After timeline section: "Get our SBA Loan Readiness Guide (free) →"
2. After requirements: "Master the SBA process: SBA Masterclass ($297)"
3. At bottom: "Want hands-on help? Acquisition Advisory"

---

### 🏢 Franchise Comparison Posts
**Recommended funnel:**
```
Blog post → Free Assessment
         → Franchise Blueprint ($247)
         → Quick Win Bundle ($500)
```

**In-post CTAs:**
1. After franchise cost section: "Before signing anything: Franchise Blueprint course ($247)"
2. At bottom: "Not sure franchise is right? Take our free assessment"

---

## Product Gaps to Fill

### High Priority (Match to existing traffic)

| Product Needed | Target Traffic | Suggested Price |
|---------------|----------------|-----------------|
| **Pressure Washing Startup Kit** | 289 impr/week | $47 |
| **Lawn Care Startup Kit** | 266 impr/week | $47 |
| **Junk Removal Startup Kit** | 62 impr/week | $47 |
| **Industry Bundle (all 3)** | Power buyers | $97 |

**What's in each kit:**
- Equipment buying guide with vendor links
- Pricing calculator (industry-specific)
- First 30-day action plan
- Customer scripts & templates
- Insurance/licensing checklist

### Medium Priority

| Product Needed | Target Traffic | Suggested Price |
|---------------|----------------|-----------------|
| **State-Specific Compliance Packs** | State guide traffic | $27 each |
| **Equipment Financing Guide** | Equipment post traffic | $37 |

---

## Implementation: Blog Post CTA Blocks

### Create reusable WordPress blocks for:

#### 1. Lead Magnet CTA (inline)
```html
<div class="azgari-cta-inline">
  <p><strong>📋 Free Download:</strong> Get our 47-step Service Business Startup Checklist</p>
  <a href="https://go.azgari.org/checklist">Download Free →</a>
</div>
```

#### 2. Course CTA (after main content)
```html
<div class="azgari-cta-box">
  <h3>Ready to Launch in 30 Days?</h3>
  <p>Our step-by-step course includes everything: pricing templates, marketing scripts, operations workflows.</p>
  <a href="[30-day-course-link]">Get the 30-Day Launch Course ($247) →</a>
</div>
```

#### 3. Assessment CTA (state guides)
```html
<div class="azgari-cta-box">
  <h3>Which Business Is Right for You?</h3>
  <p>Take our 12-question assessment to find the perfect match for your skills and budget.</p>
  <a href="https://go.azgari.org/assessment">Take Free Assessment →</a>
</div>
```

#### 4. SBA CTA (financing posts)
```html
<div class="azgari-cta-box">
  <h3>Need SBA Funding?</h3>
  <p>Learn exactly what lenders want and how to get approved without a broker.</p>
  <a href="[sba-masterclass-link]">SBA Masterclass ($297) →</a>
</div>
```

---

## Quick Wins (This Week)

### 1. Update existing high-traffic posts with CTAs

| Post | Add These CTAs |
|------|----------------|
| Pressure Washing | Checklist (inline) + 30-Day Course (bottom) |
| Las Vegas | Assessment (inline) + Full Launch (bottom) |
| Junk Removal | Checklist (inline) + Pricing Calculator (bottom) |
| Florida | Assessment (inline) + Full Launch (bottom) |
| SBA Loan | SBA Guide (inline) + SBA Masterclass (bottom) |
| 401k | SBA Guide (inline) + Acquisition Accelerator (bottom) |

### 2. Create 3 industry startup kits
- Use existing Boring Business Kit as template
- Add to TOOLS array in `/src/lib/links.ts`
- Price at $47 each, $97 bundle

### 3. Update footer CTA in blog posts
Replace generic "Learn More at Azgari.org" with contextual CTAs matching post topic.

---

## Metrics to Track

| Metric | Tool | Goal |
|--------|------|------|
| Email signups from blog | GHL | 3% of visitors |
| Tool/course clicks from blog | UTM tracking | 1% CTR |
| Course purchases from blog traffic | GHL attribution | 5 sales/month |
| Revenue from blog-sourced leads | GHL | $5K/month |

---

## Links.ts Updates Needed

Add these to `/src/lib/links.ts`:

```typescript
// Add to TOOLS array
{
  id: "pressure-washing-kit",
  title: "Pressure Washing Startup Kit",
  description: "Complete equipment guide, pricing calculator, and 30-day launch plan for pressure washing.",
  price: "$47",
  href: "https://go.azgari.org/pw-kit", // Create in GHL
  category: "starter",
  popular: true,
},
{
  id: "lawn-care-kit",
  title: "Lawn Care Startup Kit",
  description: "Equipment matrix, route planning template, and pricing guide for lawn care businesses.",
  price: "$47",
  href: "https://go.azgari.org/lc-kit", // Create in GHL
  category: "starter",
  popular: true,
},
{
  id: "junk-removal-kit",
  title: "Junk Removal Startup Kit",
  description: "Truck buying guide, dump site database, and pricing calculator for junk removal.",
  price: "$47",
  href: "https://go.azgari.org/jr-kit", // Create in GHL
  category: "starter",
  popular: false,
},
{
  id: "industry-bundle",
  title: "Service Industry Starter Bundle",
  description: "All three startup kits (Pressure Washing + Lawn Care + Junk Removal) at 35% off.",
  price: "$97",
  href: "https://go.azgari.org/industry-bundle", // Create in GHL
  category: "premium",
  popular: true,
},
```

---

## Summary

**Your site is built.** The gap isn't infrastructure—it's:

1. **Blog posts don't link to products contextually** (generic CTAs)
2. **Missing industry-specific low-ticket products** ($47 kits)
3. **No email capture on most blog content**

Fix these three things and you monetize existing traffic without building anything new on the Vercel site.
