#!/usr/bin/env node
import { counterPlus, counter, randomNum, answer } from '../src/index.js';
import { name, userNameFunc } from '../src/cli.mjs';

userNameFunc();
console.log('Find the greatest common divisor of given numbers.');

const gcdCheck = () => {
  const [numberOne, numberTwo] = randomNum();
  console.log(`Question: ${numberOne} ${numberTwo} `);
  const answ = answer();
  let answNum = parseInt(answ);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  let result = gcd(numberOne, numberTwo);
  if (result === answNum) {
    counterPlus();
    if (counter < 3) {
      gcdCheck();
    }
  } else if (result !== answNum) {
    console.log(
      `'${answNum}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`
    );
  }
};
gcdCheck();
