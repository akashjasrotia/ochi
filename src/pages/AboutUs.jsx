import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import teamImg from "../assets/team.jpg";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
export default function AboutUs() {
    const container = useRef(null);
    useGSAP(()=>{
        gsap.to(container.current.children,{
            y:'-100%',
            duration:0.6,
            stagger:-0.2,
            // delay:1,
        })
    },[])
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="relative rounded-t-3xl w-full text-3xl font-bold bg-[#CDEA68] font-Neue"
    >
        <div ref={container} className="absolute w-full h-screen">
            <div className="bar absolute w-[20%] left-0 h-screen bg-black"/>
            <div className="bar absolute w-[20%] left-[20%] h-screen bg-black"/>
            <div className="bar absolute w-[20%] left-[40%] h-screen bg-black"/>
            <div className="bar absolute w-[20%] left-[60%] h-screen bg-black"/>
            <div className="bar absolute w-[20%] left-[80%] h-screen bg-black"/>
        </div>
      {/* Intro Section */}
      <div className="border-b-1 border-black/30 w-full pl-18 pt-30 pr-60 pb-16 text-[3.5vw] font-light">
        We are a passionate team of designers, developers, and strategists
        dedicated to crafting modern digital experiences. Our mission is to help
        brands stand out, connect deeply with their audience, and grow with
        confidence in today’s fast-changing digital world.
      </div>

      {/* Mission + Image */}
      <div className="flex justify-between">
        <div className="pt-6 w-1/2 pl-17 flex gap-8 flex-col">
          <h1 className="text-7xl font-light">Our Mission</h1>
          <p className="text-xl font-light pr-10 leading-relaxed">
            We aim to merge creativity with technology to design impactful
            solutions. From websites and apps to branding and identity, we
            provide strategies that transform businesses into leaders in their
            industry.
          </p>
          <button className="group text-xl transition-all duration-300 hover:bg-white font-light flex gap-8 items-center border-2 border-[#212121] w-60 bg-[#212121] py-6 rounded-full px-8">
            <p className="transition-all duration-300 group-hover:text-[#212121] text-white">
              READ MORE
            </p>
            <p className="group-hover:-rotate-45 transition-all duration-300 text-white group-hover:text-[#212121]">
              <FaArrowRight />
            </p>
          </button>
        </div>

        {/* Team Image */}
        <div className="mt-6 w-[40vw] h-[40vh] mr-20 mb-40">
          <img className="rounded-xl w-[40vw]" src={teamImg} alt="Our Team" />
        </div>
      </div>

      {/* Values Section */}
      <div className="px-20 py-24 border-t border-black/30 flex flex-col gap-12">
        <h2 className="text-6xl font-light">Our Values</h2>
        <div className="grid grid-cols-3 gap-12 text-xl font-light">
          <div className="bg-white/40 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl mb-4 font-semibold">Creativity</h3>
            <p>
              We believe in pushing boundaries and finding unique ways to tell
              your story through design and technology.
            </p>
          </div>
          <div className="bg-white/40 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl mb-4 font-semibold">Collaboration</h3>
            <p>
              We work closely with our clients, ensuring their vision is
              understood, refined, and brought to life with clarity.
            </p>
          </div>
          <div className="bg-white/40 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl mb-4 font-semibold">Excellence</h3>
            <p>
              Our goal is not just to deliver but to exceed expectations,
              creating solutions that last and inspire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
