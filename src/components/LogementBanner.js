import React, { useState } from "react";
import "../styles/components/LogementBanner.css";
import ArrowBanner from "./ArrowBanner";
function LogementBanner(props) {
  const [activeBanner, setActiveBanner] = useState(0);

  const handleClickNextBanner = () => {
    alert("Banniere suivante");
  };
  const handleClickPreviewBanner = () => {
    console.log("Banniere précédente");
  };
  return (
    <div className="logement-banner">
      <div className="arrows-banner-zone">
        <ArrowBanner
          onClick={handleClickPreviewBanner}
          className="arrow-banner arrow-left"
          alt="Image précédente"
        />
        <ArrowBanner
          onClick={handleClickNextBanner}
          className="arrow-banner"
          alt="Image suivante"
        />
      </div>
      <img className="img-banner" src={props.imgSrc} alt={props.title} />
    </div>
  );
}

export default LogementBanner;
