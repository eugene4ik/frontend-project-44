#!/usr/bin/env node
import playGame from '../index.js';
import randomNum from '../utils.js';

const gameQuest = () => {
  const [numberOne, numberTwo] = randomNum();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const questionGame = `Question: ${numberOne} ${randomOperator} ${numberTwo}`;

  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    default:
      correctAnswer = 'unknown';
  }

  const correctAnswerString = correctAnswer.toString();

  const result = [questionGame, correctAnswerString];

  return result;
};

const brainCalc = () => {
  const [questionGame, correctAnswerString] = gameQuest();
  playGame('calc', questionGame, gameQuest);
};

export default brainCalc;
