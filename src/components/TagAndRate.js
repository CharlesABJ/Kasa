import React from "react";
import Rate from "./Rate";
import Tag from "./Tag";
import "../styles/components/TagAndRate.css";
function TagAndRate() {
  return (
    <div className="tag-and-rate-zone">
      <Tag />
      <Rate />
    </div>
  );
}

export default TagAndRate;
