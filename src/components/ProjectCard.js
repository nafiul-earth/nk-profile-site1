import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionImage = motion(Image)

const Tags = ({ project }) => (
  <div className='flex flex-wrap items-center gap-2'>
    {[project.type, ...project.tags].map((tag) => (
      <span key={tag} className='bg-sun text-ink text-xs font-semibold px-3 py-1.5 rounded-full'>
        {tag}
      </span>
    ))}
  </div>
)

const ArrowLink = ({ href }) => (
  <Link
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='w-11 h-11 shrink-0 rounded-full bg-forest text-sun flex items-center justify-center
    transition-transform duration-300 hover:rotate-45'
    aria-label='Open project'
  >
    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
)

const ProjectCard = ({ project, wide = false }) => {
  return (
    <motion.article
      className={`w-full bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col gap-4
      ${wide ? 'lg:col-span-1 col-span-2' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={project.link} target='_blank' rel='noopener noreferrer' className='w-full overflow-hidden rounded-xl'>
        <MotionImage
          src={project.img}
          alt={project.title}
          width={1200}
          height={720}
          className='w-full h-auto object-cover'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </Link>
      <div className='flex items-end justify-between gap-4 px-2 pb-2'>
        <div className='flex flex-col gap-3'>
          <Tags project={project} />
          <h3 className='text-2xl font-bold text-ink sm:text-xl'>{project.title}</h3>
          <p className='text-sm font-medium text-ink/70'>{project.summary}</p>
        </div>
        <ArrowLink href={project.link} />
      </div>
    </motion.article>
  )
}

export default ProjectCard
