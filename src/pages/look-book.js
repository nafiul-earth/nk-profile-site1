import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Layout from '@/components/Layout'
import PillButton from '@/components/PillButton'
import { useStartProject } from '@/components/StartProjectFlow'
import { lookbook, lookbookCategories } from '@/data/lookbook'
import { site } from '@/data/site'

const PlaceholderCover = ({ category }) => (
  <div className='relative w-full aspect-[5/3] border-b border-ink/10 flex items-center justify-center overflow-hidden
  bg-[repeating-linear-gradient(-45deg,transparent,transparent_14px,rgba(23,20,15,0.04)_14px,rgba(23,20,15,0.04)_15px)]'>
    <span className='font-display font-bold text-ink/10 text-[clamp(1.8rem,4vw,3rem)] leading-none tracking-tight text-center px-8'>
      {category}
    </span>
    <span className='absolute top-4 left-4 bg-ink text-paper text-xs font-semibold px-3 py-1.5 rounded-full'>
      Coming soon
    </span>
  </div>
)

const LookBookCard = ({ entry }) => {
  const cover = entry.placeholder ? (
    <PlaceholderCover category={entry.category} />
  ) : (
    <div className='w-full overflow-hidden border-b border-ink/10'>
      <Image
        src={entry.image}
        alt={entry.title}
        width={1200}
        height={720}
        className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]'
        sizes='(max-width: 767px) 100vw, 50vw'
      />
    </div>
  )

  const body = (
    <div className='flex flex-col items-start gap-3 p-6 sm:p-5'>
      <span className='border border-ink/20 text-ink text-xs font-semibold px-3 py-1.5 rounded-full'>
        {entry.category}
      </span>
      <h3 className='font-display text-2xl font-bold text-ink tracking-tight sm:text-xl'>{entry.title}</h3>
      <p className='text-sm font-medium text-ink/70'>{entry.description}</p>
    </div>
  )

  const card = 'w-full rounded-2xl border border-ink/15 overflow-hidden bg-paper'

  if (entry.href) {
    return (
      <Link
        href={entry.href}
        target='_blank'
        rel='noopener noreferrer'
        className={`group block ${card} transition-colors hover:border-ink`}
      >
        {cover}
        {body}
      </Link>
    )
  }
  return (
    <div className={card}>
      {cover}
      {body}
    </div>
  )
}

export default function LookBook() {
  const [active, setActive] = useState([])
  const reduceMotion = useReducedMotion()
  const { openStartProject } = useStartProject()

  const toggle = (cat) =>
    setActive((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))

  const entries = [...lookbook]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((e) => active.length === 0 || active.includes(e.category))

  return (
    <>
      <Head>
        <title>Look Book — {site.name}</title>
        <meta
          name="description"
          content={`Recent work by ${site.name} — AI content, AI image generation, poster design, graphic design, web development, and video.`}
        />
      </Head>
      <main className='w-full'>

        {/* Intro */}
        <Layout className='pt-20 md:pt-12'>
          <div className='flex flex-col items-start gap-6'>
            <p className='flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted'>
              <span className='w-4 h-[3px] bg-accent rounded-full inline-block' />
              Recent projects
            </p>
            <h1 className='font-display font-bold tracking-tight leading-[1.02] text-[clamp(3rem,7vw,7rem)] text-ink'>
              Look <span className='underline decoration-accent decoration-[0.06em] underline-offset-[0.12em]'>Book</span>
            </h1>
            <p className='text-base font-medium text-ink/70 max-w-xl'>
              A selection of my recent work, in chronological order — newest first.
            </p>
            <PillButton onClick={openStartProject} label='Start a Project' />
          </div>
        </Layout>

        {/* Filters */}
        <Layout className='pt-16 md:pt-10'>
          <div className='flex flex-wrap items-center gap-3'>
            {lookbookCategories.map((cat) => {
              const isActive = active.includes(cat)
              return (
                <button
                  key={cat}
                  type='button'
                  onClick={() => toggle(cat)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors
                  ${isActive
                    ? 'bg-accent border-accent text-ink'
                    : 'border-ink/20 text-ink hover:border-ink'}`}
                >
                  {cat}
                </button>
              )
            })}
            <button
              type='button'
              onClick={() => setActive([])}
              className={`text-sm font-semibold underline underline-offset-4 transition-colors ml-2
              ${active.length ? 'text-ink hover:text-muted' : 'text-muted/60 cursor-default'}`}
            >
              Reset filters
            </button>
          </div>
        </Layout>

        {/* Grid */}
        <Layout className='pt-12 md:pt-8'>
          <motion.div layout={!reduceMotion} className='grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-6'>
            <AnimatePresence mode='popLayout'>
              {entries.map((entry) => (
                <motion.div
                  key={entry.title}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <LookBookCard entry={entry} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {entries.length === 0 && (
            <p className='text-base font-medium text-muted py-12'>No projects in this category yet — reset the filters to see everything.</p>
          )}
        </Layout>

        {/* Closing CTA */}
        <Layout className='pt-24 md:pt-16'>
          <div className='w-full bg-ink text-paper rounded-3xl px-16 py-20 flex flex-col items-start gap-6 md:px-8 md:py-12'>
            <p className='flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-paper/70'>
              <span className='w-4 h-[3px] bg-accent rounded-full inline-block' />
              Work with me
            </p>
            <h2 className='font-display text-5xl font-bold tracking-tight leading-[1.08] max-w-2xl lg:text-4xl sm:text-3xl'>
              Have a project like these <span className='underline decoration-accent decoration-[3px] underline-offset-8'>in mind?</span>
            </h2>
            <p className='text-base font-medium text-paper/80 max-w-xl'>
              Tell me what you need and your budget — I usually reply within a day, and a short intro call is always free.
            </p>
            <PillButton onClick={openStartProject} label='Start a Project' onDark />
          </div>
        </Layout>
      </main>
    </>
  )
}
