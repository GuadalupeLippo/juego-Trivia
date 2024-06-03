import Welcome from "../components/welcome/welcome";
import Rules from "../components/rules/rules";

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

