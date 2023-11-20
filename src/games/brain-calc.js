#!/usr/bin/env node
import { question } from 'readline-sync';
import playGame from '../index.js';
import { randomNum } from '../utils.js';

const gameQuest = () => {
  const [numberOne, numberTwo] = randomNum();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `Question: ${numberOne} ${randomOperator} ${numberTwo}`;

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
  }

  let correctAnswerString = correctAnswer.toString();

  const result = [question, correctAnswerString];

  return result;
};

const brainCalc = () => {
  playGame('calc', question, gameQuest);
};

export { brainCalc };
