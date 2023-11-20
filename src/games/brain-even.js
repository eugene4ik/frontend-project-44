#!/usr/bin/env node

import { question } from 'readline-sync';
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne] = randomNum();
  const question = `Question: ${numberOne} `;
  const correctAnswer = [numberOne] % 2 === 0 ? 'yes' : 'no';
  const result = [question, correctAnswer];

  return result;
};

const brainEven = () => {
  playGame('even', question, gameQuest);
};

export { brainEven };
