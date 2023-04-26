import React from "react";
import "../styles/components/LogementBanner.css";
function LogementBanner(props) {
  return (
    <div className="logement-banner">
      <img src={props.imgSrc} alt={props.title} />
      Bannière
    </div>
  );
}

export default LogementBanner;
