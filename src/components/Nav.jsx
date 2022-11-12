import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Nav.module.css"

export default function Nav(){
    return (
        <div className={style.container}>
            
             <div className={style.links}>
                
                    <a className={style.link} href="">INICIO</a>
                    <a className={style.link} href="#about">SOBRE MI</a>
                    <a className={style.link} href="#projects">PROYECTOS</a>
                    <a className={style.link} href="#contact">CONTACTO</a>
            
             </div>
        </div>
    )
}