import '@/styles/globals.css'
import { Bodoni_Moda as Moda } from 'next/font/google'
import Sidebar from '@/components/side-bar'
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';

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
    siteName: 'Nickblaq',
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
    title: 'nickblaq',
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
    <html lang="en"
    className={clsx(
      'text-gray-900/75 bg-yellow-700/5 dark:text-white dark:bg-[#111010]',
      ModaFont.variable
    )}
    >
      <body className='antialiased max-w-6xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto h-screen'>
          
      <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 ">
          {children}
          <Footer />
          <Analytics />
        </main>
        </body>
    </html>
  )
}