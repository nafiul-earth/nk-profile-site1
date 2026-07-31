// @ts-check

/** @typedef {'image' | 'video'} MediaKind */
/** @typedef {'portrait' | 'square' | 'wide' | 'tall' | 'feature'} ProjectFormat */
/** @typedef {'needs-update' | 'approved'} MediaReviewStatus */
/** @typedef {{ kind: MediaKind, src: string, alt: string, poster?: string, reviewStatus: MediaReviewStatus }} ShowcaseMedia */
/** @typedef {{ title: string, category: string, format: ProjectFormat, description: string, output: string, role: string, tools: string, status: string, hook: string, media: ShowcaseMedia, mediaGallery?: ShowcaseMedia[] }} ShowcaseProject */
/** @typedef {{ title: string, description: string, items: ShowcaseProject[] }} ShowcaseCollection */
/** @typedef {{ label: string, kicker: string, title: string, description: string, items?: ShowcaseProject[], feature?: ShowcaseProject, collections?: ShowcaseCollection[] }} ShowcaseDiscipline */

const projectImages = [
  '/images/projects/meta-ad-campaign/image1.jpg',
  '/images/projects/meta-ad-campaign/image2.jpg',
  '/images/projects/meta-ad-campaign/image3.jpg',
  '/images/projects/meta-ad-campaign/image4.jpg',
  '/images/projects/meta-ad-campaign/image5.jpg',
  '/images/projects/meta-ad-campaign/image6.jpg',
  '/images/projects/meta-ad-campaign/image7.jpg',
  '/images/projects/meta-ad-campaign/image8.jpg',
  '/images/projects/meta-ad-campaign/image9.jpg',
  '/images/projects/meta-ad-campaign/image10.jpg',
  '/images/projects/meta-ad-campaign/image11.jpg',
  '/images/projects/meta-ad-campaign/image12.jpg',
  '/images/projects/visual-metaphor-illustrations/01-climate-change-melting-backpack.png',
  '/images/projects/visual-metaphor-illustrations/02-air-pollution-smog-valve.png',
  '/images/projects/visual-metaphor-illustrations/03-broken-water-cycle-missing-pipe.png',
  '/images/projects/visual-metaphor-illustrations/04-ocean-plastic-fishing-bottles.png',
  '/images/projects/visual-metaphor-illustrations/05-deforestation-last-umbrella.png',
  '/images/projects/visual-metaphor-illustrations/06-wars-cost-dustpan.png',
  '/images/projects/visual-metaphor-illustrations/07-global-warming-fever-check.png',
  '/images/projects/visual-metaphor-illustrations/08-overconsumption-tipped-scale.png',
  '/images/profile/openart-gpt-image-2-edit-1_1783702765593_76f4a60e.png',
  '/images/profile/developer-pic-11.png',
  '/images/profile/developer-pic-12.png',
  '/images/projects/portfolio-cover-image.jpg',
  '/images/projects/agency-website-cover-image.jpg',
  '/images/projects/fashion-studio-website.jpg',
  '/images/projects/crypto-screener-cover-image.jpg',
]

/** Add a verified project title or hero label here to remove only its watermark. */
/** @type {string[]} */
export const APPROVED_SHOWCASE_MEDIA = [
  'After Hours',
  'Soft Authority',
  'Garden Motion',
  'Quiet Luxury',
  'One Face / Five Worlds',
  'Rose Signal',
  'Daily Ritual',
  'Mineral Light',
  'Cold Current',
  'Object Study 01',
]

const reviewStatusFor = (label) => (
  APPROVED_SHOWCASE_MEDIA.includes(label) ? 'approved' : 'needs-update'
)

/** @type {ShowcaseMedia[]} */
export const SHOWCASE_HERO_MEDIA = [
  { kind: 'image', src: '/images/projects/visual-metaphor-illustrations/cover.png', alt: '', reviewStatus: reviewStatusFor('Hero — Illustration montage') },
  { kind: 'image', src: '/images/projects/meta-ad-campaign/cover.jpg', alt: '', reviewStatus: reviewStatusFor('Hero — Kiwi campaign portrait') },
  { kind: 'image', src: '/images/profile/openart-gpt-image-2-edit-1_1783702765593_76f4a60e.png', alt: '', reviewStatus: reviewStatusFor('Hero — Nafiul creator portrait') },
]

let mediaIndex = 0

