import Link from 'next/link'
import { motion } from 'framer-motion'
import { ServiceIcons } from './icons/ServiceIcons'

const ServiceCard = ({ service }) => {
  return (
    <motion.article
      className='w-full bg-white rounded-2xl p-8 flex flex-col items-start gap-4 border border-ink/5 shadow-sm sm:p-6'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className='w-16 h-16 rounded-full bg-cream flex items-center justify-center text-forest'>
        <span className='w-8 h-8'>{ServiceIcons[service.icon]}</span>
      </span>
      <h3 className='text-xl font-bold text-ink'>{service.name}</h3>
      <p className='text-sm font-medium text-ink/70'>{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className='group inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-sun transition-colors'
      >
        Learn more
        <svg className='w-4 h-4 text-sun transition-transform group-hover:translate-x-1' viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.article>
  )
}

export default ServiceCard
