import React from "react";
import Cards from "../components/cards/cards";
import { NavLogin } from "../components/nav-home/NavLogin";
import FooterLogin from "../components/footer/FooterLogin";
import './login.css';

export function Login() {
  return (
    <div className="login">
      <NavLogin />
      <Cards />
      <FooterLogin />
    </div>
  );
}
