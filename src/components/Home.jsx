import React from "react";
import style from '../css/Home.module.css'
import { motion } from "framer-motion";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home(){
return(
    <motion.div className={style.container}
    initial={{opacity:1}}
    animated={{opacity:1}}
    >
     <Nav/>
  
    <div><h1>home</h1></div>
     <About/>
     <Projects/>
     <Contact/>
    </motion.div>
)
}