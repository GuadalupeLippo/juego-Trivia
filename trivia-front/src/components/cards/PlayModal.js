
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PlayButton from "../form-login/PlayButtom";
import { FormConfiguration } from "./FormConfiguration";


export default function ModalConfig({ show, handleCloseDifficulty, onPlay }) {
const [selectedTime, setSelectedTime] =  useState(null)
const [difficultyId, setDifficultyId] = useState(null);

  const handlePlayButtonClick = () => {
   if(selectedTime != null && difficultyId != null){
      onPlay(selectedTime, difficultyId);
      console.log(selectedTime)
      console.log(difficultyId)
   }else{
    alert("Selecciona una dificultad")
   }

   
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
     <FormConfiguration setSelectedTime={setSelectedTime} setDifficultyId={setDifficultyId}/>
      </Modal.Body>
      <Modal.Footer className="m-b">
        <PlayButton onClick={handlePlayButtonClick} />
      </Modal.Footer>
    </Modal>
  );
}
