import Link from 'next/link'

const Arrow = () => (
  <span className='w-9 h-9 shrink-0 flex items-center justify-center bg-accent rounded-full text-ink
  transition-transform duration-300 group-hover:rotate-45'>
    <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const PillButton = ({ href, label, onDark = false, download = false, external = false, type, onClick }) => {
  const base = `group inline-flex items-center gap-2 rounded-full p-1 pl-6 text-base font-semibold
  transition-colors duration-300 md:pl-4 md:text-sm
  ${onDark
    ? 'bg-transparent border border-paper/80 text-paper hover:bg-paper hover:text-ink'
    : 'bg-ink text-paper border border-ink hover:bg-transparent hover:text-ink'}`

  if (!href) {
    return (
      <button type={type || 'button'} onClick={onClick} className={base}>
        <span className='py-1.5'>{label}</span>
        <Arrow />
      </button>
    )
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={base}
      download={download ? true : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className='py-1.5'>{label}</span>
      <Arrow />
    </Link>
  )
}

export default PillButton
