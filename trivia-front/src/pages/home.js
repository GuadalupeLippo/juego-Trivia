import Welcome from "../components/welcome/welcome";
import Rules from "../components/rules/rules";

import FooterHome from "../components/footer/footer";
import Carrousel from "../components/carrousel/carrousel";



export function Home (){
 return (
 <div>
    <Welcome/>
    <Carrousel/>
   <Rules />
    <FooterHome />
    </div>)
}

