import readlineSync from 'readline-sync';

import { name } from './cli.mjs';

let counter = 0;

const incrementCounter = () => {
  counter += 1;
  return counter;
};

const counterPlus = () => {
  console.log('Correct!');
  if (counter === 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

const randomNum = () => {
  const numberOne = Math.floor(Math.random() * 10) + 1;
  const numberTwo = Math.floor(Math.random() * 10) + 1;
  const numberThree = Math.floor(Math.random() * 5) + 1;
  return [numberOne, numberTwo, numberThree];
};

const answer = () => {
  const answ = readlineSync.question('Your answer: ');
  return answ;
};

export {
  counterPlus,
  randomNum,
  incrementCounter,
  answer,
};
