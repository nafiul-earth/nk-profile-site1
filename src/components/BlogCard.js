import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const BlogCard = ({ blog }) => {
  return (
    <motion.article
      className='w-full bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col gap-3'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blogs/${blog.slug}`} className='w-full overflow-hidden rounded-xl'>
        <Image
          src={blog.img}
          alt={blog.title}
          width={800}
          height={500}
          className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </Link>
      <div className='flex items-center gap-2'>
        <span className='bg-sun text-ink text-xs font-semibold px-3 py-1.5 rounded-full'>{blog.category}</span>
        <span className='bg-sun text-ink text-xs font-semibold px-3 py-1.5 rounded-full'>{blog.date}</span>
      </div>
      <h3 className='text-lg font-bold text-ink leading-snug'>
        <Link href={`/blogs/${blog.slug}`} className='hover:text-forest transition-colors'>{blog.title}</Link>
      </h3>
      <p className='text-sm font-medium text-ink/70'>{blog.excerpt}</p>
      <Link href={`/blogs/${blog.slug}`} className='text-sm font-semibold underline underline-offset-4 hover:text-sun transition-colors'>
        Read More
      </Link>
    </motion.article>
  )
}

export default BlogCard
