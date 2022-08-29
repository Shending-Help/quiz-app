import { getAllWords } from "../data";

export type Question = {
  id: number;
  word: string;
  pos: string;
};

export class Questions {
  index(): Question[] {
    return getAllWords();
  }

  showRandom(): Question {
    const questions = this.index();
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  showTenRandom(): Question[] {
    const questions = this.index();
    const tenRandom: Question[] = [];

    while (tenRandom.length < 10) {
      const randomIndex = Math.floor(Math.random() * questions.length);

      // check if the question is already in the array
      if (!tenRandom.includes(questions[randomIndex])) {
        tenRandom.push(questions[randomIndex]);
      }
    }

    // counting the number of times a pos is repeated
    const verbCount = tenRandom.filter((q) => q.pos === "verb").length;
    const nounCount = tenRandom.filter((q) => q.pos === "noun").length;
    const adjectiveCount = tenRandom.filter(
      (q) => q.pos === "adjective"
    ).length;
    const adverbCount = tenRandom.filter((q) => q.pos === "adverb").length;

    console.log(
      `${verbCount} verbs, ${nounCount} nouns, ${adjectiveCount} adjectives, ${adverbCount} adverbs`
    );
    // if a certain pos didn't occur we invoke the function again untill conditions are met
    if (
      verbCount < 1 ||
      nounCount < 1 ||
      adjectiveCount < 1 ||
      adverbCount < 1
    ) {
      return this.showTenRandom();
    }
    return tenRandom;
  }
}
