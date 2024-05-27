import Welcome from "../components/welcome/welcome";
import Rules from "../components/rules/rules";
import DarkVariantExample from '../components/carrousel/carrousel';
import FooterHome from "../components/footer/footer";



export function Home (){
 return (
 <div>
    <Welcome/>
   <DarkVariantExample />
    <Rules/>
    <FooterHome />
    </div>)
}

