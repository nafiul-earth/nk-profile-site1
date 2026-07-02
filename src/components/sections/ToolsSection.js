import { motion } from 'framer-motion'
import Layout from '../Layout'
import SectionHeading from '../SectionHeading'
import { site } from '@/data/site'

const toolColors = {
  photoshop: '#31A8FF',
  illustrator: '#FF9A00',
  figma: '#A259FF',
  canva: '#00C4CC',
  midjourney: '#1E2320',
  davinci: '#FF4E6B',
}
const toolInitials = {
  photoshop: 'Ps',
  illustrator: 'Ai',
  figma: 'Fg',
  canva: 'Cv',
  midjourney: 'Mj',
  davinci: 'DR',
}

const ToolsSection = () => {
  return (
    <Layout className='pt-24 md:pt-16'>
      <section className='w-full flex flex-col items-center'>
        <SectionHeading
          eyebrow='My Favorite Tools'
          accent='Exploring the Tools'
          accentFirst
          title='Behind My Designs'
          center
        />
        <div className='grid grid-cols-6 gap-6 w-full lg:grid-cols-3 sm:grid-cols-2'>
          {site.tools.map((tool) => (
            <motion.div
              key={tool.name}
              className='flex flex-col items-center gap-3 bg-white rounded-full py-8 px-4 border border-ink/5 shadow-sm'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className='w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg'
                style={{ backgroundColor: toolColors[tool.icon] }}
              >
                {toolInitials[tool.icon]}
              </span>
              <span className='text-2xl font-extrabold text-ink'>{tool.level}%</span>
              <span className='text-sm font-medium text-ink/70 text-center'>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ToolsSection
