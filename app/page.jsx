
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';
import Skills from '@/components/skills';
import SkillsIcons from '@/components/skills-icon';

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
    <Navbar />
    <section className='flex flex-col md:flex-row justify-between items-end border-b-black pb-8 md:pb-12 lg:pb-16 2xl:pb-24'>
      <div className='w-full md:w-6/12 border-t border-t-black pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
          The software developer who combine various tech stacks to crafts beautiful & accessable web apps.
        </h1>
        <p className='mt-5 xl:mt-8 2xl:mt-10'>
        "A fresher with experience", this line says exactly who he is. 
        I'm a software developer helping tech-constrained teams access, prototype & bring web apps to live.
        </p>
      </div>

      <div className='w-full flex flex-col items-end md:items-start md:w-5/12 md:pb-1 2xl:pb-2'>
      <div className='relative'>
        {/* <Image /> */}
      </div>
      <ul className='mt-8 2xl:mt-12 flex gap-3 2xl:gap-4'>
        <li className='w-4 h-4 lg:w-5 lg:h-5 2xl:w-6'></li>
      </ul>
      </div>
    </section>



    <section className='flex flex-col md:flex-row justify-between items-end border-b-black pb-8 md:pb-12 lg:pb-16 2xl:pb-24'>
      <div className='w-full md:w-5/12 border-t border-t-black pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text'>
          What does he do?
        </h1>
        <p className='mt-5 xl:mt-8 2xl:mt-10'>
        He creates elegant, accessable, logical cross screen web mobile app solutions. In his hobby time, he
                read,research and cooks.
        </p>
      </div>
      <div className='md:w-7/12'>
        <SkillsIcons />
      </div>
    </section>

    {/* <Landing /> */}
    </main>
    </div>
   {/* <h1 className='text-red-500 text-xl' style={{fontFamily: inter}}>Hello World</h1> */}
    </>
  )
}

