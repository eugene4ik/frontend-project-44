#!/usr/bin/env node
import playGame from '../index.js';
import generateRanNum from '../utils.js';

const askQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const infoSender = () => {
  const numberOne = generateRanNum(10);
  const questionGame = `Question: ${numberOne} `;
  const correctAnswer = numberOne % 2 === 0 ? 'yes' : 'no';

  return [questionGame, correctAnswer];
};

const brainEven = () => {
  playGame(askQuestion, infoSender);
};

export default brainEven;
