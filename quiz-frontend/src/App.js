import "./App.css";
import React, { useState } from "react";
import MainMenu from "./components/MainMenu";

function App() {
  const [quizState, setQuizState] = useState("menu");

  return (
    <div className="App">
      <h1> Quiz App </h1>
      {quizState === "menu" && <MainMenu />}
    </div>
  );
}

export default App;
