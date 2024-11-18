import {React, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Exit from '../../assets/home/cerebrito-festejo.jpg';
import { useAuth } from "../auth/UserAuth";
import { useNavigate } from "react-router-dom";
 import { APITRIVIA } from "../../API/getDataBase";
 import festejo from '../../assets/home/festejo.mp3'


 export function ModalRegistrerExit({ show, handleCloseExit, userName, access_token }) {

  useEffect(() => {
    if (show) {
      const audio = new Audio(festejo);
      audio.play();
    }
  }, [show]);
  
  const { setAuthUser } = useAuth();
  const navigate = useNavigate(); // Usar useNavigate para redirigir

  const handleFirstLogin = async () => {
    
    const access_token = localStorage.getItem('authATRV'); // Recuperar token del localStorage

    if (!access_token) {
      console.error('No se encontró el token en localStorage');
      return;
    }
  
    const { token } = JSON.parse(access_token);
    console.log("Token recuperado:", token);

    try {
      const response = await fetch(`${APITRIVIA}/player/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Error al obtener los datos del usuario');
      }

      const playerData = await response.json(); 
   
      setAuthUser(playerData);

      const bonusResponse = await fetch(`${APITRIVIA}/player/bonus`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bonusPoints: 500 })
      });

      if (!bonusResponse.ok) {
        throw new Error('Error al otorgar puntos de bonificación');
      }

      const updatedPlayer = await bonusResponse.json();
      console.log("Puntaje actualizado:", updatedPlayer.score);

      setAuthUser(updatedPlayer);
      console.log(updatedPlayer)
      // Redirigir al perfil del usuario
      navigate(`/login/${updatedPlayer.id}`); // Asegúrate de que la ruta sea correcta

    } catch (error) {
      console.error(error);
      // Manejo de errores, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseExit}
        className="Modal"
        centered
      >
        <Modal.Header className="modal-registrer-exit" closeButton>
          <Modal.Title className="modal-title-exit">¡Felicidades {userName}!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-registrer">
          <p className="p-registrer">Te registraste con éxito y has recibido <spam className="bonus"><strong>500 puntos</strong></spam> de bonificación.</p>
          <img src={Exit} alt="registro exitoso" width='180px' />
        </Modal.Body>
        <Modal.Footer className="footer-registrer">
          <button onClick={handleFirstLogin} className="btn-grad btnfos-5">
            Ir a mi perfil
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

