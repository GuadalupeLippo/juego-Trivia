import Welcome from "../components/welcome/welcome";
import Rules from "../components/rules/rules";
import Carrousel from "../components/carrousel/carrousel";
import FooterHome from "../components/footer/footer";
import './home.css';


export function Home (){
 return (
 <div>
    <Welcome/>
    <div className="combinacion">
    <Carrousel/><Rules />
    </div>
    <FooterHome />
    </div>)
}

