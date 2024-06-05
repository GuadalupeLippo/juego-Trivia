import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './PlayButton.css';

export function ModalLoguin({ showLoguin, handleCloseLoguin }) {
  return (
    <>
      <Modal show={showLoguin} onHide={handleCloseLoguin} backdrop="static"  size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="play-button" onClick={handleCloseLoguin}>
            jugar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
