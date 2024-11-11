import {React, useState, useRef} from "react";
import Cards from "../components/cards/cards";
import NavLogin  from "../components/nav-home/NavLogin";
import FooterLogin from "../components/footer/FooterLogin";
import NotificationBonus from "../components/notifications/NotificationBonus";
import './login.css';
import { useAuth } from "../components/auth/UserAuth"; 
import Reseñas from "../components/reseñas/Reseñas"; 

import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext"; // Suponiendo que useAuth es el hook que devuelve el token
import NavLogin from "../components/NavLogin";
import Cards from "../components/Cards";
import Reseñas from "../components/Reseñas";
import FooterLogin from "../components/FooterLogin";
import NotificationBonus from "../components/NotificationBonus"; // Asegúrate de que el componente NotificationBonus esté importado

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
      <Reseñas isLoggedIn={!!token} />
      <FooterLogin />
      
      {/* Lógica de notificación */}
      {showNotification && <NotificationBonus onClose={handleCloseNotification} navLoginRef={navLoginRef} />}
    </div>
  );
}

