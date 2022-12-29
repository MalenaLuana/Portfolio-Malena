import React from "react";
import { BrowserRouter as Router,Route,Routes,useLocation} from "react-router-dom";

//----components--------
import Landing from "./Landing";
import Home from "./Home";
import {AnimatePresence} from "framer-motion"


export default function AnimatedRoutes(){
    const location = useLocation()


    return (
     <AnimatePresence >
         <Routes location={location} key={location.pathname}>
     
           <Route exact path="/" element={<Landing/>}/>         
            
            <Route exact path="/home/" element={<Home/>}/>
 
        </Routes>
    </AnimatePresence>
    )
}