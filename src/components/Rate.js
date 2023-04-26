import React from "react";
import "../styles/components/Rate.css";
function Rate(props) {
  return <i className={`fa-solid fa-star rate ${props.color}`}></i>;
}

export default Rate;
