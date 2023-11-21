#!/usr/bin/env node
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne] = randomNum();
  const questionGame = `Question: ${numberOne} `;
  const correctAnswer = [numberOne] % 2 === 0 ? 'yes' : 'no';
  const result = [questionGame, correctAnswer];

  return result;
};

const brainEven = () => {
  const [questionGame, correctAnswer] = gameQuest();
  playGame('even', questionGame, gameQuest);
};

export default brainEven;
