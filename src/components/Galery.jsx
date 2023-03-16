
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from '../css/Galery.module.css'
import images from "../css/images/galery/images";

import codeLeft from '../css/images/codeLeft.png'
import codeRight from '../css/images/codeRight.png'
export default function Galery (){

    return (
        <div className={style.container}>
            <div id="galery" className={style.ancla} ></div>
            <Carousel 
            className={style.carousel_main} 
            
            showThumbs={false}
            showStatus={false} 
            stopOnHover={true} 
            infiniteLoop={true} 
            autoPlay={true}>

               {
                images && images.map(e=>{
                    return(
                        <div>
                           <img className={style.image} src={e} alt="" /> 
                        </div>
                    )
                })
               }
            </Carousel>
       
                <div className={style.text}>
                    <div className={style.title}>
              
                    <h3> Galería de arte</h3>
                   <hr className={style.line} />
                    </div>
                    <div className={style.description}>Estas son algunas de mis pinturas, diseños y tatuajes.<br/>El arte es algo a lo que me dedico desde muy chica, mi manera de expresarme.<br/>Me divierto explorando y estudiando las formas a través de diferentes medios, como el óleo, el acrílico, el pastel, las acuarelas y tambíen el digital.</div>
                </div>
        </div>
    )
}