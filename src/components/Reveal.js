import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered fade + rise, once per element. Renders static when
// the user prefers reduced motion.
const Reveal = ({ children, className = '', delay = 0 }) => {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
