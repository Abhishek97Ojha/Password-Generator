import { useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
function App() {
  const [pass, setPass] = useState({
    upperCase : false,
    lowerCase : false,
    numbers : false,
    symbols : false,
    length : 0,
  });
  const [input,setInput] = useState("") ;
  const [copy,setCopy] = useState(false);
  const [genPass,setGenPass] = useState(false);

  return (
    <div className="App">
      <PasswordGenerator pass={pass} setPass={setPass} input={input} setInput={setInput} genPass={genPass} setGenPass={setGenPass} copy={copy} setCopy={setCopy}/>
    </div>
  );
}

export default App;
