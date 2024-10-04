import { Navhome } from "../components/nav-home/nav-home";
import Welcome from "../components/welcome/welcome";
import FooterHome from "../components/footer/footer";
import { CarrouselGifs } from "../components/instructions/instructions";
import { Invitation } from "../components/registration-form/invitation-play";
import Demohome from "../components/demo/Demohome";
import "./home.css";

export function Home() {
  return (
    <div className="home">
      <Navhome />
      <Welcome />

      <div className="combinacion">
        <CarrouselGifs />
      </div>
      <Invitation />
      <Demohome/>
      <FooterHome />
    </div>
  );
}
