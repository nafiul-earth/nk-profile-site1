import Link from 'next/link'

const Logo = ({ variant = 'dark' }) => {
  return (
    <Link href="/" className='flex items-center gap-2'>
      <span className='w-10 h-10 bg-sun text-forest flex items-center justify-center rounded-full text-xl font-extrabold'>
        N
      </span>
      <span className={`text-xl font-bold ${variant === 'light' ? 'text-white' : 'text-ink'}`}>
        Nafiul<span className='text-sun'>.</span>
      </span>
    </Link>
  )
}

export default Logo
