import React from "react";
import "./feat.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature-container-feat">
      <div className="feature-title">

        <div />
        <h1>{title}</h1>
      </div>

      <div className="feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
