# Portfolio Redesign — "Olivia" Template Adaptation

**Date:** 2026-07-02
**Source design:** `New design/FireShot Capture 031 - Personal Portfolio Website UIUX Design Figma - Website __ Behance_ - www.behance.net.pdf`
**Approach:** Rebuild in place on the current stack (Next.js 14 pages router, Tailwind 3, Framer Motion). No new frameworks.

## Decisions (user-approved)

- **Scope:** entire site, all pages, including per-service and per-blog detail pages.
- **Content:** sourced from the six role CVs in `/Users/rafflesiakhan/Documents/UpWork/Nafiul Profile/cv-pdfs/` plus existing site copy. Pricing, testimonials, stat counters, FAQs are drafted for the user to edit (testimonial quotes clearly marked placeholder).
- **Theming:** fixed light palette from the template. Dark/light switcher and all `dark:` classes removed.
- **Contact form:** Formspree; endpoint stored as one constant (placeholder until account exists).

## Visual system

- Tokens: `forest` dark green (~#2E4A34) for navbar/dark sections/footer; `sun` yellow (~#FFB400) accents/marquee/highlights; `cream` (~#FAF8F2) page background; near-black #1E2320 headings; white cards. Exact hexes sampled from the PDF.
- Font: rounded geometric sans (Poppins or Plus Jakarta Sans) via `next/font`.
- Signature elements: two-tone section titles (yellow italic + dark bold), yellow-dash eyebrow labels, pill buttons with yellow arrow-circle, skewed yellow marquee band, yellow tag pills.

## Shared components (`src/components/`)

NavBar (green pill bar, active link yellow-underlined, mobile hamburger), PillButton, SectionHeading, MarqueeStrip, ServiceCard, ProjectCard, BlogCard, TestimonialCard, PricingCard, FaqAccordion, ContactForm, Footer. `Layout`/`AnimatedText` kept and restyled. Existing Framer Motion patterns reused.

## Pages

- **Home `/`** (template order): Hero ("I'm Nafiul Islam, Creative Designer & AI Content Creator Based in Bangladesh", View My Portfolio + Hire Me, photo in yellow blob with rotating HIRE ME badge) → marquee → Services (top 3 + View All) → Who is Nafiul (dark green; bio, stat counters, Download CV, orbiting skill tags) → Favorite tools (6 icons + %) → Latest Projects (4 cards) → Journey (Education | Work columns) → Pricing (3 tiers, middle highlighted) → Contact form → Testimonials carousel → Blogs (3) → FAQ accordion → Footer.
- **Services `/services`:** breadcrumb header + 6 service cards + CTA + contact form.
- **Service details `/services/[slug]`:** hero image, About, includes checklist, industries grid, benefits — per-service content drafted from the matching CV.
- **About `/about`:** breadcrumb header, expanded bio section, tools, journey, testimonials, contact.
- **Projects `/projects`:** breadcrumb header + all project cards.
- **Blogs `/blogs` + `/blogs/[slug]`:** post cards; 3 starter posts drafted from Medium themes, each linking to Medium.
- `articles.js` deleted; permanent redirect `/articles` → `/blogs` in `next.config.js`.

## Data layer (`src/data/`)

`site.js` (identity, email earthkhan@gmail.com, phone +88<TBP>, BD, socials: GitHub nafiul-earth, LinkedIn nafiul-khan-608820265, Medium @earthkhan, X, YouTube channels; CV path; stats; Formspree endpoint), `services.js` (6: Graphic Design, AI Content Creation, Web Design, Web App Development, AI Automation, Video & YouTube Content — slug/icon/blurb/includes/industries/benefits), `projects.js` (AdMagic, Max Steel Knowledge Hub, youtube-clip-creator, Portfolio Site), `blogs.js`, `testimonials.js`, `pricing.js`, `faqs.js`, `journey.js` (Education: Diploma CSE Khulna City Polytechnic 2020–23, Creative IT Institute 2026–present, Cloud Institute Oct 2024; Work: Graphic Designer Intern Jun–Oct 2024, Max Steel co-founder, YouTube creator 7 channels).

Pages render exclusively from data files; detail pages use `getStaticPaths`/`getStaticProps` (fully static).

## Assets

Reuse `public/images/` photos; placeholder frames for project screenshots until real captures supplied (deliver a list of expected filenames). Service icons as inline SVGs. New "N." yellow-circle logo + favicon. Existing CV PDF for Download CV.

## Cleanup

Remove `useThemeSwitch`, all `dark:` classes, old palette, `articles.js`, and every leftover "CodeBucks" title/meta/alt. Root `* copy.*` duplicates are untouched (pre-existing; user may delete separately).

## Verification

Per phase: `npm run build` passes; visual check against PDF slices; all links resolve; responsive at mobile/tablet/desktop (mobile follows current stacking conventions since template is desktop-only).

## Build order

Theme + component kit → data files → Home → Services (+details) → About → Projects → Blogs (+details) → cleanup/redirects → polish.
