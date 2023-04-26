import React, { useState } from "react";
import "../styles/components/Card.css";
function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="card">
      <img
        className={isHovered ? "card-hovered " : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={props.cover}
        alt="logement"
      />
      <span>{props.title}</span>
    </div>
  );
}

export default Card;
