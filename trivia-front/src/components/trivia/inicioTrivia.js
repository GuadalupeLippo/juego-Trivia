import Reloj from "./reloj";
import geografia from "./geografia 1.png";
import { Question } from "../questions/questions";
import "./trivia.css";
import Timer from "../cards/Timer";
import { useLocation } from "react-router-dom";


function InicioTrivia() {
  const location = useLocation();
  const selectedTime = location.state?.selectedTime || 15;

  return (
    <>
      <div className="inicioTrivia">
        <Reloj />

        <Timer seconds={selectedTime} />

        <Question />
        <img
          alt="logoGeografia"
          src={geografia}
          className="geografia"
          width="100px"
        />
 
       
      </div>
    </>
  );
}
export default InicioTrivia;
