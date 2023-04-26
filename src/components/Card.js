import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Card.css";
function Card(props) {
  return (
    <div className="card">
      <NavLink to="/logement">
        <img src={props.cover} alt="logement" />
        <span>{props.title}</span>
      </NavLink>
    </div>
  );
}

export default Card;
