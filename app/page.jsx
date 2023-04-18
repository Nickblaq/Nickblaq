
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';

import HeaderSmall from '@/components/header-small';


export default function Home() {
  

    // onclick scroll to element with id of the section 
    const scrollToSection = (id) => {
      const element = document.getElementById(id)
      console.log(element?.offsetTop)
      // scroll 90px above the element
      window?.scrollTo({ top: element?.offsetTop - 90, behavior: 'smooth' })
      // element?.scrollIntoView({ behavior: 'smooth' })
    }
  
    // const scrolltop = () => {
    //   window?.scrollTo({ top: 0, behavior: 'smooth' })
    //   }


  return (
    <>
    <div className='container mx-auto'>
    <main className="mx-auto w-full">
    {/* <Navbar /> */}
    <section id='home' className='flex flex-col md:flex-row justify-between items-end border-b-black pb-4 md:pb-12 lg:pb-16 2xl:pb-24'>
      <div className='w-full md:w-6/12 border-t border-t-black pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='leading-10 mt-10 scroll-m-20 pb-2 text-3xl md:text-5xl font-semibold tracking-tight transition-colors first:mt-0'>
          Nicholas Okoro
          <br className='' />
           <span className=' font-normal mt-2 text-gray-900/50 dark:text-red-200/50'>I build beautiful & accessable things for the web.</span>
        </h1>
        <p className='leading-loose mt-5 xl:mt-8 2xl:mt-10 text-base md:text-lg'>
        "A fresher with experience", this line says exactly who he is. 
        A <strong> Frontend Software Engineer </strong> specializes in creating (and occasionally reserach, design) cutting edge production ready web apps.
        Focused on research, re-think, re-learn & implemenation of cutting edge web techonlogies for human accessibility and consumption.
        </p>
      </div>

      <div className='w-full flex flex-col items-end md:items-start md:w-5/12 md:pb-1 2xl:pb-2'>
      <div className='relative'>
   <img src='/ik.jpg' alt='picture of me wearing glasees' />
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
    </main>
    </div>
    </>
  )
}

