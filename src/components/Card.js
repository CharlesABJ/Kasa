import React from "react";
import { logementList } from "../datas/logementList";
import "../styles/components/Card.css";
function Card() {
  return (
    <div className="gallery">
      {logementList.map((e) => (
        <div key={e.id} className="gallery-card"></div>
      ))}
    </div>
  );
}

export default Card;
