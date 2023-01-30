import React from "react";
import style from "../css/Projects.module.css"


//---image/media----
import video from '../css/media/Dogs.pi.mp4'
import video2 from '../css/media/MEmu 2023-01-28 23-29-19.mp4'

import link from '../css/images/projects/link-interface-symbol-rotated-to-right.png'
import git from '../css/images/projects/git.png'
//------------------


export default function Projects() {
  return (
    <div className={style.container} id='projects'>


      <div className={style.cardsCont}>

        <div className={style.card}>

          <video className={style.video} controls >
            <source src={video} type="video/mp4" />
          </video>
          <div className={style.description}>
            <div className={style.title}>
              <h3>Breeds: </h3>
              <h3> SPA + API project</h3>
            </div>
            <div className={style.info}>
              <h4 className={style.text}> Aplicación que utiliza datos de The Dog API <br /> y permite cargar información a una BD </h4>
              <h4 className={style.text}>+ filtros combinados<br />+ Validación de formulario</h4>
            </div>
          </div>
          <div className={style.links}>
            <a href="https://dogs-api-project.up.railway.app" target="_blank" rel="noopener noreferrer"><img src={link} alt="" /></a>
            <a href="https://github.com/MalenaLuana/Proyecto-Individual-DOGS" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a>
          </div>
        </div>

        <div className={style.card}>

          <video className={style.video} controls >
            <source src={video2} type="video/mp4" />
          </video>
          <div className={style.description}>
            <div className={style.title}>
            <h3>Console.GAME</h3>
            </div>
          <div className={style.info}>
              <h4 className={style.text}> App E-commerce para android<br /> </h4>
              <h4 className={style.text}>+Log in con Auth0<br />+Pasarela de pagos<br />+Notificaciones mail</h4>
            </div>
          </div>
          <div className={style.links}>
           <a href="https://docs.google.com/document/d/1qs0IvDwaDGqwriNuuYnNeAB_u87-_D7pBFFoA2wpXGc/edit" target="_blank" rel="noopener noreferrer"><img src={link} alt="" /></a>
           <a href="https://github.com/Leandro-Larrea/PF-Ecommerce" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a>
           </div>
        </div>
      </div>

    </div>
  )
}