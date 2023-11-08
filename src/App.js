import "./App.css";
import React from "react";

import InputForm from "./components/InputForm";
import Brojac from "./components/Brojac";
import Zbroji from "./components/Zbroji";

function App() {
  return (
    <div className="App">
      <Brojac />
      <Zbroji />
      <InputForm />
    </div>
  );
}

export default App;
