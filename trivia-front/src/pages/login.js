import {React, useState, useRef} from "react";
import Cards from "../components/cards/cards";
import NavLogin  from "../components/nav-home/NavLogin";
import FooterLogin from "../components/footer/FooterLogin";
import NotificationBonus from "../components/notifications/NotificationBonus";
import './login.css';
import { useAuth } from "../components/auth/UserAuth"; 
import Reviews from "../components/reviews/reviews";



export function Login() {
  const { token } = useAuth(); // Obtenemos el token de la autenticación
  const [showNotification, setShowNotification] = useState(!localStorage.getItem('firstLoginNotified'));
  const navLoginRef = useRef(null);

  const handleCloseNotification = () => {
    setShowNotification(false);
    localStorage.setItem('firstLoginNotified', 'true');
  };

  return (
    <div className="login">
      <NavLogin ref={navLoginRef} />
      <Cards />
      {/* Pasamos isLoggedIn como prop a Reseñas */}
      <Reviews isLoggedIn={!!token} />
      <FooterLogin />
      
      {/* Lógica de notificación */}
      {showNotification && <NotificationBonus onClose={handleCloseNotification} navLoginRef={navLoginRef} />}
    </div>
  );
}

