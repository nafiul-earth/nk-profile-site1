import Link from 'next/link'
import MarqueeStrip from './MarqueeStrip'
import { site } from '@/data/site'

const PageHeader = ({ title, crumb }) => {
  return (
    <div className='w-full'>
      <div className='w-full py-20 text-center md:py-12'>
        <h1 className='font-display font-bold tracking-tight text-ink text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]'>{title}</h1>
        <p className='mt-3 text-base font-medium'>
          <Link href='/' className='hover:text-accent transition-colors'>Home</Link>
          <span className='mx-2 text-ink/50'>/</span>
          <span className='text-ink/70'>{crumb || title}</span>
        </p>
      </div>
      <MarqueeStrip items={site.marquee} skew />
    </div>
  )
}

export default PageHeader
