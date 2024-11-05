
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PlayButton from "../form-login/PlayButtom";
import { FormConfiguration } from "./FormConfiguration";


export default function ModalConfig({ show, handleCloseDifficulty, onPlay }) {
const [selectedTime, setSelectedTime] =  useState(null)
  

 




  const handlePlayButtonClick = () => {
   if(selectedTime != null){
      onPlay(selectedTime);
   }else{
    alert("Selecciona una dificultad")
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
     <FormConfiguration setSelectedTime={setSelectedTime}/>
      </Modal.Body>
      <Modal.Footer className="m-b">
        <PlayButton onClick={handlePlayButtonClick} />
      </Modal.Footer>
    </Modal>
  );
}
