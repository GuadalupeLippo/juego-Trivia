
import { Home } from './pages/home';
import './App.css';
import { Home } from './pages/home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navhome } from "./components/nav-home/nav-home.js";
import { FormLoguin } from "./components/form-loguin/Form-loguin.js";
function App() {
<<<<<<< HEAD
  return (
    
         
   
      <div>
  <Home/>
  </div>
  
  
  )
=======
  return (<div>
     <Router>
        <Navhome/>
        <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Loguin" element={<FormLoguin/>} />   
        </Routes>
    </Router>
  
   

  </div>)
>>>>>>> main
}


export default App;
