import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import OnlyEyes from "./OnlyEyes";

export default function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="relative w-full h-[100vh] pt-1"
    >
      <div className="mt-28 leading-[0.76] px-8 md:px-18">
        <div className="w-full text-[9vw] font-Founders text-[#212121]">
          <h1>WE CREATE</h1>
        </div>
        <div className="w-full align-center flex text-[9vw] gap-4 font-Founders text-[#212121]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.19, 1, 0.22, 1], duration: 1 }}
            className="w-[9vw] h-[6vw] md:mt-[2vh] mt-[1vh] overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1758007664211-49b4805638e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-auto"
          />

          <h1>EYE-OPENING</h1>
        </div>
        <div className="w-full text-[9vw] font-Founders text-[#212121]">
          <h1>PRESENTATIONS</h1>
        </div>
      </div>
      <div className="absolute hidden border-t-1 border-gray-400 py-5 bottom-34 w-full md:flex justify-between px-18 text-xl text-gray-900">
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
      <OnlyEyes top={'20vw'} left={'50vw'}/>
    </div>
  );
}
