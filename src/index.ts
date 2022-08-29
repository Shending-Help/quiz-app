import express from "express";
import { getAllWords, getAllScores } from "./data";
import { Questions } from "./models/questions";

const q = new Questions();
console.log(q.showTenRandom());

const app = express();

// console.log(getAllWords());
// console.log(getAllScores());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// const data = {
//   wordList: [
//     {
//       id: 1,
//       word: "slowly",
//       pos: "adverb",
//     },
//     {
//       id: 2,
//       word: "ride",
//       pos: "verb",
//     },
//     {
//       id: 3,
//       word: "bus",
//       pos: "noun",
//     },
//     {
//       id: 4,
//       word: "commute",
//       pos: "verb",
//     },
//     {
//       id: 5,
//       word: "emissions",
//       pos: "noun",
//     },
//     {
//       id: 6,
//       word: "walk",
//       pos: "verb",
//     },
//     {
//       id: 7,
//       word: "fast",
//       pos: "adjective",
//     },
//     {
//       id: 8,
//       word: "car",
//       pos: "noun",
//     },
//     {
//       id: 9,
//       word: "crowded",
//       pos: "adjective",
//     },
//     {
//       id: 10,
//       word: "arrival",
//       pos: "noun",
//     },
//     {
//       id: 11,
//       word: "emit",
//       pos: "verb",
//     },
//     {
//       id: 12,
//       word: "independent",
//       pos: "adjective",
//     },
//     {
//       id: 13,
//       word: "convenient",
//       pos: "adjective",
//     },
//     {
//       id: 14,
//       word: "lane",
//       pos: "noun",
//     },
//     {
//       id: 15,
//       word: "heavily",
//       pos: "adverb",
//     },
//   ],
//   scoresList: [
//     20, 90, 100, 50, 10, 50, 60, 0, 60, 10, 90, 30, 100, 30, 20, 90, 40, 20, 10,
//     60, 50, 100, 50, 80, 50, 80, 60, 80, 10, 40,
//   ],
// };
// const wordsList = data.wordList;
// console.log(wordsList[1]);
