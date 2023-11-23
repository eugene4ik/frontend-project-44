#!/usr/bin/env node
import playGame from '../index.js';
import generateRanNum from '../utils.js';

const askQuestion = 'What is the result of the expression?';

const infoSender = () => {
  const numberOne = generateRanNum(10);
  const numberTwo = generateRanNum(10);
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

  return [questionGame, correctAnswerString];
};

const brainCalc = () => {
  playGame(askQuestion, infoSender);
};

export default brainCalc;
