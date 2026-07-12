import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// bazil.fr/design-style strip: a row of work images in an arc that rise at
// different speeds while scrolling. Swap the images by editing this list.
const images = [
  '/images/projects/nft-collection-website-cover-image.jpg',
  '/images/projects/agency-website-cover-image.jpg',
  '/images/projects/fashion-studio-website.jpg',
  '/images/projects/portfolio-cover-image.jpg',
  '/images/projects/crypto-screener-cover-image.jpg',
  '/images/projects/devdreaming.jpg',
  '/images/projects/crypto-screener-cover-image-1.jpg',
]

// Depth per position: outer images barely move, the center moves the most.
const depths = [0, 1, 2, 3, 2, 1, 0]
// Hide outer columns on smaller screens so the strip stays readable.
const responsive = ['md:hidden', 'sm:hidden', '', '', '', 'sm:hidden', 'md:hidden']

const RisingImage = ({ src, depth, progress, hiddenClass, reduceMotion }) => {
  const y = useTransform(progress, [0, 1], [40 + depth * 45, -(10 + depth * 35)])
  return (
    <motion.div
      className={`flex-1 min-w-0 ${hiddenClass}`}
      style={reduceMotion ? undefined : { y }}
    >
      <Image
        src={src}
        alt=''
        width={1200}
        height={720}
        sizes='(max-width: 767px) 33vw, 15vw'
        className='w-full h-auto object-cover rounded-xl border border-ink/15'
      />
    </motion.div>
  )
}

const HeroImageStrip = () => {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <div ref={ref} className='w-full overflow-hidden pt-12 pb-4 md:pt-8'>
      <motion.div
        className='flex items-end justify-center gap-4 max-w-7xl mx-auto px-8 sm:px-4 sm:gap-3'
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {images.map((src, i) => (
          <RisingImage
            key={src}
            src={src}
            depth={depths[i]}
            hiddenClass={responsive[i]}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default HeroImageStrip
