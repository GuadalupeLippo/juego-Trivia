import React from "react";
import "./title.css";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export function AnimatedTitle() {
  return (
    <div className="animated-title-container">
      <div>
      <Link to="/loguin">
        <button className="back_button">
          <BsArrowLeftCircleFill className="icon" />
        </button>
      </Link>
</div>
      <svg viewBox="0 0 1320 300" className="svg_title">
        <symbol id="s-text">
          
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            TIENDA
          </text>
        </symbol>
        <>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
        </>
      </svg>
    </div>
  );
}
