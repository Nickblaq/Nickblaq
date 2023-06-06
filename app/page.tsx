

import BlurImage from '@/components/blurimage';
import nick from '../public/nick.jpg'
import Footer from '@/components/footer';


export default function Home() {

  return (
    <>

    <main className="px-6 max-w-6xl  mx-auto leading-loose tracking-wider text-base md:text-xl overflow-y-auto">
    <div className='flex flex-col md:flex-row md:justify-between items-center'>
      <div className='max-w-xl mx-auto md:w-5/12  md:h-auto block'>
      <div className='rounded-xl bg-origin-border overflow-hidden'>
      <BlurImage 
      className='bg-cover' 
       width={716} 
       height={1024}
      src={nick} 
      alt='Nickblaq' />
      </div>
      </div>
      
   
      <div className='w-full md:w-6/12 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10 text-xl md:font-medium font-normal leading-loose underline-offset-2'>
        <h1 className='leading-10 mt-10 pb-2 text-3xl md:text-5xl font-bold md:font-extrabold tracking-normal'>
        Hi there, 
        </h1>
        <h2 className=' py-6'>
        I&apos;m <strong>Nicholas Okoro</strong> and I love crafting impeccable accessable <strong>User Interface</strong> and coding things on the web.
           </h2>
        <h2 className='xl:mt-8 2xl:mt-10 '>
       As well as <strong><a className='underline' href="https://nickblaq.xyz/blog" target='_blank' rel='noreferrer'>wrtitng</a></strong>{" "} and{" "}
       <strong><a className='underline' href="https://github.com/nickblaq"  target='_blank' rel='noreferrer'>coding</a></strong>{" "}
       you can find me on <strong><a className='underline' href="https://twitter.com/nickblaq" target='_blank' rel='noreferrer'>Twitter</a></strong>.
        </h2>
        <p>Interested in other things? Reach out by email me at <strong><a className='underline' href="mailto:nickblaq@nickblaq.xyz" target='_blank' rel='noreferrer'>nickblaq@nickblaq.xyz</a></strong>.</p>
      </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
