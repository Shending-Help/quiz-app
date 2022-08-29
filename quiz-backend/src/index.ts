import express from "express";
import questionsRoutes from "./handlers/questions";
import ranksRoutes from "./handlers/ranks";

const app = express();
app.use(express.json());
questionsRoutes(app);
ranksRoutes(app);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
