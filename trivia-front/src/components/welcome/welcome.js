import React from 'react';
import './welcome.css';
import EfectoDesencriptarTexto from './effect';

export default function Welcome() {
    
    const TextoTitulo= "¡BIENVENIDO A ATRIVIATE!"
      
  return (
    <div className="container2">
          <div className="title1">
            <EfectoDesencriptarTexto 
            text= 
            {TextoTitulo}
            mLeftInicial={700}
            transitionTime={5}
            tickCambioLetra={120}
            />
            </div>
            
      <p className="title3">Corre contra el reloj y pon a prueba tus conocimientos con este dinámico y educativo juego de preguntas y respuestas.</p>
      <p className="title2">¡Gracias por jugar con nosotros!</p>
   </div>
  
     )
}
