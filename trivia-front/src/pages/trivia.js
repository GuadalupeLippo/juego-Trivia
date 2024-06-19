<<<<<<< HEAD
import InicioTrivia from "../components/trivia/inicioTrivia";
=======
import React from 'react'
import { Question } from '../components/questions/questions';
import { Answers } from '../components/answers/answers';
import { NavLoguin } from '../components/nav-home/NavLoguin';

export default function Trivia() {
  return (
    <div>
    <NavLoguin/>
    <Question/>
    <Answers/>
    </div>
  )
}
>>>>>>> 37890fe85ab4fcf2a2a60a64c92ce381a5ddb012


export function Trivia (){
    return (
        <InicioTrivia />
    )
}
