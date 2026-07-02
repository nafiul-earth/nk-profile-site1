import Head from 'next/head'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import ContactSection from '@/components/sections/ContactSection'
import PillButton from '@/components/PillButton'
import { ServiceIcons } from '@/components/icons/ServiceIcons'
import { services } from '@/data/services'
import { site } from '@/data/site'

const Check = () => (
  <span className='w-6 h-6 shrink-0 rounded-full bg-sun text-forest flex items-center justify-center'>
    <svg className='w-3.5 h-3.5' viewBox="0 0 24 24" fill="none">
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const ServiceDetails = ({ service }) => {
  return (
    <>
      <Head>
        <title>{service.name} — {site.name}</title>
        <meta name="description" content={service.short} />
      </Head>
      <main className='w-full'>
        <PageHeader title={service.name} crumb={`Services / ${service.name}`} />

        <Layout className='pt-20 md:pt-12'>
          {/* Banner */}
          <div className='w-full bg-forest rounded-3xl p-16 flex items-center justify-center gap-8 md:p-10'>
            <span className='w-24 h-24 text-sun md:w-16 md:h-16'>{ServiceIcons[service.icon]}</span>
            <h2 className='text-4xl font-bold text-white sm:text-2xl'>{service.name}</h2>
          </div>

          {/* About */}
          <div className='mt-16 md:mt-10'>
            <h3 className='text-2xl font-bold mb-4'>About <span className='text-sun italic'>{service.name}</span> Services</h3>
            <p className='text-base font-medium text-ink/75 max-w-4xl'>{service.about}</p>
          </div>

          {/* Includes */}
          <div className='mt-16 md:mt-10'>
            <h3 className='text-2xl font-bold mb-6'>Services Include:</h3>
            <ul className='grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1'>
              {service.includes.map((item) => (
                <li key={item} className='flex items-center gap-3 text-sm font-semibold'>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className='mt-16 md:mt-10'>
            <h3 className='text-2xl font-bold mb-2'>Top {service.industries.length} Industries I Cover</h3>
            <p className='text-base font-medium text-ink/70 mb-8 max-w-3xl'>
              I&apos;ve shaped {service.name} work around these industries — and adapt quickly to new ones.
            </p>
            <div className='grid grid-cols-4 gap-6 lg:grid-cols-2 sm:grid-cols-1'>
              {service.industries.map((ind, i) => (
                <div key={ind} className='bg-white rounded-2xl p-6 border border-ink/5 shadow-sm flex flex-col gap-3'>
                  <span className='w-10 h-10 rounded-full bg-forest text-sun flex items-center justify-center text-sm font-bold'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className='font-bold text-ink'>{ind}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className='mt-16 md:mt-10'>
            <h3 className='text-2xl font-bold mb-6'>Services Benefits:</h3>
            <ul className='flex flex-col gap-4 max-w-3xl'>
              {service.benefits.map((b) => (
                <li key={b} className='flex items-center gap-3 text-base font-medium'>
                  <Check />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className='flex flex-col items-center text-center gap-6 mt-24 md:mt-16'>
            <h2 className='text-4xl font-bold sm:text-2xl'>
              Let&apos;s Create an <span className='text-sun italic'>Amazing Project</span> Together!
            </h2>
            <PillButton href='#contact' label='Contact Us Now' />
          </div>
        </Layout>

        <ContactSection blurb={`Interested in ${service.name}? Tell me about your project.`} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug)
  return { props: { service } }
}

export default ServiceDetails
