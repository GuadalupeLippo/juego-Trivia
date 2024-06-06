import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function PlayButton() {
  const trivia = useNavigate();

  const handleNavigate = () => {
    trivia('/trivia');
  };


  return (
    <button className="btn btn-primary btn-lg" onClick={handleNavigate}>
      <FontAwesomeIcon icon={faPlay} /> Jugar
    </button>
  );
}

export default PlayButton;
