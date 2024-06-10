
import './trivia.css'
import React from 'react';
import Slider from '../components/cards/slider'
import arte from '../components/carrousel/imagenes/arte.jpg';
import ciencias from '../components/carrousel/imagenes/ciencias.jpg';
import deportes3 from '../components/carrousel/imagenes/deportes3.png';
import entretenimiento from '../components/carrousel/imagenes/entretenimiento.jpg';
import geografia from '../components/carrousel/imagenes/geografia.jpg';
import historia from '../components/carrousel/imagenes/historia.jpeg';

const slideData = [
  {
    index: 0,
    headline: 'Arte',
    src: arte,
  },
  {
    index: 1,
    headline: 'Historia',
    src: historia,
  },
  {
    index: 2,
    headline: 'Ciencias',
    src: ciencias,
  },
  {
    index: 3,
    headline: 'Geografia',
    src: geografia,
  },
  {
    index: 4,
    headline: 'Entretenimiento',
    src: entretenimiento,
  },
  {
    index: 5,
    headline: 'Deportes',
    src: deportes3,
  },
];

export default function Trivia (){
  return (
    <div className='containerCategories' >
      <Slider heading="Example Slider" slides={slideData} />
    </div>
  );
};


