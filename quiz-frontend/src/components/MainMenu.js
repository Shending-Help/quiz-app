import { QuizContext } from "../helpers/Contexts";
import React, { useContext } from "react";

//this component is used to display the main menu it has a button when clicked it changes the state of the quiz to start
const MainMenu = () => {
  const { setQuizState } = useContext(QuizContext);
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
