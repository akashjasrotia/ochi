import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'

export default function App() {
  return (
    <div className='w-full h-screen bg-[#f1f1f1]'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
  )
}
