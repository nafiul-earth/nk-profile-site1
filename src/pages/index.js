import { useCallback, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import Layout from '@/components/Layout'
import IntroOverlay from '@/components/IntroOverlay'
import Reveal from '@/components/Reveal'
import HeroImageStrip from '@/components/HeroImageStrip'
import SiteNote from '@/components/SiteNote'
import PillButton from '@/components/PillButton'
import SectionHeading from '@/components/SectionHeading'
import MarqueeStrip from '@/components/MarqueeStrip'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import TestimonialCard from '@/components/TestimonialCard'
import PricingCard from '@/components/PricingCard'
import FaqAccordion from '@/components/FaqAccordion'
import StatCounters from '@/components/StatCounters'
import ContactSection from '@/components/sections/ContactSection'
import JourneySection from '@/components/sections/JourneySection'
import ToolsSection from '@/components/sections/ToolsSection'
import { useStartProject } from '@/components/StartProjectFlow'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { blogs } from '@/data/blogs'
import { testimonials } from '@/data/testimonials'
import { pricing } from '@/data/pricing'
import { faqs } from '@/data/faqs'
import { journey } from '@/data/journey'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import aboutPic from '../../public/images/profile/developer-pic-2.jpg'

const HireMeBadge = () => (
  <div className='absolute -left-8 -top-8 w-28 h-28 md:w-20 md:h-20 sm:-left-5 sm:-top-5'>
    <svg viewBox="0 0 100 100" className='w-full h-full animate-spin-slow motion-reduce:animate-none'>
      <defs>
        <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <circle cx="50" cy="50" r="48" fill="#17140F" stroke="#F5F1EA" strokeWidth="3" />
      <text fill="#F8C822" fontSize="11.5" fontWeight="700" letterSpacing="2.5">
        <textPath href="#circlePath">HIRE ME • HIRE ME • HIRE ME •</textPath>
      </text>
    </svg>
    <span className='absolute inset-0 flex items-center justify-center'>
      <svg className='w-6 h-6 text-accent' viewBox="0 0 24 24" fill="none">
        <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
)

export default function Home() {
  const [introDone, setIntroDone] = useState(false)
  const reduceMotion = useReducedMotion()
  const onIntroDone = useCallback(() => setIntroDone(true), [])
  const { openStartProject } = useStartProject()

  // Hero elements stay hidden until the intro overlay reveals the page,
  // then stagger in. With reduced motion everything renders immediately.
  const heroAnim = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 40 },
    animate: introDone ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  })

  return (
    <>
      <Head>
        <title>Nafiul Islam — Creative Designer &amp; AI Content Creator</title>
        <meta
          name="description"
          content="Portfolio of Nafiul Islam — graphic design, AI content creation, web design & development, and AI automation from Khulna, Bangladesh."
        />
      </Head>
      <main className='flex flex-col items-center w-full'>
        <IntroOverlay onDone={onIntroDone} />
        <SiteNote />

        {/* Hero — text left, portrait right */}
        <Layout className='pt-16 md:pt-10'>
          <div className='flex items-center justify-between w-full gap-12 lg:flex-col lg:items-start lg:gap-10'>
            <div className='w-[58%] flex flex-col items-start gap-6 lg:w-full'>
              <motion.span className='border border-ink/20 px-4 py-1.5 text-sm font-semibold rounded-md relative' {...heroAnim(0)}>
                Hello There! 👋
                <span className='absolute -left-1 -top-1 w-2 h-2 bg-accent' />
                <span className='absolute -right-1 -bottom-1 w-2 h-2 bg-accent' />
              </motion.span>
              <h1 className='font-display font-bold tracking-tight leading-[1.05] text-[clamp(2.75rem,4.8vw,4.75rem)]'>
                <motion.span className='block' {...heroAnim(0.12)}>
                  I&apos;m <span className='underline decoration-accent decoration-[0.06em] underline-offset-[0.12em]'>{site.name},</span>
                </motion.span>
                <motion.span className='block' {...heroAnim(0.26)}>
                  {site.role} Based in Bangladesh.
                </motion.span>
              </h1>
              <motion.div className='flex flex-col items-start gap-6 max-w-lg' {...heroAnim(0.42)}>
                <p className='text-base font-medium text-ink/70'>{site.heroIntro}</p>
                <div className='flex items-center gap-4 mt-2 sm:flex-col sm:w-full sm:items-stretch'>
                  <PillButton href='/look-book' label='View My Portfolio' />
                  <PillButton onClick={openStartProject} label='Hire Me' onDark={false} />
                </div>
              </motion.div>
            </div>

            <motion.div
              className='w-[38%] flex justify-center lg:w-full'
              {...heroAnim(0.52)}
            >
              <div className='relative w-[24rem] xl:w-80 sm:w-64 mt-6 mr-6 sm:mr-0'>
                <div className='absolute -top-8 -right-8 w-36 h-36 bg-accent rounded-full sm:w-24 sm:h-24 sm:-top-5 sm:-right-5' />
                <Image
                  src={profilePic}
                  alt={site.name}
                  priority
                  sizes='(max-width: 768px) 100vw, 40vw'
                  className='relative w-full aspect-square object-cover object-top rounded-3xl border border-ink/15'
                />
                <HireMeBadge />
                <span className='absolute -right-4 bottom-16 bg-accent text-ink text-sm font-semibold px-4 py-2 rounded-full'>
                  Graphic Designer
                </span>
                <span className='absolute -left-4 bottom-4 bg-paper text-ink border border-ink/15 text-sm font-semibold px-4 py-2 rounded-full'>
                  AI Content Creator
                </span>
              </div>
            </motion.div>
          </div>
        </Layout>

        {/* Rising work strip (bazil.fr/design scroll effect) */}
        <HeroImageStrip />

        {/* Marquee */}
        <div className='w-full mt-16 md:mt-10'>
          <MarqueeStrip items={site.marquee} skew />
        </div>

        {/* Services */}
        <Layout className='pt-24 md:pt-16' >
          <section id='services' className='w-full'>
            <Reveal className='w-full'>
              <SectionHeading
                eyebrow='Services'
                accent='Services'
                accentFirst
                title='I Provide'
                action={<PillButton href='/services' label='View All Services' />}
              />
            </Reveal>
            <div className='grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1'>
              {services.slice(0, 3).map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </section>
        </Layout>

        {/* Who is Nafiul */}
        <section id='about' className='w-full bg-ink text-paper mt-24 md:mt-16'>
          <Layout className='py-20 md:py-12'>
            <Reveal className='w-full flex items-center gap-16 lg:flex-col lg:gap-10'>
              <div className='w-2/5 flex justify-center lg:w-full'>
                <div className='relative w-80 h-80 sm:w-64 sm:h-64'>
                  <div className='absolute inset-0 bg-accent rounded-full overflow-hidden'>
                    <Image
                      src={aboutPic}
                      alt={site.name}
                      sizes='(max-width: 768px) 80vw, 30vw'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  {site.skillTags.slice(0, 4).map((tag, i) => (
                    <span
                      key={tag}
                      className={`absolute text-xs font-semibold px-3 py-1.5 rounded-full
                      ${i % 2 === 0 ? 'bg-accent text-ink' : 'bg-paper text-ink'}`}
                      style={{
                        left: ['-8%', '55%', '-2%', '60%'][i],
                        top: ['20%', '5%', '78%', '85%'][i],
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className='w-3/5 flex flex-col items-start gap-6 lg:w-full'>
                <SectionHeading
                  eyebrow='About Me'
                  title={`Who is ${site.name}?`}
                  accent=''
                  onDark
                />
                <p className='-mt-8 text-base font-medium text-paper/80'>{site.bio[0]}</p>
                <StatCounters stats={site.stats} onDark />
                <div className='flex items-center gap-6 mt-2'>
                  <PillButton href={site.cvPath} label='Download CV' onDark download external />
                  <span className='font-display text-accent text-2xl font-bold sm:hidden'>{site.name}</span>
                </div>
              </div>
            </Reveal>
          </Layout>
        </section>

        {/* Tools */}
        <ToolsSection />

        {/* Projects */}
        <Layout className='pt-24 md:pt-16'>
          <section id='projects' className='w-full'>
            <Reveal className='w-full'>
              <SectionHeading
                eyebrow='My Portfolio'
                title='My Latest'
                accent='Projects'
                action={<PillButton href='/projects' label='View All Projects' />}
              />
            </Reveal>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-6'>
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </section>
        </Layout>

        {/* Journey */}
        <JourneySection />

        {/* Pricing */}
        <section id='pricing' className='w-full bg-ink text-paper mt-24 md:mt-16'>
          <Layout className='py-20 md:py-12'>
            <Reveal className='w-full'>
              <SectionHeading
                eyebrow='Pricing Table'
                title='My'
                accent='Pricing Model'
                onDark
                action={<PillButton onClick={openStartProject} label='Get Started' onDark />}
              />
              <div className='grid grid-cols-3 gap-6 items-center lg:grid-cols-1'>
                {pricing.map((tier) => <PricingCard key={tier.name} tier={tier} />)}
              </div>
            </Reveal>
          </Layout>
        </section>

        {/* Contact */}
        <ContactSection />

        {/* Testimonials */}
        <Layout className='pt-24 md:pt-16'>
          <section id='testimonials' className='w-full flex flex-col items-center'>
            <Reveal className='w-full'>
              <SectionHeading
                eyebrow='Clients Testimonials'
                title='The Impact of My Work:'
                accent='Client Testimonials'
                center
              />
              <div className='grid grid-cols-3 gap-6 w-full lg:grid-cols-1'>
                {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
              </div>
            </Reveal>
          </section>
        </Layout>

        {/* Blogs */}
        <Layout className='pt-24 md:pt-16'>
          <section id='blogs' className='w-full'>
            <Reveal className='w-full'>
              <SectionHeading
                eyebrow='News & Blogs'
                title='Our Latest'
                accent='News & Blogs'
                action={<PillButton href='/blogs' label='View All Blogs' />}
              />
            </Reveal>
            <div className='grid grid-cols-3 gap-6 lg:grid-cols-1'>
              {blogs.map((b) => <BlogCard key={b.slug} blog={b} />)}
            </div>
          </section>
        </Layout>

        {/* FAQ */}
        <section id='faq' className='w-full bg-ink text-paper mt-24 md:mt-16'>
          <Layout className='py-20 md:py-12 flex flex-col items-center'>
            <Reveal className='w-full flex flex-col items-center'>
              <SectionHeading
                eyebrow='FAQs'
                title='Questions?'
                accent='Look here.'
                center
                onDark
              />
              <div className='w-full max-w-4xl'>
                <FaqAccordion faqs={faqs} />
              </div>
            </Reveal>
          </Layout>
        </section>
      </main>
    </>
  )
}
