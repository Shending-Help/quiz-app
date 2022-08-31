// this file serves as a client for the data

import fs from "fs";
import path from "path";

//parsing data
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/TestData.json"), "utf8")
);
//this function returns an array of all the questions
const getAllWords = () => {
  const wordsList = data.wordList;
  return wordsList;
};
//this function returns the list of scores across all the users
const getAllScores = () => {
  return data.scoresList;
};

export { getAllWords, getAllScores };
