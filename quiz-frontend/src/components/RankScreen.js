import React, { useState, useContext } from "react";
// import { Questions } from "../helpers/TempData";
import { QuizContext } from "../helpers/Contexts";

const Rank = () => {
  const { score, setScore, setQuizState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setQuizState("menu");
  };
  return (
    <div className="Rank">
      <h1> You scored {score} out of 10! </h1>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Rank;
