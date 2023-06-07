import './global.css';
import { Bodoni_Moda as Moda } from 'next/font/google'
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
import Nav from '@/components/nav';
import { Metadata } from 'next';

// const ModaFont = Moda({
//   variable: "--font-moda",
//   subsets: ['latin'],
//   display: 'swap'
// })

export const metadata: Metadata = {
  title: 'Nickblaq',
  description: 'Frontend Software Engineer. | Crafting polished UI & accessable things on the web',
  openGraph: {
    title: 'nickblaq',
    description: 'Frontend Software Engineer. | I create beautiful & accessable things on the web',
    url: 'https://nickblaq.xyz',
    siteName: 'niclblaq',
    images: [
      {
        url: '/nick.jpg',
        width: 716,
        height: 1024,
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
    description: 'Frontend Software Engineer. | Crafting polished UI & accessable things on the web',
    card: 'summary_large_image',
    siteId: 'nickblaq',
    creator: '@nickblaq'
  },
  icons: {
    shortcut: '/nick.jpg',
  },
  verification: {
    google: '',
    yandex: '',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='text-neutral-950 bg-yellow-700/5 dark:text-white dark:bg-[#111010] antialiased '>
        <Nav />
        <main className='container mx-auto px-2'>
          {children}
          </main>
       
          {/* <Analytics /> */}
        </body>
    </html>
  )
}