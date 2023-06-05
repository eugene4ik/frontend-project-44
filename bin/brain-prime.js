#!/usr/bin/env node
import {
  counterPlus,
  counter,
  answer,
  randomNum,
} from '../src/index.js';
import { name, userNameFunc } from '../src/cli.mjs';

userNameFunc();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeCheck = () => {
  let prime = Boolean;
  const [numberOne] = randomNum();
  console.log(`Question: ${numberOne} `);

  const answ = answer();

  if (numberOne % 2 == 0 && numberOne !== 2) {
    prime = false;
  } else if (numberOne % 3 == 0 && numberOne !== 3) {
    prime = false;
  } else if (numberOne === 1) {
    prime = false;
  } else if (numberOne % numberOne === 0) {
    prime = true;
  }
  if (
    (prime === true && answ === 'yes') ||
    (prime === false && answ === 'no')
  ) {
    counterPlus();
    if (counter < 3) {
      primeCheck();
    }
  } else if (prime === true && answ === 'no') {
    console.log(
      `'${answ}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`
    );
  } else {
    console.log(
      `'${answ}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
    );
  }
};

primeCheck();
