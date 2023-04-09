import '@/styles/globals.css'

export const metadata = {
  title: 'Nickblaq | Personaal Portfolio',
  description: 'Nickblaq personal portfolio built on nextjs and tailwindcss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-yellow-700/5 px-4 mx-auto max-w-6xl overflow-x-hidden'>
        {children}</body>
    </html>
  )
}