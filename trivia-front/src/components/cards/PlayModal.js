import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FormConfiguration } from "./FormConfiguration";
import PlayButton from "../form-loguin/PlayButtom";
import { useState } from "react";
import Timer from "./Timer";

export default function ModalConfig({ showConfig, handleCloseConfig }) {
  const navigate = useNavigate();

  const [selectedTime, setSelectedTime] = useState(15);
  const [startTimer, setStartTimer] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState(1);


  const handlePlayButtonClick = () => {
    setStartTimer(true);
 
    navigate("/Trivia");
  };

  return (
    <Modal
      show={showConfig}
      onHide={handleCloseConfig}
      backdrop="static"
      className="Modal"
    >
      <Modal.Header closeButton className="m-h">
        <Modal.Title>¿Estás listo para el desafío?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-b">
        {!startTimer ? (
          <FormConfiguration setSelectedQuestions={setSelectedQuestions} setSelectedTime={setSelectedTime}/>
        ) : (
          <Timer seconds={selectedTime} />
        )}
      </Modal.Body>
      <Modal.Footer className="m-b">
        <PlayButton onClick={handlePlayButtonClick} />
      </Modal.Footer>
    </Modal>
  );
}
