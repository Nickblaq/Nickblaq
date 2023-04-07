
'use client'
import Link from "next/link"
import { Mail } from "lucide-react"


export default function Navbar() {

    return (
        <>
            <nav className="w-full flex justify-between items-center pt-10 lg:pt-16 2xl:pt-24 pb-10 lg:pb-32 2xl:pb-40">
            <p className="text-lg lg:text-xl 2xl:text-2xl">
                NickblaQ 
            </p>
            <Mail className="w-10 h-10 " />
            </nav>
        </>
    )

}