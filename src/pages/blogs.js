import Head from 'next/head'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import BlogCard from '@/components/BlogCard'
import ContactSection from '@/components/sections/ContactSection'
import { blogs } from '@/data/blogs'
import { site } from '@/data/site'

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs — {site.name}</title>
        <meta
          name="description"
          content={`Articles by ${site.name} on AI tools, automation workflows, design, and creative technology.`}
        />
      </Head>
      <main className='w-full'>
        <PageHeader title='Blogs' />

        <Layout className='pt-20 md:pt-12'>
          <SectionHeading eyebrow='News & Blogs' title='Our Latest' accent='News & Blogs' center />
          <div className='grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1'>
            {blogs.map((b) => <BlogCard key={b.slug} blog={b} />)}
          </div>
        </Layout>

        <ContactSection blurb='Want content like this for your brand? Let’s talk.' />
      </main>
    </>
  )
}

export default Blogs
