import React from "react";
import LogementHost from "./LogementHost";
import LogementTitle from "./LogementTitle";
import "../styles/components/TitleAndHost.css";
function TitleAndHost() {
  return (
    <div className="title-and-host">
      <LogementTitle />
      <LogementHost />
    </div>
  );
}

export default TitleAndHost;
