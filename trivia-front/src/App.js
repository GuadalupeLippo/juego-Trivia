import './App.css';
import { Home } from './pages/home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Loguin} from '../src/pages/loguin.js'
import Trivia from './pages/trivia.js';
import PoliticasDePrivacidad from './components/Politicas/PoliticasDePrivacidad.js';
import User from './pages/user.js';
import Store from './pages/store.js';
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>


function App() {

  return (
  <div className='traslucido'>
     <Router>
       <Routes>
        <Route path="/" element={<Home/>} /> 

        <Route path="/loguin" element={<Loguin/>} />
        <Route path="/trivia" element={<Trivia/>} /> 
        <Route path="/politicas" element={<PoliticasDePrivacidad/>} />
        <Route path='/Trivia' element={<Trivia/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/store' element={<Store/>}/>

        </Routes>
    </Router>

  
   

  </div>)
}


export default App;
