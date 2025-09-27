import React from "react";
import w1 from "../assets/w1.png"
import w2 from "../assets/w2.png"
export default function Featured() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className="pb-20 min-h-[100vh] w-full">
      <div className="w-full pl-20 mb-10 pt-30 pb-15 border-b-1 border-gray-400">
        <h1  className="text-7xl font-Neue">Completed Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 px-16 relative">
        <h1 className="z-10 absolute top-[10vw] left-1/2 -translate-x-[50%]  text-[10vw] font-Founders font-extrabold text-[#CDEA68] whitespace-nowrap pointer-events-none">
            ● MORDERN WEB PAGES
        </h1>
        <div className="md:w-1/2 h-[70vh]">    
          <div className="group hover:scale-95  transition-all duration-300 w-full h-full bg-green-500 rounded-2xl overflow-hidden">
            <img
              className="group-hover:scale-110 object-center transition-all duration-300 w-full h-full"
              src={w1}
            />
          </div>
        </div>
        <div className="md:w-1/2 h-[70vh]">
          <div className="group hover:scale-95 transition-all duration-300 w-full h-full bg-green-500 rounded-2xl overflow-hidden">
            <img
              className="group-hover:scale-110 transition-all duration-300 object-cover w-full h-full"
              src={w2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
