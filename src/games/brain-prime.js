#!/usr/bin/env node
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne] = randomNum();
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
  const result = [questionGame, correctAnswer];
  return result;
};

const brainPrime = () => {
  const [questionGame, correctAnswer] = gameQuest();
  playGame('prime', questionGame, gameQuest);
};

export default brainPrime;
