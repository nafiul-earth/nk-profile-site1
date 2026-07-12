import { useState } from 'react'
import { site } from '@/data/site'
import { services } from '@/data/services'

export const budgetRanges = ['Under $100', '$100 - $250', '$250 - $500', '$500 - $1,000', '$1,000+']

const ContactForm = ({ onDark = true }) => {
  const [status, setStatus] = useState('idle')

  const field = `w-full rounded-lg px-4 py-3 text-sm font-medium outline-none transition-colors
  ${onDark
    ? 'bg-paper/10 border border-paper/20 text-paper placeholder:text-paper/50 focus:border-accent'
    : 'bg-paper border border-ink/10 text-ink placeholder:text-ink/40 focus:border-accent'}`
  const label = `block mb-2 text-sm font-semibold ${onDark ? 'text-paper' : 'text-ink'}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full grid grid-cols-2 gap-5 sm:grid-cols-1'>
      <div>
        <label className={label} htmlFor='name'>Your Name *</label>
        <input id='name' name='name' required placeholder='Ex. John Doe' className={field} />
      </div>
      <div>
        <label className={label} htmlFor='email'>Email *</label>
        <input id='email' name='email' type='email' required placeholder='example@gmail.com' className={field} />
      </div>
      <div>
        <label className={label} htmlFor='phone'>Phone</label>
        <input id='phone' name='phone' placeholder='Enter Phone Number' className={field} />
      </div>
      <div>
        <label className={label} htmlFor='interest'>I&apos;m Interested in *</label>
        <select id='interest' name='interest' required defaultValue='' className={field}>
          <option value='' disabled>Select</option>
          {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
          <option value='Other'>Other</option>
        </select>
      </div>
      <div className='col-span-2 sm:col-span-1'>
        <label className={label} htmlFor='budget'>Budget Range (USD)</label>
        <select id='budget' name='budget' defaultValue='' className={field}>
          <option value='' disabled>Select Range</option>
          {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div className='col-span-2 sm:col-span-1'>
        <label className={label} htmlFor='message'>Your Message *</label>
        <textarea id='message' name='message' required rows={5} placeholder='Enter here..' className={field} />
      </div>
      <div className='col-span-2 sm:col-span-1 flex items-center gap-4'>
        <button
          type='submit'
          disabled={status === 'sending'}
          className='group inline-flex items-center gap-2 rounded-full p-1 pl-6 text-base font-semibold
          bg-accent text-ink border border-accent hover:bg-transparent hover:text-paper transition-colors disabled:opacity-60'
        >
          <span className='py-1.5'>{status === 'sending' ? 'Sending...' : 'Submit'}</span>
          <span className='w-9 h-9 flex items-center justify-center bg-accent rounded-full text-ink
          transition-transform duration-300 group-hover:rotate-45'>
            <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        {status === 'success' && (
          <p className={`text-sm font-semibold ${onDark ? 'text-accent' : 'text-ink'}`}>
            Thanks — I&apos;ll reply soon!
          </p>
        )}
        {status === 'error' && (
          <p className='text-sm font-semibold text-red-400'>
            Something went wrong. Please message me through LinkedIn or Upwork.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
