import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import ModalEditAvatar from './ModalEditAvatar';
import './misAvatars.css';

function CardsMisAvatars({ updateAvatar }) {
  const [misAvatars, setMisAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    console.log("useEffect ejecutado"); 
    const DataUser = localStorage.getItem('authATRV'); 

    if (DataUser) {
      try {
        const { token } = JSON.parse(DataUser);
        const decodedToken = jwtDecode(token);
        console.log("Token decodificado:", decodedToken);

        if (decodedToken && decodedToken.sub) {
          const userId = decodedToken.sub;
          console.log("User ID obtenido del token:", userId);
          fetchPurchasedAvatars(userId);
        } else {
          console.error("El token no contiene un ID de usuario válido en 'sub'.");
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    } else {
      console.error("No se encontró el token.");
    }
  }, []);

  const fetchPurchasedAvatars = async (userId) => {
    console.log("Buscando avatares para el usuario:", userId);
    try {
      const response = await fetch(`http://localhost:3000/buy-avatar/user/${userId}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos de avatares");
      }
      const data = await response.json();
      console.log("Datos de los avatares comprados:", data);
      setMisAvatars(data);
    } catch (error) {
      console.error("Error al obtener los avatares comprados:", error);
    }
  };

  const handleShowModalAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setShowModal(true);
  };

  const handleCloseModalAvatar = () => {
    setShowModal(false);
    setSelectedAvatar(null);
  };

  const handleConfirmChangeAvatar = async () => {
    if (selectedAvatar) {
      const buyData = localStorage.getItem('authATRV');

      if (buyData) {
        try {
          const { token } = JSON.parse(buyData);
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.sub;

          const response = await fetch(`http://localhost:3000/player/${userId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              defaultAvatar: selectedAvatar.image,
            }),
          });

          if (!response.ok) {
            throw new Error("Error al actualizar el avatar");
          }

          console.log("Avatar actualizado correctamente");
          updateAvatar(selectedAvatar.image);
          handleCloseModalAvatar();

        } catch (error) {
          console.error("Error al actualizar el avatar:", error);
        }
      }
    }
  };

  const playerAvatarDefault = localStorage.getItem("defaultAvatar");
  console.log('avatar por defecto', playerAvatarDefault)
  
  return (
    <>
      <Row className="g-4">
        {playerAvatarDefault && (
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="card-avatar">
              <Card.Img
                variant="top"
                src={playerAvatarDefault}
                alt="Avatar por defecto"
                className="card-img-custom"
              />
              <Card.Body>
                <Button
                  className="btnfos btnfos-5 mt-3"
                  onClick={() => handleShowModalAvatar({ image: playerAvatarDefault })}
                >
                  Editar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
        
        {misAvatars.map((avatarData) => (
          <Col key={avatarData.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="card-avatar">
              <Card.Img
                variant="top"
                src={avatarData.purchasedAvatar.image}
                alt={`Avatar ${avatarData.purchasedAvatar.id}`}
                className="card-img-custom"
              />
              <Card.Body>
                <Button
                  className="btnfos btnfos-5 mt-3"
                  onClick={() => handleShowModalAvatar(avatarData.purchasedAvatar)}
                >
                  Editar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ModalEditAvatar
        showModal={showModal}
        handleCloseModalAvatar={handleCloseModalAvatar}
        handleConfirmChangeAvatar={handleConfirmChangeAvatar}
      />
    </>
  );
}

export default CardsMisAvatars;
