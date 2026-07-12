import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import PillButton from '@/components/PillButton'
import StatCounters from '@/components/StatCounters'
import TestimonialCard from '@/components/TestimonialCard'
import ContactSection from '@/components/sections/ContactSection'
import JourneySection from '@/components/sections/JourneySection'
import ToolsSection from '@/components/sections/ToolsSection'
import { site } from '@/data/site'
import { testimonials } from '@/data/testimonials'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'

const About = () => {
  return (
    <>
      <Head>
        <title>About — {site.name}</title>
        <meta
          name="description"
          content={`About ${site.name} — graphic designer, AI content creator, and developer from ${site.location}.`}
        />
      </Head>
      <main className='w-full'>
        <PageHeader title='About Me' crumb='About' />

        {/* Who is Nafiul — expanded */}
        <Layout className='pt-20 md:pt-12'>
          <div className='flex items-start gap-16 lg:flex-col lg:gap-10'>
            <div className='w-2/5 flex justify-center lg:w-full'>
              <div className='relative w-80 h-80 sm:w-64 sm:h-64'>
                <div className='absolute inset-0 bg-accent rounded-full overflow-hidden'>
                  <Image
                    src={profilePic}
                    alt={site.name}
                    priority
                    sizes='(max-width: 768px) 80vw, 30vw'
                    className='w-full h-full object-cover'
                  />
                </div>
                {site.skillTags.slice(0, 4).map((tag, i) => (
                  <span
                    key={tag}
                    className={`absolute text-xs font-semibold px-3 py-1.5 rounded-full
                    ${i % 2 === 0 ? 'bg-ink text-paper' : 'bg-paper text-ink border border-ink/10'}`}
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
            <div className='w-3/5 flex flex-col items-start gap-5 lg:w-full'>
              <SectionHeading eyebrow='About Me' title={`Who is ${site.name}?`} accent='' />
              <div className='-mt-8 flex flex-col gap-4'>
                {site.bio.map((para) => (
                  <p key={para.slice(0, 24)} className='text-base font-medium text-ink/75'>{para}</p>
                ))}
              </div>
              <StatCounters stats={site.stats} />
              <div className='mt-2'>
                <PillButton href={site.cvPath} label='Download CV' download external />
              </div>
            </div>
          </div>
        </Layout>

        <ToolsSection />
        <JourneySection />

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

        <ContactSection />
      </main>
    </>
  )
}

export default About
