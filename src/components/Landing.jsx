import React from "react";
import style from '../css/Landing.module.css'
import { Link } from "react-router-dom";
import {motion}from 'framer-motion'

export default function Landing(){
    return (
        <motion.div div className={style.container}
        initial={{opacity:1}}
        animated={{opacity:1}}
        exit={{opacity:0}}
        >
            <div  className={style.content}>
             <p className={style.subtitle}>Hola, yo soy</p>
             <Link to='/home'>
             <h1 className={style.title}>MALENA FRESCO</h1>
             </Link>
            </div>
        </motion.div>
    )
}