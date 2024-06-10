import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15
  function AddValue() {
    // counter = counter + 1;
    if (counter >= 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
    // console.log(counter);
  }
  function removeValue() {
    // counter = counter - 1
    if (counter <= 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
    // console.log(counter);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Add Counter</button>
      <br />
      <button onClick={removeValue}>Remove Counter</button>
      <p>Footer {counter}</p>
    </>
  );
}

export default App;
