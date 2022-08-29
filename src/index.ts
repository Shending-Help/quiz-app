import express from "express";
import { Questions } from "./models/question";
import questionsRoutes from "./handlers/questions";

const q = new Questions();
console.log(q.showTenRandom());

const app = express();

questionsRoutes(app);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
