import Welcome from "../components/welcome/welcome";
import Rules from "../components/rules/rules";
import Carrousel from "../components/carrousel/carrousel";
import FooterHome from "../components/footer/footer";



export function Home (){
 return (
 <div>
    <Welcome/>

    <Carrousel/>
   <Rules />

    <FooterHome />
    </div>)
}

