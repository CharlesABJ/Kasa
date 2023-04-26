import React from "react";
import "../styles/components/LogementHost.css";
function LogementHost(props) {
  return (
    <div className="logement-host">
      <span>{props.hostName}nom</span>
      <img src={props.hostPicture} alt={`portrait de ${props.hostName}`} />
    </div>
  );
}

export default LogementHost;
