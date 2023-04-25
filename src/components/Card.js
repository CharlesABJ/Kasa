import React from "react";
import "../styles/components/Card.css";
function Card(props) {
  return (
    <div className="card">
      <img src={props.cover} alt="logement" />
      <span>{props.title}</span>
    </div>
  );
}

export default Card;
