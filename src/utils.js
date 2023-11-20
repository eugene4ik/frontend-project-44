import readlineSync from 'readline-sync';
import { name } from './cli.mjs';

export const userAnswerChecker = (userAnswer, correctAnswer) => {
  let shouldStop = false;
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    shouldStop = true;
    console.log(`"${userAnswer}" is wrong answer ;(. Correct anwser was "${correctAnswer}".Let's try again, ${name}! `);
    console.log(`Let's try again, ${name}! `);
  }
  return shouldStop;
};

export const randomNum = () => {
  const numberOne = Math.floor(Math.random() * 10) + 1;
  const numberTwo = Math.floor(Math.random() * 10) + 1;
  const numberThree = Math.floor(Math.random() * 5) + 1;
  return [numberOne, numberTwo, numberThree];
};

export const answer = () => {
  const answ = readlineSync.question('Your answer: ');
  return answ;
};
