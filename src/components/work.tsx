"use client";

import { JSX, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

export default function Work(): JSX.Element {
  const [hoverIndex, setHoverIndex] = useState<number>(0);

  return (
    <div id="work" className="min-h-screen w-[97%] text-white relative mx-auto">
      <h1 className="my-10 font-pf text-5xl text-center">Work</h1>
      <div className="flex flex-col h-full w-full">
        <motion.div
          layoutId="active"
          className="flex items-center min-h-16 min-w-16 relative group border-y border-white"
          onMouseOver={() => setHoverIndex(1)}
          onMouseOut={() => setHoverIndex(0)}
        >
          <h1 className="font-roboto text-xl font-semibold flex-1 cursor-pointer group-hover:text-black group-hover:translate-x-4 transition duration-300 z-10">
            Director at Shadows Photography
          </h1>
          <FaArrowRight className="text-3xl mx-4 z-10 group-hover:text-black group-hover:-translate-x-4 transition duration-300" />
          <AnimatePresence>
            {hoverIndex === 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 origin-top bg-white"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layoutId="active"
          className="flex items-center min-h-16 min-w-16 relative group border-y border-white"
          onMouseOver={() => setHoverIndex(2)}
          onMouseOut={() => setHoverIndex(0)}
        >
          <h1 className="font-roboto text-xl font-semibold flex-1 cursor-pointer group-hover:text-black group-hover:translate-x-4 transition duration-300 z-10">
            Art Instructor at UConn
          </h1>
          <FaArrowRight className="text-3xl mx-4 z-10 group-hover:text-black group-hover:-translate-x-4 transition duration-300" />
          <AnimatePresence>
            {hoverIndex === 2 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 origin-top bg-white"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layoutId="active"
          className="flex items-center min-h-16 min-w-16 relative group border-y border-white"
          onMouseOver={() => setHoverIndex(3)}
          onMouseOut={() => setHoverIndex(0)}
        >
          <h1 className="font-roboto text-xl font-semibold flex-1 cursor-pointer group-hover:text-black group-hover:translate-x-4 transition duration-300 z-10">
            Lead Photographer at Creative & Co.
          </h1>
          <FaArrowRight className="text-3xl mx-4 z-10 group-hover:text-black group-hover:-translate-x-4 transition duration-300" />
          <AnimatePresence>
            {hoverIndex === 3 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 origin-top bg-white"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layoutId="active"
          className="flex items-center min-h-16 min-w-16 relative group border-y border-white"
          onMouseOver={() => setHoverIndex(4)}
          onMouseOut={() => setHoverIndex(0)}
        >
          <h1 className="font-roboto text-xl font-semibold flex-1 cursor-pointer group-hover:text-black group-hover:translate-x-4 transition duration-300 z-10">
            Lead Photographer at Sundae
          </h1>
          <FaArrowRight className="text-3xl mx-4 z-10 group-hover:text-black group-hover:-translate-x-4 transition duration-300" />
          <AnimatePresence>
            {hoverIndex === 4 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 origin-top bg-white"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layoutId="active"
          className="flex items-center min-h-16 min-w-16 relative group border-y border-white"
          onMouseOver={() => setHoverIndex(5)}
          onMouseOut={() => setHoverIndex(0)}
        >
          <h1 className="font-roboto text-xl font-semibold flex-1 cursor-pointer group-hover:text-black group-hover:translate-x-4 transition duration-300 z-10">
          Lead Photographer at National Geographic
          </h1>
          <FaArrowRight className="text-3xl mx-4 z-10 group-hover:text-black group-hover:-translate-x-4 transition duration-300" />
          <AnimatePresence>
            {hoverIndex === 5 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 origin-top bg-white"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layoutId="active"
          className="flex items-center min-h-16 min-w-16 relative group border-y border-white"
          onMouseOver={() => setHoverIndex(6)}
          onMouseOut={() => setHoverIndex(0)}
        >
          <h1 className="font-roboto text-xl font-semibold flex-1 cursor-pointer group-hover:text-black group-hover:translate-x-4 transition duration-300 z-10">
            Freelance Photographer
          </h1>
          <FaArrowRight className="text-3xl mx-4 z-10 group-hover:text-black group-hover:-translate-x-4 transition duration-300" />
          <AnimatePresence>
            {hoverIndex === 6 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 origin-top bg-white"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
