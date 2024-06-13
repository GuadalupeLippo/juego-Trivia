import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './PlayButtom.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function PlayButton() {
  const loguin = useNavigate();

  const handleNavigate = () => {
    loguin('/loguin');
  };


  return (
    <button className="btn btn-grad btn-lg" onClick={handleNavigate}>
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
}

export default PlayButton;
