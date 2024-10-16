import "./footer.css";
import Facebook from "./facebookWhite.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";

import { Link } from "react-router-dom";

function FooterHome() {
  return (
    <>
      <div className="footer">
        <div className="redesSociales">
         
            <Link to="https://www.facebook.com/" target="_blank">
              <img alt="logoFacebook" src={Facebook} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <img alt="logoInstagram" src={instagram} />
            </Link>
            <Link to="https://x.com/" target="_blank">
              <img alt="logoTwitter" src={twitter} />
            </Link>
         
        </div>
        <Link to="/politicas" className="politicas">
          Politicas de privacidad
        </Link>
      </div>
    </>
  );
}
export default FooterHome;
