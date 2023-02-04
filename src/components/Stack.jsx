
import {motion}from 'framer-motion'
import style from '../css/Stack.module.css'
import SkillsCarousel from './Skills'

export default function Stack(){

    return (
        <motion.div  className={style.container}>
            <div id='stack' className={style.ancla}></div>
           <SkillsCarousel/>
        </motion.div>
    )
}