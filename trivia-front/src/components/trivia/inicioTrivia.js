import Reloj from "./reloj"
import geografia from './geografia 1.png';
import { Question } from "../questions/questions";
import './trivia.css'
function InicioTrivia (){
    return(
        <>
        <div className="inicioTrivia">
        <Reloj />
        <Question/>   
       <img alt='logoGeografia' src={geografia} className="geografia" width='100px'/>
        </div>
        </>
    )
}
export default InicioTrivia