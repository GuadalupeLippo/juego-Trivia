import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import ModalEditAvatar from './ModalEditAvatar';
import './misAvatars.css'

function CardsMisAvatars({updateAvatar}) {
    const MisAvatars = [
        { id: 'George', src: "https://api.dicebear.com/9.x/bottts/svg?seed=George" },
        { id: 'Loki', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Loki" },
        { id: 'Charlie', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Charlie" },
        { id: 'Bandit', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Bandit" },
        { id: 'Boo', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Boo" , pointsNeeded:200},
        { id: 'Fluffy', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Fluffy", pointsNeeded:200 },
        { id: 'Bella', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Bella" , pointsNeeded:200},
        { id: 'Luna', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Luna" , pointsNeeded:200},
        { id: 'Baby', src: "https://api.dicebear.com/9.x/bottts/svg?seed=Baby", pointsNeeded:200 },
      ];
    const [showModal, setShowModal] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleShowModalAvatar = (avatar) => {
      setSelectedAvatar(avatar);
      setShowModal(true);
    };
  
    const handleCloseModalAvatar = () => {
      setShowModal(false);
      setSelectedAvatar(null);
    };
    const handleConfirmChangeAvatar = () => {
      if (selectedAvatar) {
        updateAvatar(selectedAvatar.src);
      }
      handleCloseModalAvatar();
    };
    
  return (
  <>

    <Row className="g-4">
      {MisAvatars.map((avatar) => (
        <Col key={avatar.id} xs={12} sm={6} md={4} lg={3} >
          <Card className="card-avatar">
            <Card.Img variant="top" src={avatar.src} alt={avatar.id} className="card-img-custom" />
            <Card.Body>
              <Card.Title className='title-id'>{avatar.id}</Card.Title>
              <Button 
                className="btnfos btnfos-5 mt-3" 
                onClick={() => handleShowModalAvatar(avatar)}
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
