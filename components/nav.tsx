'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"

const items = [
    {
        'id': 1,
        'type': false,
        'name': 'Home',
        url: '/',
        icon: 'home'
    },
    // {
    //     'id': 2,
    //     'type': false,
    //     'name': 'About',
    //     url: '/about',
    //     icon: 'user'
    // },
    {
        'id': 2,
        'type': false,
        'name': 'GuestBook',
        url: '/guessbook',
        icon: 'book'
    },
    {
        'id': 3,
        'type': false,
        'name': 'Craft',
        url: '/craft',
        icon: 'pencil'
    },
    {
        'id': 4,
        'type': false,
        'name': 'Work',
        url: '/work',
        icon: 'workflow'
    },
    // {
    //     'id': 5,
    //     'type': true,
    //     'name': 'twitter',
    //     url: 'twitter.com/nickblaq',
    //     icon: 'twitter'
    // },
    // {
    //     'id': 7,
    //     'type': 'social',
    //     'name': 'Work',
    //     url: '/',
    //     icon: 'workflow'
    // },
]

const socials = [
    {
        'id': 1,
        'socials': true,
        'name': 'twitter',
        url: 'twitter.com/nickblaq',
        icon: 'twitter'
    }
]


export default function Nav() {
    const pathname = usePathname()

    
    return (
        <>
                <div className="h-20 md:px-24 px-4 flex justify-between items-center border-b border-gray-500">
                <h1>NQ</h1>
        <nav className="flex items-center gap-5">
       
            {items.map((item, index) => {
                const Icon = Icons[item.icon]
                return (
                    item.url && (
                        <Link key={index} href={item.url}>
                            <span
                            className={cn(
                                'group flex items-center rounded-md text-sm font-medium',
                                pathname ===item.url ? 'text text-gray-200' : ' text-gray-200/80'
                            )}
                            >
                            <Icon className='mr-2 h-4 w-4' />
                            <span>{item.name}</span>
                            </span>
                        </Link>
                    )
                )
            })}
        </nav>
        </div>
        </>
    )
}