import React from "react";
import style  from '../css/Banner.module.css'
import image from '../css/images/bannerGirl.png'
import left from '../css/images/codeLeft.png'
import right from '../css/images/codeRight.png'


export default function Banner(){
    return (
        <div className={style.banner} id='banner'>
            <div className={style.cont}>
            <div className={style.text} >
            <h1 className={style.one}>BIENVENIDXS</h1>
            <div className={style.middle}>
                <img src={left} alt="" />
                <h3>A mi primer</h3>
                <img src={right} alt="" />
            </div>
            <a href="#about" className={style.port}>PORTFOLIO</a> 
            
            </div>
            <div>
             <img src={image} className={style.image}alt="" />
            </div>  
           </div>
        </div>
    )
}