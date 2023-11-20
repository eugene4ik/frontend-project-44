#!/usr/bin/env node
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne, numberTwo] = randomNum();
  const question = `Question: ${numberOne} ${numberTwo}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  let correctAnswer = gcd(numberOne, numberTwo);
  let correctAnswerString = correctAnswer.toString();
  const result = [question, correctAnswerString];
  return result;
};

const brainGcd = () => {
  playGame('gcd', gameQuest);
};

export { brainGcd };
