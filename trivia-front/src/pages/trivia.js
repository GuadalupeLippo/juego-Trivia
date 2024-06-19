import InicioTrivia from "../components/trivia/inicioTrivia";
import React from 'react'
import { Question } from '../components/questions/questions';
import { Answers } from '../components/answers/answers';
import { NavLoguin } from '../components/nav-home/NavLoguin';

export default function Trivia() {
  return (
    <div>
    <NavLoguin/>
    <InicioTrivia />
    <Question/>
    <Answers/>
    </div>
  )
}



        
 
