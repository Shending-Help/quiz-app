import React, { useState, useContext } from "react";
import Questions from "../helpers/TempData";
import { QuizContext } from "../helpers/Contexts";

// this component is used to display the quiz
const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0); // current question index in the data array
  const [answer, setAnswer] = useState(""); // current answer provided by the user
  const { score, setScore, setQuizState } = useContext(QuizContext); // the context to pass the states to the components
  const [disable, setDisable] = React.useState(false); // disable the button if the user has answered the question

  // updates score if answer is correct and updates the current question index
  const nextQuestion = () => {
    if (Questions[currQuestion].pos === answer) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setAnswer("");
    setDisable(false);
  };

  // checks if this is the last question and if so changes the quizState to rank
  const finishQuiz = () => {
    if (Questions[currQuestion].pos === answer) {
      setScore(score + 1);
    }
    setQuizState("rank");
  };

  // gives feedback to the user if the answer is correct or not
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
