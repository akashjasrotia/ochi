import React, { useEffect, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      let x = e.clientX;
      let y = e.clientY;

      let dx = x-window.innerWidth/2;
      let dy = y-window.innerHeight/2;

      let angle = Math.atan2(dy,dx) * (180 / Math.PI);
      setRotate(angle-180);

    })
  },[])
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='relative z-1 w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div data-scroll data-scroll-section data-scroll-speed="0.2" className="w-[30vw] z-10 h-[12vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between">
          <div className="flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-black/90 rounded-full">
              <div className="absolute left-1/2 top-1/2 h-1/5 w-full " style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}>
                <div className="w-[1.7vw] h-[1.7vw] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-black/90 rounded-full">
              <div className={`absolute left-1/2 top-1/2 h-1/5 w-full`} style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
                <div className="w-[1.7vw] h-[1.7vw] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
