import reseñas from '../reseñas.json'; 

import React from 'react';

const Reseñas = () => {
    // Función para obtener reseñas del Local Storage
    const obtenerReseñas = () => {
        const reseñas = JSON.parse(localStorage.getItem('reseñas'));
        return reseñas || []; // Devuelve un arreglo vacío si no hay reseñas
    };

    // Obtener reseñas para mostrarlas
    const reseñas = obtenerReseñas();

    return (
        <div id="contenedor-reseñas">
            {reseñas.map((reseña, index) => (
                <div key={index} className="reseña">
                    <h4>{reseña.usuario}</h4>
                    <p>{reseña.comentario}</p>
                    <span>Puntuación: {reseña.puntuación}</span>
                </div>
            ))}
        </div>
    );
};

export default Reseñas;
