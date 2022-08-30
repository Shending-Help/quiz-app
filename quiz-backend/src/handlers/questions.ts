import { Question, Questions } from "../models/question";
import express, { Request, Response } from "express";

const questionStore = new Questions();

const questionsRoutes = (app: express.Application) => {
  app.get("/questions", showTenQuestions);
};

const showTenQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await questionStore.showTenRandom();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(questions);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
};

export default questionsRoutes;
