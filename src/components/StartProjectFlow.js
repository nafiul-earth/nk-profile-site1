import { createContext, useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { site } from '@/data/site'
import { budgetRanges } from './ContactForm'

// Multi-step "Start a project" modal. Any component can open it via
// the useStartProject() hook — the provider lives in _app.js.

const needs = ['Graphic Design', 'AI Content', 'Poster Design', 'Web Development', 'Video & YouTube', 'Other']
const timelines = ['ASAP', 'Within 2 months', 'Within 6 months', 'Flexible']
const referrals = ['LinkedIn', 'Upwork', 'YouTube', 'Search engine', 'Referral', 'Other']

const TOTAL_STEPS = 5

const StartProjectContext = createContext({ openStartProject: () => {} })
export const useStartProject = () => useContext(StartProjectContext)

const ChoiceGrid = ({ options, value, onPick }) => (
  <div className='grid grid-cols-2 gap-3 sm:grid-cols-1'>
    {options.map((opt) => (
      <button
        key={opt}
        type='button'
        onClick={() => onPick(opt)}
        className={`rounded-xl border px-5 py-4 text-left text-sm font-semibold transition-colors
        ${value === opt ? 'bg-accent border-accent text-ink' : 'border-ink/20 text-ink hover:border-ink'}`}
      >
        {opt}
      </button>
    ))}
  </div>
)

const field = `w-full rounded-lg px-4 py-3 text-sm font-medium outline-none transition-colors
bg-paper border border-ink/20 text-ink placeholder:text-ink/40 focus:border-ink`

const StartProjectModal = ({ isOpen, onClose }) => {
  const reduceMotion = useReducedMotion()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ need: '', timeline: '', budget: '', referral: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!isOpen) return
    setStep(0)
    setAnswers({ need: '', timeline: '', budget: '', referral: '' })
    setStatus('idle')
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const pick = (key) => (value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
    setStep((s) => s + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    Object.entries(answers).forEach(([k, v]) => formData.append(k, v))
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const steps = [
    {
      title: 'What do you need?',
      body: <ChoiceGrid options={needs} value={answers.need} onPick={pick('need')} />,
    },
    {
      title: 'When do you need it?',
      body: <ChoiceGrid options={timelines} value={answers.timeline} onPick={pick('timeline')} />,
    },
    {
      title: 'What is your budget range?',
      body: <ChoiceGrid options={budgetRanges} value={answers.budget} onPick={pick('budget')} />,
    },
    {
      title: 'How did you hear about Nafiul?',
      body: <ChoiceGrid options={referrals} value={answers.referral} onPick={pick('referral')} />,
    },
    {
      title: 'Tell me about you and the project',
      body: (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input name='name' required placeholder='Your name *' aria-label='Your name' className={field} />
          <input name='email' type='email' required placeholder='Your email *' aria-label='Your email' className={field} />
          <textarea name='message' required rows={4} placeholder='A few lines about the project *' aria-label='Your message' className={field} />
          <button
            type='submit'
            disabled={status === 'sending'}
            className='self-start rounded-full bg-ink text-paper border border-ink px-8 py-3 text-sm font-semibold
            hover:bg-transparent hover:text-ink transition-colors disabled:opacity-60'
          >
            {status === 'sending' ? 'Sending...' : 'Send project brief'}
          </button>
          {status === 'error' && (
            <p className='text-sm font-semibold text-red-600'>
              Something went wrong — please message me on LinkedIn or Upwork below.
            </p>
          )}
        </form>
      ),
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-[90] flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <div className='absolute inset-0 bg-ink/70' onClick={onClose} aria-hidden='true' />
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-label='Start a project'
            className='relative w-full max-w-xl bg-paper rounded-3xl border border-ink/15 p-8 sm:p-6 max-h-[90vh] overflow-y-auto'
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {status === 'success' ? (
              <div className='flex flex-col items-start gap-4 py-6'>
                <span className='w-12 h-12 rounded-full bg-accent text-ink flex items-center justify-center'>
                  <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none'>
                    <path d='M5 12l5 5L20 7' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </span>
                <h3 className='font-display text-3xl font-bold tracking-tight text-ink'>Brief received!</h3>
                <p className='text-base font-medium text-ink/70'>Thanks — I usually reply within a day.</p>
                <button
                  type='button'
                  onClick={onClose}
                  className='rounded-full bg-ink text-paper px-8 py-3 text-sm font-semibold border border-ink hover:bg-transparent hover:text-ink transition-colors'
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className='flex items-center justify-between gap-4 mb-8'>
                  {step > 0 ? (
                    <button
                      type='button'
                      onClick={() => setStep((s) => s - 1)}
                      className='text-sm font-semibold text-muted hover:text-ink transition-colors'
                    >
                      &larr; Back
                    </button>
                  ) : <span />}
                  <div className='flex items-center gap-4'>
                    <span className='text-sm font-semibold text-muted'>{step + 1} / {TOTAL_STEPS}</span>
                    <button
                      type='button'
                      onClick={onClose}
                      aria-label='Close'
                      className='w-9 h-9 rounded-full border border-ink/20 text-ink flex items-center justify-center hover:border-ink transition-colors'
                    >
                      <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none'>
                        <path d='M6 6l12 12M18 6L6 18' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' />
                      </svg>
                    </button>
                  </div>
                </div>

                <AnimatePresence mode='wait'>
                  <motion.div
                    key={step}
                    initial={reduceMotion ? false : { opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -32 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    <h3 className='font-display text-2xl font-bold tracking-tight text-ink mb-6'>{steps[step].title}</h3>
                    {steps[step].body}
                  </motion.div>
                </AnimatePresence>

                <p className='mt-8 pt-5 border-t border-ink/10 text-xs font-medium text-muted'>
                  Prefer direct contact?{' '}
                  {site.contactLinks.map((link, i) => (
                    <span key={link.name}>
                      {i > 0 && ' · '}
                      <a href={link.url} target='_blank' rel='noopener noreferrer' className='underline underline-offset-2 text-ink hover:text-muted transition-colors'>
                        {link.name}
                      </a>
                    </span>
                  ))}
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const StartProjectProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StartProjectContext.Provider value={{ openStartProject: () => setIsOpen(true) }}>
      {children}
      <StartProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </StartProjectContext.Provider>
  )
}
