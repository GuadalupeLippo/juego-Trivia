import React, { useState, useEffect } from 'react';
import './NotificationBonus.css';
import cerebroNot from '../images/cerebro-idea.jpg'
import dingIdea from './ding-idea.mp3'

const NotificationBonus = ({ onClose, navLoginRef }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  

  useEffect(() => {
    const navRef = navLoginRef.current;
    const timer = setTimeout(() => {
      setShowAnimation(true);
      navRef?.highlightStoreIcon();
     
    const playAudio = () => {
        const audio = new Audio(dingIdea);
        audio.play().catch(error => {
          console.error("Error al reproducir el sonido:", error);
        });
      };
  
      if (document.hasFocus()) {
        playAudio();
      } 
    }, 5000);

    // Limpia el timer y el zoom cuando el modal se cierre
    return () => {
      clearTimeout(timer);
      navRef?.resetStoreIcon();
    };
  }, [navLoginRef]);

  return (
    <>
      {showAnimation && (
        <div className="modal-overlay">
          <div className="notification-modal">
            <div className="cerebrito">
            <img src={cerebroNot} alt="cerebro" width="180px" />
            </div>
            <div className="store-prompt">
              ¡Canjea tus puntos por avatares en la tienda!</div>
            <button onClick={onClose} className="close-button-notification">Entendido</button>
          </div>
        </div>
      )}
     
    </>
  );
};

export default NotificationBonus;
