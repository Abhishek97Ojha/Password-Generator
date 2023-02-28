import React from "react";
import "./Password.css";
import Checkbox from "./Checkbox";
import Length from "./Length";
import Button from "./Button";
import {MdFileCopy} from 'react-icons/md'
const PasswordGenerator = () => {
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="inputBox">
        <input type="text" />
        <button>{<MdFileCopy />}</button>
      </div>
      <Length />
      <Checkbox />
      <Button name="Generate Password"/>
    </div>
  );
};

export default PasswordGenerator;
