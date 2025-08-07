import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref} />
}

const About = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta
          name="description"
          content="Learn more about CodeBucks, a passionate web developer."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          {/* ------------------------------------------------------------------ */}
          {/* BIOGRAPHY  */}
          {/* ------------------------------------------------------------------ */}
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m <strong>Nafiul</strong>, a graphic designer, AI content creator, and
                developer with a passion for transforming creative ideas into meaningful
                digital experiences. With over 4 years of experience, I specialise in
                combining design thinking, AI storytelling, and web development to build
                content that’s visually engaging and technically sound.
              </p>
              <p className="my-4 font-medium">
                From creating YouTube videos powered by tools like MidJourney, Runway, and
                Heygen, to designing brand visuals and responsive web layouts—I love
                working across mediums to bring stories to life.
              </p>
              <p className="font-medium">
                I also have extensive experience in designing logos, thumbnails, and
                promotional materials using Canva, Adobe Photoshop, and Illustrator. These
                assets help build strong visual identities that complement the stories I
                tell through film and digital content.
              </p>
              <p className="mb-4 mt-6 font-medium">
                For me, design and technology go hand in hand. Whether I&apos;m working on a
                digital brand, a short film, or a web application, I focus on crafting
                experiences that are not only beautiful but also impactful and easy to
                use.
              </p>
              <p className="font-medium">
                I look forward to every opportunity that allows me to merge creativity,
                code, and content—and I’m excited to bring that energy to your next
                project.
              </p>
            </div>
            {/* ------------------------------------------------------------------ */}
            {/* PROFILE PHOTO  */}
            {/* ------------------------------------------------------------------ */}
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-8 md:order-1"
            >
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Codebucks"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* ------------------------------------------------------------------ */}
            {/* STATS  */}
            {/* ------------------------------------------------------------------ */}
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              {[
                { value: 10, label: 'satisfied clients' },
                { value: 10, label: 'projects completed' },
                { value: 1, label: 'years of experience' },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={stat.value} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {stat.label}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* ------------------------------------------------------------------ */}
          {/* SKILLS  */}
          {/* ------------------------------------------------------------------ */}
          <div className="mt-64 w-full md:mt-32">
            <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
              Skills
            </h2>
            <div className="relative h-[80vh] w-full">
              {/* Fixed‑position bubbles */}
              {[
                { label: 'Web development', top: '10%', left: '10%', delay: 0 },
                { label: 'Canva', top: '15%', right: '15%', delay: 0.1 },
                { label: 'Adobe Photoshop', top: '40%', left: '15%', delay: 0.2 },
                { label: 'AI & Machine Learning', top: '-50%', left: '50%', center: true, delay: 0.3 },
                { label: 'Adobe Illustrator', top: '-40%', right: '15%', delay: 0.2 },
                { label: 'Midjourney', top: '30%', left: '30%', delay: 0.3 },
                { label: 'OpenAI & ChatGPT', top: '40%', right: '15%', delay: 0.4 },
                { label: 'Kling AI', top: '40%', left: '50%', centerX: true, delay: 0.5 },
                { label: 'Open ART', top: '5%', left: '50%', centerX: true, delay: 0.1 },
              ].map(({ label, delay, center, centerX, ...pos }) => (
                <motion.div
                  key={label}
                  className={`absolute flex items-center justify-center rounded-full bg-dark py-3 px-6 font-semibold text-light shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3`}
                  style={pos}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay }}
                  viewport={{ once: true }}
                >
                  {label}
                </motion.div>
              ))}

              {/* Polar‑layout extras (unique positions only) */}
              {[
                { label: 'CSS', x: '-20vw', y: '2vw' },
                { label: 'Javascript', x: '20vw', y: '-6vw' },
                { label: 'ReactJS', x: '0vw', y: '12vw' },
                { label: 'NextJS', x: '-20vw', y: '-15vw' },
                { label: 'Web Design', x: '32vw', y: '-5vw' },
                { label: 'Figma', x: '0vw', y: '-20vw' },
                { label: 'Tailwind CSS', x: '18vw', y: '-18vw' },
              ].map(({ label, x, y }) => (
                <motion.div
                  key={label}
                  className="absolute flex items-center justify-center rounded-full bg-dark py-3 px-6 font-semibold text-light shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
                  whileHover={{ scale: 1.05 }}
                  initial={{ x, y, opacity: 0 }}
                  whileInView={{ x, y, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default About
