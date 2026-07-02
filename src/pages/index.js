import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
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
  <div className='absolute -left-6 top-6 w-28 h-28 md:w-20 md:h-20'>
    <svg viewBox="0 0 100 100" className='w-full h-full animate-spin-slow'>
      <defs>
        <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <circle cx="50" cy="50" r="48" fill="#2F4A32" />
      <text fill="#FFB400" fontSize="11.5" fontWeight="700" letterSpacing="2.5">
        <textPath href="#circlePath">HIRE ME • HIRE ME • HIRE ME •</textPath>
      </text>
    </svg>
    <span className='absolute inset-0 flex items-center justify-center'>
      <svg className='w-6 h-6 text-sun' viewBox="0 0 24 24" fill="none">
        <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
)

export default function Home() {
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

        {/* Hero */}
        <Layout className='pt-16 md:pt-10'>
          <div className='flex items-center justify-between w-full gap-8 lg:flex-col'>
            <motion.div
              className='w-1/2 flex flex-col items-start gap-6 lg:w-full lg:items-center lg:text-center'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className='border-2 border-ink/20 px-4 py-1.5 text-sm font-semibold rounded-md relative'>
                Hello There!
                <span className='absolute -left-1 -top-1 w-2 h-2 bg-sun' />
                <span className='absolute -right-1 -bottom-1 w-2 h-2 bg-sun' />
              </span>
              <h1 className='text-5xl font-bold leading-tight xl:text-4xl sm:text-3xl'>
                I&apos;m <span className='text-sun italic underline decoration-sun underline-offset-8'>{site.name},</span>
                <br />
                {site.role} Based in Bangladesh.
              </h1>
              <p className='text-base font-medium text-ink/70 max-w-lg'>{site.heroIntro}</p>
              <div className='flex items-center gap-4 mt-2 sm:flex-col sm:w-full'>
                <PillButton href='/projects' label='View My Portfolio' />
                <PillButton href='/#contact' label='Hire Me' onDark={false} />
              </div>
            </motion.div>

            <motion.div
              className='w-1/2 flex justify-center lg:w-full'
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='relative w-[26rem] h-[26rem] xl:w-80 xl:h-80 sm:w-64 sm:h-64'>
                <div className='absolute inset-4 bg-sun rounded-full' />
                <Image
                  src={profilePic}
                  alt={site.name}
                  priority
                  sizes='(max-width: 768px) 100vw, 40vw'
                  className='relative w-full h-full object-contain object-bottom drop-shadow-xl'
                />
                <HireMeBadge />
                <span className='absolute right-0 bottom-16 bg-sun text-ink text-sm font-semibold px-4 py-2 rounded-full shadow-md'>
                  Graphic Designer
                </span>
                <span className='absolute -left-4 bottom-4 bg-forest text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md'>
                  AI Content Creator
                </span>
              </div>
            </motion.div>
          </div>
        </Layout>

        {/* Marquee */}
        <div className='w-full mt-16 md:mt-10'>
          <MarqueeStrip items={site.marquee} skew />
        </div>

        {/* Services */}
        <Layout className='pt-24 md:pt-16' >
          <section id='services' className='w-full'>
            <SectionHeading
              eyebrow='Services'
              accent='Services'
              accentFirst
              title='I Provide'
              action={<PillButton href='/services' label='View All Services' />}
            />
            <div className='grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1'>
              {services.slice(0, 3).map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </section>
        </Layout>

        {/* Who is Nafiul */}
        <section id='about' className='w-full bg-forest text-white mt-24 md:mt-16'>
          <Layout className='py-20 md:py-12'>
            <div className='flex items-center gap-16 lg:flex-col lg:gap-10'>
              <div className='w-2/5 flex justify-center lg:w-full'>
                <div className='relative w-80 h-80 sm:w-64 sm:h-64'>
                  <div className='absolute inset-0 bg-sun rounded-full overflow-hidden'>
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
                      className={`absolute text-xs font-semibold px-3 py-1.5 rounded-full shadow-md
                      ${i % 2 === 0 ? 'bg-sun text-ink' : 'bg-white text-forest'}`}
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
                <p className='-mt-8 text-base font-medium text-white/80'>{site.bio[0]}</p>
                <StatCounters stats={site.stats} onDark />
                <div className='flex items-center gap-6 mt-2'>
                  <PillButton href={site.cvPath} label='Download CV' onDark download external />
                  <span className='text-sun italic text-2xl font-semibold sm:hidden'>{site.name}</span>
                </div>
              </div>
            </div>
          </Layout>
        </section>

        {/* Tools */}
        <ToolsSection />

        {/* Projects */}
        <Layout className='pt-24 md:pt-16'>
          <section id='projects' className='w-full'>
            <SectionHeading
              eyebrow='My Portfolio'
              title='My Latest'
              accent='Projects'
              action={<PillButton href='/projects' label='View All Projects' />}
            />
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-6'>
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </section>
        </Layout>

        {/* Journey */}
        <JourneySection />

        {/* Pricing */}
        <section id='pricing' className='w-full bg-forest text-white mt-24 md:mt-16'>
          <Layout className='py-20 md:py-12'>
            <SectionHeading
              eyebrow='Pricing Table'
              title='My'
              accent='Pricing Model'
              onDark
              action={<PillButton href='/#contact' label='Get Started' onDark />}
            />
            <div className='grid grid-cols-3 gap-6 items-center lg:grid-cols-1'>
              {pricing.map((tier) => <PricingCard key={tier.name} tier={tier} />)}
            </div>
          </Layout>
        </section>

        {/* Contact */}
        <ContactSection deep />

        {/* Testimonials */}
        <Layout className='pt-24 md:pt-16'>
          <section id='testimonials' className='w-full flex flex-col items-center'>
            <SectionHeading
              eyebrow='Clients Testimonials'
              title='The Impact of My Work:'
              accent='Client Testimonials'
              center
            />
            <div className='grid grid-cols-3 gap-6 w-full lg:grid-cols-1'>
              {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
            </div>
          </section>
        </Layout>

        {/* Blogs */}
        <Layout className='pt-24 md:pt-16'>
          <section id='blogs' className='w-full'>
            <SectionHeading
              eyebrow='News & Blogs'
              title='Our Latest'
              accent='News & Blogs'
              action={<PillButton href='/blogs' label='View All Blogs' />}
            />
            <div className='grid grid-cols-3 gap-6 lg:grid-cols-1'>
              {blogs.map((b) => <BlogCard key={b.slug} blog={b} />)}
            </div>
          </section>
        </Layout>

        {/* FAQ */}
        <section id='faq' className='w-full bg-forest text-white mt-24 md:mt-16'>
          <Layout className='py-20 md:py-12 flex flex-col items-center'>
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
          </Layout>
        </section>
      </main>
    </>
  )
}
