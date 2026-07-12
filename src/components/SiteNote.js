import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// Small side tab, fixed to the right edge — click to reveal a short note.
const SiteNote = () => {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className='fixed right-0 top-1/2 -translate-y-1/2 z-30 flex items-center'>
      <AnimatePresence>
        {open && (
          <motion.div
            role='status'
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='mr-3 max-w-[16rem] rounded-2xl border border-ink/15 bg-paper text-ink p-5 flex items-start gap-3 sm:max-w-[12rem] sm:p-4'
          >
            <p className='text-sm font-medium leading-relaxed'>
              Thank you for your visit — this site is under development. 🚧
            </p>
            <button
              type='button'
              onClick={() => setOpen(false)}
              aria-label='Close note'
              className='shrink-0 w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center hover:border-ink transition-colors'
            >
              <svg className='w-3 h-3' viewBox='0 0 24 24' fill='none'>
                <path d='M6 6l12 12M18 6L6 18' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label='Site note'
        className='flex items-center gap-2 rounded-l-xl bg-ink text-paper border border-ink px-2 py-4
        text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-ink transition-colors
        [writing-mode:vertical-rl]'
      >
        <span className='w-1.5 h-1.5 rounded-full bg-accent shrink-0' />
        Note
      </button>
    </div>
  )
}

export default SiteNote
