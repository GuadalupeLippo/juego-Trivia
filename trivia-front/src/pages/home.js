import { Navhome } from "../components/nav-home/nav-home";
import Welcome from "../components/welcome/welcome";
// import Rules from "../components/rules/rules";
// import Carrousel from "../components/carrousel/carrousel";
import FooterHome from "../components/footer/footer";
import { Invitation } from "../components/registration-form/invitation-play";
import { CarrouselGifs } from "../components/instructions/instructions";
import './home.css';

export function Home (){
 return (
 <div>
     <Navhome/>
    <Welcome/>
    
    <div className="combinacion">
<CarrouselGifs/>
    </div>
    <Invitation/>
    <FooterHome />
    </div>)
}