/**
 * @returns {ShowcaseProject}
 */
const project = (
  title,
  category,
  format,
  description,
  output,
  role,
  tools,
  status = 'Self-initiated concept',
  hook = '',
  mediaOverride,
  mediaGallery,
) => {
  const src = projectImages[mediaIndex % projectImages.length]
  mediaIndex += 1
  const reviewStatus = reviewStatusFor(title)
  return {
    title,
    category,
    format,
    description,
    output,
    role,
    tools,
    status,
    hook,
    media: mediaOverride
      ? { ...mediaOverride, reviewStatus }
      : { kind: 'image', src, alt: `${title} project preview`, reviewStatus },
    ...(mediaGallery?.length
      ? { mediaGallery: mediaGallery.map((media) => ({ ...media, reviewStatus })) }
      : {}),
  }
}

const campaignVideo = {
  kind: 'video',
  src: '/images/projects/meta-ad-campaign/campaign-video.mp4',
  poster: '/images/projects/meta-ad-campaign/cover.jpg',
  alt: 'AI campaign motion preview',
  reviewStatus: 'needs-update',
}

const image = (src, alt) => ({ kind: 'image', src, alt, reviewStatus: 'needs-update' })

const photorealEditorialGallery = [
  image('/images/showcase/01-ai-images/photoreal-editorial/01-editorial-portrait-after-hours/rain-streaked glass.png', 'Editorial portrait behind rain-streaked glass at night'),
  image('/images/showcase/01-ai-images/photoreal-editorial/01-editorial-portrait-after-hours/photoreal-editorial.png', 'Editorial nighttime portrait series in warm street lighting'),
  image('/images/showcase/01-ai-images/photoreal-editorial/01-editorial-portrait-after-hours/One Subject, Six Lights.png', 'One portrait subject photographed with six distinct lighting setups'),
]

const softAuthorityGallery = [
  image('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/fasion-show.png', 'Fashion model in a white suit walking a luxury runway'),
  image('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/bold graphic studio.png', 'Black and white fashion portrait against a bold yellow studio background'),
  image('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/brend-watch-model.png', 'Luxury watch campaign portrait in a dark editorial setting'),
  image('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/brand watch.png', 'Luxury watch advertising system adapted across social media formats'),
]

const gardenMotionGallery = [
  image('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-in-garden.png', 'Lifestyle portrait of a woman relaxing on a garden bench'),
  image('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-having coffee.png', 'Sunlit lifestyle scene of a woman having coffee at home with her cat'),
  image('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-in-reading.png', 'Natural lifestyle scene of a woman writing beside her laptop at home'),
  image('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-in-studio.png', 'Editorial studio portrait using a focused beam of light'),
]

const quietLuxuryGallery = [
  image('/images/showcase/01-ai-images/photoreal-editorial/04-editorial-fashion-quiet-luxury/openart-gpt-image-2-edit-1_1785446559736_f9bd3793.png', 'Luxury evening shoes presented on gold satin'),
  image('/images/showcase/01-ai-images/photoreal-editorial/04-editorial-fashion-quiet-luxury/openart-gpt-image-2-edit-1_1785446245199_2bef2dd9.png', 'Coastal luxury fashion portrait beside a sports car at golden hour'),
  image('/images/showcase/01-ai-images/photoreal-editorial/04-editorial-fashion-quiet-luxury/openart-gpt-image-2-edit-1_1785446370871_cfb0e94d.png', 'Luxury diamond jewelry campaign in warm editorial lighting'),
]

const oneFaceFiveWorldsGallery = [
  image('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-cv.png', 'Character profile combining professional, personal and athletic identities'),
  image('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-sheet.png', 'Consistent character reference sheet with poses, expressions and workplace scenes'),
  image('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-selling-serum.png', 'Consistent character presenting a skincare serum campaign'),
  image('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-with-brand.png', 'Consistent character adapted for an athletic brand campaign'),
]

const roseSignalGallery = [
  image('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_28_43 PM.png', 'Rosewood fragrance bottle against a deep rose studio background'),
  image('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_28_47 PM.png', 'Rosewood fragrance surrounded by rose, wood and spice ingredients'),
  image('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_34_35 PM.png', 'Lifestyle portrait presenting the Rosewood fragrance collection'),
  image('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_37_09 PM.png', 'Rosewood fragrance campaign poster with layered natural ingredients'),
  image('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/openart-gpt-image-2-edit-1_1785450264348_c5130b8e.png', 'Rosewood fragrance collection photographed in a desert setting'),
]

