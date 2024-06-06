import './App.css';
import { Home } from './pages/home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Trivia from './pages/trivia.js';
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>


function App() {

  return (
  <div >
     <Router>
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/trivia" element={<Trivia/>} />
        </Routes>
    </Router>
  
   

  </div>)
}


export default App;
