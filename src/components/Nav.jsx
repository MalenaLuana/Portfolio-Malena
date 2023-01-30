import React from "react";
import style from "../css/Nav.module.css"
import menu from '../css/images/menubtn.png'
import { useState } from "react";

export default function Nav(){



const [clicked,setClicked]=useState(true)

const handleClick= ()=>{
    if (clicked==false){
        setClicked(true)
    } else {
        setClicked(false)
    }
}

const handleChangeMenu= ()=>{
    setClicked(true)
}
    return (
        <div className={style.container}>
            
             <div className={clicked? style.active:style.links} id='nav'>
           
                    <a onClick={e=>handleChangeMenu(e)} className={style.link} href="#banner">INICIO</a>
                    <a onClick={e=>handleChangeMenu(e)} className={style.link} href="#about">SOBRE MI</a>
                    <a onClick={e=>handleChangeMenu(e)} className={style.link} href="#projects">PROYECTOS</a>
                    <a onClick={e=>handleChangeMenu(e)} className={style.link} href="#contact">CONTACTO</a>
             </div>
           
             <div>
             <button className={style.menuBtn} onClick={e=>handleClick(e)}><img src={menu} alt="" /></button>
             </div>
           
        </div>
    )
}