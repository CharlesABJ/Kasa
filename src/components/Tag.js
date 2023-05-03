import React from "react";
import "../styles/components/Tag.css";

function Tag(props) {
  return (
    <div className="tag">
      <span>{props.tag}</span>
    </div>
  );
}

export default Tag;
