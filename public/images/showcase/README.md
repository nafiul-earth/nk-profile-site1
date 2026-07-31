# Showcase asset folders

Destination for **final, web-ready** Look Book assets. Structure mirrors the sections in `src/data/aiShowcaseData.js` and the 50 items in `/SHOWCASE_CONTENT_CHECKLIST.md`.

Created 26 July 2026.

---

## What goes here vs what does not

**Here:** finished, compressed, correctly named assets that ship with the site.

**Not here:** raw generations, rejected variants, working files. Those live outside the repo at:

```
~/Documents/UpWork/LookBook/
├── 01-photoreal-editorial/1.1-.../01-raw/       ← every generation
├── 01-photoreal-editorial/1.1-.../02-selects/   ← the keepers
└── _final-for-site/                             ← staging before copying here
```

Keeping raw output out of git matters. Image generation produces dozens of rejects per keeper, and committing them permanently bloats the repo history even after deletion.

---

## Structure

```
public/images/showcase/
├── 00-hero/                                   3 items
├── 01-ai-images/
│   ├── photoreal-editorial/
│   │   ├── 01-editorial-portrait-after-hours/
│   │   ├── 02-fashion-campaign-soft-authority/
│   │   ├── 03-lifestyle-realism-garden-motion/
│   │   ├── 04-editorial-fashion-quiet-luxury/
│   │   └── 05-character-consistency-one-face-five-worlds/
│   ├── product-advertising/
│   │   ├── 01-fragrance-campaign-rose-signal/
│   │   ├── 02-skincare-system-daily-ritual/
│   │   ├── 03-jewelry-editorial-mineral-light/
│   │   ├── 04-beverage-campaign-cold-current/
│   │   └── 05-product-exploration-object-study-01/
│   └── illustration-story-worlds/
│       ├── 01-branded-mascot-globby-explains/
│       ├── 02-storybook-sequence-the-nightingale/
│       ├── 03-childrens-illustration-small-heroes/
│       └── 04-technical-illustration-systems-simply/
├── 02-ai-ugc/                                 6 items
├── 03-ai-video/
│   ├── commercial-motion/
│   └── explainers-technical-stories/          7 items total
├── 04-character-design/
│   ├── professional-characters/
│   └── mascots-illustrated-personas/          6 items total
├── 05-websites/
│   ├── landing-pages-campaign-sites/
│   └── portfolios-technical-experiences/      7 items total
└── 06-ai-automation/
    ├── creative-production-workflows/
    └── agents-technical-prototypes/           7 items total
```

**50 media items total.**

---

## Item map

From `SHOWCASE_CONTENT_CHECKLIST.md`. Tick there, not here.

### 00-hero
Hero — Illustration montage · Hero — Nafiul creator portrait · Hero — Kiwi campaign portrait

### 01-ai-images / photoreal-editorial
After Hours · Soft Authority · Garden Motion · Quiet Luxury · One Face / Five Worlds

### 01-ai-images / product-advertising
Rose Signal · Daily Ritual · Mineral Light · Cold Current · Object Study 01

### 01-ai-images / illustration-story-worlds
Globby Explains · The Nightingale · Small Heroes · Systems, Simply

### 02-ai-ugc
The 5-Step Routine · Desk Reset · First Sip · Unbox the Quiet · One Brief, Three Hooks · Local Voice

### 03-ai-video
AI Motion Showreel · Fifteen Seconds of Story · Pour / Pause / Desire · From Still to Scene · The Hidden Review Board · Loop Engineering · Cloud, Without the Fog

### 04-character-design
Maya, the Inventor · Sarah, the Reviewer · The Senior Inventor · Globby · Yui · The Curious Chickens

### 05-websites
AI Creative Studio · Launch in One Scroll · Signal, Not Noise · Event in Motion · Nafiul Creative Portfolio · Max Steel Knowledge Hub · Agent Demo Interface

### 06-ai-automation
Content Operations Copilot · UGC Variant Generator · Product Campaign Pipeline · Multilingual Ad Localizer · Claude Footage Labeling Skill · Documentation Helper Agent · Research-to-Portfolio Pipeline

---

## Naming

```
{item-slug}-{nn}.jpg

after-hours-01.jpg
one-face-five-worlds-03.jpg
the-nightingale-05.jpg
```

Lowercase, hyphenated, zero-padded. Never `image7.jpg`. Filenames feed alt text, and alt text feeds both search engines and AI assistants reading the site.

## Compression before commit

```bash
# single
convert input.png -resize '1920x1920>' -quality 85 output.jpg

# folder
for f in *.png; do
  convert "$f" -resize '1920x1920>' -quality 85 "${f%.png}.jpg"
done
```

Target under 500 KB per image. Next.js `<Image>` will serve responsive variants, but the source still ships in the repo, so keep it lean.

For video: H.264 MP4, under 5 MB where possible, or host externally and embed.

---

## Workflow per item

1. Generate into `~/Documents/UpWork/LookBook/{section}/{prompt}/01-raw/`
2. Curate the keepers into `02-selects/`
3. Compress and rename into `_final-for-site/`
4. Copy into the matching folder here
5. Update the path in `src/data/aiShowcaseData.js`
6. Add the exact item title to `APPROVED_SHOWCASE_MEDIA` in that same file
7. Tick the box in `/SHOWCASE_CONTENT_CHECKLIST.md`

**Step 6 is what removes the TO BE UPDATED watermark.** It only clears for the named item, so partial progress is safe to deploy.

---

## Prompts

Every prompt for generating these lives at:

```
~/Documents/UpWork/Prompts/LOOKBOOK-PROMPT-LIBRARY.md   (master, 16 prompts)
~/Documents/UpWork/LookBook/{section}/{prompt}/prompt.md (split per prompt)
```

## Priority

The checklist has 50 items. Do not try to fill them in order.

| Order | Item | Why |
| --- | --- | --- |
| 1 | **The Nightingale** | Six prompts and a character bible already written and unrun. Cheapest real win available. |
| 2 | **Globby** + **Globby Explains** | The visual-metaphor series is finished. These just need pointing at the right files. |
| 3 | **Max Steel Knowledge Hub** + **Nafiul Creative Portfolio** | Both live. Screenshot, do not generate. |
| 4 | **Yui** | 9 images exist at `~/Documents/UpWork/yui-social-media/` |
| 5 | Product & Advertising ×5 | Reframe honestly as one campaign with range, not five clients |

Items 1 to 4 use assets that already exist or are already written. That is roughly a third of the visible Look Book filled before generating anything new.
