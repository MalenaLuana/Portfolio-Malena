
import {motion}from 'framer-motion'
import style from '../css/Stack.module.css'

import images from '../css/images/skills/images'
export default function Stack(){

    return (
        <motion.div  className={style.container}>
            <div id='stack' className={style.ancla}></div>
            <div className={style.card}>
            <h3>TECNOLOGÍAS QUE UTILIZO</h3>
               <div className={style.skills}>
                {images && images.map(e=>{
                   return(
                    <img className={style.image} key={e} src={e} alt="" />
                   )
                })}
               </div>
               </div>
        </motion.div>
    )
}