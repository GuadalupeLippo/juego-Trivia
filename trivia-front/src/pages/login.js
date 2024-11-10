import {React, useState, useRef} from "react";
import Cards from "../components/cards/cards";
import NavLogin  from "../components/nav-home/NavLogin";
import FooterLogin from "../components/footer/FooterLogin";
import NotificationBonus from "../components/notifications/NotificationBonus";
import './login.css';

export function Login() {
  const [showNotification, setShowNotification] = useState(!localStorage.getItem('firstLoginNotified'));
  const navLoginRef = useRef(null);
  const handleCloseNotification = () => {
    setShowNotification(false);
    localStorage.setItem('firstLoginNotified', 'true');
  };
  return (
    <div className='login'>
      <NavLogin ref={navLoginRef} />
      <Cards />
      <FooterLogin />
      {showNotification && <NotificationBonus onClose={handleCloseNotification} navLoginRef={navLoginRef} />}
    </div>
  );
}
