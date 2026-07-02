import Head from 'next/head'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import ContactSection from '@/components/sections/ContactSection'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

const Projects = () => {
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
          <SectionHeading eyebrow='My Portfolio' title='My Latest' accent='Projects' center />
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-6'>
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Layout>

        <ContactSection blurb='Like what you see? Tell me about the project you have in mind.' />
      </main>
    </>
  )
}

export default Projects
