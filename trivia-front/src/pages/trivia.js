import InicioTrivia from "../components/trivia/inicioTrivia";
import React from "react";
import { Answers } from "../components/answers/answers";
import { NavLogin } from "../components/nav-home/NavLogin";
import './trivia.css'


export default function Trivia() {
  return (
    <div className="container-trivia">
      <NavLogin />
      <InicioTrivia />
      <Answers />
      
    </div>
  );
}
