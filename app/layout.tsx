import '@/styles/globals.css'
import { Bodoni_Moda as Moda } from 'next/font/google'
import Sidebar from '@/components/side-bar'
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import Navbar from '@/components/navbar';
import Nav from '@/components/nav';

const ModaFont = Moda({
  variable: "--font-moda",
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Nicholas Okoro',
  description: 'Frontend Software Engineer. | I create beautiful & accessable things on the web',
  openGraph: {
    title: 'Nicholas Okoro portfolio',
    description: 'Frontend Software Engineer. | I create beautiful & accessable things on the web',
    url: 'https://nickblaq.xyz',
    siteName: 'Nicholas Okoro portfolio',
    images: [
      {
        url: 'https://nickblaq.xyz/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Nickblaq',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.svg',
  },
  verification: {
    google: '',
    yandex: '',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(
        'text-neutral-950 bg-yellow-700/5 dark:text-white dark:bg-[#111010] antialiased' ,
        ModaFont.variable
      )}>    
      <Nav />
        <main className='max-w-4xl mb-40 flex flex-col px-4 w-full pt-[100px] md:mt-14 lg:mt-28 mx-auto min-h-screen scroll-m-20 overflow-x-hidden'>
          {children}
          {/* <Analytics /> */}
        </main>
        <Footer />
        </body>
    </html>
  )
}