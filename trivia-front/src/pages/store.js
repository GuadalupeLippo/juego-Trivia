import {React,useState,
  useEffect
} from "react";
import NavLogin  from "../components/nav-home/NavLogin";
import { AnimatedTitle } from "../components/animatedTitle/title";
import { CarrouselAvatars } from "../components/avatars/carrouselAvatars";
import { CardPoints } from "../components/points/buyPoints";
import { CardPremium } from "../components/premium/cardPremium";
import { getAvatars } from "../API/getDataBase";

export default function Store() {
  const [avatar, setAvatar] = useState([]);

  
  useEffect(()=>{
    getAvatars()
    .then((res)=> res.json())
    .then((data)=> {
      setAvatar(data);
      }
  )
  },[])

  return (
    <div>
      <NavLogin />
      <AnimatedTitle />
      <CardPremium/>
      <CarrouselAvatars avatar={avatar} key={avatar.id}/>
      <CardPoints/>
    </div>
  );
}
