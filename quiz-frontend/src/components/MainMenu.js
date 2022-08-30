import { QuizContext } from "../helpers/Contexts";
import React, { useContext } from "react";
const MainMenu = () => {
  const { quizState, setQuizState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setQuizState("quiz");
        }}
      >
        {" "}
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
