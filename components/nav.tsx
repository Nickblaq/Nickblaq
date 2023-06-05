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



export default function Nav() {
    const pathname = usePathname()

    
    return (
        <>
                <div className="h-20 md:px-24 px-4 mb-8 flex justify-between items-center border-b border-gray-500">
                <Link aria-label="Nicholas Okoro" href="/">
    <h1>Nickblaq</h1>
    </Link>
       <ul className='flex items-center gap-5'>
      {
        externalLinks.map((data) => {
          return (
            <>
            {
              data.show === true && 
           
            <li key={data.id} className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer mx-auto'>
              <a href={data.link} target="_blank">
                {data.icon}
              </a>
            </li>
          }
            </>
          )
        })
      }
      </ul>
        </div>
        </>
    )
}