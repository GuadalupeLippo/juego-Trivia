import Reloj from "./reloj"
import geografia from './geografia 1.png'
import './trivia.css'
function InicioTrivia (){
    return(
        <>
        <div className="inicioTrivia">
        <Reloj />
       <img alt='logoGeografia' src={geografia} className="geografia"/>
        </div>
        </>
    )
}
export default InicioTrivia