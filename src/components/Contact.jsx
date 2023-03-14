import React from "react";
import style from "../css/Contact.module.css"
import Form from "./Form";

import wpp from '../css/images/wpp.png'
import linkedin from '../css/images/in.png'
import git from '../css/images/git.png'


export default function Contact(){
    return (
        <div className={style.container} id='contact'>
        <Form/>
              <div className={style.social}>
                  <a href="https://api.whatsapp.com/send?phone=1150046655&text=Link%20a%20wpp" target="_blank" rel="noopener noreferrer"><img src={wpp} alt="" /></a>
                  <a href="https://www.linkedin.com/in/malena-luana-fresco/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                  <a href="https://github.com/MalenaLuana" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a> 
              </div>
        </div>
    )
}