#!/usr/bin/env node
import { name, userNameFunc } from '../src/cli.mjs';
import { counterPlus, counter, randomNum, answer } from '../src/index.js';

userNameFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const evenCheck = () => {
  const [numberOne] = randomNum();
  console.log(`Question: ${numberOne} `);
  const answ = answer();
  if (
    (numberOne % 2 === 0 && answ === 'yes') ||
    (numberOne % 2 != 0 && answ === 'no')
  ) {
    counterPlus();
    if (counter < 3) {
      evenCheck();
    }
  } else if (
    (numberOne % 2 === 0 && answ != 'yes') ||
    (numberOne % 2 != 0 && answ != 'no')
  ) {
    console.log(
      '' +
        answ +
        " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " +
        name +
        '!'
    );
  }
};
evenCheck();
