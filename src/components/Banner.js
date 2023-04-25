import React from "react";
import "../styles/components/Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <img src="./assets/IMG.PNG" alt="Banniere" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
