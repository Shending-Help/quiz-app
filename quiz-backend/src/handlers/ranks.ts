import { Ranks } from "../models/rank";
import express, { Request, Response } from "express";

const ranks = new Ranks();

const ranksRoutes = (app: express.Application) => {
  app.post("/ranks", showRanks);
};

// this function is called when when the user sends a post request to the /ranks endpoint returning his/her rank
const showRanks = async (_req: Request, res: Response) => {
  try {
    const score: number = Number(_req.body.score);
    const rank = ranks.showRank(score);
    res.header("Access-Control-Allow-Origin", "*"); // this is needed to allow the frontend to access the data
    res.json(rank);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json(err);
  }
};

export default ranksRoutes;
