#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { counterPlus, counter, randomNum } from '../src/index.js';
import { name, userNameFunc } from '../src/cli.mjs';

userNameFunc();
console.log('What is the result of the expression?');
const calcCheck = () => {
  const [numberOne, numberTwo] = randomNum();
  let result;
  let operators = ['+', '-', '*'];
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${numberOne} ${randomOperator} ${numberTwo}`);
  const answer = readlineSync.question(`Your answer: `);

  if (randomOperator === '-') {
    result = numberOne - numberTwo;
  } else if (randomOperator === '+') {
    result = numberOne + numberTwo;
  } else if (randomOperator === '*') {
    result = numberOne * numberTwo;
  }

  if (result == answer) {
    counterPlus();
    if (counter < 3) {
      calcCheck();
    }
  } else if (result != answer) {
    console.log(
      "'" +
        answer +
        "' is wrong answer ;(. Correct answer was '" +
        result +
        "'. Let's try again, " +
        name +
        '!'
    );
  }
};
calcCheck();
