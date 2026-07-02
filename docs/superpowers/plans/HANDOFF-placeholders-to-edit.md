# Redesign Handoff — Placeholders You Should Edit

Everything below is drafted content that ships working but should be reviewed/replaced.
All of it lives in `src/data/` — no component code needs touching.

## Must do before launch

1. **Contact form endpoint** — `src/data/site.js` → `formspreeEndpoint`.
   Create a free form at https://formspree.io, copy the endpoint URL, replace
   `https://formspree.io/f/REPLACE_ME`. Until then the form shows the fallback
   error message with your email.
2. **Testimonials** — `src/data/testimonials.js`. All three are marked
   `placeholder: true` with "Client Name". Replace with real client quotes
   (or delete entries; the grid adapts).
3. **Pricing** — `src/data/pricing.js`. Drafted rates: $15/hr, $250+/project,
   $1,200/mo. Adjust to your real offer.

## Should review

4. **Stats** — `src/data/site.js` → `stats` (7+ channels, 10+ projects, 4+ years).
5. **Tool percentages** — `src/data/site.js` → `tools` (drafted levels).
6. **Journey dates** — `src/data/journey.js`: "YouTube Creator 2022 - Present" start
   year is my guess; Max Steel "2024 - Present" likewise.
7. **Max Steel live URL** — `src/data/projects.js`: I guessed
   `https://max-steel-knowledge-hub.vercel.app`. Confirm or fix.
8. **Blog posts** — `src/data/blogs.js`: 3 drafted posts in your Medium themes.
   Edit text or replace with real posts. Each links to your Medium profile.
9. **Service copy** — `src/data/services.js`: drafted from your six CVs.

## Images to replace (currently old-site stand-ins)

- Project covers in `public/images/projects/` — referenced by `src/data/projects.js`:
  - AdMagic → `agency-website-cover-image.jpg`
  - Max Steel → `fashion-studio-website.jpg`
  - YouTube Clip Creator → `crypto-screener-cover-image.jpg`
  - Portfolio → `portfolio-cover-image.jpg`
  Drop in real screenshots and update the `img` paths.
- Blog covers use old article images in `public/images/articles/`.
- Hero/About photos use `developer-pic-1.png` / `developer-pic-2.jpg` — replace with
  your real photos when ready (transparent-background PNG works best for the hero).

## Notes

- Old root-level `* copy.*` files were left untouched — delete manually if unwanted.
- `/articles` now 301-redirects to `/blogs`.
- Dark mode was removed by design decision (template is fixed-palette).
