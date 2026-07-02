import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import PillButton from '@/components/PillButton'
import ContactSection from '@/components/sections/ContactSection'
import { blogs } from '@/data/blogs'
import { site } from '@/data/site'

const BlogPost = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title} — {site.name}</title>
        <meta name="description" content={blog.excerpt} />
      </Head>
      <main className='w-full'>
        <PageHeader title={blog.title} crumb={`Blogs / ${blog.category}`} />

        <Layout className='pt-20 md:pt-12'>
          <article className='w-full max-w-3xl mx-auto flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
              <span className='bg-sun text-ink text-xs font-semibold px-3 py-1.5 rounded-full'>{blog.category}</span>
              <span className='bg-sun text-ink text-xs font-semibold px-3 py-1.5 rounded-full'>{blog.date}</span>
            </div>
            <Image
              src={blog.img}
              alt={blog.title}
              width={1200}
              height={700}
              priority
              sizes='(max-width: 768px) 100vw, 768px'
              className='w-full h-72 object-cover rounded-2xl'
            />
            {blog.body.map((para) => (
              <p key={para.slice(0, 24)} className='text-base font-medium text-ink/80 leading-relaxed'>{para}</p>
            ))}
            <div className='mt-4'>
              <PillButton href={blog.mediumUrl} label='Read on Medium' external />
            </div>
          </article>
        </Layout>

        <ContactSection blurb='Want content like this for your brand? Let’s talk.' />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: blogs.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug)
  return { props: { blog } }
}

export default BlogPost
