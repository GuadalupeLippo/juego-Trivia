import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './avatars.css';
import { BuyAvatarModal } from './modalWindow.js';
import { useAuth } from '../auth/UserAuth.js';

export function CarrouselAvatars({ avatar }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [purchasedAvatars, setPurchasedAvatars] = useState([]);
  const { authUser, updateScore } = useAuth();

  useEffect(() => {
    // Función para obtener los avatares comprados
    const fetchCompradosAvatars = async () => {
      try {
        const response = await fetch(`http://localhost:3000/buy-avatar/user/${authUser.id}`);
        const data = await response.json();
        console.log("Datos recibidos:", data); // Verifica la estructura de data aquí
        
        if (Array.isArray(data)) {
          // Si data es un array, entonces procede con map
          const purchasedAvatarIds = data.map(item => item.purchasedAvatar.id);
          setPurchasedAvatars(purchasedAvatarIds);
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
    setSelectedAvatar(avatar);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedAvatar(null);
    setShowModal(false);
  };

  const handleConfirmPurchase = async () => {
    if (!authUser?.id || !selectedAvatar?.id) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/buy-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          avatarId: selectedAvatar.id,
          playerId: authUser.id,
        }),
      });

      if (response.ok) {
        updateScore(authUser.score - selectedAvatar.price);
        setPurchasedAvatars([...purchasedAvatars, selectedAvatar.id]);
        console.log("Compra realizada con éxito");
      } else {
        const errorData = await response.json();
        console.error("Error al realizar la compra:", errorData);
      }
    } catch (error) {
      console.error("Error al conectarse al servidor:", error);
    }
  };

  // Filtrar los avatares de tipo "normal"
  const normalAvatars = avatar.filter((av) => av.type === "normal");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {normalAvatars.map((avatar) => (
          <div key={avatar.id}>
            <div className="avatar_container">
              <div className="card_container">
                <article className="card_article">
                  <img src={avatar.image} alt="avatar" className="card_img" />
                  <div className="card_data">
                  {!purchasedAvatars.includes(avatar.id) && (
    <h3 className="card_precio">{avatar.price}</h3>
  )}

                    {purchasedAvatars.includes(avatar.id) ? (
                      <p className="card_obtenido">Avatar obtenido</p>
                    ) : (
                      <button className="card_button" onClick={() => handleShowModal(avatar)}>
                        Canjear
                      </button>
                    )}
                  </div>
                </article>
              </div>
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
    </div>
  );
}
