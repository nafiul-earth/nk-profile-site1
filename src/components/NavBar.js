import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { href: '/', title: 'Home' },
  { href: '/services', title: 'Services' },
  { href: '/about', title: 'About' },
  { href: '/projects', title: 'Projects' },
  { href: '/blogs', title: 'Blogs' },
  { href: '/#testimonials', title: 'Testimonials' },
]

const NavLink = ({ href, title, onClick }) => {
  const router = useRouter()
  const isActive = href === '/' ? router.pathname === '/' : router.asPath.startsWith(href) && !href.includes('#')

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-medium transition-colors hover:text-sun
      ${isActive ? 'text-sun' : 'text-white'}`}
    >
      {title}
      {isActive && <span className='absolute left-0 -bottom-1 w-full h-[2px] bg-sun rounded-full' />}
    </Link>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='w-full flex justify-center px-8 pt-6 sm:px-4 sm:pt-4 relative z-40'>
      <div className='w-full max-w-7xl bg-forest rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-6'>
        <Logo variant='light' />

        <nav className='flex items-center gap-7 lg:hidden'>
          {links.map((l) => <NavLink key={l.href} {...l} />)}
        </nav>

        <div className='flex items-center gap-3'>
          <Link
            href='/#contact'
            className='bg-white text-forest font-semibold text-sm px-6 py-3 rounded-full border-2 border-transparent
            hover:bg-forest hover:text-white hover:border-white transition-colors lg:hidden'
          >
            Contact Me
          </Link>

          <button
            type='button'
            aria-label='Open menu'
            className='hidden lg:flex flex-col justify-center items-center w-11 h-11 rounded-full bg-white/10 mr-1'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
            <span className={`bg-white block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className='hidden lg:flex flex-col items-center gap-5 absolute top-full left-4 right-4 mt-2 z-50
            bg-forest rounded-3xl py-8 shadow-2xl'
          >
            {links.map((l) => <NavLink key={l.href} {...l} onClick={() => setIsOpen(false)} />)}
            <Link
              href='/#contact'
              onClick={() => setIsOpen(false)}
              className='bg-sun text-forest font-semibold text-sm px-6 py-3 rounded-full'
            >
              Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar
