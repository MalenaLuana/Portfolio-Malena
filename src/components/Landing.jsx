import React from "react";
import style from '../css/Landing.module.css'
import { Link } from "react-router-dom";
import {motion}from 'framer-motion'
import { useEffect, useState,useRef  } from "react";

/*-----------images----*/ 
import cloud from '../css/images/landing/cloud.png'
import heart from '../css/images/landing/heart.png'
import letter from '../css/images/landing/letter.png'
import moon from '../css/images/landing/moon.png'
import realCloud from '../css/images/landing/realCloud.png'
import realMoon from '../css/images/landing/realMoon.png'
import paper from '../css/images/landing/stars.png'
//-------------------------


export default function Landing(){

const [cursorX,setCursorX]= useState()
const [cursorY,setCursorY]= useState()

const parallaxHandler = (e)=>{
    const x= (e.clientX - window.innerWidth*2)
    const y =( e.clientY - window.innerHeight/2)
  console.log('salida:',x,y)
   setCursorX(x)
   setCursorY(y)
}


    return (
        <motion.div div className={style.container}
        initial={{opacity:1}}
        animated={{opacity:1}}
        exit={{opacity:0}}
        >
            <div  className={style.content}  onMouseMove={parallaxHandler}>
         
             <p className={style.subtitle}>Hola, yo soy</p>
             <Link to='/home'>
             <motion.h1 
                
             className={style.title}>MALENA FRESCO</motion.h1>
             </Link>
             <div className={style.frontLayer} style={{left:+(cursorX/50),top:+(cursorY/50)}}>
                    <img src={moon} alt="" />
                    <img src={cloud}   alt="" />
                    <img src={letter}  alt="" />
                    <img src={heart}   alt="" />

                </div>
                <div className={style.backLayer} style={{left:+(cursorX/250),top:(cursorY/250)}}>
                    <img src={realMoon} alt="" />
                    <img src={realCloud} alt="" />
                    <img src={paper} alt="" />

                </div>

            </div>

            
            
        </motion.div>
    )
}