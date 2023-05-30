import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, Link } from "react-router-dom";
//named export is without default 

//props = props is used for data sharing between componenets
 function App()
 { 
  return(
  <div className="container">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
            
    </Routes>
  </div>
 )

 }

export default App;
