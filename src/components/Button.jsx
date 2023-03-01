import React from "react";
import "./Button.css";
const Button = ({
  upperCase,
  lowerCase,
  numbers,
  symbols,
  length,
  genPass,
  onClick,
}) => {
  return (
    <div className="button">
      <button
        onClick={() => {
          onClick();
        }}
      >
        {genPass && length > 0 && (upperCase || lowerCase || numbers || symbols)
          ? "Password Generated"
          : "Generate Password"}
      </button>
    </div>
  );
};

export default Button;
