import React from "react";
import "../styles/components/ArrowDropDown.css";
function ArrowDropDown(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

export default ArrowDropDown;
