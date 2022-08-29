import fs from "fs";
import path from "path";

//parsing data
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/TestData.json"), "utf8")
);

const getAllWords = () => {
  const wordsList = data.wordList;
  return wordsList;
};

const getAllScores = () => {
  return data.scoresList;
};

export { getAllWords, getAllScores };
