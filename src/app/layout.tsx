import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway, Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const raleway = Raleway({ subsets: ['latin'], display: 'swap', variable: '--font-raleway' })
const open_sans = Open_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-open-sans' })

export const metadata: Metadata = {
  title: 'Fylo',
  description: 'Fylo dark theme landing page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${open_sans.variable} scroll-smooth`}>
      <body className="font-open_sans duration-500 dark:bg-darkBlue dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
