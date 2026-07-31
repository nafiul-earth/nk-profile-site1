import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useReducedMotion } from 'framer-motion'
import { useStartProject } from '@/components/StartProjectFlow'
import AIProjectCard from '@/components/ai-showcase/AIProjectCard'
import DisciplineTabs from '@/components/ai-showcase/DisciplineTabs'
import MovingGallery from '@/components/ai-showcase/MovingGallery'
import PortfolioCollection from '@/components/ai-showcase/PortfolioCollection'
import ProjectLightbox from '@/components/ai-showcase/ProjectLightbox'
import ShowcaseMedia from '@/components/ai-showcase/ShowcaseMedia'
import { PORTFOLIO_DATA, SHOWCASE_HERO_MEDIA, TAB_ORDER } from '@/data/aiShowcaseData'
import { site } from '@/data/site'
import styles from '@/styles/AIShowcase.module.css'

const isValidTab = (value) => typeof value === 'string' && TAB_ORDER.includes(value)

const allProjects = TAB_ORDER.flatMap((key) => {
  const discipline = PORTFOLIO_DATA[key]
  return [
    ...(discipline.feature ? [discipline.feature] : []),
    ...(discipline.items || []),
    ...(discipline.collections || []).flatMap((collection) => collection.items),
  ]
})

function UGCPanel({ data, onOpen }) {
  const [verticalRange, creativeStrategy] = data.collections

  return (
    <>
      <section className={styles.collection} aria-labelledby='vertical-range'>
        <header className={styles.collectionHead}>
          <h3 id='vertical-range'>{verticalRange.title}</h3>
          <p>{verticalRange.description}</p>
        </header>
        <div className={styles.phoneGrid}>
          {verticalRange.items.map((project) => (
            <article className={styles.ugcCard} key={project.title}>
              <button type='button' className={styles.phoneFrame} onClick={(event) => onOpen(project, event.currentTarget)} aria-label={`Open ${project.title}`}>
                <ShowcaseMedia media={project.media} sizes='(max-width: 700px) 50vw, 25vw' />
                <strong className={styles.ugcHook}>{project.hook}</strong>
                <span className={styles.ugcSubtitle}>Designed for fast comprehension, native pacing and a clear next action.</span>
              </button>
              <div className={styles.ugcMeta}><strong>{project.title}</strong><span>{project.output}</span></div>
            </article>
          ))}
        </div>
      </section>
      <PortfolioCollection
        collection={creativeStrategy}
        onOpen={onOpen}
        indexed
      />
    </>
  )
}

