import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FaqAccordion = ({ faqs }) => {
  const [open, setOpen] = useState(0)

  return (
    <div className='w-full flex flex-col gap-4'>
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={faq.q}
            className={`rounded-2xl overflow-hidden transition-colors duration-300
            ${isOpen ? 'bg-accent text-ink' : 'bg-paper/10 text-paper'}`}
          >
            <button
              type='button'
              onClick={() => setOpen(isOpen ? -1 : i)}
              className='w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold sm:text-base sm:px-4'
              aria-expanded={isOpen}
            >
              {faq.q}
              <span className='text-2xl font-bold shrink-0'>{isOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className='px-6 pb-5 text-base font-medium sm:px-4 sm:text-sm'>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion
