import React from "react";
import "./Button.css";
const Button = ({ genPass,onClick}) => {
  return (
    <div className="button">
      <button onClick={()=>{
        onClick()
      }}>{genPass?"Password Generated":"Generate Password"}</button>
    </div>
  );
};

export default Button;
