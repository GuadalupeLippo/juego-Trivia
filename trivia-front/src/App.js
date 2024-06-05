import './App.css';
import { Home } from './pages/home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navhome } from "./components/nav-home/nav-home.js";
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>


function App() {

  return (
  <div >
     <Router>
        <Navhome/>
        <Routes>
        <Route path="/" element={<Home/>} /> 
        </Routes>
    </Router>
  
   

  </div>)
}


export default App;
