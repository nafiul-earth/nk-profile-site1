import '@/styles/globals.css'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { StartProjectProvider } from '@/components/StartProjectFlow'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${jakarta.variable} ${grotesk.variable} font-sans bg-paper text-ink w-full min-h-screen`}>
        <StartProjectProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </StartProjectProvider>
      </main>
    </>
  )
}
