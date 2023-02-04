import React from "react";
import { useEffect, useState,useRef  } from "react";
import style from '../../css/About.module.css'



export default function About (){


 const [hidden,sethidden] = useState('0')

 const [text, setText] = useState('0')

 const divRef = useRef()

 
 
useEffect(()=>{
  
    const handleScroll= ()=>{
    
      const div = divRef.current
      const {y}=div.getBoundingClientRect()
      
      let ishidden = y<=700? '100%':'0'
      let showText = y<=600? '20pt':'0'
      if(hidden=== '0') sethidden(ishidden)
      setText(showText)
    }

    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
},[hidden])


    return (
        <div className={style.container} >
        
        <div className={style.ancla} id='about'>
        <div className={style.red} style={{width:hidden,transition:'all ease 0.9s'}}></div>
        <div  ref={divRef} >
        <div className={style.content}>
 
          
          <div className={style.card} tabIndex={0}>
            <div className={style.box}>
            <div className={style.front} style={{fontSize:text,transition:'all ease 1s'}}>QUIÉN SOY?</div>
            <div className={style.back}>
              <div className={style.backText}>Desarrolladora web full stack y artista visual.<br/>Tengo 24 años, soy de Argentina, Bs As y desde muy chica me dedico a crear todo tipo de cosas. <br /> Ya sean pinturas, esculturas, tatuajes o, en este caso, PÁGINAS WEBS  </div>
            </div>
            </div>
          </div>


          <div className={style.card} tabIndex={0}>
            <div className={style.box}>
            <div className={style.front} style={{fontSize:text,transition:'all ease 1s'}}>CUÁLES SON <br/>MIS OBJETIVOS?</div>
            <div className={style.back}>
              <div className={style.backText}> Este 2023 mi principal objetivo es conseguir mi primer experiencia laboral en el rubro IT. <br /> Encontrar el lugar que me permita desarrollarme profesionalmente y crecer a nivel personal. Con esto mejorar mi día a día, aprender cosas nuevas y darme un mejor estilo de vida.</div>
            </div>
            </div>
          </div>

          <div className={style.card}tabIndex={0}>
          <div className={style.box}>
            <div className={style.front} style={{fontSize:text,transition:'all ease 1s'}}>QUÉ HAGO PARA <br/>NO ABURRIRME?</div>
            <div className={style.back}>
              <div className={style.backText}>◽Jugar video juegos 🎮<br /> ◽Cantar y componer canciones 🎹 <br />◽Ir a comer a mis lugares favoritos 💜</div>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}