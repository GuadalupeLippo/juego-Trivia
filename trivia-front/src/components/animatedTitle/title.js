import React from "react";
import "./title.css";

export function AnimatedTitle() {
  return (
    <div className="animated-title-container">
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
