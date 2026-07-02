# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the entire portfolio site to match the "Olivia" Figma template (green/yellow, pill UI) with Nafiul Islam's real content, per `docs/superpowers/specs/2026-07-02-portfolio-redesign-design.md`.

**Architecture:** In-place rebuild on Next.js 14 pages router. All content in `src/data/*.js`; pages render exclusively from data. Shared component kit in `src/components/`. Detail pages via `getStaticPaths`/`getStaticProps`.

**Tech Stack:** Next.js 14.2, React 18, Tailwind 3.4, Framer Motion 10, next/font (Plus Jakarta Sans). No new dependencies.

## Global Constraints

- **NO git commits** — user commits manually after reviewing all changes.
- No new npm dependencies.
- Fixed light palette; delete all `dark:` classes and `useThemeSwitch`.
- Do not touch root-level `* copy.*` files, `README*`, or `website images/`.
- No "CodeBucks" text may remain anywhere in `src/`.
- Verification per task: `npm run build` exits 0; visual check in dev server against PDF slices in scratchpad.
- Placeholder content (testimonial quotes, pricing numbers, tool percentages, stats) must be plausible and clearly listed in the final handoff note for user editing.

## Design tokens (used by every task)

Tailwind `theme.extend.colors`:
- `forest: '#2F4A32'` (nav/dark sections), `forest-deep: '#263D29'` (footer bottom bar, hovers)
- `sun: '#FFB400'`, `sun-soft: '#FFC845'` (hovers)
- `cream: '#FAF7F0'` (page bg), `ink: '#1E2320'` (headings), `card: '#FFFFFF'`
Font: Plus Jakarta Sans via `next/font/google`, CSS variable `--font-jakarta`, Tailwind `fontFamily.sans`.
Signature patterns: two-tone titles (`<em class="text-sun not-italic font-semibold">` accent part), eyebrow label (small yellow dash + text), pill buttons (dark pill + yellow arrow circle).

## File structure

```
src/
  data/ site.js services.js projects.js blogs.js testimonials.js pricing.js faqs.js journey.js
  components/ (rewritten) Logo.js NavBar.js Footer.js Layout.js AnimatedText.js
  components/ (new) PillButton.js SectionHeading.js MarqueeStrip.js PageHeader.js
                    ServiceCard.js ProjectCard.js BlogCard.js TestimonialCard.js
                    PricingCard.js FaqAccordion.js ContactForm.js StatCounters.js
                    icons/ServiceIcons.js
  pages/ index.js about.js projects.js services.js services/[slug].js blogs.js blogs/[slug].js
  pages/ (delete) articles.js api/hello.js
  components/hooks/ (delete) useThemeSwitch.js
  styles/globals.css (rewrite tokens)
tailwind.config.js (rewrite palette, drop darkMode)
next.config.js (add /articles -> /blogs redirect)
```

---

### Task 1: Theme foundation (tailwind config, font, globals, Logo)

**Files:** Modify `tailwind.config.js`, `src/styles/globals.css`, `src/pages/_app.js`, `src/components/Logo.js`.

**Produces:** color classes `bg-forest`, `text-sun`, `bg-cream`, `text-ink`; `font-sans` = Jakarta; `<Logo />` renders yellow "N." circle + "Nafiul." wordmark (light + dark variants via `variant` prop: `'light'|'dark'`).

- [ ] Rewrite `tailwind.config.js`: remove `darkMode`, old colors, keep existing screens/breakpoints; add palette above.
- [ ] `_app.js`: load Plus Jakarta Sans with `next/font/google`, weights 400–800, apply variable class to wrapper; set `bg-cream` body.
- [ ] `globals.css`: strip old theme; base styles (`body { @apply bg-cream text-ink font-sans }`).
- [ ] Rewrite `Logo.js` per Produces.
- [ ] Verify: `npm run build` passes (pages still reference old classes → they must not break build; Tailwind unknown classes are inert).

### Task 2: Component kit part 1 — PillButton, SectionHeading, MarqueeStrip, PageHeader

**Files:** Create `src/components/PillButton.js`, `SectionHeading.js`, `MarqueeStrip.js`, `PageHeader.js`.

**Produces:**
- `<PillButton href label onDark download external />` — dark pill + yellow arrow circle; `onDark` renders white-outline variant.
- `<SectionHeading eyebrow title accent action />` — `accent` is the yellow-italic part of the two-tone H2; `action` optional PillButton on the right.
- `<MarqueeStrip items={[...]} skew />` — infinite Framer Motion x-loop, yellow band, ✳ separators.
- `<PageHeader title crumb />` — inner-page breadcrumb header (white band + green skewed marquee edge like template).

- [ ] Build the four components with Framer Motion where noted.
- [ ] Verify with a temporary render on index (removed in Task 5) + `npm run build`.

### Task 3: Component kit part 2 — cards, accordion, form, counters, icons

**Files:** Create `ServiceCard.js`, `ProjectCard.js`, `BlogCard.js`, `TestimonialCard.js`, `PricingCard.js`, `FaqAccordion.js`, `ContactForm.js`, `StatCounters.js`, `icons/ServiceIcons.js`.

**Consumes:** PillButton, data shapes from Task 4 (props mirror data fields 1:1).
**Produces:** card components taking a single object prop (`service`, `project`, `blog`, `testimonial`, `tier`); `<FaqAccordion faqs />` (one open at a time, open row yellow); `<ContactForm onDark />` posting to `site.formspreeEndpoint` with success/error states; `<StatCounters stats />` using the existing AnimatedNumbers spring pattern from old about.js; `ServiceIcons` = `{ [slug]: <svg/> }` map.

