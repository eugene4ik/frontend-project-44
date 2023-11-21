#!/usr/bin/env node
import { question } from 'readline-sync';
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne] = randomNum();
  const question = `Question: ${numberOne} `;
  const isPrime = (numberOne) => {
    if (numberOne <= 1) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(numberOne); i++) {
      if (numberOne % i === 0) {
        return 'yes';
      }
    }
    return 'no';
  };
  const correctAnswer = isPrime();
  const result = [question, correctAnswer];
  return result;
};

const brainPrime = () => {
  playGame('prime', question, gameQuest);
};

export { brainPrime };
