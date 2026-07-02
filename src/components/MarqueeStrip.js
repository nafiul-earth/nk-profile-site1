import { motion } from 'framer-motion'

const MarqueeStrip = ({ items, skew = false }) => {
  const row = (
    <>
      {items.map((item) => (
        <span key={item} className='flex items-center gap-10 text-2xl font-bold text-forest whitespace-nowrap sm:text-lg sm:gap-6'>
          {item}
          <svg className='w-6 h-6 text-forest sm:w-4 sm:h-4' viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.4 7.2L21 4.5l-4.5 6 7.5 1.5-7.5 1.5 4.5 6-6.6-2.7L12 24l-2.4-7.2L3 19.5l4.5-6L0 12l7.5-1.5-4.5-6 6.6 2.7L12 0z" />
          </svg>
        </span>
      ))}
    </>
  )

  return (
    <div className={`w-full overflow-hidden bg-forest ${skew ? 'py-2' : ''}`}>
      <div className={`bg-sun py-4 sm:py-3 ${skew ? '-rotate-1 scale-x-105' : ''}`}>
        <motion.div
          className='flex items-center gap-10 w-max sm:gap-6'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        >
          {row}
          {row}
        </motion.div>
      </div>
    </div>
  )
}

export default MarqueeStrip
