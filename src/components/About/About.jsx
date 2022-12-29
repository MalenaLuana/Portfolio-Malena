import React from "react";
import { useEffect, useState,useRef  } from "react";

import style from '../../css/About.module.css'



export default function About (){


 const [hidden,sethidden] = useState('0')



 const divRef = useRef()
 
useEffect(()=>{
  
    const handleScroll= ()=>{
    
      const div = divRef.current
      const {y}=div.getBoundingClientRect()
      
     let ishidden = y<=700? '100%':'0'
     if(hidden=== '0') sethidden(ishidden)
    }

    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
},[])


    return (
        <div className={style.container} >
        
        <div className={style.ancla} id='about'>
        <div  ref={divRef} style={{width:hidden,transition:'all ease 0.5s'}}>
        <div className={style.content}>
 
          
          <div className={style.card} tabIndex={0}>
            <div className={style.box}>
            <div className={style.front}>QUIEN SOY?</div>
            <div className={style.back}>info</div>
            </div>
          </div>


          <div className={style.card2}><div>CUALES SON <br/>MIS OBJETIVOS?</div></div>
          <div className={style.card3}><div>QUE HAGO PARA <br/>NO ABURRIRME?</div></div>
        </div>
        </div>
        </div>
        </div>
    )
}