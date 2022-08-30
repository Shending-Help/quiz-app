import express from "express";
import questionsRoutes from "./handlers/questions";
import ranksRoutes from "./handlers/ranks";
import cors from "cors";

const app = express();
app.use(express.json());
questionsRoutes(app);
ranksRoutes(app);
app.use(cors());

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
