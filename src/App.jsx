import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-[#f1f1f1]'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
    </div>
  )
}
