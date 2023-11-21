#!/usr/bin/env node
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne, numberTwo] = randomNum();
  const questionGame = `Question: ${numberOne} ${numberTwo}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const correctAnswer = gcd(numberOne, numberTwo);
  let correctAnswerString = correctAnswer.toString();
  const result = [questionGame, correctAnswerString];
  return result;
};

const brainGcd = () => {
  const [questionGame, correctAnswerString] = gameQuest();
  playGame('gcd', questionGame, gameQuest);
};

export default brainGcd;
