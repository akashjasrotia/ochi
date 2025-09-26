import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import me from '../assets/me.jpg'
export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className="rounded-t-3xl w-full  text-3xl font-bold bg-[#CDEA68] font-Neue">
      <div className="border-b-1 border-black/30 w-full pl-18 pt-30 pr-60 pb-16 text-[3.5vw] font-light">
        I design and build modern websites, craft distinctive brand identities, and create digital experiences that help individuals and businesses grow their presence, attract customers, and lead in their industry.
      </div>
      <div className="flex justify-between">
        <div className="pt-6 w-1/2 pl-17 flex gap-8 flex-col">
          <h1 className="text-7xl font-light">How I can help:</h1>
          <button className=" group text-xl transition-all duration-300 hover:bg-white font-light flex gap-8 items-center border-2 border-[#212121] w-60 bg-[#212121]  py-6 rounded-full px-8"><p className="transition-all duration-300 group-hover:text-[#212121] text-white">READ MORE</p> <p className="group-hover:-rotate-45 transition-all duration-300 text-white group-hover:text-[#212121]"><FaArrowRight/></p></button>
        </div>
        <div className="mt-6 w-[40vw] h-[40vh] mr-20 mb-40">
            <img className="rounded-xl w-[40vw]" src={me}/>
        </div>
      </div>
    </div>
  );
}
