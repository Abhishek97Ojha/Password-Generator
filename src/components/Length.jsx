import React from "react";
import "./Length.css";
const Length = () => {
  return (
    <div className="length">
      <label>Select Password Length</label>
      <select>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
      </select>
    </div>
  );
};

export default Length;
