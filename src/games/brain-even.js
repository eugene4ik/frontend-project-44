#!/usr/bin/env node
import playGame from '../index.js';
import randomNum from '../utils.js';

const gameQuest = () => {
  const [numberOne] = randomNum();
  const questionGame = `Question: ${numberOne} `;
  const correctAnswer = [numberOne] % 2 === 0 ? 'yes' : 'no';

  return [questionGame, correctAnswer];
};

const brainEven = () => {
  playGame('even', gameQuest);
};

export default brainEven;
