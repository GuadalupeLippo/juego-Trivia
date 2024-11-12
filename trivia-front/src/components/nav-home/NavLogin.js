import {React,useState, useRef, useImperativeHandle, forwardRef} from "react";
import Logo from "../images/logocerebritotrivia.png";
import Category from  '../images/signo-de-interrogacion.png';
import Tienda from '../images/tienda.png'
import { Link } from "react-router-dom";
import { useAuth } from '../auth/UserAuth';
import Dropdownprofile from "../DropDownProfile/Dropdownprofile";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../nav-home/nav-home.css";
import "../Politicas/politicas.css";
import "../DropDownProfile/DropDownProfile.css";


 const NavLogin  =  forwardRef((props, ref) =>  {
  const { authUser, logout } = useAuth(); 
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  const handleNotificationStore = () => {
    localStorage.setItem('firstLoginNotified', 'true');
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu); 
  };

  const storeImageRef = useRef(null);
  const categoryImageRef= useRef(null);
  const avatarRef = useRef(null);
  const nameRef = useRef(null);

  useImperativeHandle(ref, () => ({
    highlightStoreIcon: () => {
      if (storeImageRef.current) {
        storeImageRef.current.classList.add('zoom', 'highlight');
      }
      if (categoryImageRef.current) {
        categoryImageRef.current.classList.add('opacity'); // Oscurecer el ícono de la categoría
      }
      if (avatarRef.current) {
        avatarRef.current.classList.add('opacity');
      }
      if (nameRef.current) {
        nameRef.current.classList.add('opacity');
      }
    },
    resetStoreIcon: () => {
      if (storeImageRef.current) {
        storeImageRef.current.classList.remove('zoom', 'highlight', 'opacity');
      }
      if (categoryImageRef.current) {
        categoryImageRef.current.classList.remove('opacity'); 
      }
      if (avatarRef.current) {
        avatarRef.current.classList.remove('opacity');
      }
      if (nameRef.current) {
        nameRef.current.classList.remove('opacity');
      }
    }
  }));

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between">
          <Link  onClick={handleLogoutClick} to='/'>
            <img className="logoNav" src={Logo} alt="logo pagina" width="180" />
          </Link>

          <button className="navbar-toggler" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={`menu-items ${showMenu ? "show" : ""}`}>
          <Link to={`/login/${authUser?.id}`}>
              <button className="btn btn-lg no-style-btn me-2">
                <img src={Category} alt="categoria" width="40" ref={categoryImageRef} className="category-icon"/>
              </button>
            </Link>
            <Link to={`/store/${authUser?.id}`} onClick={handleNotificationStore}>
              <button className="btn btn-lg no-style-btn me-2">
              <img src={Tienda} ref={storeImageRef} alt="tienda" width="40" className="store-icon"  />
              </button>
            </Link>
            <Dropdownprofile
            avatarRef= {avatarRef}
            nameRef= {nameRef} />
          </div>
        </div>
      </nav>
    </div>
  );
}
)

export default NavLogin
