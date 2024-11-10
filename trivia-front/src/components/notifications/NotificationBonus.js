import React, { useState, useEffect } from 'react';
import './NotificationBonus.css';
import cerebroNot from '../images/cerebro-idea.jpg'


const NotificationBonus = ({ onClose, navLoginRef }) => {
  const [showAnimation, setShowAnimation] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
      setShowAnimation(true);
      navLoginRef.current?.highlightStoreIcon();
    }, 6000);

    // Limpia el timer y el zoom cuando el modal se cierre
    return () => {
      clearTimeout(timer);
      navLoginRef.current?.resetStoreIcon();
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
