import Layout from '../Layout'
import SectionHeading from '../SectionHeading'
import ContactForm from '../ContactForm'
import { site } from '@/data/site'

const rows = [
  { label: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}`, d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' },
  { label: site.email, href: `mailto:${site.email}`, d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z' },
  { label: site.location, href: null, d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' },
]

const ContactSection = ({ blurb, deep = false }) => {
  return (
    <section id='contact' className={`w-full text-white mt-24 md:mt-16 ${deep ? 'bg-forest-deep' : 'bg-forest'}`}>
      <Layout className='py-20 md:py-12'>
        <div className='flex gap-16 lg:flex-col lg:gap-10'>
          <div className='w-2/5 flex flex-col gap-6 lg:w-full'>
            <SectionHeading eyebrow='Contact Us' title="Let's Talk for" accent='Your Next Projects' onDark />
            <p className='-mt-8 text-base font-medium text-white/80'>
              {blurb || 'Have a project in mind? Tell me what you need and your budget — I usually reply within a day.'}
            </p>
            <ul className='flex flex-col gap-4'>
              {rows.map((row) => (
                <li key={row.label} className='flex items-center gap-3'>
                  <span className='w-11 h-11 rounded-full bg-sun text-forest flex items-center justify-center shrink-0'>
                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="currentColor"><path d={row.d} /></svg>
                  </span>
                  {row.href
                    ? <a href={row.href} className='text-sm font-medium text-white/90 hover:text-sun transition-colors'>{row.label}</a>
                    : <span className='text-sm font-medium text-white/90'>{row.label}</span>}
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
