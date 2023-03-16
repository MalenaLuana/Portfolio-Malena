import React from "react";
import style from '../css/Home.module.css'
import { motion } from "framer-motion";


//*----COMPONENTS---
import Nav from "./Nav";
import About from "./About/About";
import Projects from "./Projects";
import Contact from "./Contact";
import Banner from "./Banner";
import Galery from "./Galery";



export default function Home(){
return(
    <motion.div className={style.container}
    initial={{opacity:1}}
    animated={{opacity:1}}
    >
     <Nav/>
     <Banner/>
     <About/>
     
     <Projects/>
     <Galery/>
     <Contact/>
    </motion.div>
)
}