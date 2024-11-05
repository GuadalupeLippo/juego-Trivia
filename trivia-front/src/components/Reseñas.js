import React, { useEffect, useState } from 'react';

const Reseñas = () => {
  const [reseñas, setReseñas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaReseña, setNuevaReseña] = useState({ nombre: "", reseña: "", calificacion: 0 });

  useEffect(() => {
    const obtenerReseñas = () => {
      const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];
      // Filtramos reseñas vacías o incompletas
      const reseñasValidas = reseñasGuardadas.filter(
        (reseña) => reseña.nombre && reseña.reseña && reseña.calificacion
      );
      setReseñas(reseñasValidas);
    };
    obtenerReseñas();
  }, []);

  // Función para guardar la nueva reseña en el Local Storage y mostrar el modal
  const guardarReseña = () => {
    const nuevasReseñas = [...reseñas, { ...nuevaReseña, id: reseñas.length + 1 }];
    localStorage.setItem('reseñas', JSON.stringify(nuevasReseñas));
    setReseñas(nuevasReseñas);
    setMostrarModal(true);
    setNuevaReseña({ nombre: "", reseña: "", calificacion: 0 }); // Limpiar el formulario
  };

  return (
    <div>
      <h2>Reseñas</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {reseñas.map((reseña) => (
          <li key={reseña.id} style={{ marginBottom: "10px" }}>
            <strong>{reseña.nombre}:</strong> {reseña.reseña}
            <div>
              {"★".repeat(reseña.calificacion)}{"☆".repeat(5 - reseña.calificacion)}
            </div>
          </li>
        ))}
      </ul>

      {/* Formulario para nueva reseña */}
      <div>
        <h3>Dejar una Reseña</h3>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nuevaReseña.nombre}
          onChange={(e) => setNuevaReseña({ ...nuevaReseña, nombre: e.target.value })}
          style={{ marginRight: "5px" }}
        />
        <textarea
          placeholder="Tu reseña"
          value={nuevaReseña.reseña}
          onChange={(e) => setNuevaReseña({ ...nuevaReseña, reseña: e.target.value })}
          style={{ marginRight: "5px" }}
        />
        <select
          value={nuevaReseña.calificacion}
          onChange={(e) => setNuevaReseña({ ...nuevaReseña, calificacion: Number(e.target.value) })}
          style={{ marginRight: "5px" }}
        >
          <option value={0}>Elige tu calificación</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star} estrellas</option>
          ))}
        </select>
        <button onClick={guardarReseña}>Enviar Reseña</button>
      </div>

      {/* Modal de agradecimiento */}
      {mostrarModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
          }}>
            <p>¡Gracias por tu opinión!</p>
            <button onClick={() => setMostrarModal(false)} style={{
              marginTop: "10px",
              padding: "8px 12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reseñas;
