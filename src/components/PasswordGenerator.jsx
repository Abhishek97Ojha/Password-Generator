import React from "react";
import "./Password.css";
import Checkbox from "./Checkbox";
import Length from "./Length";
import Button from "./Button";
import { numberArray, upperCaseArray, lowerCaseArray, symbolsArray } from "./Constants";
import { MdFileCopy } from "react-icons/md";
const PasswordGenerator = ({ pass, setPass, input, setInput ,copy,setCopy,genPass,setGenPass}) => {
  const lengthChange = (value) => {
    setPass({
      ...pass,
      length: value,
    });
  };
  const upperChange = () => {
    setPass({
      ...pass,
      upperCase: !pass.upperCase,
    });
  };
  const lowerChange = () => {
    setPass({
      ...pass,
      lowerCase: !pass.lowerCase,
    });
  };
  const numChange = () => {
    setPass({
      ...pass,
      numbers: !pass.numbers,
    });
  };
  const symbolChange = () => {
    setPass({
      ...pass,
      symbols: !pass.symbols,
    });
  };
  const generatePass = () => {
    // console.log(input,pass);
    const {upperCase,lowerCase,numbers,symbols,length} = pass;
    const generateWord = (upperCase,lowerCase,numbers,symbols)=>{
        const availValue = [
            ...(upperCase? upperCaseArray : []),
            ...(lowerCase? lowerCaseArray : []),
            ...(numbers? numberArray : []),
            ...(symbols? symbolsArray : []),
        ];
        const shuffleArray =(array) => {
            return array.sort (()=>{
                return Math.random() - 0.5
            })
        }
        const result = shuffleArray(availValue).slice(0,length).join("")
        setInput(result)
        setGenPass(true)
        setTimeout(()=>{
            setGenPass(false);
        },1000)
    }
    generateWord(upperCase,lowerCase,numbers,symbols)
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="inputBox">
        <input
          type="text"
          value={input}
         
        />
        <button onClick={()=>{
            if(input.length>0){
                navigator.clipboard.writeText(input)
                setCopy(true)
                setTimeout(()=>{
                    setCopy(false);
                },1000)
            }
        }}>{copy?"Copied":<MdFileCopy />}</button>
      </div>
      <Length onChange={lengthChange} />
      <Checkbox label="Include uppercase letters" onChange={upperChange} />
      <Checkbox label="Include lowercase letters" onChange={lowerChange} />
      <Checkbox label="Include numbers" onChange={numChange} />
      <Checkbox label="Include symbols" onChange={symbolChange} />
      <Button onClick={generatePass} genPass={genPass}/>
    </div>
  );
};

export default PasswordGenerator;
