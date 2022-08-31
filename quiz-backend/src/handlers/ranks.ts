import { Ranks } from "../models/rank";
import express, { Request, Response } from "express";

const ranks = new Ranks();

const ranksRoutes = (app: express.Application) => {
  app.post("/ranks", showRanks);
};

const showRanks = async (_req: Request, res: Response) => {
  try {
    const score: number = Number(_req.body.score);
    const rank = ranks.showRank(score);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(rank);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json(err);
  }
};

export default ranksRoutes;
