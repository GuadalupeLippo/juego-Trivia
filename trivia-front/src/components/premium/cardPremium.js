import React, { useState } from "react";
import "./cardPremium.css";
import premium6 from '../images/premium6.png';
import premium7 from '../images/premium7.png';
import premium8 from '../images/premium8.png';
import premium9 from '../images/premium9.png';
import { TitlePremium } from "./titlePremium";
import { BuyAvatarModal } from '../avatars/modalWindow.js';
import { useAuth } from '../form-loguin/UserAuth.js';

export function CardPremium() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [purchasedAvatars, setPurchasedAvatars] = useState({});
  const { authUser, updateScore } = useAuth();

  const premiumAvatars = [
    { id: 'Premium1', src: premium6, pointsNeeded: 1000 },
    { id: 'Premium2', src: premium7, pointsNeeded: 1000 },
    { id: 'Premium3', src: premium8, pointsNeeded: 1000 },
    { id: 'Premium4', src: premium9, pointsNeeded: 1000 }
  ];

  const handleShowModal = (avatar) => {
    setSelectedAvatar(avatar);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedAvatar(null);
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    setPurchasedAvatars((prev) => ({
      ...prev,
      [selectedAvatar.id]: true,
    }));
    const newScore = authUser?.score - selectedAvatar.pointsNeeded;
    updateScore(newScore);
    handleCloseModal();
  };

  return (
    <div className='card_premium_container'>
      {premiumAvatars.map((avatar) => (
        <div key={avatar.id} className={`card_premium ${purchasedAvatars[avatar.id] ? 'purchased' : ''}`}>
          <h1 className='premium_title'><TitlePremium/></h1>
          <img className='premium_img' src={avatar.src} alt={`${avatar.pointsNeeded} Puntos`} />
          <h1 className='premium_price'>
            {purchasedAvatars[avatar.id] ? 'Canjeado' : `${avatar.pointsNeeded} Puntos`}
          </h1>
          {!purchasedAvatars[avatar.id] && (
            <button className='button_premium' onClick={() => handleShowModal(avatar)}>
              Canjear
            </button>
          )}
        </div>
      ))}

      <BuyAvatarModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirmPurchase={handleConfirmPurchase}
        selectedAvatar={selectedAvatar}
      />
    </div>
  );
}
