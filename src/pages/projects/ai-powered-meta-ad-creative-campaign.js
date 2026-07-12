import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import PillButton from '@/components/PillButton'
import ContactSection from '@/components/sections/ContactSection'
import { site } from '@/data/site'

const base = '/images/projects/meta-ad-campaign'

const gallery = [
  { src: `${base}/image1.jpg`, alt: 'Kiwi serum product hero with fruit and liquid splash', width: 1344, height: 2016 },
  { src: `${base}/image2.jpg`, alt: 'Premium Kiwi serum advertising composition', width: 1344, height: 2016 },
  { src: `${base}/image3.jpg`, alt: 'Lifestyle skincare campaign creative', width: 1344, height: 2016 },
  { src: `${base}/image4.jpg`, alt: 'Kiwi skincare brand system and packaging presentation', width: 1344, height: 2016 },
  { src: `${base}/image5.jpg`, alt: 'Product benefit advertising creative', width: 1344, height: 2016 },
  { src: `${base}/image6.jpg`, alt: 'Model-based social advertisement for Kiwi serum', width: 1344, height: 2016 },
  { src: `${base}/image7.jpg`, alt: 'Ingredient-led product campaign creative', width: 1344, height: 2016 },
  { src: `${base}/image8.jpg`, alt: 'Before-and-after problem and solution campaign creative', width: 1792, height: 1344 },
  { src: `${base}/image9.jpg`, alt: 'Portrait Meta Story advertisement', width: 1296, height: 2304 },
  { src: `${base}/image11.jpg`, alt: 'Promotional skincare ad creative', width: 1344, height: 1680 },
  { src: `${base}/image12.jpg`, alt: 'Benefit-focused retinol carousel creative', width: 1344, height: 1680 },
]

const deliverables = [
  '12 campaign-ready static creatives',
  'Product hero and lifestyle concepts',
  'Model, ingredient, benefit, and offer angles',
  'Feed, portrait, and Story-ready compositions',
  'Short promotional campaign video',
  'Consistent art direction across every asset',
]

const roles = [
  'Creative direction', 'Campaign planning', 'Prompt engineering', 'AI image generation',
  'Product compositing', 'Typography & layout', 'Ad copy placement', 'Image refinement',
]

export default function MetaAdCampaign() {
  return (
    <>
      <Head>
        <title>AI-Powered Meta Ad Creative Campaign — {site.name}</title>
        <meta name='description' content='A complete AI-assisted Facebook and Instagram advertising campaign featuring product, lifestyle, benefit, promotional, and video creatives.' />
      </Head>
      <main className='w-full'>
        <Layout className='pt-20 md:pt-12'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-wrap gap-2'>
              {['Meta Ads', 'Facebook & Instagram', 'AI Image Generation', 'Product Advertising'].map((tag) => (
                <span key={tag} className='border border-ink/20 text-xs font-semibold px-3 py-1.5 rounded-full'>{tag}</span>
              ))}
            </div>
            <h1 className='font-display font-bold tracking-tight leading-[1.02] text-[clamp(2.8rem,6vw,6.5rem)] max-w-5xl'>
              AI-Powered Meta Ad <span className='underline decoration-accent decoration-[0.06em] underline-offset-[0.12em]'>Creative Campaign</span>
            </h1>
            <p className='text-lg font-medium text-ink/70 max-w-3xl'>
              A complete Facebook and Instagram campaign that transforms one skincare product into a coordinated collection of scroll-stopping advertising concepts.
            </p>
            <PillButton href='#campaign' label='Explore the Campaign' />
          </div>
        </Layout>

        <Layout className='pt-14 md:pt-10'>
          <div className='overflow-hidden rounded-3xl border border-ink/15 bg-ink'>
            <Image src={`${base}/cover.jpg`} alt='Kiwi Retinol Serum Meta advertising campaign' width={2304} height={1296} priority className='w-full h-auto' sizes='100vw' />
          </div>
        </Layout>

        <Layout className='pt-24 md:pt-16'>
          <div className='grid grid-cols-[1.1fr_0.9fr] gap-16 lg:grid-cols-1 lg:gap-10'>
            <div className='flex flex-col gap-5'>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted'>The project</p>
              <h2 className='font-display text-5xl font-bold tracking-tight sm:text-4xl'>One product. Multiple reasons to buy.</h2>
              <p className='text-base font-medium text-ink/70'>
                Instead of producing unrelated AI images, I built a consistent campaign system around one product and brand direction. Every creative explores a different customer motivation while preserving the same product identity, premium green-and-gold palette, and commercial visual language.
              </p>
            </div>
            <div className='bg-accent rounded-3xl p-8 flex flex-col gap-4'>
              <p className='text-sm font-semibold uppercase tracking-widest'>The challenge</p>
              <p className='font-display text-3xl font-bold tracking-tight'>Create campaign variety without the cost and delay of multiple photo shoots.</p>
              <p className='text-sm font-semibold text-ink/70'>The workflow replaces the need for repeated studios, models, props, locations, and post-production rounds while retaining a cohesive brand presentation.</p>
            </div>
          </div>
        </Layout>

        <section id='campaign' className='w-full bg-ink text-paper mt-24 md:mt-16 py-24 md:py-16'>
          <Layout>
            <div className='flex flex-col gap-4 mb-12'>
              <p className='text-sm font-semibold uppercase tracking-widest text-paper/60'>Campaign gallery</p>
              <h2 className='font-display text-5xl font-bold tracking-tight sm:text-4xl'>Creative angles built for testing</h2>
              <p className='text-base font-medium text-paper/70 max-w-2xl'>Product heroes, lifestyle scenes, ingredient stories, benefit-led layouts, promotional offers, and social-first formats—all developed as one visual system.</p>
            </div>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-1'>
              {gallery.map((item) => (
                <figure key={item.src} className='overflow-hidden rounded-2xl bg-paper/5'>
                  <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className='w-full h-auto' sizes='(max-width: 767px) 100vw, 50vw' />
                </figure>
              ))}
            </div>
          </Layout>
        </section>

        <Layout className='pt-24 md:pt-16'>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-1'>
            <div className='border border-ink/15 rounded-3xl p-10 sm:p-6'>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted mb-5'>My role</p>
              <div className='flex flex-wrap gap-2'>
                {roles.map((role) => <span key={role} className='bg-ink text-paper rounded-full px-4 py-2 text-sm font-semibold'>{role}</span>)}
              </div>
            </div>
            <div className='border border-ink/15 rounded-3xl p-10 sm:p-6'>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted mb-5'>Final deliverables</p>
              <ul className='grid gap-3'>
                {deliverables.map((item) => <li key={item} className='flex gap-3 text-sm font-semibold'><span className='text-accent'>●</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </Layout>

        <Layout className='pt-24 md:pt-16'>
          <div className='flex flex-col gap-8'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted mb-3'>Motion creative</p>
              <h2 className='font-display text-5xl font-bold tracking-tight sm:text-4xl'>Campaign video</h2>
            </div>
            <div className='overflow-hidden rounded-3xl bg-ink border border-ink/15'>
              <video controls playsInline preload='metadata' poster={`${base}/image10.jpg`} className='w-full aspect-video object-cover'>
                <source src={`${base}/campaign-video.mp4`} type='video/mp4' />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        </Layout>

        <ContactSection blurb='Need a complete set of Facebook or Instagram ad creatives for your product? I can turn one brief into a consistent campaign built for multiple audiences, angles, and placements.' />
      </main>
    </>
  )
}
