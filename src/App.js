import React from "react";
import { BrowserRouter as Router,Route,Routes,useLocation} from "react-router-dom";


//------componentes-----------

import AnimatedRoutes from "./components/AnimatedRoutes";



function App() {

  return (
    
    <Router>
      
    <AnimatedRoutes/>
    </Router>
  );
}

export default App;
