import React, { useEffect, useState } from 'react';

const Reseñas = () => {
  const [reseñas, setReseñas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaReseña, setNuevaReseña] = useState({ nombre: "", reseña: "", calificacion: 0 });

  useEffect(() => {
    const obtenerReseñas = () => {
      const reseñasGuardadas = JSON.parse(localStorage.getItem('reseñas')) || [];
      setReseñas(reseñasGuardadas);
    };
    obtenerReseñas();
  }, []);

  const guardarReseña = () => {
    const nuevasReseñas = [...reseñas, { ...nuevaReseña, id: reseñas.length + 1 }];
    localStorage.setItem('reseñas', JSON.stringify(nuevasReseñas));
    setReseñas(nuevasReseñas);
    setMostrarModal(true);
    setNuevaReseña({ nombre: "", reseña: "", calificacion: 0 });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Itim, sans-serif', color: '#333' }}>
      <h2 style={{ marginBottom: '10px' }}>Reseñas</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {reseñas.map((reseña) => (
          <li key={reseña.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
            <strong>{reseña.nombre}:</strong> {reseña.reseña}
            <div style={{ fontSize: '18px', color: '#FFD700' }}>
              {"★".repeat(reseña.calificacion)}{"☆".repeat(5 - reseña.calificacion)}
            </div>
          </li>
        ))}
      </ul>

      {/* Formulario para nueva reseña */}
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h3 style={{ marginBottom: '10px' }}>Dejar una Reseña</h3>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nuevaReseña.nombre}
          onChange={(e) => setNuevaReseña({ ...nuevaReseña, nombre: e.target.value })}
          style={{ padding: '5px', marginBottom: '10px', width: '100%', boxSizing: 'border-box' }}
        />
        <textarea
          placeholder="Tu reseña"
          value={nuevaReseña.reseña}
          onChange={(e) => setNuevaReseña({ ...nuevaReseña, reseña: e.target.value })}
          style={{ padding: '5px', marginBottom: '10px', width: '100%', height: '60px', boxSizing: 'border-box' }}
        />
        <select
          value={nuevaReseña.calificacion}
          onChange={(e) => setNuevaReseña({ ...nuevaReseña, calificacion: Number(e.target.value) })}
          style={{ padding: '5px', marginBottom: '10px', width: '100%' }}
        >
          <option value={0}>Elige tu calificación</option>
          {[1, 2, 3, 4, 5].map(star => (
            <option key={star} value={star}>{star} estrellas</option>
          ))}
        </select>
        <button
          onClick={guardarReseña}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Enviar Reseña
        </button>
      </div>

      {/* Modal de agradecimiento */}
      {mostrarModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center',
            width: '80%',
            maxWidth: '400px'
          }}>
            <p>¡Gracias por tu opinión!</p>
            <button onClick={() => setMostrarModal(false)} style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reseñas;