- [ ] Build all nine files; ContactForm uses controlled inputs, `fetch` POST, disabled state while sending, inline success ("Thanks — I'll reply soon") / error message.
- [ ] Verify: `npm run build`.

### Task 4: Data layer — all 8 files with real + drafted content

**Files:** Create everything in `src/data/`.

**Produces (exact shapes consumed by all pages):**
```js
// site.js
export const site = { name, firstName, role, tagline, heroIntro, location, email, phone,
  cvPath: '/Nafiul Islam CV 2025.pdf', formspreeEndpoint: 'https://formspree.io/f/REPLACE_ME',
  socials: [{ name, url, icon }], stats: [{ value: 7, suffix: '+', label }], marquee: [ 'Graphic Design', ...] }
// services.js
export const services = [{ slug, name, short, icon, about, includes: [..8], industries: [..8], benefits: [..4] }] // 6 items
// projects.js: [{ slug, title, type, tags: [...], summary, img, link, github|null, featured: bool }] // 4 items
// blogs.js: [{ slug, title, category, date, excerpt, img, mediumUrl, body: [para, ...] }] // 3 items
// testimonials.js: [{ name, role, quote, rating: 5, placeholder: true }] // 3 items
// pricing.js: [{ name: 'Hourly'|'Per Project'|'Monthly', price, unit, highlighted: bool, features: [..8] }]
// faqs.js: [{ q, a }] // 5 items
// journey.js: { education: [{ years, place, title }], work: [{ years, place, title }] } // 3 each
```

Content sources: six CVs (services/projects/journey/tools), existing site copy (hero/bio), drafted (pricing: $15/hr, $250+/project, $1200/mo retainer ballparks; testimonials marked `placeholder: true`; stats: 7+ YouTube channels, 10+ projects delivered, 4+ years creating, 6 service areas).

- [ ] Write all 8 files with full content.
- [ ] Verify: `npm run build`.

### Task 5: NavBar, Footer, Layout + Home page

**Files:** Rewrite `src/components/NavBar.js`, `Footer.js`, `Layout.js`, `AnimatedText.js` (restyle only), `src/pages/index.js`. Delete `src/components/hooks/useThemeSwitch.js`, `src/pages/api/hello.js`.

**Consumes:** everything from Tasks 1–4.
**Produces:** NavBar links Home/Services/About/Projects/Blogs/Testimonials(`/#testimonials`)/Contact Me(`/#contact`); Home sections in template order with ids `#services #about #projects #pricing #contact #testimonials #blogs #faq`.

- [ ] Rewrite NavBar (green pill, active yellow underline, mobile overlay menu — port old hamburger logic minus theme toggle).
- [ ] Rewrite Footer ("Let's Connect there", 3 columns, newsletter input (mailto fallback), socials, copyright bar).
- [ ] Rewrite index.js: Hero → Marquee → Services(3) → Who-is (dark) → Tools → Projects(4) → Journey → Pricing (dark) → Contact (dark) → Testimonials → Blogs(3) → FAQ (dark) → (Footer via Layout).
- [ ] Verify: build + dev-server visual pass vs slices 1–5; all anchors scroll.

### Task 6: Services index + service detail pages

**Files:** Create `src/pages/services.js`, `src/pages/services/[slug].js`.

**Consumes:** PageHeader, ServiceCard, ContactForm, `services` data.
**Produces:** `/services` (6 cards + CTA banner "Let's Create an Amazing Project Together!" + contact form); `/services/[slug]` per template detail design (PageHeader, hero image `service.img` or shared placeholder, About, includes checklist grid, numbered industries grid (8), benefits list, contact CTA). Static via `getStaticPaths` from `services` slugs.

- [ ] Build both pages.
- [ ] Verify: build; visit all 6 detail URLs; check against slices 6–8.

### Task 7: About + Projects pages

**Files:** Rewrite `src/pages/about.js`, `src/pages/projects.js`.

**Consumes:** PageHeader, StatCounters, SectionHeading, ProjectCard, TestimonialCard, ContactForm, data.
**Produces:** `/about` = PageHeader + expanded Who-is section + tools + journey + testimonials + contact; `/projects` = PageHeader + featured project (wide card) + grid of the rest.

- [ ] Rewrite both pages, deleting all old CodeBucks content/imports.
- [ ] Verify: build + visual pass.

### Task 8: Blogs pages + articles redirect + final cleanup

**Files:** Create `src/pages/blogs.js`, `src/pages/blogs/[slug].js`; delete `src/pages/articles.js`; modify `next.config.js`.

**Produces:** `/blogs` card grid; `/blogs/[slug]` renders `blog.body` paragraphs + "Read on Medium" PillButton; permanent redirect `/articles` → `/blogs`.

- [ ] Build pages; add redirect:
```js
async redirects() { return [{ source: '/articles', destination: '/blogs', permanent: true }] }
```
- [ ] Cleanup sweep: `grep -ri codebucks src/` returns nothing; `grep -r "dark:" src/` returns nothing; old images/imports unused by new pages left in place (assets are shared).
- [ ] Full verification: `npm run build` (all routes listed), dev-server click-through of every nav link + card link, mobile-width check.
- [ ] Write handoff note listing every placeholder the user must edit (pricing numbers, testimonials, stats, tool %, Formspree endpoint, project screenshots to replace).
```

## Self-review

- Spec coverage: all spec sections map to Tasks 1–8 (theme→1, components→2/3, data→4, home→5, services→6, about/projects→7, blogs/cleanup→8). Redirect + CodeBucks sweep in 8. ✓
- No TBDs; data shapes fully specified; component interfaces named consistently (PillButton/SectionHeading/PageHeader used in 5–8 as defined in 2). ✓
- Types consistent: card components take singular object props matching Task 4 shapes. ✓
