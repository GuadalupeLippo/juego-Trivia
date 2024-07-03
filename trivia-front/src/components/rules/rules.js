import React from "react";
import "./rules.css";

export default function Rules() {
  return (
    <div className="container1">
      <h1 className="title">¿Cómo jugar?</h1>
      <p>
        ¡Es fácil! Una vez que hayas iniciado sesión verás una lista de
        categorías, haz clic en la que más te guste para iniciar una partida.
      </p>
      <h1 className="title">Las reglas son sencillas:</h1>
      <div id="lista">
        <ol>
          <li>
            Lee la pregunta y elige la respuesta que creas correcta de entre las
            4 opciones.
          </li>
          <li>Tendrás un límite de tiempo de xx segundos.</li>
          <li>Si aciertas, sumas xx puntos.</li>
          <li>Si te equivocas, restas xx puntos.</li>
          <li>
            Deberás seguir respondiendo preguntas hasta que termine la partida.
          </li>
          <li>
            Al finalizar, podrás ver cuántos puntos obtuviste y elegir si
            quieres jugar de nuevo.
          </li>
          <li>Canjea tus puntos por avatares en nuestra tienda.</li>
        </ol>
      </div>
      <h1 className="title">Y eso es todo. Buena suerte!</h1>
    </div>
  );
}