const dailyRitualGallery = [
  image('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/cover.jpg', 'Kiwi retinol serum campaign portrait'),
  image('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image11.jpg', 'Creator-style Kiwi serum image in a bathroom setting'),
  image('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image12.jpg', 'Kiwi retinol serum social advertisement with fruit and water'),
  image('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image4.jpg', 'Kiwi skincare packaging and brand asset system'),
  image('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image9.jpg', 'Kiwi serum launch-offer advertisement'),
]

const mineralLightGallery = [
  image('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-edit-1_1785450917746_d4ba9a6c.png', 'Diamond necklace, ring and bracelet campaign in warm editorial light'),
  image('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-1_1785450816608_7cd228e9.png', 'Emerald necklace commercial storyboard'),
  image('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-edit-1_1785451068784_199c3333.png', 'Emerald and diamond necklace presented in a velvet case'),
  image('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-edit-1_1785451290111_19528c7b.png', 'Editorial portrait wearing an emerald statement necklace'),
]

const coldCurrentGallery = [
  image('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785452952944_0d4f5082.png', 'Cold mango beverage campaign with condensation and motion'),
  image('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453053113_5a4229ed.png', 'Mango beverage brand identity and packaging system'),
  image('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453061750_07f5be9e.png', 'Blackberry fruit wine campaign image system'),
  image('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453081121_806bad00.png', 'Blue porcelain-inspired coffee brand campaign system'),
  image('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453081818_88f5b016.png', 'Dramatic restaurant burger advertisement'),
]

const objectStudyGallery = [
  image('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-1_1785453204257_04c8a32a.png', 'Minimal black headphone study with controlled geometric shadow'),
  image('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-1_1785453270680_1412ca0c.png', 'Front-facing headphone material and form study'),
  image('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-1_1785453293032_5b027efe.png', 'Headphone study using strong directional light and negative space'),
  image('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-edit-1_1785453506868_fe0a4499.png', 'Lifestyle headphone campaign in a sculptural studio environment'),
  image('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-edit-1_1785453523400_2bd3c9a8.png', 'Conceptual headphone campaign featuring an arctic wolf'),
]

