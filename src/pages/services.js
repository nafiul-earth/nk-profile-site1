import Head from 'next/head'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import ContactSection from '@/components/sections/ContactSection'
import PillButton from '@/components/PillButton'
import { services } from '@/data/services'
import { site } from '@/data/site'

const Services = () => {
  return (
    <>
      <Head>
        <title>Services — {site.name}</title>
        <meta name="description" content={`Services offered by ${site.name}: graphic design, AI content creation, web design & development, AI automation, and video content.`} />
      </Head>
      <main className='w-full'>
        <PageHeader title='Services' />

        <Layout className='pt-20 md:pt-12'>
          <SectionHeading eyebrow='Services' accent='Services' accentFirst title='I Provide' center />
          <div className='grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1'>
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </Layout>

        <Layout className='pt-24 md:pt-16'>
          <div className='flex flex-col items-center text-center gap-6'>
            <h2 className='font-display text-4xl font-bold tracking-tight sm:text-2xl'>
              Let&apos;s Create an <span className='underline decoration-accent decoration-[3px] underline-offset-8'>Amazing Project</span> Together!
            </h2>
            <PillButton href='#contact' label='Contact Me Now' />
          </div>
        </Layout>

        <ContactSection blurb='Tell me which service you need and your budget — I usually reply within a day.' />
      </main>
    </>
  )
}

export default Services
