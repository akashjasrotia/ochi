import React from "react";

export default function Featured() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className="pb-20">
      <div className="w-full pl-20 mb-10 pt-30 pb-15 border-b-1 border-gray-400">
        <h1 className="text-7xl font-Neue">Featured Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 px-16 relative">
        <h1 className="z-10 absolute top-[10vw] left-1/2 -translate-x-[50%]  text-[10vw] font-Founders font-extrabold text-[#CDEA68] whitespace-nowrap pointer-events-none">
            ● SALIENCE LABS
        </h1>
        <div className="md:w-1/2 h-[70vh]">    
          <div className="group hover:scale-95 transition-all duration-300 w-full h-full bg-green-500 rounded-2xl overflow-hidden">
            <img
              className="group-hover:scale-110 transition-all duration-300 object-cover w-full h-full"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
            />
          </div>
        </div>
        <div className="md:w-1/2 h-[70vh]">
          <div className="group hover:scale-95 transition-all duration-300 w-full h-full bg-green-500 rounded-2xl overflow-hidden">
            <img
              className="group-hover:scale-110 transition-all duration-300 object-cover w-full h-full"
              src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
