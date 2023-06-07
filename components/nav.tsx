'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import {  Github, Twitter, Instagram } from 'lucide-react';

const externalLinks = [
  {
    id: 1,
    name: 'Github',
    link: 'https://github.com/nickblaq',
    icon: <Github />,
    show: true
  },
  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com/nickblaq',
    icon: <Twitter />,
    show: true
  },
  {
    id: 3,
    name: 'Instagram',
    link: 'https://instagram.com/nickblaq',
    icon: <Instagram />,
    show: true
  },
]

const ExternalLinks = () => {
   return (
    <>
    <ul className='flex items-center gap-5'>
      { externalLinks.map((data) => {
        return (
          <li key={data.id} className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer mx-auto'>
            <a href={data.link} target="_blank">
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
        <div className="w-full mx-auto h-20 md:px-24 px-4 mb-8  border-b border-gray-500 flex justify-around md:justify-between items-center md:text-5xl text-2xl md:font-bold font-semibold">

       <Link aria-label="Nicholas Okoro" href="/">
      <h1>Nickblaq</h1>
      </Link>
      
      <div className="flex gap-6 md:gap-24 items-center -ml-8 md:ml-0">
       <ul className='flex items-center gap-3 md:gap-8 font-normal text-xl md:text-2xl'>
            <Link href='/blog'>
            <li className='cursor-pointer  '>
              <p>Blog</p>
            </li>
            </Link>
            <Link href='/craft'>
            <li className='cursor-pointer'>
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