import { useState } from 'react'
import Head from 'next/head'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import PillButton from '@/components/PillButton'
import { useStartProject } from '@/components/StartProjectFlow'
import ContactSection from '@/components/sections/ContactSection'
import { projectCategories, projects } from '@/data/projects'
import { site } from '@/data/site'

const Projects = () => {
  const [activeCategories, setActiveCategories] = useState([])
  const reduceMotion = useReducedMotion()
  const { openStartProject } = useStartProject()

  const toggleCategory = (category) => {
    setActiveCategories((current) => (
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    ))
  }

  const visibleProjects = projects.filter((project) => (
    activeCategories.length === 0 || activeCategories.includes(project.category)
  ))

  return (
    <>
      <Head>
        <title>Projects — {site.name}</title>
        <meta
          name="description"
          content={`Projects by ${site.name}: AI tools, content studios, automation, and web development work.`}
        />
      </Head>
      <main className='w-full'>
        <PageHeader title='Projects' />

        <Layout className='pt-20 md:pt-12'>
          <SectionHeading
            eyebrow='My Portfolio'
            title='My Latest'
            accent='Projects'
            action={<PillButton onClick={openStartProject} label='Start a Project' />}
          />

          <div className='mb-12 flex flex-wrap items-center gap-3 md:mb-8' aria-label='Filter projects by category'>
            {projectCategories.map((category) => {
              const isActive = activeCategories.includes(category)
              return (
                <button
                  key={category}
                  type='button'
                  onClick={() => toggleCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                    ${isActive
                      ? 'border-accent bg-accent text-ink'
                      : 'border-ink/20 text-ink hover:border-ink'}`}
                >
                  {category}
                </button>
              )
            })}
            <button
              type='button'
              onClick={() => setActiveCategories([])}
              disabled={activeCategories.length === 0}
              className='ml-2 text-sm font-semibold underline underline-offset-4 transition-colors enabled:text-ink enabled:hover:text-muted disabled:cursor-default disabled:text-muted/60'
            >
              Reset filters
            </button>
          </div>

          <motion.div layout={!reduceMotion} className='grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-6'>
            <AnimatePresence mode='popLayout'>
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} priority={index === 0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Layout>

        <ContactSection blurb='Like what you see? Tell me about the project you have in mind.' />
      </main>
    </>
  )
}

export default Projects
