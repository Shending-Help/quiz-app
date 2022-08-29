import express from "express";
import { getAllWords, getAllScores } from "./data";

const app = express();

console.log(getAllWords());
console.log(getAllScores());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
