import React from "react";
import "./Button.css";
const Button = ({name}) => {
  return (
    <div className="button">
      <button>{name}</button>
    </div>
  );
};

export default Button;
