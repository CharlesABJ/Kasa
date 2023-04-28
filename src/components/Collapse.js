import { useState } from "react";
import React from "react";
import "../styles/components/Collapse.css";
import ArrowCollapse from "./ArrowCollapse";
function Collapse(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <li>
      <div>
        <p onClick={handleClick} className="drop-down">
          {props.label}
          <ArrowCollapse
            className={isClicked ? "drop" : null}
            src="./assets/arrow-drop.png"
            alt={isClicked ? "élément ouvert" : "élement fermé"}
          />
        </p>
        <p className={`description ${isClicked ? "" : "closed"}`}>
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default Collapse;
