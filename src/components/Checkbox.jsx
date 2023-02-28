import React from "react";
import "./Check.css";
const Checkbox = () => {
  return (
    <div className="check">
      <div className="Case">
        <input type="checkbox" />
        <label>Include uppercase letters</label>
      </div>
      <div className="Case">
        <input type="checkbox" />
        <label>Include lowercase letters</label>
      </div>
      <div className="Case">
        <input type="checkbox" />
        <label>Include numbers</label>
      </div>
      <div className="Case">
        <input type="checkbox" />
        <label>Include symbols</label>
      </div>
    </div>
  );
};

export default Checkbox;
