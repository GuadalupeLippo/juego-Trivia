import InicioTrivia from "../components/trivia/inicioTrivia";
import React from "react";
import { Answers } from "../components/answers/answers";
import { NavLoguin } from "../components/nav-home/NavLoguin";
import './trivia.css'


export default function Trivia() {
  return (
    <div className="container-trivia">
      <NavLoguin />
      <InicioTrivia />
      <Answers />
      
    </div>
  );
}
