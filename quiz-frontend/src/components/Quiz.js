import React, { useState, useContext } from "react";
import Questions from "../helpers/TempData";
import { QuizContext } from "../helpers/Contexts";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const { score, setScore, setQuizState } = useContext(QuizContext);
  const [disable, setDisable] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState();

  const nextQuestion = () => {
    if (Questions[currQuestion].pos === answer) {
      setIsCorrect(true);
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
    setAnswer("");
    setDisable(false);
    setIsCorrect();
  };

  // make buttons unclickable when clicked once

  const finishQuiz = () => {
    if (Questions[currQuestion].pos === answer) {
      setIsCorrect(true);
      setScore(score + 1);
    }
    setQuizState("rank");
  };
  const feedBack = () => {
    if (Questions[currQuestion].pos === answer) {
      return <h2>Correct!</h2>;
    }
    if (answer === "" || answer === undefined || answer === null) {
      return <h2>Please select an answer</h2>;
    } else {
      return <h2>Incorrect!</h2>;
    }
  };

  return (
    <div className="Quiz">
      <label for="file">{(currQuestion / 10) * 100}%</label>
      <progress
        className="Bar"
        id="file"
        value={(currQuestion / 10) * 100}
        max="100"
      >
        {" "}
        {(currQuestion / 10) * 100}{" "}
      </progress>
      <h1> {Questions[currQuestion].word} </h1>
      <div className="options">
        <button
          className="option"
          disabled={disable}
          backgroundcolor={isCorrect ? "green" : "red"}
          value="verb"
          onClick={(e) => {
            setAnswer("verb");
            setDisable(true);
          }}
        >
          verb
        </button>
        <button
          className="option"
          disabled={disable}
          backgroundcolor={isCorrect ? "green" : "red"}
          value="noun"
          onClick={() => {
            setAnswer("noun");
            setDisable(true);
          }}
        >
          noun
        </button>
        <button
          className="option"
          disabled={disable}
          backgroundcolor={isCorrect ? "green" : "red"}
          value="adverb"
          onClick={() => {
            setAnswer("adverb");
            setDisable(true);
          }}
        >
          adverb
        </button>
        <button
          className="option"
          disabled={disable}
          backgroundcolor={isCorrect ? "green" : "red"}
          value="adjective"
          onClick={() => {
            setAnswer("adjective");
            setDisable(true);
          }}
        >
          adjective
        </button>
      </div>
      {feedBack()}
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
