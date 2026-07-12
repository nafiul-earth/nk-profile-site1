import { motion, useReducedMotion } from 'framer-motion'
import Layout from '../Layout'
import SectionHeading from '../SectionHeading'
import { toolsRowOne, toolsRowTwo } from '@/data/tools'

const Tile = ({ tool }) => (
  <div className='flex items-center gap-3 shrink-0 rounded-2xl bg-paper border border-ink/10 px-5 py-3 whitespace-nowrap'>
    <img
      src={tool.src}
      alt=''
      loading='lazy'
      width={24}
      height={24}
      className='w-6 h-6 object-contain shrink-0'
    />
    <span className='text-sm font-semibold text-ink'>{tool.name}</span>
  </div>
)

const MarqueeRow = ({ tools, reverse = false, reduceMotion }) => {
  const row = tools.map((tool) => <Tile key={tool.name} tool={tool} />)
  return (
    <div className='w-full overflow-hidden'>
      <motion.div
        className='flex items-center gap-4 w-max'
        animate={reduceMotion ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {row}
        {row}
      </motion.div>
    </div>
  )
}

const ToolsSection = () => {
  const reduceMotion = useReducedMotion()
  return (
    <>
      <Layout className='pt-24 md:pt-16'>
        <section className='w-full flex flex-col items-center'>
          <SectionHeading
            eyebrow='My Favorite Tools'
            accent='Exploring the Tools'
            accentFirst
            title='Behind My Designs'
            center
          />
        </section>
      </Layout>

      <div className='w-full mt-8 md:mt-6 bg-ink py-12 md:py-8 flex flex-col gap-4 overflow-hidden'>
        <MarqueeRow tools={toolsRowOne} reduceMotion={reduceMotion} />
        <MarqueeRow tools={toolsRowTwo} reverse reduceMotion={reduceMotion} />
        <p className='text-center text-xs font-medium text-paper/40 pt-2'>
          Logos via Simple Icons — shown to indicate tools used, not an affiliation with or endorsement from the listed brands.
        </p>
      </div>
    </>
  )
}

export default ToolsSection
