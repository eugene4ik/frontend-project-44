#!/usr/bin/env node
import playGame from '../index.js';
import generateRanNum from '../utils.js';

const askQuestion = 'Find the greatest common divisor of given numbers.';

const infoSender = () => {
  const numberOne = generateRanNum(10);
  const numberTwo = generateRanNum(10);
  const questionGame = `Question: ${numberOne} ${numberTwo}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const correctAnswer = gcd(numberOne, numberTwo);
  const correctAnswerString = correctAnswer.toString();

  return [questionGame, correctAnswerString];
};

const brainGcd = () => {
  playGame(askQuestion, infoSender);
};

export default brainGcd;
