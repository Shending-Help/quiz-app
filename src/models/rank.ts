import { getAllScores } from "../data";

export type Rank = {
  rank: number;
};

export class Ranks {
  showRank(scoreOfTest: number): Rank {
    try {
      const scores = getAllScores();
      const numberOfWorstScores = scores.filter(
        (s: number) => s < scoreOfTest
      ).length;
      const rank =
        Math.round(10000 * (numberOfWorstScores / scores.length)) / 100;
      return { rank: rank };
    } catch (err) {
      throw err;
    }
  }
}
