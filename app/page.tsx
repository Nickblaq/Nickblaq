
import { Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';
import BlurImage from '@/components/blurimage';

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
  {
    id: 4,
    name: 'Mail',
    link: 'mailto:nickblaq@nickblaq.xyz',
    icon: <Mail />,
    show: false
  },
  {
    id: 5,
    name: 'LinkedIn',
    link: '/',
    icon: <Linkedin />,
    show: false
  },
]
import nick from '../public/nick.jpg'

export default function Home() {

  return (
    <>
    <div className='mx-auto overflow-y-hidden'>
    <main className="">
  
    <section className='flex flex-col md:flex-row justify-between items-end border-b-black pb-4 md:pb-12 lg:pb-16 2xl:pb-24'>
   
      <div className='relative w-full flex flex-col items-end md:items-start md:w-5/12 md:pb-1 2xl:pb-2'>
      {/* <div className=''> */}
      <BlurImage 
      className='bg-cover' 
       width={716} 
       height={1024}
      src={nick} 
      alt='Nickbaq face image' />
      {/* </div> */}
      <ul className='mt-8 2xl:mt-12 flex gap-5 md:gap-7 2xl:gap-4'>
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


      <div className='w-full md:w-6/12 border-t border-t-black pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='leading-10 mt-10 scroll-m-20 pb-2 text-3xl md:text-5xl font-semibold md:font-extrabold tracking-normal transition-colors first:mt-0'>
          Nicholas Okoro
          <br className='py-8'></br>

           <p className='md:tracking-wider font-normal md:font-semibold pt-5 md:pt-10 text-gray-900/50 dark:text-indigo-500/50'>
            I create beautiful &amp; accessable things for the web.</p>
        </h1>
        <h2 className='leading-loose tracking-wider mt-5 xl:mt-8 2xl:mt-10 text-base md:text-xl'>
        As a dedicated <strong>Frontend Software Engineer</strong> my expertise lies in designing &amp; building visually appealing &amp; user-friendly web applications that are both functional &amp; accessible. I am passionate about creating solutions that make a difference in people's lives.
With a focus on researching, designing, &amp; implementing innovative web technologies.
        </h2>
      </div>
    </section>
    </main>
    </div>
    </>
  )
}
