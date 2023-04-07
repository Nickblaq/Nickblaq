'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import HeaderSmall from "./header-small";


export default function Landing () {

    const config = {
        type: 'spring',
        damping: 10,
        stiffness: 80
      };

      const router = useRouter()

    return (
        <>
        <motion.div transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
        exit={{ x: 0, opacity: 0 }}>

<div className="h-84.5vh ml-4 sm:mx-12 md:mx-16">
          <div className="flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 -mt-10 relative">
              <img
                src="/images/vectors/triangle.svg"
                alt="Triangle 3d Vector"
                className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin text-black fill-black"
              />
              <HeaderSmall text="Who is he?" />
              <h1 className="text-xl sm:text-2xl xl:text-1xl font-extrabold text-purple-500 leading-none mb-3">
                Nickblaq
              </h1>
              <h5 className="text-4xl font-lighttext-justify">
               
              He is a  His perfect balance of technical & managerial skills stands him apart from the crowd.
              </h5>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end ">
            <img
              
              alt="Harsh Goel"
              className="ml-auto w-100 lg:w-4/5 pointer-events-none text-right"
            />
          </div>
        </div>
        </motion.div>
        </>
    )
}