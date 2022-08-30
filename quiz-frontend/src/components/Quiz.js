import React, { useState, useContext } from "react";
import { Questions } from "../helpers/TempData";
import { QuizContext } from "../helpers/Contexts";
const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const { score, setScore, setQuizState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].pos === answer) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].pos === answer) {
      setScore(score + 1);
    }
    setQuizState("rank");
  };

  return (
    <div className="Quiz">
      <h1> {Questions[currQuestion].word} </h1>
      <div className="options">
        <button
          onClick={() => {
            setAnswer("verb");
          }}
        >
          verb
        </button>
        <button
          onClick={() => {
            setAnswer("noun");
          }}
        >
          noun
        </button>
        <button
          onClick={() => {
            setAnswer("adverb");
          }}
        >
          adverb
        </button>
        <button
          onClick={() => {
            setAnswer("adjective");
          }}
        >
          adjective
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button
          onClick={() => {
            finishQuiz();
          }}
        >
          {" "}
          Finish Quiz{" "}
        </button>
      ) : (
        <button onClick={nextQuestion}> Next Question </button>
      )}
    </div>
  );
};

export default Quiz;
