import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/developer-pic-1.png'

const MotionText = motion.div
const MotionImage = motion(Image)

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeBucks - Home</title>
        <meta name="description" content="CodeBucks Developer Portfolio" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <MotionImage 
                src={profilePic} 
                alt="CodeBucks" 
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <MotionText 
                className='text-6xl font-bold inline-block w-full text-dark dark:text-light xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl'
                initial={{opacity:0, y:50}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
              >
                Turning Ideas Into Impact With Design, Code & AI Creativity.
              </MotionText>
              <MotionText 
                className='my-4 text-base font-medium md:text-sm sm:text-xs'
                initial={{opacity:0, y:50}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.4}}
              >
                As a creative technologist, I blend graphic design, AI-powered content creation, and web development to bring powerful ideas to life. From storytelling through visuals to building functional web experiences, I use tools like MidJourney, Final Cut Pro, Canva, and JavaScript to craft engaging, high-impact work.
                Explore my portfolio of designs, videos, and web projects that connect creativity with technology.
              </MotionText>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Nafiul Islam CV 2025.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume 
                  <svg className="w-6 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="m12 15 3-3m0 0-3-3m3 3H6m6 6a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="mailto:abcd@gmail.com" target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={'/images/svgs/miscellaneous_icons_1.svg'} alt="CodeBucks" className='w-full h-auto' width={100} height={100}/>
        </div>
      </main>
    </>
  )
}
