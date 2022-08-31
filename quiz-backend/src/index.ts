import express from "express";
import questionsRoutes from "./handlers/questions";
import ranksRoutes from "./handlers/ranks";
import cors from "cors";

const app = express();
// this is to parse the body of the request
app.use(express.json());

// using our routes defined in the handlers folder
questionsRoutes(app);
ranksRoutes(app);

// this is needed to allow the frontend to access the data
app.use(cors());

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