/** @type {Record<string, ShowcaseDiscipline>} */
export const PORTFOLIO_DATA = {
  images: {
    label: 'AI Images',
    kicker: 'Still image direction',
    title: 'Image worlds',
    description: 'Commercial image systems built around realism, product fidelity, art direction and repeatable visual language. Each collection is designed as a coherent campaign rather than a set of disconnected outputs.',
    collections: [
      {
        title: 'Photoreal & Editorial',
        description: 'Human-centered imagery with controlled lighting, wardrobe, environment and camera language for lifestyle, editorial and campaign use.',
        items: [
          project('After Hours', 'Editorial portrait', 'portrait', 'A restrained nighttime portrait series exploring natural skin, lived-in environments and directional light.', '4:5 stills', 'Creative direction, prompt system, retouching', 'GPT Image, Nano Banana, Photoshop', 'Self-initiated concept', '', photorealEditorialGallery[0], photorealEditorialGallery),
          project('Soft Authority', 'Fashion campaign', 'wide', 'A modern leadership portrait campaign balancing professional credibility with cinematic art direction.', '16:9 and 4:5', 'Art direction and visual consistency', 'GPT Image, OpenArt, Photoshop', 'Self-initiated concept', '', softAuthorityGallery[0], softAuthorityGallery),
          project('Garden Motion', 'Lifestyle realism', 'square', 'A candid outdoor image system designed around natural movement rather than static model posing.', '1:1 and 4:5', 'Prompt engineering and image finishing', 'Nano Banana, Photoshop', 'Self-initiated concept', '', gardenMotionGallery[0], gardenMotionGallery),
          project('Quiet Luxury', 'Editorial fashion', 'tall', 'Luxury fashion studies using simple architecture, restrained palettes and tactile material details.', '3:5 campaign set', 'Visual direction and consistency', 'Midjourney workflow, Photoshop', 'Self-initiated concept', '', quietLuxuryGallery[0], quietLuxuryGallery),
          project('One Face / Five Worlds', 'Character consistency', 'feature', 'The same AI persona maintained across distinct locations, outfits and lighting conditions.', 'Multi-scene image set', 'Identity consistency system', 'OpenArt, reference prompting, Photoshop', 'Self-initiated concept', '', oneFaceFiveWorldsGallery[0], oneFaceFiveWorldsGallery),
        ],
      },
      {
        title: 'Product & Advertising',
        description: 'Studio, ingredient, lifestyle and campaign compositions created to make products feel tangible, desirable and brand-specific.',
        items: [
          project('Rose Signal', 'Fragrance campaign', 'wide', 'A fragrance campaign combining hero product frames, tactile materials and dramatic color blocking.', '16:9 / 4:5 / 9:16', 'Campaign concept and asset system', 'GPT Image, Photoshop, Canva', 'Self-initiated concept', '', roseSignalGallery[0], roseSignalGallery),
          project('Daily Ritual', 'Skincare system', 'portrait', 'A clean skincare collection covering packshot, bathroom lifestyle and ingredient-led compositions.', 'E-commerce image set', 'Product composition and editing', 'Nano Banana, Photoshop', 'Self-initiated concept', '', dailyRitualGallery[0], dailyRitualGallery),
          project('Mineral Light', 'Jewelry editorial', 'tall', 'Macro-inspired jewelry frames designed around reflection control, texture and premium visual hierarchy.', '3:5 editorial set', 'Art direction and finishing', 'OpenArt, Photoshop', 'Self-initiated concept', '', mineralLightGallery[0], mineralLightGallery),
          project('Cold Current', 'Beverage campaign', 'square', 'A high-energy beverage visual system with condensation, motion and social-first crop variations.', '1:1 / 4:5 social set', 'Creative concept and adaptations', 'GPT Image, Photoshop', 'Self-initiated concept', '', coldCurrentGallery[0], coldCurrentGallery),
          project('Object Study 01', 'Product exploration', 'feature', 'A minimalist product study focused on form, shadow, negative space and material accuracy.', '5:4 key visual', 'Prompt system and visual refinement', 'Nano Banana, Photoshop', 'Self-initiated concept', '', objectStudyGallery[0], objectStudyGallery),
        ],
      },
      {
        title: 'Illustration & Story Worlds',
        description: 'Character-led illustration systems for books, social storytelling, branded mascots and expressive educational content.',
        items: [
          project('Globby Explains', 'Branded mascot', 'wide', 'A recurring illustrated mascot system built for simple, metaphor-led social education.', 'Social illustration series', 'Character direction and visual language', 'GPT Image, Illustrator', 'Self-initiated concept', '', image('/images/projects/visual-metaphor-illustrations/02-air-pollution-smog-valve.png', 'Globby illustrated mascot project preview')),
          project('The Nightingale', 'Storybook sequence', 'feature', 'A cinematic illustrated sequence with consistent characters, mood and environmental continuity.', 'Book spread system', 'Storyboarding and image direction', 'GPT Image, Photoshop', 'Self-initiated concept', '', image('/images/projects/visual-metaphor-illustrations/04-ocean-plastic-fishing-bottles.png', 'Illustrated story sequence project preview')),
          project('Small Heroes', "Children's illustration", 'portrait', 'A warm character collection designed for approachable educational narratives.', '4:5 character scenes', 'Character design and scene prompting', 'OpenArt, Photoshop', 'Self-initiated concept', '', image('/images/projects/visual-metaphor-illustrations/01-climate-change-melting-backpack.png', 'Children illustration project preview')),
          project('Systems, Simply', 'Technical illustration', 'square', 'Editorial diagrams that explain software and AI concepts through one clear visual metaphor.', '1:1 editorial graphics', 'Concept development and information design', 'GPT Image, Illustrator', 'Self-initiated concept', '', image('/images/projects/visual-metaphor-illustrations/03-broken-water-cycle-missing-pipe.png', 'Technical visual metaphor project preview')),
        ],
      },
    ],
  },
  ugc: {
    label: 'AI UGC',
    kicker: 'Creator-led advertising',
    title: 'Human stories, built to test',
    description: 'Native-feeling vertical advertisements developed around audience pain points, product demonstrations, creator voices and testable hook variations.',
    items: [
      project('The 5-Step Routine', 'Skincare testimonial', 'portrait', 'A creator-style testimonial that compresses a complicated skincare routine into one clear product story.', '9:16 · 28 sec', 'Hook, script, AI creator, edit', 'Higgsfield, ElevenLabs, CapCut', 'Concept campaign', 'I stopped using five products after trying this.'),
      project('Desk Reset', 'Productivity app', 'portrait', 'A problem-to-solution UGC ad combining a talking creator with screen-recorded app interactions.', '9:16 · 24 sec', 'Script, avatar direction, screen composite', 'HeyGen, ElevenLabs, CapCut', 'Concept campaign', 'This was stealing three hours from my week.'),
      project('First Sip', 'Beverage reaction', 'portrait', 'A fast reaction-led creator video designed around taste, texture and a low-friction first-purchase CTA.', '9:16 · 18 sec', 'Hook variants and social edit', 'Higgsfield, CapCut', 'Concept campaign', 'I did not expect this to taste that good.'),
      project('Unbox the Quiet', 'Audio product', 'portrait', 'An unboxing-led UGC concept using tactile product shots, creator commentary and objection handling.', '9:16 · 32 sec', 'Script, product inserts, subtitles', 'HeyGen, ElevenLabs, CapCut', 'Concept campaign', 'These fixed the one thing I hated about earbuds.'),
      project('One Brief, Three Hooks', 'Creative testing set', 'portrait', 'One product narrative reframed through pain, curiosity and contrarian hook directions for structured testing.', '3 × 15 sec', 'Creative strategy and variants', 'Higgsfield, ElevenLabs, CapCut', 'Testing concept', 'Your moisturizer might be making this worse.'),
      project('Local Voice', 'Multilingual UGC', 'portrait', 'A localized UGC campaign preserving pacing and intent across English and Bengali voice variants.', '9:16 · 25 sec', 'Localization and voice direction', 'HeyGen, ElevenLabs, CapCut', 'Localization demo', 'The same story, told naturally for each audience.'),
    ],
  },
  video: {
    label: 'AI Video',
    kicker: 'Motion & short-form storytelling',
    title: 'Frames that move with purpose',
    description: 'Short-form films, product promos and explainers where AI generation is one part of a larger workflow: concept, storyboard, motion direction, edit, voice and platform delivery.',
    feature: project('AI Motion Showreel', 'Selected motion work', 'wide', 'A concise reel combining product motion, character animation, creator-led moments and cinematic transitions.', '16:9 master · 9:16 cut', 'Direction, generation and edit', 'Kling, Seedance, OpenArt, CapCut', 'Selected portfolio work', '', campaignVideo),
    collections: [
      {
        title: 'Commercial Motion',
        description: 'Product and brand films designed for immediate visual clarity, strong pacing and modular social adaptations.',
        items: [
          project('Fifteen Seconds of Story', 'Book promo', 'wide', 'A vertical book launch film using cover animation, atmospheric scenes, typography and royalty-safe music.', '9:16 · 15 sec', 'Storyboard, motion and edit', 'Kling, CapCut, ElevenLabs', 'Selected portfolio work', '', campaignVideo),
          project('Pour / Pause / Desire', 'Beverage film', 'feature', 'A tactile commercial sequence using controlled camera movement, condensation and rhythmic cuts.', '9:16 and 1:1', 'Visual direction and edit', 'Seedance, OpenArt, CapCut'),
          project('From Still to Scene', 'Image-to-video', 'portrait', 'A fashion image transformed into subtle, believable motion without losing identity or garment design.', '4:5 and 9:16', 'Motion prompting and cleanup', 'Kling, Photoshop, CapCut'),
        ],
      },
      {
        title: 'Explainers & Technical Stories',
        description: 'Narrative-led motion systems for software, cloud and AI concepts that need both technical accuracy and visual clarity.',
        items: [
          project('The Hidden Review Board', 'Patent process explainer', 'wide', 'A character-led explanation of an opaque technical review process, structured for mixed audiences.', '16:9 explainer', 'Script, visual system and direction', 'GPT Image, Kling, CapCut'),
          project('Loop Engineering', 'AI concept animation', 'feature', 'A visual explanation of iterative AI development using a single coherent motion metaphor.', '1:1 / 16:9', 'Concept and storyboard', 'GPT Image, After Effects workflow'),
          project('Cloud, Without the Fog', 'Technical promo', 'portrait', 'A concise cloud-service story combining architecture visualisation with a human-centered narrative.', '9:16 · 30 sec', 'Technical script and motion plan', 'Illustrator, Kling, CapCut'),
        ],
      },
    ],
  },
  characters: {
    label: 'Character Design',
    kicker: 'Identity systems',
    title: 'Characters that survive the next scene',
    description: 'Character systems created for continuity across poses, expressions, environments, wardrobe and narrative moments — supported by reference sheets and reusable prompt specifications.',
    collections: [
      {
        title: 'Professional Characters',
        description: 'Naturalistic people designed for credible workplace stories, educational films and recurring campaign narratives.',
        items: [
          project('Maya, the Inventor', 'Professional character', 'wide', 'A meticulous research scientist designed for a multi-scene patent disclosure narrative.', 'Character sheet + scenes', 'Character definition and consistency', 'GPT Image, Photoshop', 'Self-initiated concept', '', image('/images/profile/openart-gpt-image-2-edit-1_1783702765593_76f4a60e.png', 'Maya professional character preview')),
          project('Sarah, the Reviewer', 'Workplace character', 'feature', 'A senior review professional with a controlled visual language spanning stress, focus and reflection.', 'Turnaround + expressions', 'Character system and scene direction', 'GPT Image, Photoshop', 'Self-initiated concept', '', image('/images/profile/developer-pic-11.png', 'Sarah workplace character preview')),
          project('The Senior Inventor', 'Narrative character', 'portrait', 'A warm, lived-in older inventor designed to contrast with a sterile corporate setting.', 'Character sheet + portrait', 'Character design and styling', 'GPT Image, Photoshop', 'Self-initiated concept', '', image('/images/profile/developer-pic-12.png', 'Senior inventor character preview')),
        ],
      },
      {
        title: 'Mascots & Illustrated Personas',
        description: 'Simplified branded figures built around a distinctive silhouette, expression range and repeatable visual grammar.',
        items: [
          project('Globby', 'Educational mascot', 'square', 'A black planet-like mascot that communicates complex topics through one visual metaphor at a time.', 'Mascot system', 'Concept, expressions and prompts', 'GPT Image, Illustrator', 'Self-initiated concept', '', image('/images/projects/visual-metaphor-illustrations/05-deforestation-last-umbrella.png', 'Globby educational mascot preview')),
          project('Yui', 'Virtual persona', 'portrait', 'A reusable AI persona maintained across editorial, fashion and product campaign contexts.', 'Persona reference pack', 'Identity and styling system', 'OpenArt, Photoshop', 'Self-initiated concept', '', image('/images/projects/meta-ad-campaign/cover.jpg', 'Yui virtual persona campaign preview')),
          project('The Curious Chickens', 'Comic ensemble', 'wide', 'A small character ensemble designed for recurring humorous stories and expressive panel compositions.', 'Comic character set', 'Character design and story beats', 'GPT Image, Photoshop', 'Self-initiated concept', '', image('/images/projects/visual-metaphor-illustrations/08-overconsumption-tipped-scale.png', 'Illustrated comic ensemble preview')),
        ],
      },
    ],
  },
  websites: {
    label: 'Websites',
    kicker: 'Web design & development',
    title: 'Pages that earn the next click',
    description: 'Portfolio sites, campaign pages and product experiences where visual direction, information architecture and implementation work as one system — responsive, purposeful and ready to extend.',
    feature: project('AI Creative Studio', 'Featured web experience', 'wide', 'A commercial portfolio experience that organizes AI imagery, UGC, motion, character systems and technical work without making the studio feel unfocused.', 'Responsive multi-page website', 'UX direction, interface design and front-end build', 'React, Next.js, CSS, Vercel', 'Design concept', '', { kind: 'image', src: '/images/projects/portfolio-cover-image.jpg', alt: 'Nafiul portfolio website preview' }),
    collections: [
      {
        title: 'Landing Pages & Campaign Sites',
        description: 'Focused pages built around one audience, one offer and one primary conversion action.',
        items: [
          project('Launch in One Scroll', 'Product landing page', 'feature', 'A conversion-focused product page with a concise value proposition, interactive feature narrative, proof and a direct call to action.', 'Responsive landing page', 'Structure, visual design and implementation', 'Next.js, React, CSS'),
          project('Signal, Not Noise', 'AI SaaS website', 'wide', 'A technical SaaS page that translates complex agent capabilities into a clear product story for business users.', 'Desktop + mobile website', 'Information architecture and UI build', 'React, TypeScript, Vercel'),
          project('Event in Motion', 'Campaign microsite', 'portrait', 'A compact event experience combining agenda, speakers, registration and media in a fast, mobile-first flow.', 'Mobile-first microsite', 'UX, content hierarchy and front-end', 'Next.js, CSS, analytics-ready components'),
        ],
      },
      {
        title: 'Portfolios & Technical Experiences',
        description: 'Websites that make broad or technical capability easier to understand through deliberate project structure and evidence-led case studies.',
        items: [
          project('Nafiul Creative Portfolio', 'Creative portfolio', 'feature', 'A modular portfolio system for AI visuals, video, design and development work with dedicated routes for proposal-specific sharing.', 'Multi-page portfolio', 'Portfolio architecture and component design', 'React, Next.js, Vercel'),
          project('Max Steel Knowledge Hub', 'Technical content platform', 'wide', 'A responsive knowledge platform combining engineering articles, presentations, technical visuals and educational media.', 'Content-rich responsive site', 'Product structure, content and implementation', 'React, JavaScript, GitHub Pages'),
          project('Agent Demo Interface', 'Interactive AI prototype', 'square', 'A lightweight interface that makes an agent workflow visible through inputs, progress states, generated outputs and review controls.', 'Interactive web prototype', 'UI system and workflow integration', 'React, Python API, Docker'),
        ],
      },
    ],
  },
  automation: {
    label: 'AI Automation',
    kicker: 'Agents, skills & intelligent workflows',
    title: 'Systems behind the content',
    description: 'Practical AI workflows that turn repeatable creative and technical tasks into reviewable systems — with clear inputs, model orchestration, human checkpoints and usable outputs.',
    feature: project('Content Operations Copilot', 'Featured automation', 'wide', 'A modular workflow that accepts a campaign brief, researches product context, generates scripts and creative variants, routes assets for review and packages approved outputs for publishing.', 'Agent workflow + review interface', 'Workflow design, prompts, integration and prototype', 'Python, n8n, OpenAI API, Claude, Docker', 'Prototype concept', '', { kind: 'image', src: '/images/projects/agency-website-cover-image.jpg', alt: 'Content operations automation preview' }),
    collections: [
      {
        title: 'Creative Production Workflows',
        description: 'Automations designed to accelerate structured creative work without removing review, brand judgment or quality control.',
        items: [
          project('UGC Variant Generator', 'Ad creative workflow', 'feature', 'Transforms one product brief into audience angles, scripts, hooks, shot lists and platform-specific creative variants for human selection.', 'Brief-to-variant workflow', 'Prompt architecture and orchestration', 'Claude, OpenAI API, n8n'),
          project('Product Campaign Pipeline', 'Image production automation', 'wide', 'Organizes references, campaign directions, product-image prompts, naming and output review into a repeatable asset pipeline.', 'Creative asset pipeline', 'Workflow design and validation rules', 'Python, image APIs, metadata storage'),
          project('Multilingual Ad Localizer', 'Localization workflow', 'portrait', 'Adapts scripts and voice direction across languages while preserving the original hook, timing, CTA and brand constraints.', 'Script + voice localization', 'Prompting, translation controls and QA', 'ElevenLabs, Claude, Python'),
        ],
      },
      {
        title: 'Agents & Technical Prototypes',
        description: 'Small, demonstrable agent systems for classification, documentation, research and developer productivity.',
        items: [
          project('Claude Footage Labeling Skill', 'Video analysis agent', 'feature', 'A Claude-oriented workflow that samples footage, identifies visible actions and scenes, and returns searchable UGC labels with confidence and review context.', 'Footage-to-label prototype', 'Skill design, video preprocessing and output schema', 'Claude, Python, FFmpeg, MCP'),
          project('Documentation Helper Agent', 'Developer documentation', 'wide', 'An agent that analyses a codebase and produces structured, editable documentation while retaining a human approval step.', 'Repository-to-documentation workflow', 'Agent design, prompts and evaluation', 'Python, Ollama, ChromaDB'),
          project('Research-to-Portfolio Pipeline', 'Research workflow', 'square', 'Collects source material, extracts evidence, drafts a case-study structure and prepares content blocks for a portfolio CMS.', 'Research synthesis pipeline', 'System design and prompt workflow', 'OpenAI API, Python, structured outputs'),
        ],
      },
    ],
  },
}

export const TAB_ORDER = ['images', 'ugc', 'video', 'characters', 'websites', 'automation']
