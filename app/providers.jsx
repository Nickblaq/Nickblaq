'use client'

import { AnimatePresence, motion } from "framer-motion";



export const Providers = ({ children }) => {

    const spring = {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        when: 'afterChildren'
      };
    return
    <>
     <AnimatePresence>
        <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container">
                {children}
              </motion.div>
    </AnimatePresence>
    </>
}

