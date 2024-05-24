import './App.css';
import { Home } from './pages/home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navhome } from "./components/nav-home/nav-home.js";
import { FormLoguin } from "./components/form-loguin/Form-loguin.js";
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
function App() {

  return (<div className='container'>
     <Router>
        <Navhome/>
        <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Loguin" element={<FormLoguin/>} />   
        </Routes>
    </Router>
  
   

  </div>)
}


export default App;
