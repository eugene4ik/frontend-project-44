#!/usr/bin/env node
import { counterPlus, counter, randomNum, answer } from '../src/index.js';
import { name, userNameFunc } from '../src/cli.mjs';

userNameFunc();
console.log('What is the result of the expression?');
const calcCheck = () => {
  const [numberOne, numberTwo] = randomNum();
  let result = 0;
  const operators = ['+', '-', '*'];
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${numberOne} ${randomOperator} ${numberTwo}`);
  let answ = answer();

  if (randomOperator === '-') {
    result = numberOne - numberTwo;
  } else if (randomOperator === '+') {
    result = numberOne + numberTwo;
  } else if (randomOperator === '*') {
    result = numberOne * numberTwo;
  }

  if (result == answ) {
    counterPlus();
    if (counter < 3) {
      calcCheck();
    }
  } else if (result != answ) {
    console.log(
      `'${answ}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`
    );
  }
};
calcCheck();
