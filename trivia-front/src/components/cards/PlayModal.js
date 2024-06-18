import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FormConfiguration } from './FormConfiguration';
import PlayButton from '../form-loguin/PlayButtom';

export default function ModalConfig({ showConfig, handleCloseConfig }) {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    navigate('/Trivia');
  };

  return (
    <Modal show={showConfig} onHide={handleCloseConfig} backdrop='static' className='Modal'>
      <Modal.Header closeButton className='m-h'>
        <Modal.Title>¿Estás listo para el desafío?</Modal.Title>
      </Modal.Header>
      <Modal.Body className='m-b'>
        <FormConfiguration />
      </Modal.Body>
      <Modal.Footer className='m-b'>
        <PlayButton onClick={handlePlayButtonClick} />
      </Modal.Footer>
    </Modal>
  );
}


