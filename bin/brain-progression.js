#!/usr/bin/env node
import {
  counterPlus,
  incrementCounter,
  answer,
} from '../src/index.js';
import { name, userNameFunc } from '../src/cli.mjs';

userNameFunc();

console.log('What number is missing in the progression?');

const progressionCheck = () => {
  let i = Math.floor(Math.random() * 10) + 1;
  const iter = Math.floor(Math.random() * 5) + 1;
  const num = i + 50;
  const rand = [];
  for (i; i <= num; i += iter) {
    rand.push(i);
    if (rand.length === 10) {
      break;
    }
  }
  const randomIndex = Math.floor(Math.random() * rand.length);
  let result = 0;

  result = rand[randomIndex];
  rand[randomIndex] = '..';
  console.log(`Question: ${rand.join(' ')} `);
  const answ = answer();
  const answNum = Number(answ);
  if (result === answNum) {
    counterPlus();
    if (incrementCounter() < 3) {
      progressionCheck();
    }
  } else if (result !== answNum) {
    console.log(
      `'${answNum}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`,
    );
  }
};
progressionCheck();
