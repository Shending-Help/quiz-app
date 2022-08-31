import "./App.css";
import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import Rank from "./components/RankScreen";
import { QuizContext } from "./helpers/Contexts";
// import { Questions } from "./helpers/TempData";

function App() {
  // use states to store the current state of the quiz
  // and context to pass the states to the components
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1> Quiz App </h1>
      <QuizContext.Provider
        value={{ quizState, setQuizState, score, setScore }}
      >
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "rank" && <Rank />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
