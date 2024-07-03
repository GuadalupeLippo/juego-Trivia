import './FinTrivia.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logocerebritotrivia.png';

function FinTrivia() {
    const [show, setShow] = useState(false);
    const loguin = useNavigate();
     const store = useNavigate();
  

  const handleNavigate = () => {
    loguin('/loguin');
  };
  const handleNavigateStore = () => {
    store('/Store');
  };
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        <div class="area">
         ¡¡¡Felicitaciones!!! 

          <Modal.Title id="tituloFin">
           
          </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h1>Ganaste la partida de Trivia</h1>
          <h2>Respuestas correctas:</h2>
          <h2>Respuestas Incorrectas:</h2>
          <h3>Puntaje total obtenido: </h3>
          <img className='logoNav' src={Logo} alt='logo pagina' width='180'/>
        </Modal.Body>
        <Button variant="secondary" onClick={ handleNavigate }>
           Volver  Jugar!
          </Button>
          <Button variant="primary" onClick={ handleNavigate }>
            Otra categoria
          </Button>
          <Button variant="primary" onClick={handleNavigateStore}>
            Canjear puntos
          </Button>
      </Modal>
    </>
  );
}

export default FinTrivia;
          

     