function FeaturePanel({ data, type, onOpen }) {
  const copy = type === 'websites'
    ? {
      eyebrow: 'Featured experience / 01',
      title: 'Show the work in context.',
      description: 'Each project reveals the business goal, information structure, responsive states, implementation choices and live result.',
      tags: ['Responsive', 'Case-study led', 'Conversion aware', 'Live links'],
    }
    : {
      eyebrow: 'Featured workflow / 01',
      title: 'Make the invisible system understandable.',
      description: 'Automation case studies show the trigger, models, review gates, outputs, limitations and operational safeguards.',
      tags: ['Agent orchestration', 'Human-in-loop', 'Structured outputs', 'API integrations'],
    }

  return (
    <>
      <section className={styles.featureSplit}>
        <button type='button' className={styles.featureMedia} onClick={(event) => onOpen(data.feature, event.currentTarget)} aria-label={`Open ${data.feature.title}`}>
          <ShowcaseMedia media={data.feature.media} sizes='70vw' />
          <span className={styles.featureMediaLabel}>{data.feature.title}</span>
        </button>
        <aside className={styles.featureSide}>
          <div>
            <span className={styles.featureEyebrow}>{copy.eyebrow}</span>
            <h3>{copy.title}</h3>
            <p>{copy.description}</p>
          </div>
          <div className={styles.featureTags}>{copy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </aside>
      </section>
      {data.collections.map((collection) => <PortfolioCollection key={collection.title} collection={collection} onOpen={onOpen} />)}
    </>
  )
}

function CharacterPanel({ data, onOpen }) {
  const featuredCharacter = data.collections[0].items[0]
  return (
    <>
      <section className={styles.characterFeature}>
        <button type='button' className={styles.characterSheet} onClick={(event) => onOpen(featuredCharacter, event.currentTarget)} aria-label={`Open ${featuredCharacter.title}`}>
          <ShowcaseMedia media={featuredCharacter.media} sizes='70vw' />
          <span className={styles.characterLabel}>Featured character system / 01</span>
          <span className={styles.characterFooter}><span>{featuredCharacter.title}</span><span>Hero · turnaround · expressions · scene</span></span>
        </button>
        <div className={styles.characterNote}>
          <span className={styles.characterNumber}>01</span>
          <h3>Consistency is the deliverable.</h3>
          <p>A useful character portfolio shows the same person surviving new poses, expressions, outfits, camera angles and environments without losing identity.</p>
        </div>
      </section>
      {data.collections.map((collection) => <PortfolioCollection key={collection.title} collection={collection} onOpen={onOpen} />)}
    </>
  )
}

function VideoPanel({ data, onOpen }) {
  return (
    <>
      <button type='button' className={styles.showreel} onClick={(event) => onOpen(data.feature, event.currentTarget)} aria-label={`Open ${data.feature.title}`}>
        <ShowcaseMedia media={data.feature.media} sizes='100vw' showPlayIndicator={false} />
        <span className={styles.showreelOverlay}>
          <span className={styles.playDisc}>Play reel</span>
          <span className={styles.showreelCopy}><small>Play selected reel</small><strong>{data.feature.title}</strong></span>
        </span>
      </button>
      {data.collections.map((collection) => <PortfolioCollection key={collection.title} collection={collection} onOpen={onOpen} />)}
    </>
  )
}

export default function AIWorkShowcase() {
  const router = useRouter()
  const reduceMotion = useReducedMotion()
  const { openStartProject } = useStartProject()
  const [activeTab, setActiveTab] = useState('images')
  const [selection, setSelection] = useState(null)
  const returnFocusRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    if (!router.isReady) return
    const queryTab = Array.isArray(router.query.tab) ? router.query.tab[0] : router.query.tab
    setActiveTab(isValidTab(queryTab) ? queryTab : 'images')
  }, [router.isReady, router.query.tab])

  const tabs = useMemo(() => TAB_ORDER.map((key) => ({ key, label: PORTFOLIO_DATA[key].label })), [])
  const data = PORTFOLIO_DATA[activeTab]

  const openProject = useCallback((project, trigger) => {
    returnFocusRef.current = trigger
    const index = Math.max(0, allProjects.findIndex((item) => item === project))
    setSelection({ project, index })
  }, [])

  const closeProject = useCallback(() => {
    setSelection(null)
    window.requestAnimationFrame(() => returnFocusRef.current?.focus())
  }, [])

  const changeTab = useCallback((key) => {
    if (!isValidTab(key)) return
    setActiveTab(key)
    router.replace(
      { pathname: router.pathname, query: { ...router.query, tab: key } },
      undefined,
      { shallow: true, scroll: false },
    )
    navRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [reduceMotion, router])

  const imageProjects = PORTFOLIO_DATA.images.collections.flatMap((collection) => collection.items)

  return (
    <>
      <Head>
        <title>AI Work Showcase — {site.name}</title>
        <meta name='description' content='Selected AI image, UGC, video, character, web and automation work by Nafiul Islam.' />
        <link rel='canonical' href='/look-book' />
      </Head>
      <main className={styles.showcaseShell}>
        <section className={styles.hero} id='top'>
          <div className={styles.heroCanvas} aria-hidden='true'>
            {SHOWCASE_HERO_MEDIA.map((media, index) => (
              <div className={`${styles.heroOrbit} ${styles[`heroOrbit${index + 1}`]}`} key={media.src}>
                <ShowcaseMedia media={media} priority sizes='30vw' />
              </div>
            ))}
          </div>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Selected AI work</p>
            <h1 className={styles.heroTitle}>AI work.<br /><em>Made with purpose.</em></h1>
            <div className={styles.heroBottom}>
              <p className={styles.heroCopy}>Images, video, characters, websites and automations shaped for real campaigns and clear business goals.</p>
              <div className={styles.heroIndex} aria-label='Portfolio summary'>
                <div><strong>06</strong><span>Disciplines</span></div>
                <div><strong>18+</strong><span>Collections</span></div>
                <div><strong>∞</strong><span>Variations</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.tabNavWrap} ref={navRef}>
          <nav className={styles.tabNav} aria-label='AI work disciplines'>
            <DisciplineTabs tabs={tabs} activeTab={activeTab} onChange={changeTab} />
          </nav>
        </div>

        <section className={styles.tabPanel} role='tabpanel' id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          <header className={styles.panelIntro}>
            <div><p className={styles.panelKicker}>{data.kicker}</p><h2 className={styles.panelTitle}>{data.title}</h2></div>
            <p className={styles.panelDescription}>{data.description}</p>
          </header>

          {activeTab === 'images' && <MovingGallery items={imageProjects} onOpen={openProject} />}
          {activeTab === 'images' && data.collections.map((collection) => <PortfolioCollection key={collection.title} collection={collection} onOpen={openProject} indexed />)}
          {activeTab === 'ugc' && <UGCPanel data={data} onOpen={openProject} />}
          {activeTab === 'video' && <VideoPanel data={data} onOpen={openProject} />}
          {activeTab === 'characters' && <CharacterPanel data={data} onOpen={openProject} />}
          {(activeTab === 'websites' || activeTab === 'automation') && <FeaturePanel data={data} type={activeTab} onOpen={openProject} />}
        </section>

        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <h2>Have a brief?</h2>
            <div>
              <p>Share the product, audience and intended result. We will shape the visual direction, production workflow and final content around the campaign.</p>
              <button type='button' className={styles.ctaButton} onClick={openStartProject}>Start a conversation</button>
            </div>
          </div>
        </section>
      </main>
      <ProjectLightbox selection={selection} onClose={closeProject} />
    </>
  )
}
