import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card username= "Ritu" BtnText="Click Me" />
      <Card username="Sara"  />
    </>
  );
}

export default App;
