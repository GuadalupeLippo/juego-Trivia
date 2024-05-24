import React from 'react';
import './rules.css';


export default function Rules() {
  return (<div class= "background">
    <div class="container1">
        <h1 class="title">¿Cómo jugar?</h1>
        <p>¡Es fácil! Una vez que hayas iniciado sesión veras una lista de categorías, haz clic en la que más te guste para iniciar una partida.</p>
        <h1 class="title">Las reglas son sencillas:</h1>
        <div id="lista">
        <ol>Lee la pregunta y elige la respuesta que creas correcta de entre las 4 opciones.</ol>
        <ol>Tendrás un límite de tiempo de xx segundos.</ol>
        <ol>Si aciertas, sumas xx puntos.</ol>
        <ol>Si te equivocas, restas xx puntos.</ol>
        <ol>Deberás seguir respondiendo preguntas hasta que termine la partida.</ol>
        <ol>Al finalizar, podrás ver cuántos puntos obtuviste y elegir si quieres jugar de nuevo.</ol>
        <ol>Canjea tus puntos por avatares en nuestra tienda.</ol></div>
        <h1 class="title">Y eso es todo. Buena suerte!</h1>
    </div>
    </div>
  )
}
