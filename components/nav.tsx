'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {  Github, Twitter } from 'lucide-react';

const externalLinks = [
  {
    id: 1,
    name: 'Github',
    link: 'https://github.com/nickblaq',
    icon: <Github className="h-7 w-7 md:h-9 md:w-9" />,
    show: true
  },
  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com/nickblaq',
    icon: <Twitter className="h-7 w-7 md:h-9 md:w-9" />,
    show: true
  },
]

const ExternalLinks = () => {
   return (
    <>
    <ul className='flex items-center gap-5'>
      { externalLinks.map((data) => {
        return (
          <li key={data.id} className='cursor-pointer mx-auto'>
            <a  href={data.link} target="_blank">
              {data.icon}
            </a>
          </li>
        )
      })}
    </ul>
    </>
   )
}



export default function Nav() {
    const pathname = usePathname()

    
    return (
        <>
        <div className="w-full mx-auto h-20 md:px-24 px-4 mb-8  border-b flex gap-3 justify-around md:justify-between items-center text-2xl font-bold">
      <div className="mr-2 md:mr-0">
       <Link aria-label="Nicholas Okoro" href="/">
      <h1>Nickblaq</h1>
      </Link>
      </div>
      
      <div className="flex gap-6 md:gap-24 items-center -ml-8 md:ml-0">
       <ul className='md:flex items-center gap-3 md:gap-8 hidden'>
            <Link
            className={cn(
              ' cursor-pointer',
              pathname === '/blog' && ' underline underline-offset-4 cursor-none text-gray-700/70'
            )} 
             href='/blog'>
            <li >
              <p>Blog</p>
            </li>
            </Link>
            <Link
             className={cn(
              ' cursor-pointer',
              pathname === '/craft' && ' underline underline-offset-4 cursor-none text-gray-700/70'
            )} 
             href='/craft'>
            <li>
              <p>Craft</p>
            </li>
            </Link>
      </ul>
      <ExternalLinks />
      </div>
        </div>
        </>
    )
}