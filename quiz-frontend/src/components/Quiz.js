import React, { useState, useContext, useRef, useEffect } from "react";
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
    setAnswer("");
  };
  const buttonRef = useRef(null);
  const finishQuiz = () => {
    if (Questions[currQuestion].pos === answer) {
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
      console.log(answer);
      return <h2>Incorrect!</h2>;
    }
  };

  return (
    <div className="Quiz">
      <label for="file">Quiz Progress:</label>
      <progress id="file" value={(currQuestion / 10) * 100} max="100">
        {" "}
        {(currQuestion / 10) * 100}{" "}
      </progress>
      <h1> {Questions[currQuestion].word} </h1>
      <div className="options">
        <button
          ref={buttonRef}
          onClick={() => {
            setAnswer("verb");
            feedBack();
          }}
        >
          verb
        </button>
        <button
          ref={buttonRef}
          onClick={() => {
            setAnswer("noun");
            feedBack();
          }}
        >
          noun
        </button>
        <button
          onChange={() => {}}
          ref={buttonRef}
          onClick={() => {
            setAnswer("adverb");
            feedBack();
          }}
        >
          adverb
        </button>
        <button
          ref={buttonRef}
          onClick={() => {
            setAnswer("adjective");
            feedBack();
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

      {feedBack()}
    </div>
  );
};

export default Quiz;
