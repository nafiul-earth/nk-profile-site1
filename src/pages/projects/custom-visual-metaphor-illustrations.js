import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import PillButton from '@/components/PillButton'
import ContactSection from '@/components/sections/ContactSection'
import { site } from '@/data/site'

const base = '/images/projects/visual-metaphor-illustrations'

const illustrations = [
  { file: '01-climate-change-melting-backpack.png', title: 'Climate Change', idea: 'The melting backpack' },
  { file: '02-air-pollution-smog-valve.png', title: 'Air Pollution', idea: 'The smog return valve' },
  { file: '03-broken-water-cycle-missing-pipe.png', title: 'Broken Water Cycle', idea: 'The missing pipe' },
  { file: '04-ocean-plastic-fishing-bottles.png', title: 'Ocean Plastic', idea: 'Fishing for bottles' },
  { file: '05-deforestation-last-umbrella.png', title: 'Deforestation', idea: 'The last umbrella' },
  { file: '06-wars-cost-dustpan.png', title: "War's Cost", idea: 'Sweeping up homes' },
  { file: '07-global-warming-fever-check.png', title: 'Global Warming', idea: 'The fever check' },
  { file: '08-overconsumption-tipped-scale.png', title: 'Overconsumption', idea: 'The tipped scale' },
]

const workflow = [
  ['01', 'Understand', 'Find the single mechanism, consequence, or contrast the audience needs to grasp.'],
  ['02', 'Concept', 'Translate the issue into one surprising physical metaphor instead of a generic infographic.'],
  ['03', 'Create', 'Generate the illustration within a consistent character, line, colour, and composition system.'],
  ['04', 'Refine', 'Check clarity, factual accuracy, text, style consistency, and social-media readability.'],
]

const packages = [
  { name: 'Starter', count: '1 illustration', detail: 'One custom concept for a focused topic or message.' },
  { name: 'Standard', count: '3 illustrations', detail: 'A consistent short awareness series or social campaign.' },
  { name: 'Advanced', count: '6 illustrations', detail: 'Researched concepts, captions, and one complete visual direction.' },
]

