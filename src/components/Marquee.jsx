import React from "react";
import {motion} from 'framer-motion';
export default function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className="w-full py-10 rounded-t-3xl max-h-[60vh] mt-40 overflow-hidden bg-[#004D43] ">
      <div className="flex text-white overflow-hidden font-Founders ">
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity, duration:10}} className="border-y-2 border-gray-500 px-18 text-[27vw] leading-[0.8] uppercase whitespace-nowrap">
          I AM AKASH JASROTIA
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity, duration:10}} className="border-y-2 border-gray-500 px-18 text-[27vw] leading-[0.8] uppercase whitespace-nowrap">
          I AM AKASH JASROTIA
        </motion.h1>
      </div>
    </div>
  );
}
