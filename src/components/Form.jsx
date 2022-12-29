import { useRef } from "react";
import emailjs from '@emailjs/browser'
import style from '../css/Form.module.css'


import wpp from '../css/images/wpp.png'
import linkedin from '../css/images/in.png'
import git from '../css/images/git.png'

export default function Form() {
    const useref = useRef()

    const handleSubmint = (e) => {
       e.preventDefault()
       emailjs.sendForm(
        'service_4kzqw2r',
        'template_dcfxo77',
        useref.current,
        'OifE1icBULK0IGskJ'
       )
    }

    const handleChange = (e)=>{
        
    }

    return (
        <div className={style.formMain} id='contact'>
            <div className={style.formContent}>
            <div className={style.left}>
                <h1>   contactame</h1>
                <div className={style.social}>
                  <a href=""><img src={wpp} alt="" /></a>
                  <a href="https://www.linkedin.com/in/malena-luana-fresco/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                  <a href="https://github.com/MalenaLuana" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a> 
                </div>
            </div>
            <form className={style.form} id='contactForm' ref={useref} onSubmit={e=>handleSubmint(e)}>
              <div className={style.regInput}>
                <label htmlFor="mail" >E-MAIL:</label>
                <input type="text" id="mail" name='mail'/>
              </div>
              
              <div className={style.regInput}>
                <label htmlFor="name" >NOMBRE:</label>
                <input type="text" id="name" name='name' />
              </div>

              <div className={style.regInput}>
                <label htmlFor="subject" >ASUNTO:</label>
                <input type="text" id="subject" name='subject'/>
               </div>

               <div className={style.messageInput}>
                <label htmlFor="message4" >MENSAJE:</label>
                <textarea form="contactForm" type="text" id="message" name='message' />
               </div>
              
                <button className={style.formBtn} type="sumbit">ENVIAR</button>
            </form>
            </div>
        </div>
    )
}