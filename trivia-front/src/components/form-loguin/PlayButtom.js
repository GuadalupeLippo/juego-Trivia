import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./PlayButtom.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PlayButton({ onClick }) {
  return (
    <button className="btn-grad" onClick={onClick}>
      <FontAwesomeIcon icon={faPlay} size="xl" />
    </button>
  );
}
