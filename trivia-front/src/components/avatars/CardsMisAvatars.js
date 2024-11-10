import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode'; // Corrección: eliminar llaves si es una exportación por defecto
import ModalEditAvatar from './ModalEditAvatar';
import './misAvatars.css';

function CardsMisAvatars({ updateAvatar }) {
  const [misAvatars, setMisAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    console.log("useEffect ejecutado"); // Mensaje para verificar ejecución
    const DataUser = localStorage.getItem('authATRV'); // Asegúrate de que el nombre coincida con el almacenamiento

    if (DataUser) {
      try {
        const { token } = JSON.parse(DataUser);
        const decodedToken = jwtDecode(token);
        console.log("Token decodificado:", decodedToken);

        if (decodedToken && decodedToken.sub) {
          const userId = decodedToken.sub; // Extrayendo el userId desde el campo 'sub'
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
    console.log("Buscando avatares para el usuario:", userId); // Verificar ejecución
    try {
      const response = await fetch(`http://localhost:3000/buy-avatar/user/${userId}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos de avatares");
      }
      const data = await response.json();
      console.log("Datos de los avatares comprados:", data); // Verifica los datos obtenidos
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
  
          // Hacer la solicitud PATCH al backend para actualizar el avatar por defecto
          const response = await fetch(`http://localhost:3000/player/${userId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              defaultAvatar: selectedAvatar.image, // O puedes enviar el ID del avatar si prefieres
            }),
          });
  
          if (!response.ok) {
            throw new Error("Error al actualizar el avatar");
          }
  
          // Si la actualización es exitosa, puedes hacer algo aquí, como cerrar el modal
          console.log("Avatar actualizado correctamente");
          updateAvatar(selectedAvatar.image); // Actualizar la vista en el frontend
          handleCloseModalAvatar();
  
        } catch (error) {
          console.error("Error al actualizar el avatar:", error);
        }
      }
    }
  };
  

  return (
    <>
      <Row className="g-4">
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
