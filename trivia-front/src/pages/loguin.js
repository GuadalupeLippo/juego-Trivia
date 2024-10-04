import React from "react";
import Cards from "../components/cards/cards";
import { NavLoguin } from "../components/nav-home/NavLoguin";
import FooterLoguin from "../components/footer/FooterLoguin";
import './loguin.css';
export function Loguin() {
  return (
    <div className="loguin">
      <NavLoguin />
      <Cards />
      <FooterLoguin />
    </div>
  );
}
