import React from "react";
import Cards from "../components/cards/cards";
import { NavLoguin } from "../components/nav-home/NavLoguin";
import FooterLoguin from "../components/footer/FooterLoguin";

export function Loguin() {
  return (
    <div>
      <NavLoguin />
      <Cards />
      <FooterLoguin />
    </div>
  );
}
