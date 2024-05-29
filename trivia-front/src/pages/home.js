import Welcome from "../components/welcome/welcome";
import Rules from "../components/rules/rules";
import DarkVariantExample from '../components/carrousel/carrousel';
import FooterHome from "../components/footer/footer";
import { Invitation } from "../components/registration-form/invitation-play";


export function Home (){
 return (
 <div>
    <Welcome/>
   <DarkVariantExample />
    <Rules/>
    <Invitation/>
    <FooterHome />
    </div>)
}

