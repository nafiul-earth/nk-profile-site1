import Layout from '../Layout'
import SectionHeading from '../SectionHeading'
import ContactForm from '../ContactForm'
import { site } from '@/data/site'

const rows = [
  ...site.contactLinks.map((link) => ({
    label: link.label,
    href: link.url,
    external: true,
    d: 'M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z',
  })),
  { label: site.location, href: null, d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' },
]

const ContactSection = ({ blurb }) => {
  return (
    <section id='contact' className='w-full text-paper mt-24 md:mt-16 bg-ink'>
      <Layout className='py-20 md:py-12'>
        <div className='flex gap-16 lg:flex-col lg:gap-10'>
          <div className='w-2/5 flex flex-col gap-6 lg:w-full'>
            <SectionHeading eyebrow='Contact Me' title="Let's Talk for" accent='Your Next Projects' onDark />
            <p className='-mt-8 text-base font-medium text-paper/80'>
              {blurb || 'Have a project in mind? Tell me what you need and your budget — I usually reply within a day.'}
            </p>
            <ul className='flex flex-col gap-4'>
              {rows.map((row) => (
                <li key={row.label} className='flex items-center gap-3'>
                  <span className='w-11 h-11 rounded-full bg-accent text-ink flex items-center justify-center shrink-0'>
                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="currentColor"><path d={row.d} /></svg>
                  </span>
                  {row.href
                    ? <a href={row.href} target={row.external ? '_blank' : undefined} rel={row.external ? 'noopener noreferrer' : undefined} className='text-sm font-medium text-paper/90 hover:text-accent transition-colors'>{row.label}</a>
                    : <span className='text-sm font-medium text-paper/90'>{row.label}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-3/5 lg:w-full'>
            <ContactForm onDark />
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default ContactSection
