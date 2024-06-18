import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PlayButton from './PlayButtom';
import { useNavigate } from 'react-router-dom';

export function ModalLoguin({ showLoguin, handleCloseLoguin }) {

  const loguin = useNavigate();

  const handleNavigate = () => {
    loguin('/loguin');
  };



  return (
    <>
      <Modal show={showLoguin} onHide={handleCloseLoguin} backdrop="static"  size='lg' className='Modal'>
        <Modal.Header closeButton className='modal-loguin'>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className='m-b'>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuario"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='m-b'>
          <PlayButton onClick={handleNavigate}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
