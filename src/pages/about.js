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
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name="description" content="Learn more about CodeBucks, a passionate web developer." />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi, I'm <strong>CodeBucks</strong>, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                new and innovative ways to bring my clients' visions to life.
              </p>

              <p className='my-4 font-medium'>
                I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. 
              </p>

              <p className='font-medium'>
                Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="Codebucks" className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  satisfied clients
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  projects completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <div className='mt-64 w-full md:mt-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
              Skills
            </h2>
            <div className='w-full flex flex-wrap items-center justify-center'>
              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:0,y:0}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                Web
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"-20vw",y:"2vw"}}
                whileInView={{x:"-20vw",y:"2vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                CSS
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"20vw",y:"6vw"}}
                whileInView={{x:"20vw",y:"6vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                Javascript
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"0vw",y:"12vw"}}
                whileInView={{x:"0vw",y:"12vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                ReactJS
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"-20vw",y:"-15vw"}}
                whileInView={{x:"-20vw",y:"-15vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                NextJS
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"15vw",y:"-12vw"}}
                whileInView={{x:"15vw",y:"-12vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                GatsbyJS
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"32vw",y:"-5vw"}}
                whileInView={{x:"32vw",y:"-5vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                Web Design
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"0vw",y:"-20vw"}}
                whileInView={{x:"0vw",y:"-20vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                Figma
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"-25vw",y:"18vw"}}
                whileInView={{x:"-25vw",y:"18vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                Firebase
              </motion.div>

              <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold'
                whileHover={{scale:1.05}}
                initial={{x:"18vw",y:"18vw"}}
                whileInView={{x:"18vw",y:"18vw"}}
                transition={{duration:1.5}}
                viewport={{once:true}}
              >
                Tailwind CSS
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
