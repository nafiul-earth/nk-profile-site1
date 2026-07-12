// Look Book entries — drives /look-book entirely.
//
// TO SWAP A PLACEHOLDER FOR A REAL PROJECT:
//   1. Find the entry with `placeholder: true`.
//   2. Replace `title` and `description` with the real project's.
//   3. Set `image` to the cover path (put the file in /public/images/lookbook/).
//   4. Set `href` to the live URL (or leave it out for a non-clickable card).
//   5. Set `date` (YYYY-MM) — the grid is sorted newest first.
//   6. Delete `placeholder: true`. Done.
//
// Every entry: { title, category, description, image?, href?, date, placeholder? }
// `category` must be one of the values in `lookbookCategories` below.

export const lookbookCategories = [
  'AI Content Creation',
  'AI Image Generation',
  'Poster Design',
  'Graphic Design',
  'Web Development',
  'Video & YouTube',
]

export const lookbook = [
  // ---- Real projects ----
  {
    title: 'AI-Powered Meta Ad Creative Campaign',
    category: 'AI Image Generation',
    description: 'A complete Facebook and Instagram product campaign with 12 static creatives and a short promotional video.',
    image: '/images/projects/meta-ad-campaign/cover.jpg',
    href: '/projects/ai-powered-meta-ad-creative-campaign',
    date: '2026-07',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description: 'Design & build of this site with Next.js, Tailwind CSS, and Framer Motion.',
    image: '/images/projects/portfolio-cover-image.jpg',
    href: 'https://nk-profile-site1-five.vercel.app',
    date: '2026-06',
  },
  {
    title: 'AdMagic — AI Ad Creative Tool',
    category: 'AI Image Generation',
    description: 'AI-generated ad creatives from a single product photo, powered by Gemini.',
    image: '/images/projects/agency-website-cover-image.jpg',
    href: 'https://github.com/nafiul-earth/AdMagic',
    date: '2026-04',
  },
  {
    title: 'Max Steel Knowledge Hub',
    category: 'AI Content Creation',
    description: 'AI-assisted blog and technical writing studio, co-designed and co-run.',
    image: '/images/projects/fashion-studio-website.jpg',
    href: 'https://max-steel-knowledge-hub.vercel.app',
    date: '2026-02',
  },
  {
    title: 'YouTube Clip Creator',
    category: 'Video & YouTube',
    description: 'Automation tool behind my own channels — clipping, media handling, scripting.',
    image: '/images/projects/crypto-screener-cover-image.jpg',
    href: 'https://github.com/nafiul-earth/youtube-clip-creator',
    date: '2025-11',
  },

  // ---- Placeholders (work samples being prepared) ----
  {
    title: 'Faceless Channel Content Pipeline',
    category: 'AI Content Creation',
    description: 'Scripted, voiced, and published — an end-to-end AI content workflow.',
    date: '2025-10',
    placeholder: true,
  },
  {
    title: 'AI Blog Series for a Founder Brand',
    category: 'AI Content Creation',
    description: 'AI-drafted, human-edited article series for a startup founder.',
    date: '2025-05',
    placeholder: true,
  },
  {
    title: 'Midjourney Campaign Visuals',
    category: 'AI Image Generation',
    description: 'AI-generated ad campaign imagery for a consumer brand.',
    date: '2025-09',
    placeholder: true,
  },
  {
    title: 'AI Product Photography Set',
    category: 'AI Image Generation',
    description: 'Studio-grade product shots generated and retouched with AI.',
    date: '2025-04',
    placeholder: true,
  },
  {
    title: 'Event Poster Series',
    category: 'Poster Design',
    description: 'Poster set for a cultural event — typography-led, print-ready.',
    date: '2025-08',
    placeholder: true,
  },
  {
    title: 'Documentary-Style YouTube Poster',
    category: 'Poster Design',
    description: 'Cinematic key art for a long-form YouTube documentary.',
    date: '2025-03',
    placeholder: true,
  },
  {
    title: 'Startup Brand Identity Kit',
    category: 'Graphic Design',
    description: 'Logo, color system, and brand assets for an early-stage startup.',
    date: '2025-07',
    placeholder: true,
  },
  {
    title: 'Social Media Template Pack',
    category: 'Graphic Design',
    description: 'Reusable, brand-consistent template system for social content.',
    date: '2025-02',
    placeholder: true,
  },
  {
    title: 'Landing Page for an AI SaaS',
    category: 'Web Development',
    description: 'Conversion-focused landing page design and build.',
    date: '2025-06',
    placeholder: true,
  },
  {
    title: 'Thumbnail System for 7 Channels',
    category: 'Video & YouTube',
    description: 'Midjourney + Photoshop thumbnail workflow, proven across 7 channels.',
    date: '2025-01',
    placeholder: true,
  },
]
