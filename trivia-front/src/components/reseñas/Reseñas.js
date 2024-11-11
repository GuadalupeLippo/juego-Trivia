import React, { useEffect, useState } from 'react';
import './reseñas.css';

// Función para agregar la fuente Itim al documento
const agregarFuente = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Itim&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const Reseñas = () => {
  const [reseñas, setReseñas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaReseña, setNuevaReseña] = useState({ nombre: "", reseña: "", calificacion: 0 });

  useEffect(() => {
    agregarFuente();
    const obtenerReseñas = () => {
      const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [
        { id: 1, nombre: "Juan", reseña: "Excelente experiencia", calificacion: 5 },
        { id: 2, nombre: "Ana", reseña: "Muy buen servicio", calificacion: 4 }
      ];
      setReseñas(reseñasGuardadas.slice(0, 2)); // Limita las reseñas a las dos primeras
    };
    obtenerReseñas();
  }, []);

  const guardarReseña = () => {
    if (!nuevaReseña.nombre || !nuevaReseña.reseña || nuevaReseña.calificacion === 0) {
      alert("Por favor, completa todos los campos antes de enviar tu reseña.");
      return;
    }

    const nuevasReseñas = [
      ...reseñas,
      { ...nuevaReseña, id: reseñas.length + 1 }
    ];

    const reseñasLimitadas = nuevasReseñas.slice(-2);

    localStorage.setItem('reseñas', JSON.stringify(reseñasLimitadas));
    setReseñas(reseñasLimitadas);
    setNuevaReseña({ nombre: "", reseña: "", calificacion: 0 });
    setMostrarModal(false); // Cierra el modal después de guardar la reseña
  };

  return (
    <div className="reseñas-container">
      <ul className="reseñas-lista">
        {reseñas.map((reseña) => (
          <li key={reseña.id} className="reseña-item">
            <strong>{reseña.nombre}:</strong> {reseña.reseña}
            <div className="reseña-calificacion">
              {"★".repeat(reseña.calificacion)}{"☆".repeat(5 - reseña.calificacion)}
            </div>
          </li>
        ))}
      </ul>

      {/* Botón para abrir el modal */}
      <button className="dejar-reseña-btn" onClick={() => setMostrarModal(true)}>DEJAR RESEÑA</button>

      {/* Modal para agregar reseña */}
      {mostrarModal && (
        <div className="modal-reseña" onClick={() => setMostrarModal(false)}>
          <div className="modal-content-reseña" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={nuevaReseña.nombre}
              onChange={(e) => setNuevaReseña({ ...nuevaReseña, nombre: e.target.value })}
            />
            <textarea
              placeholder="Tu reseña"
              value={nuevaReseña.reseña}
              onChange={(e) => setNuevaReseña({ ...nuevaReseña, reseña: e.target.value })}
            />
            <select
              value={nuevaReseña.calificacion}
              onChange={(e) => setNuevaReseña({ ...nuevaReseña, calificacion: Number(e.target.value) })}
            >
              <option value={0}>Elige tu calificación</option>
              {[1, 2, 3, 4, 5].map(star => (
                <option key={star} value={star}>{star} estrellas</option>
              ))}
            </select>
            <div className="botones-reseña">
              <button className="enviar-reseña-btn" onClick={guardarReseña}>Enviar Reseña</button>
              <button className="cancelar-reseña-btn" onClick={() => setMostrarModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reseñas;
