import '@/styles/globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${jakarta.variable} font-sans bg-cream text-ink w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
