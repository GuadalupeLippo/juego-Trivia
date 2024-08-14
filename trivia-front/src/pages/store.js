import React from "react";
import { NavLoguin } from "../components/nav-home/NavLoguin";
import { AnimatedTitle } from "../components/animatedTitle/title";
import { CarrouselAvatars } from "../components/avatars/carrouselAvatars";
import { CardPoints } from "../components/points/buyPoints";

export default function Store() {
  return (
    <div>
      <NavLoguin />
      <AnimatedTitle />
      <CarrouselAvatars />
      <CardPoints/>
    </div>
  );
}