export default function VisualMetaphorIllustrations() {
  return (
    <>
      <Head>
        <title>Custom Visual Metaphor Illustrations — {site.name}</title>
        <meta name='description' content='Custom AI-assisted visual metaphor illustrations for social media, environmental organisations, educators, NGOs, and awareness campaigns.' />
      </Head>
      <main className='w-full'>
        <Layout className='pt-20 md:pt-12'>
          <div className='grid grid-cols-[0.9fr_1.1fr] items-center gap-14 lg:grid-cols-1'>
            <div className='flex flex-col items-start gap-7'>
              <div className='flex flex-wrap gap-2'>
                {['Visual Storytelling', 'AI Illustration', 'Social Media'].map((tag) => (
                  <span key={tag} className='border border-ink/20 text-xs font-semibold px-3 py-1.5 rounded-full'>{tag}</span>
                ))}
              </div>
              <h1 className='font-display font-bold tracking-tight leading-[1.02] text-[clamp(2.8rem,5.6vw,6rem)]'>
                Custom Visual Metaphor <span className='underline decoration-accent decoration-[0.06em] underline-offset-[0.12em]'>Illustrations</span>
              </h1>
              <p className='text-lg font-medium text-ink/70'>Turning complex environmental and social topics into simple, memorable illustrated concepts.</p>
              <PillButton href='#illustrations' label='View the Series' />
            </div>
            <div className='overflow-hidden rounded-3xl border border-ink/15 bg-white'>
              <Image src={`${base}/cover.png`} alt='Earth Inky visual metaphor illustration collection' width={4000} height={3200} priority className='w-full h-auto' sizes='(max-width: 1024px) 100vw, 55vw' />
            </div>
          </div>
        </Layout>

        <Layout className='pt-24 md:pt-16'>
          <div className='grid grid-cols-[1.1fr_0.9fr] gap-16 lg:grid-cols-1 lg:gap-10'>
            <div className='flex flex-col gap-5'>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted'>The idea</p>
              <h2 className='font-display text-5xl font-bold tracking-tight sm:text-4xl'>Make the message understandable before making it decorative.</h2>
              <p className='text-base font-medium text-ink/70'>
                Many organisations have important stories but struggle to communicate them quickly and consistently. This system converts abstract or serious topics into one clear visual metaphor per post—designed for social feeds, campaigns, blogs, newsletters, and educational content.
              </p>
            </div>
            <div className='bg-accent rounded-3xl p-8 flex flex-col gap-4'>
              <p className='text-sm font-semibold uppercase tracking-widest'>Meet Globby</p>
              <p className='font-display text-3xl font-bold tracking-tight'>A recurring planet character quietly working its own repair shift.</p>
              <p className='text-sm font-semibold text-ink/70'>Globby carries the central action in every scene, creating recognition across the series without reducing serious subjects to generic mascot content.</p>
            </div>
          </div>
        </Layout>

        <section id='illustrations' className='w-full bg-ink text-paper mt-24 md:mt-16 py-24 md:py-16'>
          <Layout>
            <div className='flex flex-col gap-4 mb-12'>
              <p className='text-sm font-semibold uppercase tracking-widest text-paper/60'>Illustration series</p>
              <h2 className='font-display text-5xl font-bold tracking-tight sm:text-4xl'>Eight issues. Eight cognitive anchors.</h2>
              <p className='text-base font-medium text-paper/70 max-w-2xl'>Each square image uses generous whitespace, restrained colour, hand-drawn linework, and one memorable metaphor built for fast social-media comprehension.</p>
            </div>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-1'>
              {illustrations.map((item) => (
                <figure key={item.file} className='overflow-hidden rounded-2xl bg-white text-ink'>
                  <Image src={`${base}/${item.file}`} alt={`${item.title}: ${item.idea}`} width={1254} height={1254} className='w-full h-auto' sizes='(max-width: 767px) 100vw, 50vw' />
                  <figcaption className='flex items-center justify-between gap-4 border-t border-ink/10 px-5 py-4'>
                    <span className='font-display text-xl font-bold'>{item.title}</span>
                    <span className='text-xs font-semibold text-muted'>{item.idea}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Layout>
        </section>

        <Layout className='pt-24 md:pt-16'>
          <div className='flex flex-col gap-12'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-widest text-muted mb-3'>Creative workflow</p>
              <h2 className='font-display text-5xl font-bold tracking-tight sm:text-4xl'>A repeatable system for consistent campaign content</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1'>
              {workflow.map(([number, title, detail]) => (
                <div key={number} className='border border-ink/15 rounded-2xl p-6 flex flex-col gap-4'>
                  <span className='font-display text-4xl font-bold text-accent'>{number}</span>
                  <h3 className='font-display text-2xl font-bold'>{title}</h3>
                  <p className='text-sm font-medium text-ink/70'>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Layout>

        <Layout className='pt-24 md:pt-16'>
          <div className='bg-paper border border-ink/15 rounded-3xl p-10 sm:p-6'>
            <p className='text-sm font-semibold uppercase tracking-widest text-muted mb-7'>Available packages</p>
            <div className='grid grid-cols-3 gap-6 lg:grid-cols-1'>
              {packages.map((item) => (
                <div key={item.name} className='bg-ink text-paper rounded-2xl p-7 flex flex-col gap-3'>
                  <span className='text-sm font-semibold text-accent'>{item.name}</span>
                  <h3 className='font-display text-3xl font-bold'>{item.count}</h3>
                  <p className='text-sm font-medium text-paper/70'>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Layout>

        <ContactSection blurb='Need to turn a complex topic into a clear, consistent visual campaign? I create custom metaphor illustrations for NGOs, educators, social-impact brands, researchers, and content creators.' />
      </main>
    </>
  )
}
