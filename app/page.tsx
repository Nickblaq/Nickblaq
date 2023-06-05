

import BlurImage from '@/components/blurimage';
import nick from '../public/nick.jpg'


export default function Home() {

  return (
    <>

    <main className="px-6 max-w-6xl h-[80vh] mx-auto">
    <div className='flex flex-col h-full md:flex-row md:justify-between items-center'>
      <div className='relative w-full md:w-5/12 md:h-auto'>
      <BlurImage 
      className='bg-cover' 
       width={716} 
       height={1024}
      src={nick} 
      alt='pic of nickblaq waring cool sunglasses' />
      </div>
      
   
      <div className='w-full md:w-6/12  pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10'>
        <h1 className='leading-10 mt-10 scroll-m-20 pb-2 text-3xl md:text-5xl font-semibold md:font-extrabold tracking-normal transition-colors first:mt-0'>
          Nicholas Okoro
          <br className='py-8'></br>

           <p className='md:tracking-wider font-normal md:font-semibold pt-5 md:pt-10 text-gray-900/50 dark:text-indigo-500/50'>
            Steady crafting accessable UI systems on the web .</p>
        </h1>
        <h2 className='leading-loose tracking-wider mt-5 xl:mt-8 2xl:mt-10 text-base md:text-xl'>
        As a dedicated <strong>Frontend Software Engineer</strong> my expertise lies in designing &amp; building visually appealing &amp; user-friendly web applications that are both functional &amp; accessible. I am passionate about creating solutions that make a difference in people's lives.
With a focus on research, design, &amp; implementing innovative web technologies.
        </h2>
      </div>
      </div>
    </main>
    </>
  )
}
