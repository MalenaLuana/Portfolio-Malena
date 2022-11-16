import React from "react";
import style from '../css/About.module.css'
import image from '../css/images/wave.png'
import image2 from '../css/images/deco1.png'
export default function About (){
    return (
        <div className={style.container} >
        <div className={style.content}>

        <img className={style.image} src={image} alt="" />
        <div id='about' className={style.ancla}>ancla</div>
        <div  className={style.info}>
            <div  className={style.left}>
                <h4>Hola! Mi nombre es Malena , tengo 24 años y soy de Buenos Aires, Argentina.</h4>
                <h4>Me dedico al arte visual desde hace 6 años y trato de aplicarlo en todos los aspectos de mi vida.</h4>
                <h4>Hace aproximadamente 1 año que me encuentro estudiando desarrollo web y desde el primer momento me fascinó la idea de poder combinar la lógica de la programación con la creatividad del arte</h4>
               <h4>Creé ésta página a modo de experimentacion espero puedan disfrutar de ella </h4>
               <h4>Saludos y gracias!</h4>
            </div>
           <div className={style.right}>
            <div className={style.cards}>
                <div className={style.cardsTop}>
                    <div tabIndex={0} className={style.card}>
                        <div className={style.box}>
                      <div className={style.front}>
                       <h4>OBJETIVOS</h4>
                      </div>
                       <div className={style.back}>
                      
                         <h4 className={style.text}>Actualmente me encuentro en búsqueda de aquel lugar que me permita desarrollarme profesionalmente.<br/><br/><br/> Hasta el momento siempre trabajé de manera independiente, creando mis propios proyectos <br/> si bien tiene sus beneficios, tengo ganas de probar otras formas de trabajo. </h4>
                        <img src={image2} alt="" /> 
                        </div>
                    </div>
                    
                </div> 
                 <div tabIndex={0}  className={style.card}>
                    <div className={style.box}>
                      <div className={style.front}>
                       <h4>HISTORIA</h4>
                      </div>
                       <div  tabIndex={0}  className={style.back}>
                      <h4>ESTE ES EL LADO DE ATRAS</h4>
                    </div>
                    </div>
                </div>
                </div>
                <div className={style.cardsBot}>
                <div tabIndex={0} className={style.card}>
                <div className={style.box}>
                      <div className={style.front}>
                       <h4>HABILIDADES</h4>
                      </div>
                       <div className={style.back}>
                      <h5>Este es el lado de atras</h5>
                    </div>
                    </div>
                </div> 
                 <div tabIndex={0} className={style.card}>
                 <div className={style.box}>
                      <div  className={style.front}>
                       <h4> HOBBIES</h4>
                      </div>
                       <div className={style.back}>
                      <h4>Este es el lado de atras</h4>
                    </div>
                    
                </div>
                </div>
                </div>
            </div>
             
           </div>
        
        </div>

        </div>
        </div>
    )
}