import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditProfileModal = ({ show, handleClose, user, onSave }) => {
  const [editedUserData, setEditedUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      setEditedUserData({
        name: user?.user?.name || '',
        email: user?.user?.email || '',
        password: '',
      });
      setErrorMessage(''); // Reinicia el mensaje de error al abrir el modal
    }
  }, [user, show]); // Dependencias: se ejecuta cuando cambia el usuario o se abre/cierra el modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleSaveClick = async () => {
    const updatedUser = { ...editedUserData };
    if (!updatedUser.password) {
      delete updatedUser.password;
    }

    try {
      const response = await onSave(updatedUser); 

      if (response?.error) {
        setErrorMessage(response.error); 
      } else {
        setErrorMessage(''); 
        handleClose(); 
      }
    } catch (error) {
      setErrorMessage('Error al guardar los cambios.'); 
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className='Modal' backdrop='static' centered>
      <Modal.Header className="modal-registrer" closeButton>
        <Modal.Title className='modal-title-exit'>Editar Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} 
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedUserData.name} 
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={editedUserData.email} 
              onChange={handleInputChange}
              disabled
            />
           
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Nueva contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={editedUserData.password} 
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-grad' onClick={handleSaveClick}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
