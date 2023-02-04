
import {motion}from 'framer-motion'
import {useRef,useEffect, useState}from 'react'
import style from '../css/Skills.module.css'
import images from '../css/images/skills/images'

export default function SkillsCarousel(){

 const [width,setWidth]= useState(0)
 const carousel = useRef()


  useEffect(()=>{
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)

    

  },[])

 



    return (
    <motion.div  ref={carousel} className={style.carousel} whileTap={'grabbing'}>
      <motion.div 
      
       drag='x' 
       dragConstraints={{right:0,left:-width}}
       className={style.innerCarousel}>
        
        {
            images?.map(e=>{
                return(
                    <motion.div 
                    key={e}
                     className={style.item}>
                    <img src={e} className={style.image}/>
                    </motion.div>
                )
            })
        }
      </motion.div>
    </motion.div>
    )

}