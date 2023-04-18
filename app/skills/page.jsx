 import HeaderSmall from "@/components/header-small"

const skills = [

  {
    id: 1,
    item : 'VSCode',
    desc: 'Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control'
  },

  {
    id: 2,
    item : 'Html',
    desc: 'HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet.'
  },

  {
    id: 3,
    item : 'Css',
    desc: 'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).'
  },

  {
    id: 4,
    item : 'Javascript',
    desc: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else'
  },

  {
    id: 5,
    item : 'Typescript',
    desc: 'TypeScript extends JavaScript and improves the developer experience adding type safety.'
  },

  {
    id: 6,
    item : 'Angular',
    desc: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.'
  },

  {
    id: 7,
    item : 'ReactJs',
    desc: 'React. js framework is an open-source JavaScript framework and library used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.'
  },

  {
    id: 8,
    item : 'NodeJS',
    desc: 'Node. js to create server-side web applications.'
  },
  {
    id: 9,
    item : 'Github',
    desc: 'GitHub is a code hosting platform for version control and collaboration.'
  },
  {
    id: 10,
    item : 'Database',
    desc: 'Database software often used for data management and information storage.'
  },
  {
    id: 11,
    item : 'Web3 UI',
    desc: 'Web3 decentralized web protocol. Tools like web3js, etherjs, wagmi are used to provide UI access.'
  }
]
export default function Index () {

    return (
        <>
         <div className='container mx-auto'>
    <main className="mx-auto w-full">
        <section id='about-me' className='pt-8 md:pt-12 lg:pt-16 pb-8'>
        <h1 className='leading-10 mt-10 scroll-m-20 pb-2 text-3xl  font-semibold tracking-normal transition-colors first:mt-0'>
          My skills implentations in web development was made possible with this some tools and languages.
        </h1>
       <div>
       <h2 className="py-4">I enhanced my web development skills, made workflow smooth, fast and overall better developer experience.
         some factors were taken into place, i.e community adoption, developer experience.</h2>

       <ul className="list-outside pt-8 text-left space-y-8">
      {
        skills.map((data) => {
          return (

            <li key={data.id} className="flex flex-col gap-2 md:gap-1 md:text-left leading-loose">
              <HeaderSmall number={data.id} text={data.item} />
            <p className="md:text-xl">{data.desc}</p>
          </li>
          )
        })
      }
             </ul>

       </div>
    </section>
    </main>
    </div>
        </>
    )
}
