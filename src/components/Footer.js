import Link from 'next/link'
import Logo from './Logo'
import PillButton from './PillButton'
import { SocialLinks } from './icons/SocialIcons'
import { site } from '@/data/site'

const navLinks = [
  { href: '/', title: 'Home' },
  { href: '/services', title: 'Services' },
  { href: '/about', title: 'About' },
  { href: '/projects', title: 'Projects' },
  { href: '/blogs', title: 'Blogs' },
  { href: '/#faq', title: 'FAQs' },
]

const Footer = () => {
  return (
    <footer className='w-full bg-forest text-white mt-24 md:mt-16'>
      <div className='w-full max-w-7xl mx-auto px-16 xl:px-12 lg:px-10 md:px-8 sm:px-5 py-16 md:py-10'>
        <div className='flex items-end justify-between gap-8 border-b border-white/15 pb-10 md:flex-col md:items-start'>
          <h2 className='text-4xl font-bold sm:text-3xl'>
            Let&apos;s <span className='text-sun italic'>Connect</span> there
          </h2>
          <PillButton href='/#contact' label="Let's Talk" onDark />
        </div>

        <div className='grid grid-cols-4 gap-10 pt-10 lg:grid-cols-2 sm:grid-cols-1'>
          <div className='flex flex-col items-start gap-5'>
            <Logo variant='light' />
            <p className='text-sm font-medium text-white/70'>
              {site.role} based in {site.location}. Turning ideas into impact with design, code &amp; AI creativity.
            </p>
            <SocialLinks socials={site.socials} />
          </div>

          <div>
            <h3 className='text-sun font-semibold mb-4'>Navigation</h3>
            <ul className='flex flex-col gap-2.5'>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className='text-sm font-medium text-white/80 hover:text-sun transition-colors'>
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sun font-semibold mb-4'>Contact</h3>
            <ul className='flex flex-col gap-2.5 text-sm font-medium text-white/80'>
              {site.contactLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target='_blank' rel='noopener noreferrer' className='hover:text-sun transition-colors'>{link.label}</a>
                </li>
              ))}
              <li>{site.location}</li>
            </ul>
          </div>

          <div>
            <h3 className='text-sun font-semibold mb-4'>Find Me Online</h3>
            <p className='text-sm font-medium text-white/70 mb-4'>
              Message me through LinkedIn or Upwork for project questions, collaborations, or freelance availability.
            </p>
            <div className='flex flex-col items-start gap-3'>
              {site.contactLinks.map((link) => (
                <PillButton key={link.name} href={link.url} label={`Open ${link.name}`} onDark external />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-forest-deep'>
        <div className='w-full max-w-7xl mx-auto px-16 xl:px-12 lg:px-10 md:px-8 sm:px-5 py-5
        flex items-center justify-between text-sm font-medium text-white/70 sm:flex-col sm:gap-2'>
          <p>Copyright &copy; {new Date().getFullYear()} <span className='text-sun'>{site.firstName}</span>. All Rights Reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
