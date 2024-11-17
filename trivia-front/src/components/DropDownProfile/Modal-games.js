import React, { useState, useEffect } from "react"; 
import { Modal } from "react-bootstrap";
import { useAuth } from "../auth/UserAuth";
import "./modal-games.css";
import primero from "../images/primerpuesto.png";
import segundo from "../images/segundopuesto.png";
import tercero from "../images/tercerpuesto.png";

export function ModalGames({ openGames, handleCloseGames }) {
  const { authUser } = useAuth();
  const [topGames, setTopGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const playerId = authUser?.id;

  const fetchTopGames = async () => {
    if (!playerId) {
      console.error("No se encontró el id del jugador");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/player/${playerId}/top-games`);
      if (response.ok) {
        const data = await response.json();
        setTopGames(data);
      } else {
        console.error("Error al obtener los juegos");
      }
    } catch (error) {
      console.error("Error de red:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (openGames && playerId) {
      fetchTopGames();
    }
  }, );

  return (
    <Modal show={openGames} onHide={handleCloseGames} className="Modal" backdrop="static" centered>
      <Modal.Header className="modal-registrer" closeButton>
        <Modal.Title className="title-games">Registro de partidas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul className="ul-best-games">
            {topGames.length > 0 ? (
              topGames.map((game, index) => {
                let className = "";
                if (index === 0) {
                  className = "first-game"; 
                } else if (index === 1) {
                  className = "second-game";  
                } else if (index === 2) {
                  className = "third-game";  
                }
                return (
                  <li className={`li-best-games ${className}`} key={index}>
                    <div className="game-rank">
                      {index === 0 &&  <img src={primero} alt="Primero" />}
                      {index === 1 && <img src={segundo}  alt="Segundo" />}
                      {index === 2 &&  <img src={tercero} alt="Tercero" />}
                      <strong className="total-points-li">Puntaje total:</strong> {game.totalScore} <br />
                      <strong className="category-li">Categoria:</strong> {game.category.type} <br />
                    </div>
                  </li>
                );
              })
            ) : (
              <li>Todavia no has jugado ninguna partida.</li>
            )}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  );
}
