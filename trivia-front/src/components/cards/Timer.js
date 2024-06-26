import React, { useState, useEffect } from 'react';
import './Timer.css';
import sonido from './sonido.mp3';


const Timer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      const audio = new Audio(sonido); 
      audio.play();
    }
  }, [timeLeft]);

   
  return (
    <div className='timer'>
      <h1><strong> {timeLeft}</strong></h1>
    </div>
  );
};

export default Timer;

