import React from "react";
import "./Check.css";
const Checkbox = ({ label , onChange}) => {
  return (
    <div className="check">
      <div className="Case">
        <input type="checkbox" onChange={()=>{
        onChange()
      }}/>
        <label>{label}</label>
      </div>
    </div>
  );
};

export default Checkbox;
