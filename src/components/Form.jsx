import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import style from '../css/Form.module.css'


import wpp from '../css/images/wpp.png'
import linkedin from '../css/images/in.png'
import git from '../css/images/git.png'

export default function Form() {


    const useref = useRef()

    const [formData, setFormData]=  useState({
      mail:'',
      name:'',
      subject:'',
      message:'',
    })
    

    //VALIDACIONES
    const [error,serError] = useState(true)

    const HandleError = (formData)=>{
      let keep = {}
  

      let regexName = new RegExp('^[^@]+@[^@]+[a-zA-Z]{2,}$')

      if(formData.mail!=='' && !regexName.test(formData.mail)) keep.mail= 'Mail no válido'
      return keep
    }  
 

    const handleChange = (e)=>{
        serError(HandleError({...formData,[e.target.name]:e.target.value}))
 
 
        setFormData(
          {...formData,
            [e.target.name]:e.target.value
          }
        )
    }

    const handleSubmint = (e) => {
       e.preventDefault()
       
      if (error.mail){
         alert('Por favor, revisar el formulario')
      }else{
        emailjs.sendForm(
           'service_4kzqw2r',
           'template_dcfxo77',
           useref.current,
           'OifE1icBULK0IGskJ'
          )
        alert('Tu mensaje fue enviado con éxito <3!')
        setFormData({
         mail:'',
         name:'',
         subject:'',
         message:'',
        
         })
      }
    }
    
    return (
        <div className={style.formMain} id='contact'>
            <div className={style.formContent}>

            <div className={style.left}>
                <h1>   contactame</h1>
                <div className={style.social}>
                  <a href="https://api.whatsapp.com/send?phone=1150046655&text=Link%20a%20wpp" target="_blank" rel="noopener noreferrer"><img src={wpp} alt="" /></a>
                  <a href="https://www.linkedin.com/in/malena-luana-fresco/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                  <a href="https://github.com/MalenaLuana" target="_blank" rel="noopener noreferrer"><img src={git} alt="" /></a> 
                </div>
            </div>

            <form className={style.form} id='contactForm' ref={useref} onSubmit={e=>handleSubmint(e)}>
              <div className={style.dataText}>
              <div className={style.regInput}>
                <label htmlFor="mail" >E-MAIL</label>
                <input placeholder="ejemplo@algo.com" type="text" id="mail" name='mail' onChange={e=>handleChange(e)} value={formData.mail} required/>
              </div>
              
                {error.mail && (<label className={style.mailError}>{error.mail}</label>)} 

             
              <div className={style.regInput}>
                <label htmlFor="name" >NOMBRE</label>
                <input type="text" id="name" name='name' onChange={e=>handleChange(e)} value={formData.name} required />
              </div>

              <div className={style.regInput}>
                <label htmlFor="subject" >ASUNTO</label>
                <input type="text" id="subject" name='subject' onChange={e=>handleChange(e)} value={formData.subject} required/>
               </div>
               </div>
               <div className={style.messageInput}>
                <label htmlFor="message4" >MENSAJE</label>
                <textarea form="contactForm" type="text" id="message" onChange={e=>handleChange(e)} name='message' value={formData.message} required/>
               </div>
              
                <button className={style.formBtn} type="sumbit">ENVIAR</button>
            </form>
            </div>
        </div>
    )
}