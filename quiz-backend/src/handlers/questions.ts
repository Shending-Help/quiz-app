import { Question, Questions } from "../models/question";
import express, { Request, Response } from "express";

const questionStore = new Questions();

const questionsRoutes = (app: express.Application) => {
  app.get("/questions", showTenQuestions);
};

// this fucntion handles the GET request to the /questions endpoint returning 10 random questions
const showTenQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await questionStore.showTenRandom();
    res.header("Access-Control-Allow-Origin", "*"); // this is needed to allow the frontend to access the data
    res.json(questions);
  } catch (err) {
    res.status(500); // internal server error
    res.json(err);
  }
};

export default questionsRoutes;
