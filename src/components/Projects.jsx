import React from "react";
import style from "../css/Projects.module.css"


//---image/media----
import consoleGame from '../css/images/projects/consoleGame.jpg'
import breeds from '../css/images/projects/breeds.jpg'
import link from '../css/images/projects/link-interface-symbol-rotated-to-right.png'
import git from '../css/images/projects/git.png'
//------------------


export default function Projects() {
  return (
    <div className={style.container} id='projects'>
      <h3 className={style.titleMain}>Mis proyectos</h3>

      <div className={style.cardsCont}>

        <div className={style.card}>
          <img className={style.img_project} src={consoleGame} alt="prototipo del proyecto 1" />

          <div className={style.description}>
            <div className={style.title}>
              <h3>Console.GAME</h3>
              <h4 className={style.subtitle}>E-commerce para Android</h4>
            </div>
            <div className={style.info}>
              <h4 className={style.text}>Aplicación desarrollada en 4 semanas, tienda de productos de computación.<br /> cuenta con: <br />  Log in utilizando Auth0 <br />  Carrito de compras <br />  Pasarela de pagos</h4>
            </div>
            <div className={style.links}>


              <a className={style.demo} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1qs0IvDwaDGqwriNuuYnNeAB_u87-_D7pBFFoA2wpXGc/edit?usp=sharing">   <h5 > APK/Demo</h5><img src={link} alt="" /></a>


              <a className={style.demo}  target="_blank" rel="noopener noreferrer" href="https://github.com/Leandro-Larrea/PF-Ecommerce"><h5 > Repositorio</h5><img src={git} alt="" /></a>

            </div>
          </div>
        </div>

        <div className={style.card}>

          <img src={breeds} alt="prototipo del proyecto 2" />

          <div className={style.description}>
            <div className={style.title}>
              <h3>Breeds</h3>
              <h3 className={style.subtitle}> SPA + API project</h3>
            </div>
            <div className={style.info}>
              <h4 className={style.text}> Aplicación web que utiliza datos de "The Dog API" <br /> y permite cargar información nueva a una BD </h4>
             
            </div>
          <div className={style.links}>
            <a className={style.demo} href="https://drive.google.com/file/d/1kpR7ePq79vymEFzeRXhuh4xX1FbJz7zP/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h5>Demo</h5><img src={link} alt="" /></a>
            <a className={style.demo} href="https://github.com/MalenaLuana/Proyecto-Individual-DOGS" target="_blank" rel="noopener noreferrer"><h5>Repositorio</h5><img src={git} alt="" /></a>
          </div>
          </div>
        </div>

      </div>

    </div>
  )
}