import '@/styles/globals.css'
import { Bodoni_Moda } from 'next/font/google'
import Sidebar from '@/components/side-bar'
// export const metadata = {
//   title: 'Nickblaq | Personaal Portfolio',
//   description: 'Nickblaq personal portfolio built on nextjs and tailwindcss',
// }

export const metadata = {
  title: {
    default: '',
    template: '',
  },
  description: '',
  openGraph: {
    title: '',
    description: '.',
    url: 'https://siteurl',
    siteName: '',
    images: [
      {
        url: 'https://yoursite/og.jpg',
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
    title: '',
    card: '',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: '',
    yandex: '',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className='text-gray-900/75 bg-gray-200/90 dark:text-white dark:bg-[#111010]'
    >
      <body className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto'>
          
      <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          
        </main>
        </body>
    </html>
  )
}