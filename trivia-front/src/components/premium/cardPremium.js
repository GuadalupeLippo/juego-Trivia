import React, { useState, useEffect } from "react";
import "./cardPremium.css";
import { TitlePremium } from "./titlePremium";
import { ModalNoPoints } from "../avatars/ModalNoPoints.js";
import { BuyAvatarModal } from '../avatars/modalWindow.js';
import { useAuth } from '../auth/UserAuth.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CardPremium() {
  const [showModal, setShowModal] = useState(false);
  const [showNoPointsModal, setShowNoPointsModal] = useState(false); // Estado para el modal de puntos insuficientes
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [purchasedAvatars, setPurchasedAvatars] = useState({});
  const [premiumAvatars, setPremiumAvatars] = useState([]);
  const { authUser, updateScore } = useAuth();

  useEffect(() => {
    fetchPremiumAvatars();
  }, []);

  const fetchPremiumAvatars = async () => {
    try {
      const response = await fetch('http://localhost:3000/avatars');
      const data = await response.json();
      const filteredPremiumAvatars = data.filter(avatar => avatar.type === 'premium');
      setPremiumAvatars(filteredPremiumAvatars);
    } catch (error) {
      console.error('Error al traer los avatars premium:', error);
    }
  };

  useEffect(() => {
    const fetchCompradosAvatars = async () => {
      try {
        const response = await fetch(`http://localhost:3000/buy-avatar/user/${authUser.id}`);
        const data = await response.json();
        console.log("Datos recibidos:", data); // Verifica la estructura de data aquí
        
        if (Array.isArray(data)) {
          // Si data es un array, entonces procede con map
          const purchasedAvatarIds = data.reduce((acc, item) => {
            acc[item.purchasedAvatar.id] = true;
            return acc;
          }, {});
          setPurchasedAvatars(purchasedAvatarIds); // Setea el objeto con los avatares comprados
        } else {
          console.error("Error: los datos recibidos no son un array.", data);
        }
      } catch (error) {
        console.error("Error al obtener avatares comprados:", error);
      }
    };
    
    fetchCompradosAvatars();
  }, [authUser.id]);
  

  const handleShowModal = (avatar) => {
    if (authUser?.score >= avatar.price) {
      setSelectedAvatar(avatar);
      setShowModal(true);
    } else {
      setShowNoPointsModal(true); // Abre el modal de "puntos insuficientes"
    }
  };

  const handleCloseModal = () => {
    setSelectedAvatar(null);
    setShowModal(false);
  };

  const handleConfirmPurchase = async () => {
    const token = authUser?.token;
    try {
      const response = await fetch('http://localhost:3000/buy-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          avatarId: selectedAvatar.id,
          playerId: authUser.id,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al realizar la compra');
      }
      setPurchasedAvatars((prev) => ({
        ...prev,
        [selectedAvatar.id]: true,
      }));
      const newScore = authUser?.score - selectedAvatar.price;
      updateScore(newScore);
      
      handleCloseModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseNoPointsModal = () => {
    setShowNoPointsModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      
        <Slider {...settings}>
          {premiumAvatars.map((avatar) => (
           <div className='card_premium_container'>
             <div key={avatar.id} className={`card_premium ${purchasedAvatars[avatar.id] ? 'purchased' : ''}`}>
              <h1 className='premium_title'><TitlePremium /></h1>
              <img className='premium_img' src={avatar.image} alt={`${avatar.price} Puntos`} />
              <h1 className={`premium_price ${purchasedAvatars[avatar.id] ? 'avatar_obtenido' : ''}`}>
            {purchasedAvatars[avatar.id] ? 'Avatar obtenido' : `${avatar.price} Puntos`}
          </h1>
              {!purchasedAvatars[avatar.id] && (
                <button className='button_premium' onClick={() => handleShowModal(avatar)}>
                  Canjear
                </button>
              )}
            </div>
            </div>
          ))}
        </Slider>
     
      <BuyAvatarModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirmPurchase={handleConfirmPurchase}
        selectedAvatar={selectedAvatar}
      />
      <ModalNoPoints
        show={showNoPointsModal}
        handleClose={handleCloseNoPointsModal}
      />
   </>
  );
}
