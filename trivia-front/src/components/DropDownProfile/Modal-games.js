import React from "react";
import { Modal } from "react-bootstrap";
import { useAuth } from "../auth/UserAuth";

export function ModalGames({ openGames, handleCloseGames }) {

  const {authUser} = useAuth()
  return (
    <Modal show={openGames} onHide={handleCloseGames} className="Modal" backdrop='static' centered>
      <Modal.Header className="modal-registrer" closeButton>
        <Modal.Title classname="title-games">Registro de partidas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="ul-games">
          <li>Nro de partidas jugadas: <strong className="partidas">{authUser?.games}</strong> </li>
          <li className="li-games">Respuestas correctas: <strong className="resp-correctas">{authUser?.correct_answers}</strong></li>
          <li> Respuestas incorrectas: <strong className="resp-incorrectas">{authUser?.incorrect_answers}</strong> </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
