import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalRegistrer({show,handleClose}) {
  
    return (
        <>
            <Modal show={show} onHide={handleClose} >
            <Modal.Header className='modal-registrer' closeButton>
              <Modal.Title>¡TE HAS REGISTRADO CON ÉXITO!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Inicia sesión para comenzar a jugar.</Modal.Body>
            <Modal.Footer>
               <Button variant="info" onClick={handleClose}>
                Iniciar sesión
              </Button>
             
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    
    