import {React,useState} from "react";
import Logo from "../images/logocerebritotrivia.png";
import Category from  '../images/signo-de-interrogacion.png';
import Tienda from '../images/tienda.png'
import { Link } from "react-router-dom";
import { useAuth } from '../auth/UserAuth';
import Dropdownprofile from "../DropDownProfile/Dropdownprofile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../nav-home/nav-home.css";
import "../Politicas/politicas.css";
import "../DropDownProfile/DropDownProfile.css";


export function NavLogin() {
  const { authUser } = useAuth(); 
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/">
            <img className="logoNav" src={Logo} alt="logo pagina" width="180" />
          </Link>

          <button className="navbar-toggler" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={`menu-items ${showMenu ? "show" : ""}`}>
          <Link to={`/login/${authUser?.id}`}>
              <button className="btn btn-lg no-style-btn me-2">
                <img src={Category} alt="categoria" width="40" />
              </button>
            </Link>
            <Link to="/store">
              <button className="btn btn-lg no-style-btn me-2">
              <img src={Tienda} alt="tienda" width="40" />
              </button>
            </Link>
            <Dropdownprofile />
          </div>
        </div>
      </nav>
    </div>
  );
}
