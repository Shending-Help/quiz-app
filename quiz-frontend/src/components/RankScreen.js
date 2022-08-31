import React, { useState, useContext } from "react";
// import { Questions } from "../helpers/TempData";
import { QuizContext } from "../helpers/Contexts";

const Rank = () => {
  const { score, setScore, setQuizState } = useContext(QuizContext);
  const [rank, setRank] = useState(0);

  fetch("http://localhost:5000/ranks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ score: score * 10 }),
  })
    .then((response) => response.json())
    .then((data) => {
      setRank(data.rank);
    })
    .catch((error) => console.log(error));

  const restartQuiz = () => {
    setScore(0);
    setQuizState("menu");
  };

  return (
    <div className="Rank">
      <h1> Your Rank {rank}%</h1>

      <button onClick={restartQuiz}>Try Again</button>
    </div>
  );
};

export default Rank;
