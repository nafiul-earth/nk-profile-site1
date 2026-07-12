import { useLayoutEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const SEEN_KEY = 'nafiul-intro-seen'

// Full-screen ink layer with the wordmark, shown once per session on first load.
// Calls onDone when the reveal finishes (immediately if skipped).
const IntroOverlay = ({ onDone }) => {
  const reduceMotion = useReducedMotion()
  const [state, setState] = useState('pending') // pending | play | skip

  useLayoutEffect(() => {
    if (reduceMotion || sessionStorage.getItem(SEEN_KEY)) {
      setState('skip')
      onDone()
    } else {
      sessionStorage.setItem(SEEN_KEY, '1')
      setState('play')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion])

  if (state === 'skip') return null

  return (
    <motion.div
      className='fixed inset-0 z-[100] bg-ink flex items-center justify-center'
      initial={{ y: '0%' }}
      animate={state === 'play' ? { y: '-100%' } : { y: '0%' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.75 }}
      onAnimationComplete={() => {
        if (state === 'play') {
          setState('skip')
          onDone()
        }
      }}
      aria-hidden='true'
    >
      <motion.span
        className='font-display text-6xl font-bold tracking-tight text-paper sm:text-4xl'
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Nafiul<span className='text-accent'>.</span>
      </motion.span>
    </motion.div>
  )
}

export default IntroOverlay
