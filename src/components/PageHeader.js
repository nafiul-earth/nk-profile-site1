import Link from 'next/link'
import MarqueeStrip from './MarqueeStrip'
import { site } from '@/data/site'

const PageHeader = ({ title, crumb }) => {
  return (
    <div className='w-full'>
      <div className='w-full py-20 text-center md:py-12'>
        <h1 className='text-5xl font-bold text-ink lg:text-4xl sm:text-3xl'>{title}</h1>
        <p className='mt-3 text-base font-medium'>
          <Link href='/' className='hover:text-sun transition-colors'>Home</Link>
          <span className='mx-2 text-ink/50'>/</span>
          <span className='text-ink/70'>{crumb || title}</span>
        </p>
      </div>
      <MarqueeStrip items={site.marquee} skew />
    </div>
  )
}

export default PageHeader
