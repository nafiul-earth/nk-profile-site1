import Link from 'next/link'

const Logo = ({ variant = 'dark' }) => {
  return (
    <Link href="/" className='flex items-center gap-2'>
      <span className={`font-display text-2xl font-bold tracking-tight ${variant === 'light' ? 'text-paper' : 'text-ink'}`}>
        Nafiul<span className='text-accent'>.</span>
      </span>
    </Link>
  )
}

export default Logo
