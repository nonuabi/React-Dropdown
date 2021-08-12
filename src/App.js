import { useState } from "react";
import ShowDropDown from "./components/ShowDropDown";
import "./App.css";

const App = () => {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(false);
  };
  return (
    <div className="App">
      <h1>Choose You'r Item</h1>
      <div>
        <h3
          className={check ? "select_button" : "select_button active"}
          onMouseEnter={() => setCheck(true)}
          // onMouseLeave={() => setCheck(false)}
        >
          Select
        </h3>
      </div>
      {check && <ShowDropDown handleCheck={handleCheck} check={check} />}
    </div>
  );
};

export default App;
