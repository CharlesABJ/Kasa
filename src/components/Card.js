import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Card.css";
function Card(props) {
  return (
    <div className="card">
      <Link to={`/logement/${props.id}`}>
        {" "}
        <div className="overlay"></div>
        <img src={props.cover} alt="logement" />
        <span>{props.title}</span>
      </Link>
    </div>
  );
}

export default Card;
