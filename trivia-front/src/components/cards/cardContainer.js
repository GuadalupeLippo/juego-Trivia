import React from 'react';
import CardComponent from './CardComponent';

const CardContainer = () => {
  const cardsData = [
    { title: 'HISTORIA', imageSrc: './imagenes/historia.jpeg' },
    { title: 'ARTE Y LITERATURA', imageSrc: './imagenes/arte.jpg' },
    { title: 'DEPORTES', imageSrc: './imagenes/deportes3.png' },
    { title: 'CIENCIAS', imageSrc: './imagenes/ciencia.jpg' },
    { title: 'GEOGRAFIA', imageSrc: './imagenes/geografia.jpg' },
    { title: 'ENTRETENIMIENTO', imageSrc: './imagenes/entretenimiento.jpg'}
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <CardComponent key={index} title={card.title} imageSrc={card.imageSrc} />
      ))}
    </div>
  );
};

export default CardContainer;
