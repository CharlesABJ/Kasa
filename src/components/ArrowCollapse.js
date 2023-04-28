import React from "react";
import "../styles/components/ArrowCollapse.css";
function ArrowCollapse(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

export default ArrowCollapse;
