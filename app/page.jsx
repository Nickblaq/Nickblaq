
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

import { Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';

import Navbar from '@/components/Navbar';
import SkillsIcons from '@/components/skills-icon';
import SkillName from '@/components/skills-name';
import skills from "@/utils/skills";

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
        <h1 className='mt-10 scroll-m-20 pb-2 text-3xl md:text-5xl font-semibold tracking-tight transition-colors first:mt-0'>
          The software developer who combine various tech stacks to crafts beautiful & accessable web apps.
        </h1>
        <p className='mt-5 xl:mt-8 2xl:mt-10 text-base md:text-lg'>
        "A fresher with experience", this line says exactly who he is. 
        I'm a software developer helping tech-constrained teams access, prototype & bring web apps to live.
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



    <section className='flex flex-col md:flex-row md:justify-between md:items-end border-b-black pb-8 md:pb-12 lg:pb-16 2xl:pb-24'>
      <div className='w-full md:w-5/12 border-t border-t-black pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
          What does he do?
        </h1>
        <p className='mt-5 xl:mt-8 2xl:mt-10'>
        He creates elegant, accessable, logical cross screen web mobile app solutions. In his hobby time, he
                read,research and cooks.
        </p>
      </div>
      <div className='md:w-7/12 '>
        <div className='md:flex hidden w-full items-end justify-center`'>
        <SkillsIcons />
        </div>
        <div className='md:hidden block'>
        {skills.map(({ idx,  name }) => {
        return <>
           <SkillName key={idx} name={name} />
           </>
      })}

     
        </div>
      </div>
    </section>


    <section className='flex flex-col md:flex-row justify-between border-black border-t pb-8 md:pb-12 lg:pb-16 2xl:pb-24'>
    <div className='w-full md:w-7/12 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10 items-start'>
        <h1 className='mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
         Peace of mind
        </h1>
      </div>
      <div className='md:w-5/12 w-full'>
        <div className=''>
        <p className='mt-5 xl:mt-8 2xl:mt-10'>
        He creates elegant, accessable, logical cross screen web mobile app solutions. In his hobby time, he
                read,research and cooks.
        </p>
        <p className='mt-5 xl:mt-8 2xl:mt-10'>
        Are you having difficulty delivering experiential marketing campaigns that involve custom technology? Whether it's flaky vendors, unpredicable costs or lengthy lead times, delivering tech projects beyond simple Wordpress sites is hard.
        </p>
        <p className='mt-5 xl:mt-8 2xl:mt-10'>
        I can help you take the guesswork & uncertainty out of the process by answering the important questions.
        </p>
        </div>
        
        <ul className=' list-disc list-inside py-8'>
          <li><strong>What are we going to do?</strong><p>If you've got pitches looming but short on ideas, I'm here to help generate new ideas or provide easy-wins that are guaranteed to work.</p></li>
        </ul>
      </div>
    </section>
    </main>
    </div>
   {/* <h1 className='text-red-500 text-xl' style={{fontFamily: inter}}>Hello World</h1> */}
    </>
  )
}

