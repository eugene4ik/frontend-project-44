#!/usr/bin/env node
import playGame from '../index.js';
import generateRanNum from '../utils.js';

const askQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const infoSender = () => {
  const numberOne = generateRanNum(10);
  const questionGame = `Question: ${numberOne} `;
  const isPrime = () => {
    if (numberOne <= 1) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(numberOne); i += 1) {
      if (numberOne % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const correctAnswer = isPrime(numberOne);
  return [questionGame, correctAnswer];
};

const brainPrime = () => {
  playGame(askQuestion, infoSender);
};

export default brainPrime;
