import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let prog = 0;
    const interval = setInterval(() => {
      prog += 1;
      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
      }
      setProgress(prog);
    }, 28);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.07,
      });
      return () => scroll.destroy();
    }
  }, [loading]);

  return (
    <div className="w-full h-screen">
      {loading ? (
        <div className="h-screen font-Founders flex flex-col justify-center items-center bg-black text-white gap-4">
          <div className="relative w-100 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-white transition-all duration-100"
            ></div>
          </div>
          <span className="text-xl md:text-3xl font-semibold">{progress}%</span>
        </div>
      ) : (
        <div data-scroll-container className="w-full bg-[#f9f9f9] text-gray-900">
          <Navbar />
          <Landing />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
        </div>
      )}
    </div>
  );
}
