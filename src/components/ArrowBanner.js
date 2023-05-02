import React from "react";
import "../styles/components/ArrowBanner.css";

function ArrowBanner(props) {
  return (
    <img
      className={props.className}
      src="/assets/banner-arrow.png"
      alt={props.alt}
    />
  );
}

export default ArrowBanner;
