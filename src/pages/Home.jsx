import React from "react";
import Landing from "../components/Landing";
import Marquee from "../components/Marquee";
import Eyes from "../components/Eyes";
import Featured from "../components/Featured";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div exit={{opacity:0}} transition={{duration:0.5,ease:'linear'}}>
      <Landing />
      <Marquee />
      <Eyes />
      <Featured />
    </motion.div>
  );
}
