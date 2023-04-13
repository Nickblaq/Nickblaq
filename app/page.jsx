
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

import { Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';

import Navbar from '@/components/Navbar';
import SkillsIcons from '@/components/skills-icon';
import SkillName from '@/components/skills-name';
import skills from "@/utils/skills";
import HeaderSmall from '@/components/header-small';
import Footer from '@/components/footer';

export default function Home() {
  

  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80
  };


  return (
    <>
    <div className='container mx-auto'>
    <main className="mx-auto w-full">
    {/* <Navbar /> */}
    <section className='flex flex-col md:flex-row justify-between items-end border-b-black pb-8 md:pb-12 lg:pb-16 2xl:pb-24'>
      <div className='w-full md:w-6/12 border-t border-t-black pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='leading-10 mt-10 scroll-m-20 pb-2 text-3xl md:text-5xl font-semibold tracking-tight transition-colors first:mt-0'>
          Ikechukwu Okoro
          <br className='' />
           <span className=' font-normal mt-2 text-gray-900/50'>I build beautiful & accessable things for the web.</span>
        </h1>
        <p className='leading-loose mt-5 xl:mt-8 2xl:mt-10 text-base md:text-lg'>
        "A fresher with experience", this line says exactly who he is. 
        I'm a software engineer with speciality in building (and occasionally reserach, design) cutting edge production ready web apps.
        I'm focused on research, re-think & implemenation of cutting edge techonlogies for humananity accessibility and consumption.
        </p>
      </div>

      <div className='w-full flex flex-col items-end md:items-start md:w-5/12 md:pb-1 2xl:pb-2'>
      <div className='relative'>
   <img src='/meglasses.jpg' alt='picture of me wearing glasees' />
      </div>
      <ul className='mt-8 2xl:mt-12 flex gap-5 md:gap-7 2xl:gap-4'>
        <li className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer'><Github /></li>
        <li className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer'><Linkedin /></li>
        <li className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer'><Twitter /></li>
        <li className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer'><Instagram /></li>
        <li className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 cursor-pointer'><Mail /></li>
      </ul>
      </div>
    </section>


    <section className='mt-28 pb-16 leading-loose'>
      <HeaderSmall number='01' text='About me' />

      <p>I enjoy creating things that live on the internet.
        My interest in web dev started back in 2019 when I decided to tey out this 2 weeks bootcamp, turns out I had obsession
        obsession and interest in understanding how thw eb technologies under the hood. 
        Tools like HTML, CSS and JAVASCRIPT can be used web apps.
      </p>

      <p>After years of study, practice, I found myself privilaged of working on some amazing projects, consulting and learning more.
      </p>

      <p>Fast forward to 2023, I found decided to have a "hard reset" on my approach to web technologies.
        With React 18, we are forced to rethink how modern web apps can be built.
         </p>

         <p>Specializing in Using NextJS framework to re-achitect, implement better products.</p>
    </section>


    <section className='mt-28 leading-loose'>
      <HeaderSmall number='02' text='Skills' />

      <p>Here's a few tech I choose to specialize and work with recently:
      </p>

      <p>Javascript, Typescript, Tailwind, MDX, NextJS (a powerful web framework).
      </p>.

         <p>Curious? Blog coming up, join the waitlist now!.</p>
    </section>

    {/* <Footer /> */}

    </main>
    </div>
    </>
  )
}

