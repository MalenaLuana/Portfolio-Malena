import React from "react";
import { useEffect, useState, useRef } from "react";
import style from '../../css/About.module.css'
import Stack from "../Stack";

import cv from '../../css/images/MalenaFresco.pdf'

export default function About() {


  const [hidden, sethidden] = useState('0')

  const [text, setText] = useState('0')

  const divRef = useRef()



  useEffect(() => {

    const handleScroll = () => {

      const div = divRef.current
      const { y } = div.getBoundingClientRect()

      let ishidden = y <= 700 ? '100%' : '0'
      let showText = y <= 600 ? '20pt' : '0'
      if (hidden === '0') sethidden(ishidden)
      setText(showText)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hidden])


  return (
    <div className={style.container} >

      <div className={style.ancla} id='about' />
      <div ref={divRef} >
        <div className={style.content}>


          <div className={style.card1} >

            <div className={style.title} ><h3 className={style.number}>01. </h3><h3>¿QUIEN SOY?</h3></div>

            <div className={style.text}>Desarrolladora web full stack y artista visual.<br />Tengo 24 años, soy de Argentina, Bs As y desde muy chica me dedico a plasmar mis ideas en creaciones únicas. <br /> Ya sean pinturas, esculturas, tatuajes o, en este caso, PÁGINAS WEBS  </div>

          </div>


          <div className={style.card1}>

            <div className={style.title} ><h3 className={style.number}>02. </h3><h3>¿CUÁLES SON MIS OBJETIVOS?</h3></div>

            <div className={style.text}> Busco potenciar mis habilidades al máximo.<br /> Conocer y trabajar con gente apasionada por lo que hace para llevar a cabo proyectos innovadores, multidiciplinarios y que resuelvan problematicas reales.</div>


          </div>

          <div className={style.card1} >

            <div className={style.title}><h3 className={style.number}>03. </h3><h3>QUÉ HAGO PARA NO ABURRIRME?</h3></div>
            <div className={style.text}>
              <div className={style.backText}>◽Jugar video juegos 🎮<br /> ◽Cantar y componer canciones 🎹 <br />◽Pedir comida a domicilio 💜 <br />◽Ver videos tutoriales para saber cual va a ser mi próximo hobby. </div>
            </div>
          </div>
         
        </div>
        <hr className={style.line}/>
      </div>
      <Stack></Stack>
      <a className={style.cv} href={cv} download="CV_mMalenaFresco">
        Descargar CV
      </a>
    </div>
  )
}