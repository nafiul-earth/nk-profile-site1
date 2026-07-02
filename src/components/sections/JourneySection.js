import Layout from '../Layout'
import SectionHeading from '../SectionHeading'
import { journey } from '@/data/journey'

const columns = [
  {
    heading: 'Education',
    icon: 'M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z',
    items: journey.education,
  },
  {
    heading: 'Work Experience',
    icon: 'M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z',
    items: journey.work,
  },
]

const JourneySection = () => {
  return (
    <Layout className='pt-24 md:pt-16'>
      <section className='w-full flex flex-col items-center'>
        <SectionHeading
          eyebrow='Education & Work'
          accent='My Academic and Professional'
          accentFirst
          title='Journey'
          center
        />
        <div className='grid grid-cols-2 gap-8 w-full md:grid-cols-1'>
          {columns.map((col) => (
            <div key={col.heading} className='bg-white rounded-2xl p-8 border border-ink/5 shadow-sm sm:p-6'>
              <div className='flex items-center gap-3 pb-5 border-b border-ink/10'>
                <span className='w-12 h-12 rounded-full bg-sun flex items-center justify-center text-forest'>
                  <svg className='w-6 h-6' viewBox="0 0 24 24" fill="currentColor"><path d={col.icon} /></svg>
                </span>
                <h3 className='text-xl font-bold'>{col.heading}</h3>
              </div>
              <ul className='flex flex-col gap-6 pt-6'>
                {col.items.map((item) => (
                  <li key={item.title} className='border-l-2 border-sun pl-4'>
                    <p className='text-sm font-medium text-ink/60'>{item.years}</p>
                    <p className='text-lg font-bold text-ink'>{item.place}</p>
                    <p className='text-sm font-medium text-ink/70'>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default JourneySection
