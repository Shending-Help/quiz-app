import fs from "fs";
import path from "path";

//parsing data from json file into an array of objects
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/TestData.json"), "utf8")
);

const getAllWords = () => {
  return data.wordList;
};

const getAllScores = () => {
  return data.scoresList;
};

export { getAllWords, getAllScores };
