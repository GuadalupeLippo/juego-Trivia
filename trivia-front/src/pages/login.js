import React from "react";
import Cards from "../components/cards/cards";
import { NavLogin } from "../components/nav-home/NavLogin";
import FooterLogin from "../components/footer/FooterLogin";
import './login.css';
import { useAuth } from "../components/auth/UserAuth"; 
import Reseñas from "../components/reseñas/Reseñas"; 

export function Login() {
  const { token } = useAuth(); // Obtenemos el token de la autenticación
  
  return (
    <div className="login">
      <NavLogin />
      <Cards />
      {/* Pasamos isLoggedIn como prop a Reseñas */}
      <Reseñas isLoggedIn={!!token} /> 
      <FooterLogin />
       
    </div>
  );
}
