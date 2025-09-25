import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.7" className="relative w-full h-[100vh] pt-1">
      <div className="mt-28 leading-[0.76] px-18">
        <div className="w-full text-[9vw] font-Founders text-[#212121]">
          <h1>WE CREATE</h1>
        </div>
        <div className="w-full align-center flex text-[9vw] gap-4 font-Founders text-[#212121]">
            <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.19, 1, 0.22, 1], duration:1}} className="w-[9vw] rounded-xl h-[6vw] md:mt-[2vh] mt-[1vh] bg-red-400"></motion.div>
          <h1>EYE-OPENING</h1>
        </div>
        <div className="w-full text-[9vw] font-Founders text-[#212121]">
          <h1>PRESENTATIONS</h1>
        </div>
      </div>
      <div className="absolute border-t-1 border-gray-400 py-5 bottom-34 w-full flex justify-between px-18 text-xl text-gray-900">
        <p>Presentation and storytelling agency</p>
        <p>For innovation teams and global brands</p>
        <div className="flex items-center gap-2 group">
          <p className="border-2 group-hover:bg-black group-hover:text-white border-gray-600 px-4 py-1.5 rounded-full  transition-all duration-300">
            START THE PROJECT
          </p>
          <p className="border-1 group-hover:bg-black group-hover:text-white border-gray-900 rounded-full p-3 -rotate-[45deg]  transition-all duration-300">
            <FaArrowRight size={20} />
          </p>
        </div>
      </div>
    </div>
  );
}
