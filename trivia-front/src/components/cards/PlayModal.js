
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PlayButton from "../form-login/PlayButtom";
import { FormConfiguration } from "./FormConfiguration";


export default function ModalConfig({ show, handleCloseDifficulty, onPlay }) {

  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(15);

 




  const handlePlayButtonClick = () => {
    if(selectedQuestions && selectedTime){
      onPlay(selectedQuestions, selectedTime);
    }else {
      console.log("los select no estan definidos")
    }

    // navigate("/Trivia");
  };

  return (
    <Modal
      show={show}
      onHide={handleCloseDifficulty}
      backdrop="static"
      className="Modal"
    >
      <Modal.Header closeButton className="m-h">
        <Modal.Title>¿Estás listo para el desafío?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-b">
     <FormConfiguration 
     setSelectedQuestions={setSelectedQuestions}
     setSelectedTime={setSelectedTime}
     />
      </Modal.Body>
      <Modal.Footer className="m-b">
        <PlayButton onClick={handlePlayButtonClick} />
      </Modal.Footer>
    </Modal>
  );
}
