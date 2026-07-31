// @ts-check

/** @typedef {'image' | 'video' | 'youtube'} MediaKind */
/** @typedef {'portrait' | 'square' | 'wide' | 'tall' | 'feature'} ProjectFormat */
/** @typedef {'needs-update' | 'approved'} MediaReviewStatus */
/** @typedef {{ title: string, description: string, composition: string, lighting: string, intent: string }} ArtworkNotes */
/** @typedef {{ kind: MediaKind, src: string, alt: string, poster?: string, reviewStatus: MediaReviewStatus, art?: ArtworkNotes }} ShowcaseMedia */
/** @typedef {{ url: string, label: string }} ExternalLink */
/** @typedef {{ title: string, category: string, format: ProjectFormat, description: string, output: string, role: string, tools: string, status: string, hook: string, media: ShowcaseMedia, mediaGallery?: ShowcaseMedia[], externalLink?: ExternalLink }} ShowcaseProject */
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
  'AI Motion Showreel',
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
  'Globby Explains',
  'The Nightingale',
  'Small Heroes',
  'Systems, Simply',
  'Thumbnail Systems',
  'Hero — Illustration montage',
  'Hero — Kiwi campaign portrait',
  'Hero — Nafiul creator portrait',
  'Pour / Pause / Desire',
  'Serum, in Motion',
  'From Still to Scene',
  'Thirty Seconds, Three Cuts',
  'Fifteen Seconds of Story',
  'The Slow Valley',
  'Popy in Motion',
  'Loop Engineering',
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
const video = (src, alt, poster) => ({
  kind: 'video',
  src,
  alt,
  ...(poster ? { poster } : {}),
  reviewStatus: 'needs-update',
})
const youtube = (videoId, alt) => ({
  kind: 'youtube',
  src: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`,
  poster: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  alt,
  reviewStatus: 'needs-update',
})
const artwork = (src, alt, title, description, composition, lighting, intent) => ({
  ...image(src, alt),
  art: { title, description, composition, lighting, intent },
})

const photorealEditorialGallery = [
  artwork('/images/showcase/01-ai-images/photoreal-editorial/01-editorial-portrait-after-hours/rain-streaked glass.png', 'Editorial portrait behind rain-streaked glass at night', 'Rain-Lit Threshold', 'A quiet portrait built around the tension between shelter and weather, with the bouquet adding warmth and narrative purpose.', 'The subject sits on the right third while the dark window seam and blurred street occupy the left, creating depth and a sense of arrival.', 'Warm tungsten light wraps the face and wet hair against cool blue reflections; raindrops break highlights into textured bokeh.', 'Use glass, weather and colour contrast to turn a simple portrait into a cinematic moment of emotional distance.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/01-editorial-portrait-after-hours/photoreal-editorial.png', 'Editorial nighttime portrait series in warm street lighting', 'One Night, Three Moods', 'A compact editorial sequence that shifts from approachable portraiture to a stronger fashion-led hero frame.', 'Two intimate crops balance a dominant full-length image, giving the layout rhythm while preserving continuity of subject and wardrobe.', 'Amber streetlight, shallow-focus practicals and controlled skin highlights create a cohesive nocturnal palette.', 'Demonstrate how crop, pose and expression can expand one visual direction into a useful campaign set.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/01-editorial-portrait-after-hours/One Subject, Six Lights.png', 'One portrait subject photographed with six distinct lighting setups', 'One Subject, Six Lights', 'A controlled portrait study showing how light alone can shift mood, authority and perceived character.', 'A consistent pose and six-panel grid isolate lighting as the changing variable, making comparison immediate.', 'Rim, split, soft key, hard side and neutral fills move from dramatic silhouette to open commercial portraiture.', 'Treat lighting as narrative direction rather than decoration while holding identity and styling constant.'),
]

const softAuthorityGallery = [
  artwork('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/fasion-show.png', 'Fashion model in a white suit walking a luxury runway', 'White Runway', 'A high-key fashion portrait where tailoring, posture and restraint communicate authority without visual aggression.', 'The model is centred against runway perspective lines, with the distant figure and audience establishing scale and context.', 'Soft frontal illumination keeps the white suit dimensional while the grey environment supplies quiet tonal separation.', 'Build confidence through silhouette, gesture and spatial control rather than dramatic effects.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/bold graphic studio.png', 'Black and white fashion portrait against a bold yellow studio background', 'Graphic Authority', 'A studio portrait reduced to two visual ideas: a monochrome subject and an uncompromising yellow field.', 'The close crop pushes the face and eyewear forward while generous negative space keeps the image editorial rather than crowded.', 'Hard black-and-white modelling meets a saturated yellow ground, creating instant figure-ground separation.', 'Translate professional confidence into a bold campaign asset with a memorable, repeatable colour device.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/brend-watch-model.png', 'Luxury watch campaign portrait in a dark editorial setting', 'Time, Elevated', 'A luxury lifestyle frame that connects the product to composure, ceremony and evening sophistication.', 'Copy occupies the dark left field while the subject and watch form a diagonal hierarchy on the right.', 'Warm rim light separates dark tailoring from the background; gold accents guide the eye toward the watch.', 'Sell aspiration through atmosphere and controlled gesture while keeping the product naturally integrated.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/02-fashion-campaign-soft-authority/brand watch.png', 'Luxury watch advertising system adapted across social media formats', 'One Watch, Five Formats', 'A campaign system demonstrating how one product language can remain recognisable across platform-specific crops.', 'The modular board balances portrait, story, square, banner and editorial placements around a consistent product hero.', 'Soft neutral backgrounds, navy leather and a restrained orange accent preserve clarity across every format.', 'Show adaptation as design work: hierarchy and product fidelity remain stable while composition changes.'),
]

const gardenMotionGallery = [
  artwork('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-in-garden.png', 'Lifestyle portrait of a woman relaxing on a garden bench', 'Garden Pause', 'An outdoor lifestyle portrait shaped around ease, fresh air and an unforced connection with the camera.', 'The path creates a soft leading line while the seated pose anchors the right side among repeating greens and pinks.', 'Open shade and dappled daylight keep skin natural; pastel wardrobe separates gently from the foliage.', 'Create aspirational lifestyle imagery that still feels observed rather than staged.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-having coffee.png', 'Sunlit lifestyle scene of a woman having coffee at home with her cat', 'Morning Company', 'A domestic moment where coffee, flowers and the cat provide tactile cues of warmth and lived-in routine.', 'The table forms a foreground layer and the subject-cat interaction creates a small narrative triangle.', 'Window light produces soft highlights, gentle steam and warm cream tones without flattening the room.', 'Use environmental detail and interaction to make a polished image feel personal and believable.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-in-reading.png', 'Natural lifestyle scene of a woman writing beside her laptop at home', 'Notes in Sunlight', 'A relaxed work-at-home scene balancing productivity with softness and everyday comfort.', 'The cross-legged pose forms a stable central triangle, framed by laptop, drink, books and plant.', 'Large-window daylight creates airy whites and warm neutrals with enough shadow to retain texture.', 'Present modern work as a calm human ritual rather than a generic technology setup.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/03-lifestyle-realism-garden-motion/woman-in-studio.png', 'Editorial studio portrait using a focused beam of light', 'Found by Light', 'A more theatrical portrait that places the same lifestyle character inside a moment of visual discovery.', 'The subject occupies a small pool of clarity within large dark negative space, heightening attention and mystery.', 'A narrow overhead beam sculpts the face and wardrobe while the mural recedes into low-contrast shadow.', 'Show range within a character-led series by moving from natural observation to controlled editorial drama.'),
]

const quietLuxuryGallery = [
  artwork('/images/showcase/01-ai-images/photoreal-editorial/04-editorial-fashion-quiet-luxury/openart-gpt-image-2-edit-1_1785446559736_f9bd3793.png', 'Luxury evening shoes presented on gold satin', 'Step Into Elegance', 'A product still life built from material harmony: metallic fabric, crystal detail, satin and polished stone.', 'The shoes create a rising diagonal while the copy sits in a protected dark field, preserving product dominance.', 'A focused warm key reveals weave and facets; deep black falloff makes the gold palette feel richer.', 'Communicate luxury through texture, restraint and precise highlight control.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/04-editorial-fashion-quiet-luxury/openart-gpt-image-2-edit-1_1785446245199_2bef2dd9.png', 'Coastal luxury fashion portrait beside a sports car at golden hour', 'Coastal Arrival', 'A fashion-lifestyle image combining wardrobe, travel and location into a single aspirational narrative.', 'The model bridges foreground car and distant coast, with the horizon and road wall pulling the eye through the scene.', 'Low golden-hour light warms skin and blush fabric against saturated sea blue and glossy black paint.', 'Use place and timing to make fashion feel like part of a larger story rather than an isolated look.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/04-editorial-fashion-quiet-luxury/openart-gpt-image-2-edit-1_1785446370871_cfb0e94d.png', 'Luxury diamond jewelry campaign in warm editorial lighting', 'Timeless Brilliance', 'A close beauty crop that makes craftsmanship, skin and reflective detail equally important.', 'Hands form an elegant frame around necklace and ring, while copy occupies the controlled negative space.', 'Warm directional light creates crisp specular highlights without losing natural skin texture.', 'Balance product sparkle with human tactility so the jewelry feels desirable rather than digitally detached.'),
]

const oneFaceFiveWorldsGallery = [
  artwork('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-cv.png', 'Character profile combining professional, personal and athletic identities', 'Maya, Defined', 'A character dossier connecting appearance to occupation, values, interests and daily behaviour.', 'Portrait, illustration, work scene and sports vignette are organised as a readable identity system.', 'Purple anchors every module while neutral photography and watercolor accents bridge realism and illustration.', 'Define character through repeatable decisions, not facial resemblance alone.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-sheet.png', 'Consistent character reference sheet with poses, expressions and workplace scenes', 'Identity Under Control', 'A production reference sheet testing the same person across angles, expressions, actions and close details.', 'Turnaround views establish form first; workplace scenes and material swatches extend the system into use.', 'Neutral studio light removes distraction and makes skin, hair, wardrobe and proportions easy to compare.', 'Create a dependable visual source of truth before placing a character into campaigns.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-selling-serum.png', 'Consistent character presenting a skincare serum campaign', 'From Character to Creator', 'The established character is translated into a credible skincare ambassador without losing identity.', 'A tight portrait crop gives equal visual weight to expression, hand gesture and product label.', 'Soft beauty light preserves real skin texture while green and gold repeat the packaging palette.', 'Prove that a reusable character can enter a commercial world without becoming generic.'),
  artwork('/images/showcase/01-ai-images/photoreal-editorial/05-character-consistency-one-face-five-worlds/character-with-brand.png', 'Consistent character adapted for an athletic brand campaign', 'Prepare / Perform', 'A campaign adaptation that moves the same identity from professional life into athletic storytelling.', 'The hero court portrait leads into two supporting frames for preparation and motion.', 'Hard arena light, red-black contrast and polished skin highlights create competitive energy.', 'Maintain facial identity while changing wardrobe, activity, palette and brand tone.'),
]

const roseSignalGallery = [
  artwork('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_28_43 PM.png', 'Rosewood fragrance bottle against a deep rose studio background', 'Rosewood Hero', 'A focused product portrait that turns the bottle silhouette and rosewood colour into the entire brand proposition.', 'Centred symmetry and a low pedestal give the bottle monumentality while keeping the label immediately legible.', 'A graduated crimson background and controlled edge highlights separate glass, cap and liquid without visual clutter.', 'Create an iconic key visual that remains recognisable at campaign, retail and social scale.'),
  artwork('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_28_47 PM.png', 'Rosewood fragrance surrounded by rose, wood and spice ingredients', 'Notes of Rosewood', 'An ingredient-led still life translating an invisible fragrance into tactile materials and colour.', 'The bottle anchors the centre while rose, timber and spice form an organic frame that guides the eye inward.', 'Soft top light reveals petal, bark and glass textures through gentle shadows and warm reflections.', 'Give the scent believable sensory cues rather than relying on packaging alone.'),
  artwork('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_34_35 PM.png', 'Lifestyle portrait presenting the Rosewood fragrance collection', 'The Ambassador', 'A lifestyle portrait placing the fragrance inside a composed world of confidence and evening ritual.', 'The face, presenting hand and bottles create a triangular hierarchy that connects character directly to product.', 'Warm sunset tones and soft interior falloff flatter skin while carrying the amber language of the fragrance.', 'Move the campaign from object desire to personal aspiration without making the product feel inserted.'),
  artwork('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/ChatGPT Image Jul 30, 2026, 11_37_09 PM.png', 'Rosewood fragrance campaign poster with layered natural ingredients', 'Torn Into Scent', 'An editorial advertisement using torn paper and botanical layers to reveal the fragrance story piece by piece.', 'A centred bottle provides stability while irregular paper edges and ingredients create depth around it.', 'Warm cream, deep rose and small specular highlights balance heritage softness with contemporary polish.', 'Turn product notes into a graphic campaign device that can extend across print and social formats.'),
  artwork('/images/showcase/01-ai-images/product-advertising/01-fragrance-campaign-rose-signal/openart-gpt-image-2-edit-1_1785450264348_c5130b8e.png', 'Rosewood fragrance collection photographed in a desert setting', 'Essence of Gold', 'A collection image where landscape, heat and mineral colour expand the fragrance into a broader world.', 'Tiered bottles create a clear family hierarchy against a low horizon and generous desert atmosphere.', 'Golden-hour light produces long shadows and glowing glass while maintaining separation between each variant.', 'Extend one product identity into a coherent range using place, palette and repeated form.'),
]

const dailyRitualGallery = [
  artwork('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/cover.jpg', 'Kiwi retinol serum campaign portrait', 'Glow That Feels Like You', 'A beauty portrait balancing product clarity with the relaxed confidence of real daily skincare.', 'Face, bottle and copy form a simple three-part hierarchy with enough breathing room for commercial use.', 'Soft beauty light preserves skin texture while an olive-green environment reinforces the ingredient story.', 'Build trust through natural presence rather than the overly perfected language common to skincare advertising.'),
  artwork('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image11.jpg', 'Creator-style Kiwi serum image in a bathroom setting', 'Bathroom Proof', 'A creator-style frame that brings the campaign closer to the visual language of a genuine recommendation.', 'The hand-held bottle fills the foreground while the bathroom context remains readable but intentionally informal.', 'Window daylight and modest contrast keep the scene credible, fresh and native to social content.', 'Add everyday authenticity to the polished campaign without losing packaging recognition.'),
  artwork('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image12.jpg', 'Kiwi retinol serum social advertisement with fruit and water', 'Ingredient Energy', 'A product-and-ingredient image designed to make efficacy feel fresh, active and easy to understand.', 'The vertical composition links headline, bottle, sliced kiwi and water into one quick reading path.', 'Dark green surrounds bright fruit colour and crisp specular highlights, increasing perceived freshness.', 'Combine educational messaging with sensory product desire in a scroll-stopping social asset.'),
  artwork('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image4.jpg', 'Kiwi skincare packaging and brand asset system', 'A Complete Ritual', 'A broader identity view showing how packaging, typography and campaign imagery behave as one system.', 'A modular grid lets hero products, supporting formats and graphic elements share emphasis without confusion.', 'Cream daylight and restrained green accents keep multiple objects visually unified.', 'Demonstrate that the idea can scale beyond one attractive image into a usable brand world.'),
  artwork('/images/showcase/01-ai-images/product-advertising/02-skincare-system-daily-ritual/image9.jpg', 'Kiwi serum launch-offer advertisement', 'Launch Moment', 'A conversion-focused launch asset that keeps a premium tone while making the offer unmistakable.', 'The vertical bottle anchors the frame and the gold promotional ribbon creates a clear secondary focal point.', 'Dramatic green product light and small gold accents add urgency without becoming visually noisy.', 'Balance performance marketing hierarchy with the established beauty identity.'),
]

const mineralLightGallery = [
  artwork('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-edit-1_1785450917746_d4ba9a6c.png', 'Diamond necklace, ring and bracelet campaign in warm editorial light', 'Diamond Elegance', 'A jewelry portrait where craftsmanship, skin and reflection work together instead of competing for attention.', 'The necklace follows the neckline while hand and ring create a second diagonal point of interest beneath the face.', 'Warm directional light produces precise sparkle and soft skin modelling with controlled highlight density.', 'Make luxury feel intimate and wearable while preserving the visual evidence of material quality.'),
  artwork('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-1_1785450816608_7cd228e9.png', 'Emerald necklace commercial storyboard', 'Emerald Storyboard', 'A campaign sequence mapping the product from mysterious reveal to close detail and human portrait.', 'The multi-frame grid alternates scale and viewpoint to create pacing rather than repeating similar product shots.', 'Black, gold and emerald-green lighting establishes a consistent dramatic world across every frame.', 'Plan a usable visual narrative before production, with each shot serving a distinct communication role.'),
  artwork('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-edit-1_1785451068784_199c3333.png', 'Emerald and diamond necklace presented in a velvet case', 'The Reveal', 'A ceremonial product still life treating the moment of opening as part of the value of the object.', 'Near symmetry and the enclosing velvet case focus attention on the necklace silhouette and central stone.', 'A narrow warm key catches emerald and diamond facets while deep shadow protects the sense of discovery.', 'Create anticipation through controlled reveal rather than showing every detail at equal brightness.'),
  artwork('/images/showcase/01-ai-images/product-advertising/03-jewelry-editorial-mineral-light/openart-gpt-image-2-edit-1_1785451290111_19528c7b.png', 'Editorial portrait wearing an emerald statement necklace', 'Emerald Portrait', 'A restrained portrait that lets a highly coloured statement piece lead without overwhelming the wearer.', 'A centred crop and simple neckline create a quiet field around the geometry of the necklace.', 'Broad neutral light keeps skin and grey wardrobe understated so emerald colour remains dominant.', 'Show how styling restraint can give a complex product greater visual authority.'),
]

const coldCurrentGallery = [
  artwork('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785452952944_0d4f5082.png', 'Cold mango beverage campaign with condensation and motion', 'Stay Fresh', 'A high-energy beverage hero using sport, scale and condensation to make refreshment physically felt.', 'An oversized low-angle bottle dominates the foreground while the athlete supplies motion and context behind it.', 'Golden backlight catches droplets and mango colour, separating the cold product from the warm environment.', 'Translate taste and temperature into movement, texture and a single instantly readable product benefit.'),
  artwork('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453053113_5a4229ed.png', 'Mango beverage brand identity and packaging system', 'Peel the Mood', 'A visual identity board extending mango flavour into packaging, typography, serving moments and social content.', 'A modular grid alternates large product anchors with smaller lifestyle and graphic details.', 'Warm cream and saturated orange create continuity while black type provides confident contrast.', 'Prove that a campaign idea can function as a repeatable brand system rather than one hero image.'),
  artwork('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453061750_07f5be9e.png', 'Blackberry fruit wine campaign image system', 'Blackberry After Dark', 'A mature beverage world built from fruit richness, evening atmosphere and a slower visual rhythm.', 'Six frames move between bottle, ingredient, pour and social setting to balance product and occasion.', 'Deep plum, low-key shadow and selective gold highlights convey body, warmth and nighttime sophistication.', 'Give flavour a distinct emotional territory while maintaining enough variation for a full campaign.'),
  artwork('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453081121_806bad00.png', 'Blue porcelain-inspired coffee brand campaign system', 'Brewed in Blue', 'A coffee identity translating blue-and-white ceramic craft into packaging and editorial storytelling.', 'A nine-tile system repeats circular cups, botanical motifs and product packs with deliberate shifts in scale.', 'Diffuse parchment light softens the cobalt palette and preserves the tactile feeling of printed and ceramic surfaces.', 'Connect product ritual to a distinctive material language instead of default café imagery.'),
  artwork('/images/showcase/01-ai-images/product-advertising/04-beverage-campaign-cold-current/openart-gpt-image-2-1_1785453081818_88f5b016.png', 'Dramatic restaurant burger advertisement', 'Built for the Craving', 'A close food hero designed around heat, texture and abundance at the moment of maximum appetite.', 'The burger fills the centre with stacked ingredients forming a clear vertical reading order.', 'Hard warm backlight catches steam, glaze and crisp edges against a dark restaurant atmosphere.', 'Use scale and material detail to create appetite appeal before the viewer reads the offer.'),
]

const objectStudyGallery = [
  artwork('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-1_1785453204257_04c8a32a.png', 'Minimal black headphone study with controlled geometric shadow', 'Balanced Arc', 'A sculptural product study reducing the headphones to silhouette, balance and negative space.', 'The circular earcups and arch create a stable central form while the cast geometry activates the empty field.', 'Soft side light separates matte surfaces and introduces a precise architectural shadow.', 'Study the object as industrial form before adding campaign narrative or lifestyle context.'),
  artwork('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-1_1785453270680_1412ca0c.png', 'Front-facing headphone material and form study', 'Material Front', 'A direct product portrait prioritising construction, padding and finish with no competing message.', 'Frontal isolation and near symmetry make proportions and material transitions easy to evaluate.', 'Broad soft studio light describes black-on-black detail without flattening the object.', 'Communicate comfort and build quality through disciplined photographic clarity.'),
  artwork('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-1_1785453293032_5b027efe.png', 'Headphone study using strong directional light and negative space', 'Shadow Geometry', 'A minimal still life using the product shadow as a second graphic object.', 'The headphones sit high in the frame while a long diagonal shadow carries energy through the negative space.', 'Hard directional light sharpens form and produces bold tonal separation on the pale surface.', 'Make lighting an active compositional material rather than simply a way to expose the product.'),
  artwork('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-edit-1_1785453506868_fe0a4499.png', 'Lifestyle headphone campaign in a sculptural studio environment', 'Scale and Motion', 'A fashion-led campaign frame moving the product from measured still life into physical attitude.', 'Forced perspective enlarges the headphones while the reaching hand and angled body create forward movement.', 'High-key architectural light keeps the set crisp and allows dark product contours to lead.', 'Transform a technical object into an expressive campaign symbol without losing its recognisable form.'),
  artwork('/images/showcase/01-ai-images/product-advertising/05-product-exploration-object-study-01/openart-gpt-image-2-edit-1_1785453523400_2bd3c9a8.png', 'Conceptual headphone campaign featuring an arctic wolf', 'Arctic Silence', 'A conceptual portrait using an arctic animal to embody isolation, focus and environmental quiet.', 'The close symmetrical gaze creates immediate intensity while the headphones frame the face naturally.', 'Cold blue rim light and snow texture separate white fur from the dark atmosphere.', 'Turn an abstract product promise into a memorable visual metaphor rather than explaining it literally.'),
]

const globbyExplainsGallery = [
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/01-branded-mascot-globby-explains/openart-gpt-image-2-1_1785495322732_97d8022d.png', 'Friendly orange fox mascot giving a thumbs-up', 'The Friendly Guide', 'A clean mascot pose designed to communicate confidence, welcome and immediate approachability.', 'The full figure is centred with a raised paw creating one clear gesture and a readable silhouette.', 'Bright orange, warm cream and heavy black outlines remain legible against a plain white field.', 'Establish a simple character language that can work across educational and branded communication.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/01-branded-mascot-globby-explains/openart-gpt-image-2-1_1785495515401_e4ec3b6f.png', 'Cheerful orange cat mascot wearing a red bandana', 'Ready to Help', 'A more energetic mascot variation using open arms and a bandana to suggest enthusiasm and team spirit.', 'The jumping pose forms a wide triangular silhouette with the face held at the visual centre.', 'Warm orange and coral-red accents create a cheerful focal point within the white background.', 'Test how pose and one costume detail can shift personality while keeping the style system consistent.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/01-branded-mascot-globby-explains/openart-gpt-image-2-1_1785495542238_dc9198d6.png', 'Four kawaii animal mascots holding symbolic objects', 'A Family of Helpers', 'A compact mascot family exploring how different animals and props can represent distinct roles or rewards.', 'A four-panel grid gives each character equal status while repeating scale and front-facing presentation.', 'Pastel pink, mint, lilac and yellow separate the variants without breaking the shared soft palette.', 'Build a flexible character set whose silhouettes and props remain recognisable at small sizes.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/01-branded-mascot-globby-explains/openart-gpt-image-2-1_1785496165321_79f7ea9a.png', 'Four monochrome animal food mascots', 'Mark-Making System', 'A one-colour mascot study combining animal personality with food and drink rituals.', 'Four emblems use the same leaf-shaped base and balanced object placement to behave like a coherent icon family.', 'Cream linework against black creates maximum contrast and a crafted screen-print character.', 'Reduce complex mascots into repeatable marks suitable for packaging, signage or merchandise.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/01-branded-mascot-globby-explains/openart-gpt-image-2-1_1785496608087_305911ee.png', 'NutShell otter savings mascot and brand palette', 'NutShell Identity', 'A mascot identity board connecting character, proposition, colour palette and app-icon use in one view.', 'The large otter anchors the left while ordered swatches and a cropped icon demonstrate the system on the right.', 'Navy and warm gold create dependable financial contrast, supported by natural brown and cream.', 'Show that a mascot can carry both emotional warmth and practical brand recognition.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/01-branded-mascot-globby-explains/openart-gpt-image-2-1_1785496688998_1ba45068.png', 'Owl mascot expression sheet', 'Six Ways to Speak', 'An expression sheet turning a simple owl into a character capable of reacting across a story or product flow.', 'Two rows of evenly spaced faces keep body shape fixed so changes in eyes, brows and beak are easy to compare.', 'Muted olive and brown keep attention on expression, with small orange accents directing the eye.', 'Design emotional range as a reusable communication system rather than a collection of unrelated poses.'),
]

const nightingaleGallery = [
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/02-storybook-sequence-the-nightingale/2.png', 'Illustrated Nightingale story style board with rose garden scenes', 'The Nightingale', 'A story-world board shaped by longing, sacrifice and the symbolic relationship between bird and rose.', 'A dominant garden scene is surrounded by smaller narrative moments, creating the rhythm of an illustrated spread.', 'Moonlit blue and candlelit gold move against crimson roses, giving the emotional symbol immediate prominence.', 'Establish a literary visual language before translating the story into individual pages.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/02-storybook-sequence-the-nightingale/ep-03-algorithm.png', 'Black-and-white comic about an algorithmic food dispenser', 'The Algorithm', 'A humorous comic using a literal recommendation machine to explain how repeated choices narrow what appears next.', 'Five panels move from discovery to excess, with the red corn providing the only evolving visual signal.', 'Black-and-white linework keeps the idea readable while selective red creates emphasis and comic escalation.', 'Explain an abstract digital behaviour through character action, consequence and a memorable visual metaphor.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/02-storybook-sequence-the-nightingale/openart-gpt-image-2-1_1785498996219_f35e45fe.png', 'Vintage illustrated Paris travel story', 'Paris in Four Moments', 'A romantic travel sequence following one couple through landmark, street and evening views.', 'Four equal panels preserve character continuity while varying scale from city vista to intimate embrace.', 'Ink blue, weathered cream and touches of amber imitate a collected travel journal.', 'Turn location into narrative progression rather than presenting landmarks as disconnected postcards.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/02-storybook-sequence-the-nightingale/openart-gpt-image-2-edit-1_1785499172400_e960bc9f.png', 'Vintage illustrated Machu Picchu travel story', 'Among the Andes', 'A travel-story sequence balancing companionship, cultural setting and the changing light of a day.', 'Repeated figures connect four viewpoints while architecture and mountain silhouettes steadily expand the world.', 'Cobalt linework and ochre washes create a print-like rhythm, ending in a warm sunset panel.', 'Maintain character and palette continuity while allowing place and time to drive each scene.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/02-storybook-sequence-the-nightingale/openart-gpt-image-2-responses-image_1781276819729_c30cb223.png', 'Creator-film storyboard and character reference sheet', 'From Scroll to Story', 'A production board defining a creator character, studio environment and a five-shot journey from distraction to purpose.', 'Turnaround views, floor plan and storyboard sit in a practical hierarchy that connects design decisions to camera coverage.', 'Cool monitor blue and soft magenta trace the emotional shift from isolated screen glow to confident studio light.', 'Plan character, set, cinematography and timing as one coherent visual sequence before execution.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/02-storybook-sequence-the-nightingale/openart-image_8TphSCPQ_1754508033865_raw.png', 'Mid-century illustrated woman seated in a kitchen', 'Domestic Modern', 'A mid-century editorial portrait built around polished optimism, domestic design and period illustration cues.', 'The seated figure creates a strong diagonal with the countertop while floral windows and appliance details frame the era.', 'Warm coral skin tones, teal curtains and sunlit cream reproduce the saturated warmth of vintage print.', 'Explore how historical visual language can establish time, character and mood in a single frame.'),
]

const smallHeroesGallery = [
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/3.png', 'Clay-style character story board about online anxiety', 'Clay Feelings', 'A tactile character study exploring isolation, conversation and self-conscious emotion through simple clay figures.', 'A large central portrait establishes the protagonist while smaller scenes test interaction, work and contrasting moods.', 'Powder blue, warm beige and muted clothing colours keep the emotional tone gentle rather than severe.', 'Make an abstract social feeling approachable through material texture, gesture and readable expressions.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/5.png', 'Cartoon red panda story board', 'The Well Challenge', 'A playful ensemble story using physical comedy and animal personalities to turn a small task into an adventure.', 'Close-ups, group scenes and action frames vary pace while the stone well remains the visual anchor.', 'Golden forest light and saturated russet fur create warmth, depth and a consistent story-world atmosphere.', 'Build narrative through expression, action and reaction while keeping the ensemble visually coherent.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/childrens_book_illustration_2.png', 'Watercolour child helping a squirrel in a snowy forest', 'A Winter Kindness', 'A quiet picture-book moment centred on care, discovery and a small act of trust.', 'The child and squirrel form an intimate focal pair inside an enclosing arc of snow-covered branches.', 'Soft watercolour greens, browns and pale winter blue make the orange squirrel a gentle point of warmth.', 'Tell a complete emotional beat through proximity and gesture without requiring explanatory text.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/file_00000000d71c620a9ff08e7a97105a80-6c63006d-42dd-4309-820e-89bc33081787.png', 'Illustrated student character carrying books', 'The Thoughtful Student', 'A clear character portrait using wardrobe, books, glasses and posture to imply curiosity and preparedness.', 'The full-body pose is isolated for easy reuse, with the bag strap and books creating a natural diagonal.', 'Rust, brown and cream form a restrained academic palette with strong outline separation.', 'Define personality through specific visual choices that can remain stable across future scenes.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/openart-image_1772273100954_c837ab0e_1772273101177_5fa7ebe4(1).png', 'Clever fox character in a sunlit bamboo forest', 'The Clever Fox', 'A confident character close-up using expression and environment to suggest wit before any action begins.', 'The fox rests centrally on a stone while bamboo lines and soft depth direct attention toward the raised brow and smile.', 'Warm rim light separates orange fur from cool green shadow, giving the portrait theatrical clarity.', 'Introduce character motivation through a single readable expression and controlled environmental framing.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/openart-image_1774615290073_33c7e2a0_1774615290144_a8347ef9.png', 'Nine-panel forest shrine story sheet', 'The Forgotten Path', 'A complete children’s story beat moving from exploration and offering to wonder and friendship.', 'A numbered three-by-three grid makes cause and effect easy to follow while alternating wide, medium and close views.', 'Watercolour greens progress from shaded forest to luminous gold as the magical encounter unfolds.', 'Design a readable visual sequence in which location, action and emotion change with every panel.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/03-childrens-illustration-small-heroes/openart-image_QyaONe7u_1755519889854_raw.png', 'Illustrated orangutan portrait in a tropical forest', 'Forest Elder', 'A gentle animal portrait balancing species detail with an approachable storybook personality.', 'The orangutan fills the central frame while crossed arms and surrounding leaves create a stable, enclosed silhouette.', 'Saturated orange fur stands against layered blue-green foliage with soft daylight modelling the face.', 'Retain natural character cues while making the subject warm and accessible for younger audiences.'),
]

const systemsSimplyGallery = [
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/04-technical-illustration-systems-simply/0_3j1wSYMCFpaNcpNg.png', 'OpenClaw AI agent framework explainer graphic', 'OpenClaw Explained', 'A technical explainer cover that gives an unfamiliar framework a clear identity and immediate reason to care.', 'Large left-aligned headline and supporting copy balance a red mascot surrounded by three functional icons.', 'Red, black and white create a direct editorial hierarchy with faint circuit detail adding context without noise.', 'Use character and information design together to lower the entry barrier to a technical subject.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/04-technical-illustration-systems-simply/Gemini_Generated_Image_j0cgf6j0cgf6j0cg.png', 'Illustration of documentation as a shared source of truth', 'One Source of Truth', 'A conceptual diagram showing documentation as the protected centre connecting design, requirements, testing and delivery.', 'Four contributors surround a raised wiki document, with arrows translating one shared source into coordinated outputs.', 'Warm cream and muted departmental colours keep the system friendly while the gold lock signals governance.', 'Make an organisational principle visible through spatial hierarchy rather than dense explanation.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/04-technical-illustration-systems-simply/file_0000000009e46243876c6db7ea8dba1d-a7b8ef81-4802-45fe-b677-a4db1cf97fb7.png', 'Traditional and AI-native business comparison illustration', 'Two Operating Models', 'A side-by-side editorial comparison contrasting delay and paperwork with experimentation and connected work.', 'A strong centre divide creates instant comparison while mirrored desk scenes make the differences easy to scan.', 'Muted blue unifies the system and selective orange marks energy, ideas and successful outcomes.', 'Clarify a strategic contrast in one glance without depending on a complex chart.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/04-technical-illustration-systems-simply/multi_agent_collab_agent_architecture.png', 'Multi-agent investment report sequence diagram', 'Parallel Analysis', 'A sequence diagram mapping how specialist agents contribute independent sections to one coordinated investment report.', 'Vertical swimlanes preserve ownership while the highlighted parallel block and final compile path reveal orchestration order.', 'Blue structural lines, pale agent blocks and a restrained amber highlight separate system logic from emphasis.', 'Turn an invisible multi-agent workflow into an auditable sequence of requests, responses and consolidation.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/04-technical-illustration-systems-simply/skills.png', 'Layered AI research and experimentation architecture diagram', 'Research Through Layers', 'A conceptual architecture showing how a researcher’s hypothesis moves through experimentation, tools and infrastructure.', 'Nested layers establish hierarchy while grouped technology blocks reveal pre-training, serving and post-training choices.', 'Soft pastel zones reduce cognitive load and black hand-drawn outlines keep the technical system approachable.', 'Organise a broad tooling landscape around the human research question that activates it.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/04-technical-illustration-systems-simply/work-flow.png', 'Six-panel illustrated PDF conversion workflow', 'From PDF to Structure', 'A visual workflow turning a large-document conversion task into six understandable stages with a recurring human-and-robot team.', 'A numbered grid moves from problem to preparation, processing, cleanup and successful output in strict reading order.', 'Warm studio browns and luminous interface blues distinguish human context from automated action.', 'Explain a complex transformation through progressive scenes, visible checkpoints and a clear finish state.'),
]

const thumbnailSystemsGallery = [
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/openart-image_1785500365440_6ea2160b_1785500365490_6517c67f.png', 'YouTube thumbnail comparing five styles in one tool', 'Five Styles, One Tool', 'A tutorial thumbnail built around a compact promise, direct eye contact and a visual map of possible outputs.', 'Oversized type anchors the left, the presenter bridges the centre and glowing example screens create a clear result path on the right.', 'Deep navy establishes authority while white, red and electric cyan produce strong small-screen contrast.', 'Communicate topic, range and outcome before the viewer needs to read supporting detail.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/1 Youtube Thumbnail.png', 'YouTube thumbnail about earning money online', 'Ten Ways to Earn', 'A benefit-led thumbnail pairing a specific numbered promise with an instantly understood money visual.', 'Bold stacked text occupies one half while the expressive face, cash fan and coin stacks control the other.', 'Black and white create the main division, with gold signalling money and urgency without extra imagery.', 'Make the subject and value proposition readable at feed size through scale and visual shorthand.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/2 Youtube Thumbnail.png', 'Gaming YouTube thumbnail with presenter and top-five headline', 'Top Five Game Experience', 'An entertainment thumbnail using physical excitement and comic-book language to sell a ranked gaming story.', 'The presenter fills the left while the speech-panel headline dominates the right, creating a quick face-to-topic path.', 'Lime green and saturated blue generate youthful energy with black outlines preserving readability.', 'Match facial expression, graphic style and topic so the thumbnail feels like one idea rather than assembled parts.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/All YouTube Thumbnail.jpg', 'Clay-style YouTube thumbnail about indirect gossip', 'But Never Directly', 'A psychology-themed thumbnail translating an uncomfortable social question into a small, readable clay scene.', 'The neon headline leads into the two seated figures, while the thought bubble supplies the emotional hook.', 'Acid green cuts through a muted grey-blue set and directs attention before the longer supporting line.', 'Turn an abstract interpersonal topic into a recognisable moment of tension and curiosity.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/All YouTube Thumbnail.png', 'Finance YouTube thumbnail warning viewers to stop a common mistake', 'Stop Doing This', 'A warning-led finance thumbnail using interruption, expression and market context to create immediate urgency.', 'A giant yellow command dominates the left while the surprised presenter occupies the illuminated right side.', 'Black and yellow deliver caution-level contrast, with the coral sweater keeping the human subject warm and distinct.', 'Lead with one decisive action and support it with emotion rather than competing messages.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/openart-image_KEGmEZqX_1754511303656_raw.png', 'Red and black graphic YouTube thumbnail with illustrated woman', 'Born to Desire', 'A highly stylised thumbnail treating fashion illustration, smoke and headline as a single dramatic silhouette.', 'The central figure and rising smoke divide the black field while the red-edged title creates a strong upper frame.', 'Near-monochrome black, white and red produces theatrical contrast with a poster-like finish.', 'Use reduction and attitude to create intrigue when mood matters more than literal explanation.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/openart-image_rdFjbHiY_1754511812876_raw.png', 'Painterly YouTube thumbnail titled The Silent Pain of Desire', 'The Silent Pain of Desire', 'An emotionally heavy editorial thumbnail built as a symbolic portrait rather than a conventional reaction image.', 'The seated figure is centred beneath the title while roses and shadow silhouettes build narrative pressure around the body.', 'Muted violet and aged cream make the red flowers and painted wounds the emotional focal points.', 'Use metaphor, symmetry and restrained colour to signal a reflective long-form subject.'),
  artwork('/images/showcase/01-ai-images/illustration-story-worlds/05-youtube-thumbnail-systems-design/thumbnail.png', 'Illustrated YouTube thumbnail asking what AI is really doing', 'What Is AI Really Doing?', 'A technology explainer thumbnail balancing an approachable host character with a visually complex network backdrop.', 'The pointing gesture sends the eye from the illustrated presenter to the large yellow question on the right.', 'Deep blue and magenta suggest computational depth while warm skin and yellow type stay clearly foregrounded.', 'Make a broad technical question feel accessible without removing its sense of scale and mystery.'),
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
          project('One Face / Five Worlds', 'Character consistency', 'feature', 'The same AI persona maintained across distinct locations, outfits and lighting conditions.', 'Multi-scene image set', 'Identity consistency system', 'OpenArt, ChatGPT Image model, Photoshop', 'Self-initiated concept', '', oneFaceFiveWorldsGallery[0], oneFaceFiveWorldsGallery),
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
          project('Globby Explains', 'Branded mascot', 'portrait', 'A mascot exploration system testing character shape, expression, brand application and icon-level recognition.', 'Character and identity studies', 'Character direction and visual language', 'ChatGPT Image model, OpenArt, Illustrator', 'Self-initiated concept', '', globbyExplainsGallery[0], globbyExplainsGallery),
          project('The Nightingale', 'Storybook sequence', 'feature', 'Illustrated narrative studies exploring continuity, pacing, setting and distinct approaches to sequential storytelling.', 'Story boards and illustrated sequences', 'Storyboarding and image direction', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept', '', nightingaleGallery[0], nightingaleGallery),
          project('Small Heroes', "Children's illustration", 'wide', 'Character-led scenes using gesture, environment and visual pacing to make emotional ideas approachable for younger audiences.', 'Character scenes and story sheets', 'Character design and narrative direction', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept', '', smallHeroesGallery[0], smallHeroesGallery),
          project('Systems, Simply', 'Technical illustration', 'wide', 'Editorial diagrams and visual workflows that turn software, AI and organisational systems into clear explanations.', 'Explainers, diagrams and workflows', 'Concept development and information design', 'ChatGPT Image model, Gemini, Illustrator', 'Self-initiated concept', '', systemsSimplyGallery[0], systemsSimplyGallery),
          project('Thumbnail Systems', 'YouTube design', 'wide', 'Thumbnail directions built around a single promise, strong hierarchy and fast small-screen recognition across different subjects.', '16:9 thumbnail series', 'Concept, art direction and compositing', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept', '', thumbnailSystemsGallery[0], thumbnailSystemsGallery),
        ],
      },
    ],
  },
  ugc: {
    label: 'AI UGC',
    kicker: 'Creator-led advertising',
    title: 'Human stories, built to test',
    description: 'Native-feeling vertical advertisements developed around audience pain points, product demonstrations, creator voices and testable hook variations.',
    collections: [
      {
        title: 'Vertical Range',
        description: 'Native-feeling creator ads built around one audience, one objection and one clear next action.',
        items: [
          project('The 5-Step Routine', 'Skincare testimonial', 'portrait', 'A creator-style testimonial that compresses a complicated skincare routine into one clear product story.', '9:16 vertical ad', 'Hook, script, creator direction and edit', 'Higgsfield, ElevenLabs, CapCut', 'Self-initiated concept', 'I stopped using five products after trying this.'),
          project('Desk Reset', 'Productivity app', 'portrait', 'A problem-to-solution UGC ad combining a talking creator with screen-recorded app interactions.', '9:16 vertical ad', 'Script, avatar direction and screen composite', 'HeyGen, ElevenLabs, CapCut', 'Self-initiated concept', 'This was stealing three hours from my week.'),
          project('First Sip', 'Beverage reaction', 'portrait', 'A fast reaction-led creator video designed around taste, texture and a low-friction first-purchase CTA.', '9:16 vertical ad', 'Hook variants and social edit', 'Higgsfield, CapCut', 'Self-initiated concept', 'I did not expect this to taste that good.'),
          project('Unbox the Quiet', 'Audio product', 'portrait', 'An unboxing-led UGC concept using tactile product shots, creator commentary and objection handling.', '9:16 vertical ad', 'Script, product inserts and subtitles', 'HeyGen, ElevenLabs, CapCut', 'Self-initiated concept', 'These fixed the one thing I hated about earbuds.'),
          project('Fits Like That', 'Fashion / apparel try-on', 'portrait', 'A try-on-led fashion concept using fit reactions, movement, detail inserts and natural creator commentary.', '9:16 try-on ad', 'Concept, creator direction and social edit', 'Higgsfield, ChatGPT Image model, CapCut', 'Self-initiated concept', 'I finally found the fit I kept trying to fake.'),
          project('Thirty Days', 'Fitness / supplement before-and-after', 'portrait', 'A progress-led UGC concept structured around believable checkpoints, routine evidence and responsible transformation framing.', '9:16 progress story', 'Narrative structure, creator direction and edit', 'HeyGen, ElevenLabs, CapCut', 'Self-initiated concept', 'This is what changed after thirty consistent days.'),
        ],
      },
      {
        title: 'Creative Strategy',
        description: 'UGC treated as a testable creative system rather than a single finished video.',
        items: [
          project('One Brief, Three Hooks', 'Creative testing set', 'portrait', 'One product narrative reframed through pain, curiosity and contrarian hook directions for structured testing.', '3 × 15 sec variants', 'Creative strategy and hook variants', 'Higgsfield, ElevenLabs, CapCut', 'Self-initiated concept', 'Your moisturizer might be making this worse.'),
          project('Local Voice', 'Multilingual UGC', 'portrait', 'A localized UGC campaign preserving pacing and intent across natural English and Bengali voice variants.', 'English + Bengali variants', 'Localization and voice direction', 'HeyGen, ElevenLabs, CapCut', 'Self-initiated concept', 'The same story, told naturally for each audience.'),
        ],
      },
    ],
  },
  video: {
    label: 'AI Video',
    kicker: 'Motion & short-form storytelling',
    title: 'Frames that move with purpose',
    description: 'Short-form films, product promos and explainers where AI generation is one part of a larger workflow: concept, storyboard, motion direction, edit, voice and platform delivery.',
    feature: project('AI Motion Showreel', 'Selected motion work', 'wide', 'A concise reel combining product motion, character animation, creator-led moments and cinematic transitions.', '16:9 master · 9:16 cut', 'Direction, generation and edit', 'Kling, Seedance, OpenArt, CapCut', 'Self-initiated concept', '', campaignVideo),
    collections: [
      {
        title: 'Commercial & Product Motion',
        description: 'Product and brand films designed for immediate visual clarity, strong pacing and modular social adaptations.',
        items: [
          project('Pour / Pause / Desire', 'Beverage film', 'feature', 'A tactile commercial sequence using controlled camera movement, condensation and rhythmic cuts.', '9:16 and 1:1', 'Visual direction and edit', 'Seedance, OpenArt, CapCut', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/01-commercial-product-motion/01-pour-pause-desire/openart-02178551232088400000000000000000000ffffc0a8b3d752e1b8_1785512537674_c82d6245.mp4', 'Beverage product film with tactile motion and rhythmic edits')),
          project('Serum, in Motion', 'Skincare product film', 'portrait', 'A skincare product film combining controlled packshot movement, ingredient detail and creator-led application moments.', '9:16 product film', 'Storyboard, motion direction and edit', 'Kling, ChatGPT Image model, CapCut', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/01-commercial-product-motion/02-serum-in-motion/sample-footage-kiwi-serum.mp4', 'Kiwi serum skincare product film')),
          project('From Still to Scene', 'Image-to-video', 'portrait', 'A fashion image transformed into subtle, believable motion without losing identity or garment design.', '4:5 and 9:16', 'Motion prompting and cleanup', 'Kling, Photoshop, CapCut', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/01-commercial-product-motion/03-from-still-to-scene/openart-02178127683779700000000000000000000ffffc0a89a6080dbf2_1781277042339_4676a5e8.mp4', 'Fashion still transformed into subtle motion')),
          project('Thirty Seconds, Three Cuts', 'Social ad set', 'wide', 'One product narrative adapted for TikTok, Reels and YouTube Shorts through platform-aware pacing and reframing.', '3 platform-specific cuts', 'Creative adaptation and social edit', 'Kling, Seedance, CapCut', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/01-commercial-product-motion/04-thirty-seconds-three-cuts/openart-02178549780377800000000000000000000ffffc0a86fdb8c40c7_1785498123627_babb7780.mp4', 'Product story adapted as a concise social advertisement')),
        ],
      },
      {
        title: 'Story & Character Animation',
        description: 'Narrative motion where character, atmosphere and pacing carry the film.',
        items: [
          project('Fifteen Seconds of Story', 'Book trailer', 'wide', 'A compact book-launch film using cover animation, atmospheric scenes, typography and carefully paced sound.', '9:16 · 15 sec', 'Storyboard, motion and edit', 'Kling, CapCut, ElevenLabs', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/02-story-character-animation/01-fifteen-seconds-of-story/book2.mp4', 'Atmospheric illustrated book trailer')),
          project('The Slow Valley', 'Hand-painted story film', 'wide', 'A gentle animated landscape built around painterly backgrounds, restrained camera drift, wind and warm nostalgia.', '16:9 short film', 'Visual development, motion direction and edit', 'ChatGPT Image model, Kling, CapCut', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/02-story-character-animation/02-the-slow-valley/openart-02178551399731700000000000000000000ffffc0a87ff2fd3a25_1785514271460_bb553e7a.mp4', 'Hand-painted animated landscape film')),
          project('Popy in Motion', "Children's story animation", 'wide', 'A short character sequence bringing finished picture-book spreads into motion while preserving Popy’s identity and illustrated world.', '16:9 + 9:16 story cuts', 'Character motion, scene continuity and edit', 'Kling, Photoshop, CapCut', 'Self-initiated concept', '', video('/images/showcase/03-ai-video/02-story-character-animation/03-popy-in-motion/openart-02178025602124900000000000000000000ffffc0a86ceb2f375b_1780256238151_ad379184.mp4', 'Popy children’s story character animation')),
        ],
      },
      {
        title: 'Explainer Motion',
        description: 'Technical and educational stories that need accuracy and clarity at once.',
        items: [
          {
            ...project('Loop Engineering', 'Concept animation', 'feature', 'A visual explanation of iterative AI development using one coherent motion metaphor and clearly staged transitions.', 'YouTube explainer', 'Concept, storyboard and motion system', 'ChatGPT Image model, After Effects', 'Self-initiated concept', '', youtube('wZIUmfV2sho', 'Loop Engineering explainer video')),
            externalLink: { url: 'https://youtu.be/wZIUmfV2sho', label: 'Watch on YouTube' },
          },
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
        title: 'Story & Book Characters',
        description: 'Characters built to survive an entire book, not a single illustration.',
        items: [
          project('Popy', "Children's book character", 'wide', 'A red panda character designed to remain recognisable across a full picture book, changing environments, emotions and light.', 'Hero + turnaround + expressions + scenes', 'Character definition and consistency', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept'),
          project('The Nightingale Cast', 'Literary characters', 'feature', 'A four-character literary system covering the Student, Nightingale, Rose and Professor’s Daughter across a shared story world.', 'Character bible + scene tests', 'Cast design and narrative continuity', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept'),
          project('The Curious Chickens', 'Comic ensemble', 'wide', 'A small ensemble designed for recurring humour, distinct personalities and expressive panel compositions.', 'Ensemble sheet + comic scenes', 'Character design and story beats', 'ChatGPT Image model, Photoshop', 'Self-initiated concept'),
        ],
      },
      {
        title: 'Brand & Commercial Characters',
        description: 'Mascots and personas designed to remain recognisable across campaigns, formats and small-scale applications.',
        items: [
          project('Globby', 'Educational mascot', 'square', 'A black planet-like mascot that communicates complex topics through one visual metaphor at a time.', 'Mascot system + applications', 'Concept, expression system and prompts', 'ChatGPT Image model, Illustrator', 'Self-initiated concept'),
          project('NutShell', 'Brand mascot system', 'portrait', 'A friendly savings mascot supported by a clear silhouette, financial prop language, palette and app-scale identity.', 'Mascot identity system', 'Character and brand direction', 'ChatGPT Image model, OpenArt, Illustrator', 'Self-initiated concept'),
          project('Yui', 'Virtual persona', 'portrait', 'A reusable virtual persona maintained across editorial, fashion and product campaign contexts.', 'Persona reference pack + scenes', 'Identity and styling system', 'OpenArt, ChatGPT Image model, Photoshop', 'Self-initiated concept'),
        ],
      },
      {
        title: 'Stylised & Genre Characters',
        description: 'Character work developed in the specific visual languages clients request by name.',
        items: [
          project('Ink & Cel', 'Anime / manga character sheet', 'wide', 'A cel-shaded character system covering turnaround views, expressions and outfit variations in a consistent manga idiom.', 'Turnaround + expressions + outfits', 'Character design and style control', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept'),
          project('The Cartographer', 'Game character concept', 'feature', 'A game-character concept developed through silhouette exploration, design passes, prop callouts and colour variants.', 'Concept sheet + callouts', 'Visual development and production design', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept'),
          project('Maya, Defined', 'Professional character system', 'wide', 'A professional identity maintained across reference views, workplace scenes, campaign roles and controlled wardrobe changes.', 'Character CV + consistency board', 'Identity consistency and scene direction', 'ChatGPT Image model, OpenArt, Photoshop', 'Self-initiated concept'),
        ],
      },
    ],
  },
  websites: {
    label: 'Websites',
    kicker: 'Web design & development',
    title: 'Pages that earn the next click',
    description: 'Portfolio sites, campaign pages and product experiences where visual direction, information architecture and implementation work as one system — responsive, purposeful and ready to extend.',
    feature: project('Nafiul Creative Portfolio', 'Creative portfolio', 'wide', 'A modular portfolio system that makes broad capability legible through focused disciplines, evidence-led project views and proposal-ready sharing.', 'Responsive multi-page website', 'Portfolio architecture, interface design and front-end build', 'React, Next.js, CSS, Vercel', 'Self-initiated concept', '', { kind: 'image', src: '/images/projects/portfolio-cover-image.jpg', alt: 'Nafiul creative portfolio website preview' }),
    collections: [
      {
        title: 'Business & Campaign Sites',
        description: 'Pages built around one audience, one offer and one action.',
        items: [
          project('Shelf Life', 'Shopify / e-commerce storefront', 'feature', 'A mobile-first storefront covering product discovery, product detail, cart and a clear path from browsing to purchase.', 'Desktop + mobile commerce flow', 'UX, visual design and front-end implementation', 'Shopify, Liquid, JavaScript, CSS', 'Self-initiated concept'),
          project('Table for Two', 'Restaurant / local business', 'wide', 'A restaurant website connecting menu, atmosphere, hours, location and booking in one fast local-business experience.', 'Responsive local-business website', 'Content hierarchy, visual design and implementation', 'Next.js, React, CSS', 'Self-initiated concept'),
          project('The Author Page', 'Book / author website', 'portrait', 'An author platform combining book-cover storytelling, sample content, purchase links, biography and newsletter conversion.', 'Responsive author website', 'UX, art direction and front-end build', 'Next.js, React, CSS', 'Self-initiated concept'),
          project('Signal, Not Noise', 'AI SaaS website', 'wide', 'A technical SaaS website that translates complex agent capabilities into a clear product story for business users.', 'Desktop + mobile website', 'Information architecture and UI build', 'React, TypeScript, Vercel', 'Self-initiated concept'),
        ],
      },
      {
        title: 'Portfolios & Technical Experiences',
        description: 'Sites that make broad capability and technical workflows legible.',
        items: [
          project('Max Steel Knowledge Hub', 'Content platform', 'wide', 'A responsive knowledge platform combining engineering articles, presentations, technical visuals and educational media.', 'Content-rich responsive site', 'Product structure, content and implementation', 'React, JavaScript, GitHub Pages', 'Self-initiated concept'),
          project('AdMagic', 'AI tool interface', 'square', 'A working AI-assisted creative tool that turns campaign inputs into structured ad directions through a focused interface.', 'Responsive AI tool interface', 'Product design, model integration and front-end build', 'Gemini API, React, JavaScript', 'Self-initiated concept'),
          project('Agent Demo Interface', 'Interactive prototype', 'square', 'A lightweight interface that makes an agent workflow visible through inputs, progress states, generated outputs and review controls.', 'Interactive web prototype', 'UI system and workflow integration', 'React, Python API, Docker', 'Self-initiated concept'),
        ],
      },
    ],
  },
  automation: {
    label: 'AI Automation',
    kicker: 'Agents, skills & intelligent workflows',
    title: 'Systems behind the content',
    description: 'Practical AI workflows that turn repeatable creative and technical tasks into reviewable systems — with clear inputs, model orchestration, human checkpoints and usable outputs.',
    feature: project('Content Operations Copilot', 'Featured automation', 'wide', 'A modular workflow that accepts a campaign brief, researches product context, generates scripts and creative variants, routes assets for review and packages approved outputs for publishing.', 'Agent workflow + review interface', 'Workflow design, prompts, integration and prototype', 'Python, n8n, OpenAI API, Claude, Docker', 'Self-initiated concept', '', { kind: 'image', src: '/images/projects/agency-website-cover-image.jpg', alt: 'Content operations automation preview' }),
    collections: [
      {
        title: 'Creative Production Workflows',
        description: 'Automations designed to accelerate structured creative work without removing review, brand judgment or quality control.',
        items: [
          project('UGC Variant Generator', 'Ad creative workflow', 'feature', 'Transforms one product brief into audience angles, scripts, hooks, shot lists and platform-specific creative variants for human selection.', 'Brief-to-variant workflow', 'Prompt architecture and orchestration', 'Claude, OpenAI API, n8n', 'Self-initiated concept'),
          project('Product Campaign Pipeline', 'Image production', 'wide', 'Organizes references, campaign directions, product-image prompts, naming and output review into a repeatable asset pipeline.', 'Creative asset pipeline', 'Workflow design and validation rules', 'Python, image APIs, metadata storage', 'Self-initiated concept'),
          project('Multilingual Ad Localizer', 'Localization', 'portrait', 'Adapts scripts and voice direction across languages while preserving the original hook, timing, CTA and brand constraints.', 'Script + voice localization', 'Prompting, translation controls and QA', 'ElevenLabs, Claude, Python', 'Self-initiated concept'),
          project('One Video, Ten Posts', 'Content repurposing', 'wide', 'Turns one long-form video into short clips, pull quotes, a thread, a carousel and a newsletter through a reviewable workflow.', 'Long-form-to-channel workflow', 'Workflow design, extraction rules and review gates', 'Python, FFmpeg, OpenAI API, n8n', 'Self-initiated concept'),
        ],
      },
      {
        title: 'Agents & Business Workflows',
        description: 'Small agent systems with visible inputs, checkpoints and outputs.',
        items: [
          project('Claude Footage Labeling Skill', 'Video analysis agent', 'feature', 'A Claude-oriented workflow that samples footage, identifies visible actions and scenes, and returns searchable UGC labels with confidence and review context.', 'Footage-to-label prototype', 'Skill design, video preprocessing and output schema', 'Claude, Python, FFmpeg, MCP', 'Self-initiated concept'),
          project('Listing Machine', 'E-commerce catalogue automation', 'wide', 'Turns product imagery into structured titles, descriptions, bullets, alt text and tags for large e-commerce catalogues.', 'Product-to-listing workflow', 'Agent design, output schema and quality controls', 'OpenAI API, Python, Shopify API', 'Self-initiated concept'),
          project('Inbox to Action', 'Support / triage agent', 'square', 'Classifies incoming messages, drafts replies, routes urgent cases and preserves human escalation for ambiguous requests.', 'Message-to-resolution workflow', 'Triage logic, prompt design and review gates', 'OpenAI API, Python, n8n', 'Self-initiated concept'),
        ],
      },
    ],
  },
}

export const TAB_ORDER = ['images', 'ugc', 'video', 'characters', 'websites', 'automation']
