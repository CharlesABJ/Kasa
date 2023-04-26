import React from "react";
import DropDown from "./DropDown";
import "../styles/components/DescriptionZone.css";

function DescriptionZone() {
  return (
    <div className="description-zone">
      <DropDown label="test" description="testeur" openByDefault="true" />
      <DropDown label="test" description="testeur" openByDefault="true" />
    </div>
  );
}

export default DescriptionZone;
