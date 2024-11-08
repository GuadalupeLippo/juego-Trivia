import React, { useEffect, useState } from 'react';
import './reseñas.css';

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
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  useEffect(() => {
    agregarFuente();
    const obtenerReseñas = () => {
      const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [
        { id: 1, nombre: "Juan", reseña: "Excelente experiencia", calificacion: 5 },
        { id: 2, nombre: "Ana", reseña: "Muy buen servicio", calificacion: 4 }
      ];
      setReseñas(reseñasGuardadas);
    };
    obtenerReseñas();
  }, []);

  const guardarReseña = () => {
    if (!nuevaReseña.nombre || !nuevaReseña.reseña || nuevaReseña.calificacion === 0) {
      alert("Por favor, completa todos los campos antes de enviar tu reseña.");
      return;
    }

    const nuevasReseñas = [...reseñas, { ...nuevaReseña, id: reseñas.length + 1 }];
    localStorage.setItem('reseñas', JSON.stringify(nuevasReseñas));
    setReseñas(nuevasReseñas);
    setMostrarModal(true);
    setNuevaReseña({ nombre: "", reseña: "", calificacion: 0 });
    setMostrarFormulario(false); // Oculta el formulario
  };

  return (
    <div className="reseñas-container" style={{ fontFamily: "'Itim', cursive" }}>
      <h5>RESEÑAS</h5>

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

      {/* Renderiza el formulario solo si mostrarFormulario es true */}
      {mostrarFormulario && (
        <div className="reseña-formulario">
          <h3>DEJAR UNA RESEÑA</h3>
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
          <button onClick={guardarReseña}>Enviar Reseña</button>
        </div>
      )}

      {mostrarModal && (
        <div className="modal-reseña">
          <div className="modal-content-reseña">
            <p>¡Gracias por tu opinión!</p>
            <button onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reseñas;
